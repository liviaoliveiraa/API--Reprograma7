### {reprograma} week 07 - API :rocket: 
---
<p align = "center">
<a align href = "#Sobre">Sobre</a> │
<a align href = "#Objetivo">Objetivo</a> │
<a align href = "#Regras">Regras</a> │
<a align href = "#Tecnologias">Tecnologias</a> │
<a align href = "#Pré-requisitos">Pré-requisitos</a> │
<a align href = "#Autora">Autora</a>
</p>

---

## Sobre
<p>Exercício desenvolvido no bootcamp da {reprograma} onde nos foi ensinado o conceito de API: GET. </p>

## Objetivo
<p>O objetivo desse exercício é realizar uma API(Application Programming Interface) utilizando apenas o método GET de acordo com a demanda de negócio informada abaixo.</p>

## Regras

- Todas as rotas serão de consulta e leitura, logo, todas se referem ao método GET;
- Todas as rotas devem ter tratamentos de erros caso o cliente envie valores invalidos;
- Retornar todas os estados e suas cidades;
- Retornar todos os estados e siglas, sem as cidades;
- Pesquisa por sigla que retorne o nome do estado, sigla e suas cidades;
- Pesquisa por sigla que retorne somente as cidades do estado pesquisado;

As rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para casa devera ser feito dentro da pasta servidor-para-casa. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-para-casa
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```


## Tecnologias
- [VsCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/)

## Pré-requisitos

    npm i nodemoon

## Autora
Made with :purple_heart: by [Lívia Oliveira](https://www.linkedin.com/in/l%C3%ADvia-de-oliveira-almeida/)











