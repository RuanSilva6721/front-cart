- # Front Appliance

Este documento descreve como iniciar e executar o projeto Front Appliance, um teste em Vue.js.
## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:
- Node.js 19.2
## Iniciando

Siga as etapas abaixo para iniciar o projeto Front Appliance.
### 1. Clone o projeto

Clone o projeto do repositório usando o seguinte comando:

```bash

git clone https://github.com/RuanSilva6721/front-appliances.git
```


### 2. Instale as dependências

Navegue até o diretório clonado e instale as dependências usando o seguinte comando:

```bash

cd front-appliances
npm install
```


### 3. Configure o arquivo .env

Duplique o arquivo `.env.example` e renomeie uma cópia para `.env`. Certifique-se de alterar a porta de `VITE_BASE_URL_API` para a rota base da API Laravel.
### 4. Inicie o servidor de desenvolvimento

Inicie o servidor de desenvolvimento do projeto com o seguinte comando:

```bash

npm run dev
```



Acesse o projeto em execução no navegador em [http://localhost:9001](http://localhost:9001/) .



## Docker

Se preferir, você também pode executar o projeto usando o Docker.
### 1. Iniciando o Docker

Certifique-se de ter o Docker instalado e iniciado em sua máquina.
### 2. Execute o Docker Compose

Navegue até o diretório clonado e execute o seguinte comando para subir o container da aplicação e o banco de dados PostgreSQL:

```bash
docker-compose up -d
```


Acesse o projeto em execução no navegador em [http://localhost:9000](http://localhost:9000/) .
### 3. Acesso ao container da aplicação

Se precisar acessar o container da aplicação para executar comandos adicionais, execute o seguinte comando:

```bash

docker-compose exec -it [nome_do_container_da_aplicação] bash
```

# front-cart
