import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
const nav=[['/','Home'],['/sarees','Sarees'],['/pre-pleated','Pre-Pleated'],['/mehendi','Mehendi'],['/about','About'],['/contact','Contact']];
export function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="container nav-wrap"><Link to="/" className="brand" onClick={()=>setOpen(false)}><span>SK</span><div><strong>SK Boutique</strong><small>Elegance, Draped Your Way.</small></div></Link><nav className="desktop-nav">{nav.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav><div className="nav-action"><WhatsAppButton/><button className="menu-button" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>{open&&<div className="mobile-menu">{nav.map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}<WhatsAppButton/></div>}</header>
}
