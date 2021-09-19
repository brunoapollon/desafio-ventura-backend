# desafio-ventura-backend

## Tecnologias
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Javascprit](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Projeto
Esse projeto é o backend de uma aplicação requerida no teste da ventura academy, foram utilizadas ferramentas de padronização de código como o eslint
e o prettier utilizando o padrão airbnb. Foi aplicado variaveis ambiente com um arquivo de exemplo de todas variavéis utilizadas.


## Instruções 
- Para instalar todas as dependências utilizadas do projeto basta rodar o comando `yarn`
- O servidor pode ser iniciado com `yarn dev:server`, onde se tem acesso pelo `http://localhost:3333`

## Rotas da aplicação
- `http://localhost:3333/video/` a primeira rota é a de criação(`POST`) do video informando title, description e duration do video.
- `http://localhost:3333/video/update_thumbnail/:video_id` (`PATCH`) depois que o o video for criado, deve ser atualizada a url de thumbnail enviando o arquivo de imagem
com o nome `thumbnail` utilizando o multpart no insomnia.
- `http://localhost:3333/video/update_video/:video_id` (`PATCH`) depois que o o video for criado, deve ser atualizada a url do arquivo de video que será exibido
enviando o arquivo de video com o nome `video` utilizando o multpart no insomnia.
- `http://localhost:3333/video/` a rota de listagem (`GET`) que lista todos os videos presentes no banco de dados da aplicação
