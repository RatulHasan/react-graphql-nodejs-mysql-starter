# react-graphql-nodejs-mysql-starter
A basic starter for React, GraphQL, NodeJS, MySQL.

Clone this repository and run 

``cd server``

``npm install``

to install the dependencies.

For the first time we need to create and set up the database.
For this we need to set 
``type: 'mysql',``

``host: '127.0.0.1',``

``port: 3306,``

``username: 'USER',``

``password: 'PASSWORD',``

``database: 'DB',``

``logging: true,``

``synchronize: false,``

``entities: [Users, Posts]``
in index.ts file.

For the first time set ``synchronize: true`` in index.ts file.

To run the application in development mode:
``npm run dev``

To build the application for production:
``npm run build``

To run the application in production:
``npm run start``

## Happy Coding! :)
