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
  const [activeSection, setActiveSection] = useState('inicio')
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const close = () => setOpen(false)
    const updateNavigation = () => {
      const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean)
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 180)
      setActiveSection(current?.id || 'inicio')
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? Math.min(100, window.scrollY / scrollable * 100) : 0)
    }
    window.addEventListener('resize', close)
    window.addEventListener('scroll', updateNavigation, { passive: true })
    updateNavigation()
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('scroll', updateNavigation)
    }
  }, [])

  return (
    <header className="site-header" style={{ '--scroll-progress': `${scrollProgress}%` }}>
      <a className="brand" href="#inicio" aria-label="DanDeV — início">
        <span className="brand-bracket">&lt;</span>Dan<span>DeV</span><span className="brand-bracket">/&gt;</span>
      </a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {links.map(([label, href]) => <a href={href} key={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
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
