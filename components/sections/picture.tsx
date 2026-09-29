import Image from 'next/image';
export function Picture({name,alt,className='',priority=false,sizes='(max-width: 768px) 90vw, 45vw'}:{name:string;alt:string;className?:string;priority?:boolean;sizes?:string}){
 return <Image className={className} src={`/images/soriana/${name}-960.webp`} loader={({width})=>`/images/soriana/${name}-${width<=480?480:width<=960?960:1440}.webp`} width={1080} height={1080} alt={alt} sizes={sizes} priority={priority}/>;
}
