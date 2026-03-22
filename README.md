# 🛸 Rick and Morty Explorer

Uma aplicação web interativa para explorar personagens do universo Rick and Morty, consumindo dados da [Rick and Morty API](https://rickandmortyapi.com/).

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)

## ✨ Funcionalidades

- 🔍 **Busca em tempo real** de personagens por nome
- 🎴 **Cards interativos** com informações dos personagens
- 📄 **Página de detalhes** para cada personagem
- ⚡ **Debounce na busca** para otimizar requisições
- 📱 **Design responsivo** com Tailwind CSS

## 🚀 Tecnologias

- **[Next.js](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca UI com hooks modernos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[ESLint](https://eslint.org/)** - Linting de código

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # 🏠 Página inicial com busca
│   ├── character/[id]/
│   │   └── page.tsx          # 📄 Detalhes do personagem
│   └── layout.tsx            
├── components/
│   ├── rickandmorty.tsx      # 🎴 Grid de personagens
│   ├── rickandmorty.css      # 🎨 Estilos customizados
│   ├── header.tsx            # 🔍 Header com busca
│   └── footer.tsx            # 🦶 Footer
public/                       
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |

## 🚀 Como Executar

1. **Clone o repositório:**
```bash
git clone <url-do-repo>
cd untitled
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse:** http://localhost:3000

5. **Deploy in Vercel:**

## 🌐 API Utilizada

- **[Rick and Morty API](https://rickandmortyapi.com/)** - API REST gratuita com dados de personagens, episódios e localizações da série.

## 📝 Licença

Este projeto é apenas para fins educacionais. Rick and Morty é uma marca registrada da Adult Swim.

---

<p align="center">👽 Wubba Lubba Dub Dub! 🚀</p>
