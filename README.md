# Witchy: Compartilhe seus feitiços

* [1. Introdução](#1-introdução)
* [2. Funcionamento](#2-funcionamento)
* [3. O Projeto](#3-detalhes)
* [4. Planejamento](#4-planejamento)
* [5. Desenvolvimento Front End](#5-desenvolvimento-front-end)
* [6. Desenvolvedoras](#6-desenvolvedoras)

***

## 1. Introdução

Nesta aplicação web o usuário poderá interagir de forma criativa no clima de bruxaria. O projeto tem como objetivo integrar pessoas que compartilham da mesma ideia ou que estajam disponíveis a aprender novos feitiços ou curiosidades.

Projeto: [Witchy](https://rede-social-ba65a.firebaseapp.com/)

## 2. Funcionamento

A aplicação *mobile first* dá ao usuário a possibilidade de se cadastrar, fazer login com conta Google e login via email e senha.

A priori o usuário é direcionado para *Home*. Após a autenticação ou cadastro, o usuário é redirecionado para o *Mural*, podendo compartilhar suas bruxarias, excluí-las, editar, curtir ou comentar em seu post e nos dos demais usuários.

## 3. O Projeto

O projeto tem como base a ideia de **SPA**, com enfoque **mobile first** e utilizando **persistência de dados** via *Firebase*.

O objetivo é uma rede social onde se possa escrever, ler, atualizar e deletar dados.

## 4. Planejamento

### História de usuário 1

Como pessoa interessada, gostaria de poder me cadastrar na rede social **Witchy**.

*Definition of Done*: Funções em JavaScript implementadas, code reviewed, CSS feito, página publicada e testes de usabilidade.
*Critérios de Aceitação*: Mensagem de erro para email/senha inválidos, mobile first, SPA.

### História de usuário 2

Como usuária da rede **Witchy**, gostaria de poder fazer meu login com email/senha ou com conta **Google** e visualizar um feed onde eu possa postar e ver postagens minhas e de outras usuárias. 

*Definition of done*: funções JavaScript+Firebase implementadas, code reviewed, CSS feito, página publicada.
*Critérios de aceitação*: SPA e mobile first.

### Hitória de usuário 3

Gostaria de interagir com likes e comentários nas postagens de outras usuárias, e também poder deletar/editar minhas postagens.

*Definition of Done*: Likes, comentários, deletar e editar implementados, CSS feito, página publicada e testes de usabilidade.
*Critérios de Aceitação*: Botões funcionando junto ao envio de dados do **Firebase**, persistência de dados, mobile first, SPA.

## 5.  Desenvolvimento Front-end

Foram utilizados HTML5 semântico, CSS3 _flexbox_ para adaptar a visualização do mobile first, uso de classes para implementar os estilos e evitar redundância. 

* Login
![Mobile First Login](https://uploaddeimagens.com.br/images/002/454/793/original/mobile-first-feed.png) 

![Desktop Login](http://uploaddeimagens.com.br/images/002/454/852/original/desktop-login.png)

* Feed
![Mobile First Feed](https://uploaddeimagens.com.br/images/002/454/793/original/mobile-first-feed.png)

* Cadastro
![Mobile First Cadastro](https://uploaddeimagens.com.br/images/002/454/789/original/mobile-first-cadastro.png)

* Uso

![Uso](https://media.giphy.com/media/RlZP42nTVida4CQDNY/giphy.gif)

## 6. Desenvolvedoras

    • Évora da Ibéria - HTML5, CSS3, Firebase e JavaScript
    • Maria Carolina Ferreira- HTML5, CSS3, Firebase e JavaScript
    • Jéssica Nascimento - HTML5, CSS3, Firebase e JavaScript
    • Laboratória SP
