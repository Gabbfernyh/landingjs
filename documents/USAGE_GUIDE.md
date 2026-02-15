# 📚 Guia de Uso - Nova Estrutura do Projeto

## 🎯 Objetivo

Este guia ajuda você a trabalhar com a nova estrutura organizada do projeto.

---

## 📂 Onde Adicionar Novos Arquivos?

### 1. **Novo Componente Reutilizável**
Adicione em `src/components/common/`

Exemplo: Criar um Modal genérico
```
src/components/common/
└── modal.jsx
```

Use em App.jsx:
```javascript
import Modal from './components/common/modal'
// OU
import { Modal } from './components'
```

### 2. **Novo Componente de Seção**
Adicione em `src/components/sections/`

Exemplo: Criar um componente para Testimonials
```
src/components/sections/
└── testimonials.jsx
```

Use em App.jsx:
```javascript
import Testimonials from './components/sections/testimonials'
// OU
import { Testimonials } from './components'
```

### 3. **Novo Utility/Helper**
Adicione em `src/lib/`

Exemplo: Adicionar função de validação
```
src/lib/
└── validators.js
```

Use em qualquer arquivo:
```javascript
import { validateEmail } from './lib/validators'
```

### 4. **Novo Hook Customizado** (Futuro)
Quando tiver muitos hooks, crie:
```
src/hooks/
├── useLanguage.js
├── useTheme.js
└── index.js
```

### 5. **Novo Contexto** (Futuro)
Para estado global:
```
src/contexts/
├── LanguageContext.jsx
├── ThemeContext.jsx
└── index.js
```

---

## 🔄 Como Importar Componentes?

### ✅ Forma Recomendada (via index.js)
```javascript
// Em App.jsx
import { Button, CardTecnologia, Modal } from './components'

// Uso
<Button />
<CardTecnologia />
```

**Vantagem**: Imports limpos e centralizados

### ✅ Forma Direta
```javascript
// Importar diretamente
import Button from './components/common/button'
import CardTecnologia from './components/sections/cardTecnologia'
```

**Vantagem**: Mais explícito, evita circular imports

### ❌ Evitar
```javascript
// Não faça isso
import Button from './components/button'  // Caminho antigo
```

---

## 📋 Atualizar o components/index.js

Sempre que adicionar novo componente:

**src/components/index.js**
```javascript
// Common Components
export { default as Button } from './common/button'
export { default as ThemeToggle } from './common/themeToggle'
export { default as UI } from './common/ui'
export { default as Modal } from './common/modal'  // ← Novo

// Section Components
export { default as CardTecnologia } from './sections/cardTecnologia'
export { default as CardProjects } from './sections/cardProjects'
export { default as Testimonials } from './sections/testimonials'  // ← Novo
```

---

## 📁 Estrutura de Pastas - Referência Rápida

```
src/
├── components/
│   ├── common/          ← Componentes reutilizáveis
│   ├── sections/        ← Componentes de seções específicas
│   └── index.js         ← Exportações centralizadas
├── lib/                 ← Utilities, helpers, config
│   ├── constants.js
│   ├── translations.js
│   ├── seo.js
│   └── utils.js
├── pages/               ← Componentes de página (Header, Footer)
├── styles/              ← CSS global
└── assets/              ← Imagens, ícones, fonts
```

---

## 🛠️ Casos de Uso Comuns

### Caso 1: Adicionar novo botão especial

**Arquivo**: `src/components/common/buttonSpecial.jsx`

```javascript
import { useLanguage } from '../../lib/translations'

export default function ButtonSpecial({ children, ...props }) {
    const { t } = useLanguage()
    
    return (
        <button className="btn btn-special" {...props}>
            {children}
        </button>
    )
}
```

**Uso em App.jsx**:
```javascript
import { ButtonSpecial } from './components'

<ButtonSpecial>Clique aqui</ButtonSpecial>
```

### Caso 2: Adicionar nova função helper

**Arquivo**: `src/lib/helpers.js`

```javascript
export const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR')
}
```

**Uso em qualquer componente**:
```javascript
import { formatPhone, formatDate } from '../lib/helpers'

const phone = formatPhone('11999999999')
const date = formatDate(new Date())
```

