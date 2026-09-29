import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');const port=Number(process.env.PORT||5173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.ttf':'font/ttf','.woff2':'font/woff2','.mp4':'video/mp4'};
const text=await readFile(path.join(root,'_headers'),'utf8');const headers={};for(const line of text.split('\n').slice(1)){if(!line.trim())break;const at=line.indexOf(':');if(at>0)headers[line.slice(0,at).trim()]=line.slice(at+1).trim();}
// HTTPS upgrade is for deployment; keep loopback HTTP assets testable in WebKit.
headers['Content-Security-Policy']=headers['Content-Security-Policy'].replace('; upgrade-insecure-requests','');
const server=http.createServer(async(req,res)=>{try{if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,headers);return res.end();}const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403,headers);return res.end();}if((await stat(file)).isDirectory())file=path.join(file,'index.html');const data=await readFile(file);res.writeHead(200,{...headers,'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':data.length});res.end(req.method==='HEAD'?undefined:data);}catch{res.writeHead(404,{...headers,'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(path.join(root,'404.html')).catch(()=>Buffer.from('Not found')));}});
server.listen(port,'127.0.0.1',()=>console.log(`Soriana production preview: http://localhost:${port}/`));
