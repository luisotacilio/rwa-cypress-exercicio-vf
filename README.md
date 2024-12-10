### Teste Funcional com Cypress - Real World App - RWA 

Este repositório contém os arquivos de um projeto de teste funcional automatizado de 4 casos de uso do aplicativo RWA realizados com a ferramenta CYPRESS. O contexto de sua realização é ser parte do treinamento para formação no curso de Qualidade( **QA - Quality Assurance** ) em Testes de Software ministrado pela escola [https://www.lumestack.com](https:/www.lumestack.com).

![Report](https://github.com/user-attachments/assets/fbc0b103-87fc-433a-933e-c6ce4d3ace7c)


Índice:
- Introdução
- Pré-requisitos
- Instalação
- Execução
- Resultados

#### Introdução
O Real World App é um aplicativo criado pela equipe Cypress que demonstra o uso no mundo real dos métodos de teste, padrões e fluxos de trabalho do Cypress. O RWA é um clone do Venmo que permite que os usuários se inscrevam para uma conta, adicionem uma conta bancária e enviem/recebam dinheiro entre amigos.

#### Pré-requisitos

Instalação das seguintes dependências:  Node JS, Yarn e o Cypress 

#### Instalação
- Node JS
```bash
http://nodejs.org/pt/download/prebuilt-binaries
```
- Yarn
```bash  
npm install --global yarn
```

- Cypress

```bash
npm install cypress --save-dev
```


#### Execução

Para execução dos testes desse repositório seguir esses três passos:

- Baixar o clone do RWA no GitHUB que se encontra em:

```bash
https://github.com/cypress-io/cypress-realworld-app
```

- Ligar o servidor web na porta 3000 execuntado a instrução
em linha de comando:

```bash
yarn dev
```

- Baixar o clone do meu repositorio em:
```bash  
https://github.com/luisotacilio/rwa-cypress-exercicio-vf
```
- Execução do projeto:
```bash
npx cypress open
ou
npm run cy:run:chrome
```

#### Resultado
De todas as validações executadas no teste funcional em  8 cenários do aplicativo **RWA** apenas uma apresentou um possível erro lógico: **permitir um usuário sem saldo suficiente na conta bancária realizar uma transferência com sucesso** e  foi gerado um relatório com a extensão **Mochawesome** a ser encaminhado ao time de desenvolvimento da aplicação para conhecimento e providências cabíveis, caso se trate de um bug. 





