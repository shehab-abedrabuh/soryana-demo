import SorianaSite from '@/components/soriana-site';
import {clinicSchema} from '@/lib/seo';
export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(clinicSchema('ar')).replace(/</g,'\u003c')}}/><SorianaSite initialLang="ar"/></>}
