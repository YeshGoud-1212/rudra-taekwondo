import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
const links = [['Why Taekwondo','#why'],['Community Program','#community'],['Training','#training'],['Coach','#coach'],['Achievements','#achievements'],['Safety','#safety']]
export default function Navbar() { return <header className="navbar"><Logo /><nav>{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><a className="nav-cta" href="#contact">Partner with us <ArrowUpRight size={15}/></a></header> }
