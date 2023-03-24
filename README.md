# WikiGitApi

Este é um projeto desenvolvido em ReactJS que consome a API do Github para retornar informações de usuários, como nome, site, biografia, cidade e avatar. As bibliotecas utilizadas foram o Axios e o Styled Components para fazer as requisições e estilizar o conteúdo, respectivamente.

# Como usar
Para usar o projeto, siga os seguintes passos:

1 - Clone o repositório usando o comando git clone https://github.com/seunome/gh-user-search.git.
2 - Na raiz do projeto, instale as dependências utilizando o comando npm install.
3 - Crie um arquivo .env na raiz do projeto e adicione a chave de acesso pessoal (Personal Access Token) do Github. Para obter essa chave, siga as instruções descritas na documentação do Github.
4 - Inicie o servidor local usando o comando npm start.
5 - Acesse a aplicação em http://localhost:3000.

# Funcionalidades
A aplicação tem as seguintes funcionalidades:

1 - Buscar usuários pelo nome de usuário do Github.
2 - Mostrar informações do usuário, como nome, site, biografia, cidade e avatar.
3 - Apresentar mensagem de erro caso o usuário não seja encontrado.
4 - Estrutura do projeto

# O projeto tem a seguinte estrutura:

--src
-components: contém os componentes ReactJS da aplicação e estilização da aplicação.
-services: contém os arquivos responsáveis por consumir a API do Github.
-App.js: componente principal da aplicação.
-index.js: arquivo de entrada da aplicação.

Conclusão
O projeto é uma ótima oportunidade para praticar o consumo de APIs externas em projetos ReactJS. O uso das bibliotecas Axios e Styled Components torna o projeto mais fácil de ser desenvolvido e mais agradável visualmente.
