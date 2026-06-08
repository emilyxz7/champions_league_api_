# API da Champions League com Node.js e Express

## Descrição

Este projeto é uma recriação da API da Champions League, desenvolvida com Node.js e Express (utilizando o módulo `http` nativo do Node.js para roteamento e controle de requisições) e TypeScript. O objetivo é fornecer uma API RESTful para gerenciar informações relacionadas a podcasts (simulando dados de jogos ou eventos da Champions League), incluindo listagem de episódios, filtragem por nome de podcast e, como uma nova funcionalidade, a listagem de categorias únicas de conteúdo. Este projeto demonstra a criação de uma API robusta e escalável, ideal para iniciantes em desenvolvimento backend com Node.js e TypeScript.

## Funcionalidades

- **Listar todos os episódios/eventos:** Retorna uma lista completa de todos os episódios de podcasts disponíveis, que podem ser interpretados como eventos ou jogos da Champions League.
- **Filtrar episódios/eventos por nome de podcast:** Permite buscar episódios específicos com base no nome do podcast (ex: 'flow', 'venus').
- **Listar Categorias Únicas (Nova Funcionalidade):** Retorna uma lista de todas as categorias de conteúdo únicas presentes nos podcasts, como 'esporte', 'saúde', 'humor', etc. Esta funcionalidade adiciona uma camada de organização e descoberta de conteúdo à API.

## Endpoints da API

A API expõe os seguintes endpoints:

### 1. Listar todos os episódios/eventos

- **URL:** `/api/list`
- **Método:** `GET`
- **Descrição:** Retorna todos os episódios de podcasts.
- **Exemplo de Resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### 2. Filtrar episódios/eventos por nome de podcast

- **URL:** `/api/podcasts?p={nomeDoPodcast}`
- **Método:** `GET`
- **Descrição:** Retorna episódios de podcasts que correspondem ao `nomeDoPodcast` fornecido.
- **Parâmetros de Query:**
  - `p`: O nome do podcast a ser filtrado (ex: `flow`, `venus`).
- **Exemplo de Requisição:** `GET /api/podcasts?p=flow`
- **Exemplo de Resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### 3. Listar Categorias Únicas (Nova Funcionalidade)

- **URL:** `/api/categories`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todas as categorias únicas de podcasts disponíveis na base de dados.
- **Exemplo de Resposta:**

```json
[
  "saúde",
  "esporte",
  "bodybuilder",
  "corrida",
  "programação",
  "humor"
]
```

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript assíncrono e orientado a eventos.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.
- **[TSX](https://github.com/esbuild-kit/tsx):** Ferramenta para executar arquivos TypeScript diretamente no Node.js sem compilação prévia.
- **[TSUP](https://tsup.egoist.dev/):** Bundler para TypeScript, otimizado para bibliotecas e APIs.
- **`@types/node`:** Definições de tipo para Node.js, permitindo o uso de TypeScript com as APIs nativas do Node.js.

## Como Utilizar

Siga os passos abaixo para configurar e executar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn) instalados em sua máquina.

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/champions-league-api.git
   cd champions-league-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Crie um arquivo `.env`:**
   Na raiz do projeto, crie um arquivo chamado `.env` e adicione a seguinte variável de ambiente:
   ```
   PORT=3000
   ```
   Você pode alterar a porta conforme sua preferência.

### Execução

Para iniciar o servidor em modo de desenvolvimento (com `tsx` para hot-reloading):

```bash
npm run start:dev
# ou
yarn start:dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta que você configurou no `.env`).

Para construir e iniciar a versão de produção:

```bash
npm run dist
npm run start:dist
# ou
yarn dist
yarn start:dist
```

### Testando a API

Você pode usar ferramentas como Postman, Insomnia ou `curl` para testar os endpoints:

- **Listar todos os episódios:**
  `GET http://localhost:3000/api/list`

- **Filtrar episódios por nome:**
  `GET http://localhost:3000/api/podcasts?p=flow`

- **Listar categorias únicas:**
  `GET http://localhost:3000/api/categories`

## Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para:

1. Abrir uma `issue` descrevendo a sua sugestão ou o problema.
2. Criar um `fork` do projeto.
3. Criar uma nova `branch` para sua funcionalidade (`git checkout -b feature/MinhaNovaFuncionalidade`).
4. Realizar suas alterações e fazer `commit` (`git commit -m 'feat: Adiciona Minha Nova Funcionalidade'`).
5. Fazer `push` para a `branch` (`git push origin feature/MinhaNovaFuncionalidade`).
6. Abrir um `Pull Request`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
