import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { contact } from '../data/portfolioData'

const links = [
  ['Início', '#inicio'],
  ['Sobre mim', '#sobre'],
  ['Projetos', '#projetos'],
  ['Serviços', '#servicos'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="DanDeV — início">
        <span className="brand-bracket">&lt;</span>Dan<span>DeV</span><span className="brand-bracket">/&gt;</span>
      </a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
        Vamos conversar <ArrowUpRight size={16} />
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
