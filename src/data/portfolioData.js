import {
  Code2,
  Globe2,
  Layers3,
  RefreshCw,
  MessageSquareText,
  PenTool,
  TerminalSquare,
  Rocket,
} from 'lucide-react'

export const contact = {
  whatsapp: 'https://wa.me/5571999430012',
  whatsappDisplay: '(71) 99943-0012',
  email: 'danielconceicao2206@gmail.com',
  instagram: 'https://www.instagram.com/danielconceiicaoo/',
  instagramDisplay: '@danielconceiicaoo',
  github: 'https://github.com/danncodil',
  linkedin: 'https://www.linkedin.com/',
}

export const technologies = [
  'JavaScript',
  'Node.js',
  'HTML5',
  'CSS3',
  'Rust',
  'Git e GitHub',
  'Desenvolvimento Responsivo',
  'Interfaces Web',
]

export const projects = [
  {
    slug: 'trio',
    title: 'TRIO App',
    category: 'Gestão financeira',
    description:
      'Aplicação web de gestão financeira integrada, desenvolvida para ajudar pessoas a organizarem receitas, despesas e acompanharem sua vida financeira de forma simples e visual.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    link: 'https://danncodil.github.io/finance-app/#/',
    action: 'Acessar projeto',
    logo: './assets/logo-trio.png',
    symbol: './assets/simbolo-trio.png',
  },
  {
    slug: 'sal71',
    title: 'Gerenciador de Rodízio Sal71',
    category: 'Sistema de atendimento',
    description:
      'Sistema criado para a Barbearia Sal71, pensado para organizar a ordem de atendimento, facilitar a rotina da equipe e tornar a operação mais visual e eficiente.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://danncodil.github.io/rodiziosal71/',
    action: 'Ver sistema',
    logo: './assets/sal71-logo.png',
    watermark: './assets/sal71-watermark.png',
  },
  {
    slug: 'cappro',
    title: 'CapPRO',
    category: 'Produtividade para Windows',
    description: 'Utilitário nativo para Windows para capturas de tela, edição rápida e produtividade.',
    technologies: [],
    link: 'https://github.com/danncodil/CapPRO/releases/latest/download/CapPRO-win-x64.zip',
    action: 'Baixar para Windows',
    githubLink: 'https://github.com/danncodil/CapPRO',
    githubAction: 'Ver no GitHub',
    logo: './assets/cappro-logo.png',
  },
]

export const services = [
  {
    icon: Globe2,
    title: 'Sites profissionais',
    description:
      'Landing pages, sites institucionais e portfólios que passam confiança e convertem visitantes em contatos.',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento web',
    description:
      'Interfaces modernas, rápidas, responsivas e adaptadas a cada necessidade.',
  },
  {
    icon: Layers3,
    title: 'Sistemas personalizados',
    description:
      'Soluções para organizar processos, atendimentos, informações e rotinas de negócios.',
  },
  {
    icon: RefreshCw,
    title: 'Manutenção e melhorias',
    description:
      'Ajustes, evolução visual e melhorias em sites e sistemas existentes.',
  },
]

export const processSteps = [
  { icon: MessageSquareText, number: '01', title: 'Conversa inicial', text: 'Entendo a ideia, o cenário e o objetivo do projeto.' },
  { icon: PenTool, number: '02', title: 'Planejamento', text: 'Defino estrutura, prioridades e direção visual da solução.' },
  { icon: TerminalSquare, number: '03', title: 'Desenvolvimento', text: 'Transformo o plano em uma experiência rápida e responsiva.' },
  { icon: Rocket, number: '04', title: 'Entrega e evolução', text: 'Publico, acompanho e preparo o projeto para crescer.' },
]
