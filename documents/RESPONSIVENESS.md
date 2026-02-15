# 📱 Guia de Responsividade e Mobile-First

## Filosofia Mobile-First

Este projeto utiliza a abordagem **mobile-first**, onde:
- Estilos base assumem dispositivos pequenos (mobile)
- Media queries adicionam estilos para telas maiores
- Resulta em CSS mais limpo e performático

## Breakpoints Definidos

```css
/* Em src/styles/variables.css */
--bp-sm: 576px      /* Telefones pequenos → Tablets */
--bp-md: 768px      /* Tablets → Laptops */
--bp-lg: 991.98px   /* Desktops grandes */
```

## Estrutura de Media Queries

Localizado em: `src/styles/responsive.css`

```css
/* Base (Mobile) */
.elemento { font-size: 1rem; }

/* Tablets (≤768px) */
@media (max-width: 768px) {
  .elemento { font-size: 0.95rem; }
}

/* Mobile (≤576px) */
@media (max-width: 576px) {
  .elemento { font-size: 0.85rem; }
}

/* Extra Small (≤360px) */
@media (max-width: 360px) {
  .elemento { font-size: 0.75rem; }
}
```

## Responsividade por Componente

### Header/Navbar
| Dispositivo | Padding | Font | Comportamento |
|------------|---------|------|-----------------|
| Desktop | 0.3rem | 1.5rem | Menu inline |
| Tablet | 0.4rem | 1.25rem | Menu colapsável |
| Mobile | 0.4rem | 1.1rem | Menu hambúrguer |

### Hero Section
| Dispositivo | Height | Title | Description |
|------------|--------|-------|-------------|
| Desktop | 90vh | 2.5rem | 1.15rem |
| Tablet | auto | 2.5rem | 1rem |
| Mobile | auto | 1.75rem | 0.95rem |

### Cards (Service, Project, etc)
| Dispositivo | Padding | Columns | Min-Height |
|------------|---------|---------|-----------|
| Desktop | 2rem | 3 | auto |
| Tablet | 1.5rem | 2 | 400px |
| Mobile | 1rem | 1 | auto |

### Typography
```css
/* Headline adjustments */
h2 (Desktop): 2.3rem
h2 (Tablet):  2rem
h2 (Mobile):  1.5rem

/* Body text */
p (Desktop):  1.15rem
p (Tablet):   1rem
p (Mobile):   0.95rem
```

## Variáveis CSS Responsivas

Todos os valores usam variáveis centralizadas:

```css
:root {
  --primary-color: #0ea5e9;
  --transition-base: 0.3s ease;
  --shadow-sm: 0 10px 30px rgba(...);
}
```

**Vantagem**: Mudar tema não requer alterar 100 classes!

## Testing de Responsividade

### Teste Manual (Chrome DevTools)
1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Testar em:
   - iPhone SE (375px)
   - iPhone 12 (390px)
   - iPad (768px)
   - iPad Pro (1024px)

### Pontos de Teste
- [ ] Menu navbar colapsável
- [ ] Hero section layout
- [ ] Cards responsivas
- [ ] Imagens redimensionam
- [ ] Textos legíveis
- [ ] Buttons clicáveis
- [ ] Forms utilizáveis

## Performance - Dicas

### 1. Evite Media Queries Desnecessárias
❌ Ruim:
```css
@media (max-width: 768px) {
  .element { padding: 1rem; }
}
```

✅ Bom:
```css
.element { padding: 1rem; } /* Já é mobile */
```

### 2. Use Flexbox para Layouts
```css
.container {
  display: flex;
  flex-direction: column; /* Mobile */
}

@media (min-width: 768px) {
  .container {
    flex-direction: row; /* Desktop */
  }
}
```

### 3. Imagens Responsivas
```css
.image {
  max-width: 100%;
  height: auto;
}
```

### 4. Unidades Relativas
❌ Ruim: `width: 1920px`
✅ Bom: `width: 100%` ou `width: 90vw`

## Layout Grid Responsivo

Usando Bootstrap Grid:

```jsx
<div className="row">
  {/* Desktop: 3 colunas, Tablet: 2, Mobile: 1 */}
  <div className="col-lg-4 col-md-6 col-12">
    <Card />
  </div>
</div>
```

**Classes automáticas:**
- `col-12` = 1 coluna (100%)
- `col-md-6` = 2 colunas a partir de 768px
- `col-lg-4` = 3 colunas a partir de 991px

## Acessibilidade Mobile

### Touch Targets
```css
/* Mínimo 44x44px para botões */
.btn-hero {
  padding: 0.95rem 2.5rem;
  min-height: 44px;
}
```

### Viewport Meta Tag
```html
<!-- Em index.html -->
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0">
```

### Readable Text
- Mínimo 16px em mobile
- 1.5+ line-height para padrão
- Alto contraste de cores

## Debugging de Media Queries

Adicione temporariamente em `responsive.css`:

```css
/* Debug: mostra breakpoint atual */
body::after {
  content: 'mobile';
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background: red;
  color: white;
}

@media (min-width: 576px) {
  body::after { content: 'tablet'; background: orange; }
}

@media (min-width: 768px) {
  body::after { content: 'medium'; background: yellow; }
}

@media (min-width: 991px) {
  body::after { content: 'desktop'; background: green; }
}
```

## Próximas Otimizações

- [ ] Adicionar mais breakpoints customizados
- [ ] Testar em dispositivos reais
- [ ] Otimizar imagens com srcset
- [ ] Implementar lazy loading
- [ ] Teste de performance Lighthouse
- [ ] Melhorar touch interactions

---

**Última atualização**: 13 de fevereiro de 2026
**Versão**: 2.0
