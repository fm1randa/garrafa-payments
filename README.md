# Garrafa No Mar - Sistema de Pagamentos

O Cofre Social é o coração financeiro do Garrafa no Mar, responsável por processar doações de Anjos e direcioná-las automaticamente para Beneficiários, através do serviço de pagamentos, que visa transformar como os anjos contribuem para as contas de consumo dos beneficiários no aplicativo Garrafa no Mar. Com a nova funcionalidade, os anjos poderão fazer pagamentos únicos ou recorrentes de qualquer valor, e o sistema de pagamentos se encarregará de processar o pagamento das contas, facilitando a ajuda e aumentando a flexibilidade nas doações. A solução garantirá que Anjos doem com segurança e transparência e Beneficiários recebam ajuda ágil, sem burocracia.

## Dependências

Antes de começar, você precisa ter instalado na sua máquina:

🔹 **Node →** https://nodejs.org/en \
🔹 **Yarn →** `npm install yarn -g` \
🔹 **Docker →** https://www.docker.com/products/docker-desktop/ \
🔹 **Conventional Commits VSCode Extension →** https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits

## Como rodar o projeto

**Instale as dependências:**

```bash
yarn
```

**Abra o Docker Desktop** (ou inicie o *daemon* do docker de outro jeito, caso você o use sem o Docker Desktop) **e rode o banco de dados:**

```bash
docker-compose up -d
```

**Configure o Prisma:**

```bash
cd backend && yarn prisma generate && yarn prisma db push && cd ..
```

**Rode o frontend juntamente com o backend:**

```
yarn dev
```

## Como rodar o front/back separadamente

### Front-end

```bash
yarn frontend:dev
```

### Back-end

```bash
yarn backend:dev
```

## Como usar o projeto

- Acesse o frontend em localhost:3000
- Acesse o backend em localhost:3001
- Acesse a documentação da API em localhost:3001/api

## Solução de problemas

### #1
```
unable to get image 'postgres:latest': error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.47/images/postgres:latest/json": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
```

Verifique se o Docker está rodando. Abra o Docker Desktop ou inicie o *daemon* do docker de outro jeito, caso você o use sem o Docker Desktop.