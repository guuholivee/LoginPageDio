# Feed App

Este é um projeto de um aplicativo de feed de notícias desenvolvido com **React** e **styled-components**. Ele apresenta uma interface moderna e responsiva, com componentes reutilizáveis como `Header`, `Card`, `UserInfo`, `Button` e `Input`.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled-components**: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **React Icons**: Biblioteca de ícones para React.
- **React Router DOM**: Gerenciamento de rotas no React.
- **React Hook Form**: Gerenciamento de formulários no React.
- **Yup**: Biblioteca para validação de formulários.
- **Axios**: Cliente HTTP para integração com APIs.

## 📂 Estrutura do Projeto

src/ ├── components/ │ ├── Button/ │ │ ├── index.jsx │ │ └── styles.js │ ├── Card/ │ │ ├── index.jsx │ │ └── styles.js │ ├── Header/ │ │ ├── index.jsx │ │ └── styles.js │ ├── Input/ │ │ ├── index.jsx │ │ └── styles.js │ └── UserInfo/ │ ├── index.jsx │ └── styles.js ├── pages/ │ ├── feed/ │ │ ├── index.jsx │ │ └── styles.js │ ├── home/ │ │ ├── index.jsx │ │ └── styles.js │ ├── login/ │ │ ├── index.jsx │ │ └── styles.js │ └── register/ │ ├── index.jsx │ └── styles.js ├── services/ │ └── api.js ├── assets/ │ └── logo-dio.png ├── App.js └── index.js


## 🛠️ Funcionalidades

- **Feed de Notícias**: Exibe uma lista de cards com informações de postagens.
- **Autenticação Simulada**: Renderiza diferentes menus e botões com base no estado de autenticação.
- **Cadastro de Usuário**: Permite que novos usuários se cadastrem no sistema.
- **Validação de Formulários**: Utiliza `React Hook Form` e `Yup` para validação de campos.
- **Componentes Reutilizáveis**: Botões, inputs, cards e informações de usuários são componentes reutilizáveis.
- **Estilização Responsiva**: Utiliza `styled-components` para criar estilos dinâmicos e responsivos.

## 📦 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `yarn test`

Executa os testes no modo interativo de observação.

### `yarn build`

Cria o aplicativo para produção na pasta `build`.\
Ele empacota o React no modo de produção e otimiza a construção para o melhor desempenho.

### `yarn eject`

**Nota: esta é uma operação irreversível.**\
Remove a dependência única de construção e copia todas as configurações para o projeto.

## 🖼️ Demonstração

### Página de Feed
- Exibe cards com informações de postagens.
- Mostra informações de usuários com progresso.

### Página de Login
- Formulário simples para autenticação de usuários.

### Página de Cadastro
- Permite que novos usuários se cadastrem preenchendo nome, email e senha.

## 🧑‍💻 Como Rodar o Projeto

1. Clone o repositório:
2. Instale as dependências:
   yarn install

3. Inicie o servidor de desenvolvimento:
   yarn start
   
📚 Aprendizados
Este projeto foi desenvolvido para praticar:

Componentização no React.
Gerenciamento de estado e props.
Estilização com styled-components.
Navegação com React Router DOM.
Validação de formulários com React Hook Form e Yup.
Integração com APIs utilizando Axios.
📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.

Feito com ❤️ por Gustavo Batista.

