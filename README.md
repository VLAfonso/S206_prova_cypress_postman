# Prova S206 - Teste de UI com Cypress e Teste de API com Postman
Repositório destinado à Prova - Teste de UI com cypress e Teste de API com Postman - da disciplina S206 - Qualidade de Software.  
O objetivo principal é o desenvolvimento de testes de UI para o website [XYZ Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) e de API para [API Graph-QL](https://gorest.co.in/)-->.

## :pencil: Descrição
Foram desenvolvidos testes de UI no [XYZ Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) para gerência do banco, testando a adição de cliente e a abertura de conta utilizando a ferramenta `Cypress` e o `Mochawesome` para a geração de relatório.


Foram desenvolvidos testes de API na [API Graph-QL](https://gorest.co.in/) realizando requisições `GET` e `DELETE` utilizando a ferramenta `Postman` e o `Newman` para a geração de relatório.


## :gear: Execução
1. Clonar o repositório
```bash
git clone https://github.com/VLAfonso/S206_prova_cypress_postman.git
```
### Testes de UI
1. Acessar a pasta
```bash
cd S206_prova_cypress_postman/cypress
```
2. Instalar as dependências
```bash
npm install
```

3. Executar os testes
```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

4. Acessar relatório de testes  
O relatório é gerado automaticamente após a execução de testes e pode ser encontrado em [`cypress/cypress/reports/html`](./cypress/cypress/reports/html) no arquivo [`index.html`](./cypress/cypress/reports/html/index.html).

### Testes de API
1. Acessar a pasta
```bash
cd S206_prova_cypress_postman/postman
```
2. Instalar as dependências
```bash
npm install
```

3. Executar os testes
```bash
newman run GraphQL-API.postman_collection.json -r htmlextra
```

4. Acessar relatório de testes  
O relatório é gerado automaticamente após a execução de testes e pode ser encontrado na pasta [`postman/newman`](./postman/newman).

> :pushpin: **Notas:** É necessário ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior) e o npm configurado corretamente no sistema.

## :white_check_mark: Testes
### Testes de UI

| # | Caso de Teste | Tipo | Descrição |
|----|------|---------|-----------|
| 1 | **Teste de adição de cliente com sucesso** | Positivo | Realiza de forma correta a adição de um cliente. |
| 2 | **Teste de adição de cliente com falha** | Negativo | Realiza a tentativa de adição de um cliente duas vezes. |
| 3 | **Teste de abertura de conta com sucesso** | Positivo | Realiza de forma correta a abertura de uma conta.|
| 4 | **Teste de abertura de conta com falha** | Negativo | Realiza a tentativa de abertura de uma conta sem informar a moeda.|

Dessa forma, são realizados 4 testes de UI, sendo 2 positivos e 2 negativos.

### Testes de API
| # | Cenário de Teste | Tipo | Descrição |
|----|------|---------|-----------|
| 1 | **Get-users** | Positivo | Realiza a busca de todos os users de forma válida. |
| 2 | **Deletion-unauthorized** | Negativo | Realiza a deleção não autorizada de um usuário. |
| 3 | **Get-unexisting-user** | Negativo | Realiza a busca de um usuário inexistente. |
| 4 | **Get-user** | Positivo | Realiza a busca de um usuário de forma válida. |
| 5 | **Get-posts** | Positivo | Realiza a busca de todos os posts de forma válida. |
| 6 | **Get-post** | Positivo | Realiza a busca de um post de forma válida. |
| 7 | **Get-unexisting-post** | Positivo | Realiza a busca de um post inexistente. |
Dessa forma, são realizados 7 testes de API, sendo 5 positivos e 2 negativos.


### Relatórios de testes
O relatório de testes de UI é gerado automaticamente em formato HTML pelo `Mochawesome` e está presente em [`cypress/cypress/reports/html`](./cypress/cypress/reports/html). Seu resultado pode ser visto a seguir: <img width="1911" height="455" alt="image" src="https://github.com/user-attachments/assets/59e66baa-9cf2-4062-8daf-aae584a5fd57" />
 

O relatório de testes API é gerado em formato HTML pelo `Newman` e está presente na pasta [`postamn/newman`](./postman/newman). Seu resultado pode ser visto a seguir:  
<img width="698" height="699" alt="image" src="https://github.com/user-attachments/assets/15a1c5e2-5e6a-4e7f-861c-b908fcafd7f0" />


## :hammer_and_wrench: Tecnologias e Ferramentas Utilizadas
- Linguagem de Programação: **JavaScript**
- Framework de Testes de UI: **Cypress**
- Criação de Testes de API: **Postman**
- Relatórios de Teste: **Mochawesome**, **Newman** e **htmlextra**
- Ambiente de Execução: **Node.js**
- Gerenciador de Dependências: **npm**
- IDE: **Visual Studio Code**

## :busts_in_silhouette: Desenvolvedoras 
[Lanna Correia e Silva](https://github.com/LannaCeS)  
[Virgínia Letícia Afonso](https://github.com/VLAfonso)

## :scroll: Licença
Este projeto está licenciado sob a MIT License.
