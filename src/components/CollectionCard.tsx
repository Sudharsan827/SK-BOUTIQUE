import { ArrowUpRight, Star } from 'lucide-react';
import type { CollectionItem } from '../types/data';
import { WhatsAppButton } from './WhatsAppButton';
const images:Record<string,string> = {
  'Ready-to-Wear':'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  Cotton:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80',
  Handloom:'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
  Designer:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
  Linen:'https://images.unsplash.com/photo-1610189012906-4f0a7e1d2f8d?auto=format&fit=crop&w=900&q=80',
  'Banarasi Silk':'https://images.unsplash.com/photo-1610030469668-8e9f641aaf1c?auto=format&fit=crop&w=900&q=80',
  Organza:'https://images.unsplash.com/photo-1585488439947-5e9d7f1a7d7e?auto=format&fit=crop&w=900&q=80',
  Georgette:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
  Chiffon:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
  'Ready-to-Wear Organza':'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  'Pre-Stitched Silk':'https://images.unsplash.com/photo-1610030469668-8e9f641aaf1c?auto=format&fit=crop&w=900&q=80',
  'Pre-Draped Tissue':'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80',
  'Pre-Pleated Georgette':'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
  'Ready Pleated Cotton':'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
  'Pre-Draped Satin':'https://images.unsplash.com/photo-1610189012906-4f0a7e1d2f8d?auto=format&fit=crop&w=900&q=80'
};
export function CollectionCard({item}:{item:CollectionItem}) {
 const src=images[item.name]||images[item.category]||images['Ready-to-Wear'];
 return <article className="collection-card"><div className="collection-image"><img src={src} alt={`${item.name} collection inspiration`} loading="lazy"/><span>Collection inspiration</span></div><div className="collection-body"><div><span className="card-kicker">{item.category}</span><h3>{item.name}</h3><p>{item.occasion} · {item.quantity} units in 2026 synthetic dataset</p></div><div className="card-meta"><span>₹{Math.round(item.averagePrice).toLocaleString('en-IN')} avg.</span><span><Star size={14} fill="currentColor"/> {item.averageRating.toFixed(1)}</span></div><WhatsAppButton label="Enquire" /></div></article>
}
