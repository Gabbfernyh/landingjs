# ⚡ Quick Reference - Guia Rápido

## 📁 Onde Adicionar Coisas?

### Quero adicionar um novo **estilo CSS**
```bash
1. É de um componente existente?
   → Editar: src/styles/components.css

2. É uma animação?
   → Editar: src/styles/animations.css

3. É responsividade?
   → Editar: src/styles/responsive.css

4. É uma variável global?
   → Editar: src/styles/variables.css
```

### Quero adicionar uma nova **seção**
```bash
1. Criar arquivo:
   src/sections/MinhaSecao.jsx

2. Adicionar estilos em:
   src/styles/components.css

3. Importar em:
   src/App.jsx

4. Adicionar media queries em:
   src/styles/responsive.css
```

### Quero mudar uma **cor**
```bash
1. Abrir: src/styles/variables.css
2. Editar: --primary-color: #novo-valor;
3. Pronto! Todas as cores mudam automaticamente
```

### Quero adicionar **dados**
```bash
1. Abrir: src/utils/constants.js
2. Adicionar ou editar:
   export const MEUS_DADOS = [...]
3. Usar em componentes via import
```

### Quero adicionar uma **animação**
```bash
1. Criar @keyframes em:
   src/styles/animations.css

2. Usar em componentes:
   .meu-elemento { animation: minha-animacao 2s; }
```

---

## 📊 Estrutura de Dados

### Como acessar dados em React

```javascript
// Em qualquer componente:
import { SERVICES, PROJECTS, TESTIMONIALS } from '@/utils/constants'

// Renderizar
function ServicesList() {
  return (
    <div>
      {SERVICES.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}
```

### Estruturas de dados disponíveis

| Nome | Localização | Uso |
|------|-------------|-----|
| `COMPANY` | constants.js | Nome, tagline da empresa |
| `NAV_LINKS` | constants.js | Menu de navegação |
| `ABOUT_ITEMS` | constants.js | Cards de "sobre" |
| `SERVICES` | constants.js | Serviços com pontos |
| `PROJECTS` | constants.js | Portfólio/projetos |
| `TESTIMONIALS` | constants.js | Depoimentos de clientes |
| `CONTACT_INFO` | constants.js | Email, telefone, etc |
| `STATS` | constants.js | Estatísticas/números |

---

## 🎨 CSS Variables Disponíveis

```css
:root {
  /* Cores */
  --primary-color: #0ea5e9;      /* Azul principal */
  --primary-dark: #0284c7;        /* Azul escuro */
  --secondary-color: #a8d5ff;     /* Azul claro */
  --accent-color: #06b6d4;        /* Ciano */
  --warning-color: #fbbf24;       /* Amarelo (stars) */
  
  /* Backgrounds */
  --light-bg: rgba(15, 23, 42, 0.7);
  --dark-bg: #0f172a;
  --darker-bg: #020617;
  
  /* Texto */
  --dark-text: #f1f5f9;           /* Branco/Light */
  --light-text: #cbd5e1;          /* Cinza claro */
  --muted-text: #64748b;          /* Cinza médio */
  
  /* Transições */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Sombras */
  --shadow-sm: 0 10px 30px rgba(...);
  --shadow-md: 0 15px 40px rgba(...);
  --shadow-glow: 0 0 20px rgba(...);
}
```

---

## 🔧 Breakpoints Responsivos

```css
/* Desktop (default) */
/* Nenhuma media query */

/* Tablets & Large Mobile (≤991px) */
@media (max-width: 991.98px) { ... }

/* Tablets & Mobile (≤768px) */
@media (max-width: 768px) { ... }

/* Mobile Phones (≤576px) */
@media (max-width: 576px) { ... }

/* Minimal Devices (≤360px) */
@media (max-width: 360px) { ... }
```

---

## 🚀 Comandos Úteis

```bash
# Iniciar desenvolvimento
npm run dev

# Build produção
npm run build

# Preview do build
npm run preview

# Lint código
npm run lint

# Instalar dependências
npm install
```

---

## 📦 Imports Principais

```javascript
// React
import React, { useState, useEffect } from 'react'

// Dados
import { SERVICES, PROJECTS } from '@/utils/constants'

// Componentes
import Header from '@/sections/Header'
import Button from '@/components/button'

// Estilos (automático)
// @import './styles/variables.css'
// @import './styles/base.css'
// @import './styles/animations.css'
// @import './styles/components.css'
// @import './styles/responsive.css'
```

---

## 🎯 Exemplo: Adicionar um Novo Serviço

### Step 1: Adicionar dado
```javascript
// src/utils/constants.js
export const SERVICES = [
  // ... existentes
  {
    id: 4,
    title: 'Novo Serviço',
    description: 'Descrição aqui',
    icon: '🆕',
    points: ['Ponto 1', 'Ponto 2']
  }
]
```

### Step 2: Atualizar estilos (se necessário)
```css
/* src/styles/components.css - já existem! */
.service-card { ... }
```

### Step 3: Render em Services.jsx
```javascript
// src/sections/Services.jsx
import { SERVICES } from '@/utils/constants'

export function Services() {
  return (
    <div>
      {SERVICES.map(service => (
        <div key={service.id} className="service-card">
          <h3>{service.title}</h3>
          {/* ... */}
        </div>
      ))}
    </div>
  )
}
```

**Pronto! Novo serviço adicionado! ✨**

---

## 💡 Tips & Tricks

### 1. Mudar todas as cores rapidinho
```css
/* src/styles/variables.css */
:root {
  --primary-color: #sua-cor; /* Muda tudo! */
}
```

### 2. Reutilizar classes
```css
/* src/styles/components.css */
.card { /* Base comum */ }
.card:hover { /* Hover base */ }

.service-card { /* Específica */ }
.project-card { /* Específica */ }
```

### 3. Adicionar responsividade
```css
/* Sempre adicione no responsive.css */
@media (max-width: 768px) {
  .seu-elemento { /* mobile */ }
}
```

### 4. Criar componentes reutilizáveis
```jsx
// src/components/MeuComponente.jsx
export function MeuComponente({ title, children }) {
  return <div className="card">{children}</div>
}
```

---

## 📚 Documentação Completa

Para mais detalhes, leia:
- **STRUCTURE.md** - Arquitetura completa
- **RESPONSIVENESS.md** - Design responsivo detalhado
- **OPTIMIZATION.md** - Performance e otimização
- **SUMMARY.md** - Resumo das mudanças

---

**Última atualização**: 13 de fevereiro de 2026
**Version**: 2.0 - Quick Reference v1.0
