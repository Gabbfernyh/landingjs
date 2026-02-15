# 📁 Estrutura de Projeto - Landing Page Gabbfernyh ST

## Nova Organização

### `src/` Estrutura Otimizada

```
src/
├── App.jsx                    # Componente principal (orquestra tudo)
├── App.css                    # Entry point CSS (imports apenas)
├── main.jsx                   # Ponto de entrada React
├── index.css                  # Estilos globais básicos
│
├── styles/                    # 📦 Arquivo CSS modularizado
│   ├── variables.css          # Cores, temas, breakpoints
│   ├── base.css               # Resets e estilos globais
│   ├── animations.css         # Todas as @keyframes
│   ├── components.css         # Header, cards, seções
│   └── responsive.css         # Media queries (mobile-first)
│
├── sections/                  # 🧩 Componentes de seção
│   ├── Header.jsx             # Navbar/Header
│   ├── Hero.jsx               # Hero section (em breve)
│   ├── About.jsx              # About cards (em breve)
│   ├── Services.jsx           # Service cards (em breve)
│   ├── Projects.jsx           # Project showcase (em breve)
│   ├── Testimonials.jsx       # Testimonial cards (em breve)
│   ├── Contact.jsx            # Contact form (em breve)
│   └── Footer.jsx             # Footer (em breve)
│
├── components/                # 🔧 Componentes reutilizáveis
│   ├── button.jsx             # Botões customizados
│   └── ui.jsx                 # Card, Badge, etc
│
├── lib/                       # 📚 Utilidades
│   └── utils.js               # Funções auxiliares (cn, etc)
│
├── utils/                     # ⚙️ Helpers e funções (novo)
│   ├── constants.js           # Dados estáticos/config
│   ├── hooks.js               # Custom React hooks (futuro)
│   └── helpers.js             # Funções utilitárias (futuro)
│
├── assets/                    # 🖼️ Mídia estática
│   └── icon/
│       ├── faviconBlue.svg
│       ├── faviconBlue.html
│       ├── faviconGreen.html
│       └── faviconBlack.html
│
├── public/                    # 📄 Arquivos públicos
└── .gitignore
```

## 🎨 Arquitetura CSS Modular

### `variables.css`

- CSS custom properties (--primary-color, etc)
- Breakpoints (--bp-sm, --bp-md, --bp-lg)
- Transições padrão (--transition-fast, --transition-base)
- Sombras (--shadow-sm, --shadow-md)

### `base.css`

- Resets de elementos (*, html, body)
- Tipografia global
- Scrollbar styling
- Utility classes básicas

### `animations.css`

- `@keyframes` reutilizáveis:
  - `slideInLeft`, `slideInRight`
  - `float`, `heroFloat`
  - `pulse`, `shine`, `bounce`
  - `scrollBounce`, `gradientShift`

### `components.css`

- **Header/Navbar**: `.header-section`, `.navbar`, `.navbar-brand`
- **Hero**: `.hero-section`, `.hero-title`, `.hero-buttons`, `.hero-stats`
- **Cards**: `.about-card`, `.service-card`, `.project-card`, `.testimonial-card`
- **Contact**: `.contact-form`, `.contact-info-card`
- **Footer**: `.footer-section`

### `responsive.css`

- **Breakpoints**:
  - `≤991.98px`: Tablets & Large Mobile
  - `≤768px`: Small Tablets & Mobile
  - `≤576px`: Phones
  - `≤360px`: Minimal devices
- Media queries organizadas por breakpoint
- Ajustes progressivos de padding, font-size, display

## ⚡ Benefícios da Nova Estrutura

| Antes | Depois |
|-------|--------|
| 1 arquivo CSS de 1.6MB | 5 arquivos CSS modulares |
| Difícil encontrar estilos | Estilos por categoria |
| Responsividade espalhada | Media queries centralizadas |
| Hard-coded valores | CSS variables reutilizáveis |
| Monolítico | Separação de responsabilidades |

## 🚀 Próximos Passos

### 1. Separar em Componentes React

```javascript
// Em progresso:
✅ Header.jsx
⏳ Hero.jsx
⏳ About.jsx
⏳ Services.jsx
⏳ Projects.jsx
⏳ Testimonials.jsx
⏳ Contact.jsx
⏳ Footer.jsx
```

### 2. Otimizar Performance

- [ ] Lazy loading de componentes
- [ ] Code splitting
- [ ] Image optimization
- [ ] CSS minification na build

### 3. Melhorar Responsividade

- [ ] Testar em múltiplos dispositivos
- [ ] Ajustar breakpoints se necessário
- [ ] Otimizar touch interactions

## 📊 Tamanhos Atuais

### Build Otimizado

```
dist/assets/index.css  252KB → ~35KB gzipped
dist/assets/index.js   214KB → ~65KB gzipped
dist/index.html        0.72KB → ~0.4KB gzipped
```

## 🛠️ Como Usar

### Adicionar nova seção

1. Criar arquivo em `src/sections/NovaSecao.jsx`
2. Adicionar estilos em `src/styles/components.css`
3. Importar em `src/App.jsx`
4. Adicionar media queries em `src/styles/responsive.css`

### Modificar tema

1. Editar cores em `src/styles/variables.css`
2. Todos os componentes usam `var(--primary-color)`, etc

### Adicionar animação

1. Criar `@keyframes` em `src/styles/animations.css`
2. Usar em `src/styles/components.css`

## 📝 Convenções

- **Variáveis CSS**: `--kebab-case`
- **Classes**: `.kebab-case`
- **Componentes React**: `PascalCase`
- **Imports**: Sempre relativo `../styles/`
- **Media queries**: Mobile-first approach

## ✨ Features Implementados

- ✅ Dark theme com glassmorphism
- ✅ Animações fluidas e otimizadas
- ✅ Responsividade completa (3+ breakpoints)
- ✅ Hero section com orbs e effects
- ✅ Cards interativas com hover effects
- ✅ Bootstrap integrado (navbar, grid)
- ✅ Gradientes e transições suaves

---

**Last Updated**: 13 de fevereiro de 2026
**Version**: 2.0 - Modular Architecture
