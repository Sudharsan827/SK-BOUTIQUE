import { Outlet } from 'react-router-dom'; import { SiteHeader } from '../components/SiteHeader'; import { SiteFooter } from '../components/SiteFooter'; import { WhatsAppButton } from '../components/WhatsAppButton';
export function PublicLayout(){return <><SiteHeader/><main><Outlet/></main><SiteFooter/><WhatsAppButton floating/></>}
