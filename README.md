# Waiter Api

Api feita utilizando NodeJS, Express, Multer, Docker, MongoDB e TypeScript.
Com o propósito de ser utilizada pelo front-end em ReactJS, no qual provavelmente já está nos repositórios.

## Como usar

Para utilizar, primeiro é necessário ter instalado o Docker.

Para subir o container é bem simples, basta rodar o seguinte código (ou caso tenha conhecimento, você já sabe oque fazer aqui 😁):

```
docker run --name mongo -p 27017:27017 -d mongo
```

Após isso, apenas escolha a porta do mongo em ```.src/index.ts``` assim como a porta do projeto também.

Agora é só rodar o famoso ```yarn``` ou ```npm install``` e utilizar o script ```dev``` para rodar em homologação (recomendo utilizar yarn nesse projeto).
