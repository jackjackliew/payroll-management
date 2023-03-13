## Installation

```bash
$ npm install
```

## Setup database

create .env file and put in
DATABASE_URL="postgresql://username:password@host:5432/dbname?schema=public"

```bash
$ npx prisma db push
```

## Running the app

```bash
$ npm run build
$ npm run start
```

## Create new data in database then query or mutate data

- after app started, go to localhost:3000/grahpql
- create new data with createEmployee mutation, only enter username, fullname and salary, id will be auto generated
- read data with employees or employee (id) query
- update or delete data with updateEmployee and deleteEmployee mutation
