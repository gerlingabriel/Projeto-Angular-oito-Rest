# Instalação

Para iniciar o projeto devemos começar com seguintes passos:
  - Instalar o node (download e instalação normal)

Caso já tenha instalado você pode verificar com os comandos:
  - node --version / npm --version
 
Para instalar Angular:
  - npm install -g @angular/cli
 
OBS: "-g" instalará de maneira global / "@angular/cli" irá isntalar a versão mais nova, mas poderá controlar esse comando instalando a versão que deseja como "@angular/cli@8.3.19".
 
 # Iniciando o projetpo
 
Agora com as ferramentes instaladas devemos criar entrar no workspace  onde a pasta da instalação deve ficar depositada, utilizando vscode (no meu caso) devemos aplicar o seguinte comando:
  - ng new ProjetoAngularOitoRest 
  - Depois escolher o formato CSS (básico caso do seu interesse)
 
 OBS: o nome "ProjetoAngularOitoRest" é um exemplo de nome do projeto, pode ser qualquer um que desejar.
 
 OBS2: Quando for usar GitHub para projetos Angular devesse ignorar a class "node_module", pois ela é muito grande, por isto quando for fazer um pull em uma outra maquina basta executar o comando "npm install" que irá instalar as depedencias utilizada nesse projeto.

# ProjetoAngularOitoRest

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19. Mas por causa de alguns problemas tive que atualizar para version 11.2.

## Servidor de desenvolvimento

Run `ng serve` serve para iniciar a aplicação. Link de acesso padrão é `http://localhost:4200/`. 

## Código de andaime

Run `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` inicar um novo projeto. Os artefatos de construção serão armazenados no diretório `dist /`. Use o sinalizador `--prod` para uma construção de produção.

## Help

Para obter mais ajuda sobre a CLI Angular, use `ng help` ou confira o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