### Caso 3: Adicionar novo componente de seção

**Arquivo**: `src/components/sections/newsletter.jsx`

```javascript
import { useLanguage } from '../../lib/translations'

export default function Newsletter() {
    const { t } = useLanguage()
    
    return (
        <section className="newsletter-section">
            <h2>{t('newsletterTitle')}</h2>
            {/* Conteúdo */}
        </section>
    )
}
```

**Adicionar em components/index.js**:
```javascript
export { default as Newsletter } from './sections/newsletter'
```

**Usar em App.jsx**:
```javascript
import { Newsletter } from './components'

<Newsletter />
```

---

## 🎨 Boas Práticas

### ✅ Recomendações

1. **Use o index.js para importações**
   ```javascript
   import { Button, Modal } from './components'
   ```

2. **Mantenha componentes focados**
   - Common: Reutilizáveis em qualquer lugar
   - Sections: Específicos de seções

3. **Centralize constantes**
   ```javascript
   import { COMPANY } from '../lib/constants'
   ```

4. **Use hooks customizados**
   ```javascript
   import { useLanguage } from '../lib/translations'
   ```

5. **Documente componentes complexos**
   ```javascript
   /**
    * CardTecnologia
    * Exibe cards interativos de tecnologias com modal
    * @param {Object} tech - Dados da tecnologia
    */
   export default function CardTecnologia({ tech }) {
       // ...
   }
   ```

### ❌ Evitar

1. **Imports aninhados muito profundos**
   ```javascript
   // ❌ Não
   import Button from '../../../components/common/button'
   
   // ✅ Sim
   import { Button } from './components'
   ```

2. **Componentes muito grandes**
   - Se passou de 300 linhas, divida em sub-componentes

3. **Duplicação de código**
   - Mova para `lib/` se usar em vários places

4. **Estilos inline demais**
   - Use CSS classes e mantenha em `styles/`

---

## 🔍 Troubleshooting

### Problema: "Cannot find module './components/button'"
**Solução**: O arquivo foi movido para `./components/common/button`

```javascript
// ❌ Errado
import Button from './components/button'

// ✅ Correto
import Button from './components/common/button'
// OU
import { Button } from './components'
```

### Problema: Circular import warning
**Solução**: Evite importar em index.js de um arquivo que já importa index.js

```javascript
// ❌ Errado - circular
// components/index.js importa button
// button.jsx importa de components/index.js

// ✅ Correto
// Import direto de button.jsx
import Button from './common/button'
```

### Problema: Path muito longo nos imports
**Solução**: Configure alias em vite.config.js (opcional)

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@lib': resolve(__dirname, './src/lib'),
    }
  }
})
```

Depois use:
```javascript
import { Button } from '@components'
import { useLanguage } from '@lib/translations'
```

---

## 📊 Checklist para Novos Arquivos

Ao criar um novo arquivo, verifique:

- [ ] Arquivo no diretório correto?
  - [ ] Reutilizável? → `components/common/`
  - [ ] Seção específica? → `components/sections/`
  - [ ] Helper/Utility? → `lib/`

- [ ] Imports relativos corretos?
  - [ ] Conta os níveis de profundidade?
  - [ ] Caminho correto? (`../lib`, não `../utils`)

- [ ] Adicionado ao `index.js` apropriado?
  - [ ] `components/index.js` para novos componentes?

- [ ] Código testado?
  - [ ] Sem erros de compilação?
  - [ ] Funcionando como esperado?

- [ ] Documentado?
  - [ ] Comentários em funções complexas?
  - [ ] JSDoc para componentes?

---

## 💡 Dicas Finais

1. **Mantenha a estrutura consistente**
   - Sempre siga os padrões estabelecidos

2. **Revise antes de fazer commit**
   - Imports corretos?
   - Sem arquivos antigos deixados para trás?

3. **Use a documentação**
   - Quando em dúvida, consulte este guia

4. **Comunique mudanças**
   - Se mudar a estrutura, avise a equipe

5. **Refatore regularmente**
   - Às vezes é bom reorganizar quando cresce muito

---

**Pronto para trabalhar com a nova estrutura! 🚀**
