# Criando uma Rede Social

Neste projeto você construirá uma rede social, cuja temática deixaremos ao seu critério.

Aqui estão algumas ideias:

- Alimentação
- Feminismo
- Educação
- Saúde
- Energias Renováveis

As **caraterísticas técnicas** de sua aplicação serão:
- Deve ser uma Single-Page Application [SPA](https://dzone.com/articles/how-single-page-web-applications-actually-work)
- Deve ser desenhada com enfoque [mobile first](https://darwindigital.com/mobile-first-versus-responsive-web-design/)
- Deve permitir a persistência de dados

Em sua aplicação você usará *HTML5*, *CCS3* ou *SASS*, *JavaScript(ES6+)*, *Firebase* ou *LocalStorage*

## Objetivo

O objetivo deste projeto é construir uma Rede Social, Single-Page Application (SPA), responsiva na qual podemos escrever, ler, atualizar e deletar dados.

Para isso, deverá colocar em prática sua criatividade para gerar ideias que levem a uma solução original e valiosa para o problema elegido, trabalhando em equipe e buscando feedbacks constantes.

Em outras palavras, seguirá se aprofundando no que já aprendeu nos projetos anteriores, mas em particular verá:

### Planejamento

* Escrever, de maneira colaborativa, as **Definições de pronto** e **Critérios de Aceitação** para cada **História de usuário** que te daremos para este projeto e que deverá considerar em seu planejamento.

* **Priorizar** a implementação de suas funcionalidades, levando em conta o esforço que demandam em relação ao valor que elas têm para o usuário, e executar, em equipe, todas as histórias de usuário dentro do tempo estimado para cada sprint. Levem em conta que ao final de cada sprint deverão ser entregues publicações completamente funcionais.

* Adquirir disciplina na completude, terminando uma história de usuário antes de passar para a seguinte (ou seja, que cumpre com as *Definições de Pronto* e *Critérios de Aceitação* contemplando todos os pontos que são objetivos de aprendizagem para este projeto).

### Desenvolvimento FrontEnd

#### Tecnologias HTML5 e CSS3/SASS

* Aplicar HTML5 semântico em seu projeto.
* Aplicar e reforçar os conceitos fundamentais de CSS3.
* Implemetar seletores de classe evitando a redundância de estilos CSS3.
* Utilizar `flexbox` para alcançar o desenho `mobile first`, implementando um layout que se adapte a **mobile e desktop**

A seguir, te passaremos o layout da tela mobile e desktop que você deverá replicar visualmente e cujo conteúdo, cores e fontes de texto deixaremos a seu critério.

* Tela mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Tela Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)

#### JavaScript (ES6+)

* Utilizar módulos de ES6 para poder modularizar seu código JavaScript.
* Reforçar seu conhecimento sobre o uso de Template strings.
* Reforçar seu conhecimento da manipulação de DOM através do JavaSript.
* Implementar um sistema de rotas (sem uso de bibliotecas externas) para trocar de uma tela para outra de maneira dinâmica (SPA).

### Persistência de dados

Nos projetos anteriores só consumimos (lemos) dados, por exemplo, através de um arquivo `json` ou utilizando `fetch`.

Neste projeto você desenhará a estrutura destes dados, a forma de consultá-los, atualizá-los, modificá-los e eliminá-los segundo os requerimentos do usuário. Para isto você utilizará `Firestore` do `Firebase` ou `LocalStorage` uma `Web Storage API`.

#### Firebase

O objetivo de usar Firebase neste projeto é que, com ele, você aprederá a manipular e persistir dados através de um banco de dados não relacional, em tempo real e poderá implementar operações CRUD (Criação, Leitura, Atualização e Remoção) de dados.

## Considerações Gerais do Projeto

* Este projeto deve ser desenvolvido em equipes de 3 integrantes.

* A duração proposta do projeto é de **3 sprints**, com duração de uma semana cada uma.

* Te daremos as **histórias de usuário** com o fim de apresentar a vocês os requisitos e funcionalidades que o usuário deseja.

* O **planejamento é vital**, para ele te recomendamos utilizar o trello, para que possa **escrever suas Definições de Pronto** e **Critérios de Aceitação** para cada história de usuário com o objetivo de determinar, em equipe, **o que fazer** no sprint e **como realizar**.

* Para que todos os membros de sua equipe possam alcançar os objetivos de aprendizagem, vocês deverão determinar qual será a estratégia de desenvolvimento que usarão: divisão por sub-histórias, pair programming, code reviews, etc.

## Restrições Técnicas

* Devem utilizar `flexbox` para posicionar seus elementos. Não está permitido o uso de frameworks de CSS (bootstrap), nem de estilização com `float`.

* Já te demos o layout das telas mobile e desktop. Queremos que repliquem estas telas. O conteúdo, paleta de cores e fontes, depende da temática que vão eleger como equipe. A implementação deste layout deverá ser parte da definição de pronto de suas histórias de usuário.

## Histórias de Usuário

* Como usuário novo, devo poder criar uma conta com email e senha válidos para poder iniciar uma sessão e ingressar na Rede Social.

* Como usuário novo, devo poder ter a opção de iniciar sessão com minha conta do Google ou Facebook para ingressar na Rede Social sem necessidade de criar uma conta de email válido.

* Como usuário logado devo poder criar, guardar, modificar no mesmo lugar (in place) e deletar publicações (post) privadas ou públicas.

* Como usuário logado devo poder ver todos os posts públicos e privados que criei até o momento, do mais recente para o mais antigo, assim como a opção de trocar a configuração de privacidade dos meus posts.

* Eu como usuário logado, posso dar like e ver a contagem de likes em minhas publicações

* Eu como usuário logado, posso escrever, salvar, editar ou deletar um comentário em minhas publicações.

* Ao final devo poder ingressar na Rede Social e poder visualizar os dados de meu perfil criado e editá-los.

* Te deixamos um exemplo de como definir critérios de aceitação e definições de pronto para uma H.U.

    > Como usuário novo devo poder criar uma conta com email e senha para poder
    > iniciar sessão.
    > **Critérios de aceitação**
    > - Se o email ou senha não forem válidos, ao momento de logar, devo ver uma
    >   mensagem de erro.
    > - Deve ser visível se existir alguma mensagem de erro.
    > - Devo poder ver esta página de registro em celulares e desktop (responsive).
    > - Não devo necessitar recarregar a página para criar uma conta (SPA).
    >
    > **Definição de pronto**
    > - A funcionalidade cumpre e satisfaz os critérios de aceitação.
    > - O layout está de acordo com o protótipo.
    > - O código desta funcionalidade recebeu code review.
    > - A funcionalidade está publicada para ser testada.
    > - A funcionalidade foi testada manualmente.
    > - Foram feitos testes de usabilidade e foi implementado o feedback, se for
    > necessário

## Objetivos de aprendizagem

### HTML e CSS
- [ ] HTML semântico
- [ ] CSS `flexbox`

### DOM e Web APIs
- [ ] Manipulação dinâmica do DOM
- [ ] History API
- [ ] `localStorage`

### Javascript
- [ ] Uso de callbacks
- [ ] Consumo de Promessas
- [ ] ES modules

### Firebase
- [ ] Firestore
- [ ] Firebase Auth
- [ ] Firebase Hosting


### Git e Github
- [ ] Colaboração no Github
- [ ] Organização no Trello

### Boas Práticas de Desenvolvimento
- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

***

## Recursos

### Mobile first

O conceito de [_mobile first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz referência a um processo de desenho e desenvolvimento que parte de como se vê e como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas _responsivas_.

### Múltiplas telas

Nos projetos anteriores nossas aplicações eram compostas por uma só tela principal. Neste projeto vamos introduzir a necessidade de ter que dividir nossa interface em várias _páginas_ ou _telas_ e oferecer uma maneira de navegar entre elas.

### Manipulação de dados

Nos projetos anteriores consumimos dados, porém ainda não havíamos escrito dados (salvar edições, criar dados, deletar, etc ...). Neste projeto você e sua equipe terão que criar (salvar) novos dados, assim como ler, atualizar e modificar dados existentes. Estes dados serão guardados de forma remota usando [Firebase](https://firebase.google.com/) ou de modo local usando `localStorage`.

### CSS

Neste projeto queremos que ganhe confiança e experiência com CSS, para isso usará [`flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) para posicionar seus elementos.

Recorde que não poderá usar frameworks CSS, somente *css* ou [*sass*](https://sass-lang.com/).

### Dicas e Leituras complementares:

#### Primeiros passos

1. Escolham alguém da equipe para fazer um :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório.
2. :arrow_down: Depois faça o [clone](https://help.github.com/articles/cloning-a-repository/)
   para o seu computador (cópia local).
3. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
4. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
5   . Let's Code! :rocket:

#### Leituras

* [Mobile First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Firebase Hosting do Zero](https://www.youtube.com/watch?v=0R2Ur0xKNz4)
* [Firebase Auth do Zero](https://www.youtube.com/watch?v=A0li9VEuCBs)
* [Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox - LMS](https://github.com/rafaelbcerri/curricula-js/tree/fix-content/topics/css/01-css/08-flexbox)

***
