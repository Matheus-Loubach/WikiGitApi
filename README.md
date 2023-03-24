# WikiGitApi

Este é um projeto desenvolvido em ReactJS que consome a API do Github para retornar informações de usuários, como nome, site, biografia, cidade e avatar. As bibliotecas utilizadas foram o Axios e o Styled Components para fazer as requisições e estilizar o conteúdo, respectivamente.

Como usar
Para usar o projeto, siga os seguintes passos:

Clone o repositório usando o comando git clone https://github.com/seunome/gh-user-search.git.
Na raiz do projeto, instale as dependências utilizando o comando npm install.
Crie um arquivo .env na raiz do projeto e adicione a chave de acesso pessoal (Personal Access Token) do Github. Para obter essa chave, siga as instruções descritas na documentação do Github.
Inicie o servidor local usando o comando npm start.
Acesse a aplicação em http://localhost:3000.
Funcionalidades
A aplicação tem as seguintes funcionalidades:

Buscar usuários pelo nome de usuário do Github.
Mostrar informações do usuário, como nome, site, biografia, cidade e avatar.
Apresentar mensagem de erro caso o usuário não seja encontrado.
Estrutura do projeto
O projeto tem a seguinte estrutura:

src
components: contém os componentes ReactJS da aplicação.
services: contém os arquivos responsáveis por consumir a API do Github.
styles: contém os arquivos de estilização da aplicação.
App.js: componente principal da aplicação.
index.js: arquivo de entrada da aplicação.
Conclusão
O projeto é uma ótima oportunidade para praticar o consumo de APIs externas em projetos ReactJS. O uso das bibliotecas Axios e Styled Components torna o projeto mais fácil de ser desenvolvido e mais agradável visualmente.
