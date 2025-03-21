# Garrafa No Mar - Sistema de Pagamentos

O Cofre Social é o coração financeiro do Garrafa no Mar, responsável por processar doações de Anjos e direcioná-las automaticamente para Beneficiários, através do serviço de pagamentos, que visa transformar como os anjos contribuem para as contas de consumo dos beneficiários no aplicativo Garrafa no Mar. Com a nova funcionalidade, os anjos poderão fazer pagamentos únicos ou recorrentes de qualquer valor, e o sistema de pagamentos se encarregará de processar o pagamento das contas, facilitando a ajuda e aumentando a flexibilidade nas doações. A solução garantirá que Anjos doem com segurança e transparência e Beneficiários recebam ajuda ágil, sem burocracia.

## Dependências

Antes de começar, você precisa ter instalado na sua máquina:

🔹 **Node →** https://nodejs.org/en \
🔹 **Yarn →** `npm install yarn -g` \
🔹 **Docker →** https://www.docker.com/products/docker-desktop/

## Como rodar

Instale as dependências:

```bash
yarn
```

Rode o banco de dados:

```bash
docker-compose up -d
```

Configure o Prisma:

```bash
cd backend && yarn prisma generate && yarn prisma db push
```

### Front-end

```bash
yarn frontend:dev
```

### Back-end

```bash
yarn backend:dev
```
