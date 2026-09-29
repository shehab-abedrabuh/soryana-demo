import {readFile,writeFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
const root=path.resolve('out');
async function htmlFiles(dir){const files=[];for(const entry of await readdir(dir,{withFileTypes:true})){const name=path.join(dir,entry.name);if(entry.isDirectory())files.push(...await htmlFiles(name));else if(name.endsWith('.html'))files.push(name);}return files;}
const hashes=new Set();
for(const file of await htmlFiles(root)){const html=await readFile(file,'utf8');for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){if(!/\bsrc\s*=/.test(match[1])&&match[2])hashes.add(`'sha256-${createHash('sha256').update(match[2]).digest('base64')}'`);}}
const csp=["default-src 'self'",`script-src 'self' ${[...hashes].join(' ')}`,"style-src 'self' 'unsafe-inline'","img-src 'self' data:","font-src 'self'","media-src 'self'","connect-src 'self'","frame-src https://maps.google.com https://www.google.com","object-src 'none'","base-uri 'self'","form-action 'self'","frame-ancestors 'none'","upgrade-insecure-requests"].join('; ');
await writeFile(path.join(root,'_headers'),`/*\n  Content-Security-Policy: ${csp}\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()\n  Strict-Transport-Security: max-age=31536000\n\n/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/images/*\n  Cache-Control: public, max-age=86400\n\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
console.log(`Security headers generated with ${hashes.size} inline script hashes.`);
