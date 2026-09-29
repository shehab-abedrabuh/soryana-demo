import '../globals.css';
import {metadataFor} from '@/lib/seo';
export const metadata=metadataFor('ar');
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
