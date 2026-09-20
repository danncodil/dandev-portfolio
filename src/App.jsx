import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronUp,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import SectionTitle from './components/SectionTitle'
import { contact, processSteps, projects, services, technologies } from './data/portfolioData'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Olá, Daniel! Meu nome é ${form.get('nome')}.\n\nProjeto: ${form.get('projeto')}\nE-mail: ${form.get('email')}\n\n${form.get('mensagem')}`
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orb orb-one" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability"><span /> Disponível para novos projetos</div>
            <p className="hero-kicker">Desenvolvedor Web <span>/</span> Salvador, BA</p>
            <h1>Transformo ideias em <em>experiências digitais.</em></h1>
            <p className="hero-description">Sou Daniel Conceição de Sousa, desenvolvedor web em formação. Crio sites e soluções digitais modernas para pessoas e negócios que desejam resolver problemas reais.</p>
            <div className="hero-actions">
              <a className="button primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chamar no WhatsApp</a>
              <a className="button secondary" href="#projetos">Ver meus projetos <ArrowDown size={18} /></a>
            </div>
            <div className="hero-proof">
              <div><strong>Full Stack</strong><span>em formação</span></div>
              <i />
              <div><strong>Brasil</strong><span>atendimento remoto</span></div>
            </div>
          </div>
          <div className="hero-portrait-wrap" aria-label="Foto profissional de Daniel Conceição de Sousa">
            <div className="portrait-code" aria-hidden="true">01<br />WEB<br />DEV</div>
            <div className="portrait-frame">
              <img src="./assets/daniel-profile.png" alt="Daniel Conceição de Sousa" />
              <div className="portrait-name"><span>Daniel Conceição</span><small>DanDeV</small></div>
            </div>
            <div className="floating-chip chip-one"><span>●</span> Sites Profissionais</div>
            <div className="floating-chip chip-two">JavaScript <span>JS</span></div>
            <div className="floating-chip chip-three">Node.js <span>↗</span></div>
            <div className="floating-chip chip-four">Sistemas Web</div>
          </div>
          <a className="scroll-cue" href="#sobre"><span>Role para explorar</span><ArrowDown size={17} /></a>
        </section>

        <section className="about section" id="sobre">
          <div className="section-number">01</div>
          <div className="about-intro reveal">
            <span className="eyebrow">Sobre mim</span>
            <h2>Tecnologia com <em>propósito.</em></h2>
          </div>
          <div className="about-body reveal">
            <p className="lead">Sou estudante de Desenvolvimento de Sistemas no SENAI de Lauro de Freitas e desenvolvedor Full Stack em formação.</p>
            <p>Desde cedo tenho afinidade com tecnologia e criatividade. Na programação encontrei uma forma de transformar ideias em soluções sem limitar a imaginação.</p>
            <p>Além do desenvolvimento web, minha experiência como gerente fortaleceu habilidades como organização, liderança, comunicação, foco em resultados e resolução de problemas.</p>
          </div>
          <div className="tech-panel reveal">
            <div className="panel-label">Stack & habilidades</div>
            <div className="tech-list">{technologies.map((tech, index) => <span key={tech}><b>0{index + 1}</b>{tech}</span>)}</div>
          </div>
          <div className="education-card reveal">
            <div className="education-icon">DS</div>
            <div><span>Formação</span><h3>Técnico em Desenvolvimento de Sistemas</h3><p>SENAI Lauro de Freitas</p></div>
            <strong>3º <small>semestre de 4</small></strong>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-number">02</div>
          <SectionTitle eyebrow="Projetos selecionados" title="Projetos que saíram do papel." description="Soluções digitais criadas para necessidades reais." />
          <nav className="project-directory reveal" aria-label="Ir para um projeto">
            {projects.map((project, index) => <a href={`#projeto-${project.slug}`} key={project.slug}>
              <span>0{index + 1}</span>{project.title}<ArrowRight size={16} />
            </a>)}
          </nav>
          <div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} total={projects.length} key={project.slug} />)}</div>
        </section>

        <section className="services section" id="servicos">
          <div className="section-number">03</div>
          <SectionTitle eyebrow="Serviços" title="Como posso ajudar seu negócio." />
          <div className="services-grid">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article className="service-card reveal" style={{ '--delay': `${index * 80}ms` }} key={title}>
                <span className="service-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{description}</p><ArrowRight className="service-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="difference section">
          <div className="difference-mark" aria-hidden="true">“</div>
          <div className="difference-copy reveal">
            <span className="eyebrow">Meu diferencial</span>
            <h2>Não entrego apenas código. Entrego soluções pensadas para o <em>seu objetivo.</em></h2>
          </div>
          <div className="difference-detail reveal">
            <p>Meu foco é entender o que você precisa, transformar a ideia em uma experiência digital clara e criar algo que ajude seu negócio a avançar.</p>
            <ul>
              <li><Check /> Escuta e entendimento do projeto</li>
              <li><Check /> Design moderno e responsivo</li>
              <li><Check /> Compromisso com qualidade e resultado</li>
            </ul>
          </div>
        </section>

        <section className="process section">
          <div className="section-number">04</div>
          <SectionTitle eyebrow="Processo" title="Do briefing ao lançamento." />
          <div className="process-line">
            {processSteps.map(({ icon: Icon, number, title, text }, index) => (
              <article className="process-step reveal" style={{ '--delay': `${index * 100}ms` }} key={title}>
                <div className="step-icon"><Icon /></div><span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy reveal">
            <span className="eyebrow"><Sparkles size={15} /> Vamos criar juntos</span>
            <h2>Tem uma ideia? Vamos transformá-la em algo real.</h2>
            <p>Conte o que você precisa e vamos conversar sobre a melhor solução digital para o seu projeto.</p>
            <div className="contact-actions">
              <a className="button primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chamar no WhatsApp</a>
              <a className="text-link" href={`mailto:${contact.email}`}><Mail size={18} /> Enviar e-mail</a>
              <a className="text-link" href={contact.instagram} target="_blank" rel="noreferrer"><Camera size={18} /> Ver Instagram</a>
            </div>
            <div className="contact-details">
              <span><MessageCircle /> {contact.whatsappDisplay}</span>
              <span><Mail /> {contact.email}</span>
              <span><Camera /> {contact.instagramDisplay}</span>
              <span><MapPin /> Atendimento em todo o Brasil</span>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-head"><span>Conte sobre seu projeto</span><small>Resposta via WhatsApp</small></div>
            <label>Nome<input required name="nome" type="text" placeholder="Como posso te chamar?" /></label>
            <label>E-mail<input required name="email" type="email" placeholder="seuemail@exemplo.com" /></label>
            <label>Projeto<select required name="projeto" defaultValue=""><option value="" disabled>O que você precisa?</option><option>Site profissional</option><option>Desenvolvimento web</option><option>Sistema personalizado</option><option>Manutenção ou melhoria</option></select></label>
            <label>Mensagem<textarea required name="mensagem" rows="4" placeholder="Fale um pouco sobre sua ideia..." /></label>
            <button className="button primary" type="submit">Enviar mensagem <Send size={17} /></button>
          </form>
        </section>
      </main>

      <footer>
        <a className="brand" href="#inicio"><span className="brand-bracket">&lt;</span>Dan<span>DeV</span><span className="brand-bracket">/&gt;</span></a>
        <p>© 2026 DanDeV — Daniel Conceição de Sousa.<br />Desenvolvido com dedicação e código.</p>
        <div className="socials">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
        </div>
      </footer>

      <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle /></a>
      <button className={showTop ? 'back-top visible' : 'back-top'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo"><ChevronUp /></button>
    </div>
  )
}
