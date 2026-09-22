import { MessageCircle } from 'lucide-react';
import { business } from '../data/business';
export function WhatsAppButton({label='Book on WhatsApp', floating=false}:{label?:string;floating?:boolean}) {
  return <a className={floating?'whatsapp-float':'btn btn-primary'} href={business.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{label}</a>
}
