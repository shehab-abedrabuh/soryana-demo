import '../../globals.css';
import {metadataFor} from '@/lib/seo';
export const metadata=metadataFor('en');
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" dir="ltr"><body>{children}</body></html>}
