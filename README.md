
# 🎬 Movie Finder

> Projeto React para busca de filmes usando a OMDb API, com design moderno, favoritos e navegação entre páginas.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- OMDb API

## Funcionalidades

- Buscar filmes por nome
- Visualizar detalhes do filme
- Adicionar e remover favoritos (armazenados no navegador)
- Paginação de resultados
- Design responsivo e tema escuro

## Como rodar o projeto

1. Instale as dependências:
	```bash
	npm install
	```
2. Crie um arquivo `.env` na raiz com sua chave da OMDb API:
	```env
	VITE_OMDB_API_KEY=sua_chave_aqui
	```
3. Rode o projeto em modo desenvolvimento:
	```bash
	npm run dev
	```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — pré-visualiza o build
- `npm run lint` — executa o linter

## Estrutura principal

- `src/components` — componentes reutilizáveis (Header, MovieCard, SearchBar, etc)
- `src/pages` — páginas principais (Busca, Favoritos, Detalhes)
- `src/services/api.js` — integração com OMDb API
- `src/hooks/useFavorites.js` — hook para favoritos

---

Projeto desenvolvido para fins de estudo/prática. Sinta-se livre para customizar!
