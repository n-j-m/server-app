# server-app

server app starter kit

## Features

## Usage

Clone the repo and initialize git:
```
git clone git@github.com:n-j-m/app your_project
cd your_project
rm -rf .git
git init
npm install
```
Add a ```.env``` file at the project root containing the following:
```
JWT_SECRET=yoursecrethere
```

**You'll need to install knex globally to run these commands**
```
npm install knex -g
```

Create and seed the database:
```
knex migrate:latest
knex seed:run
```

Routes:
```
POST  /api/auth     # Content-Type: application/json { email: 'jimmy@crackcorn.com', password: 'idontcare' }
GET   /api/me       # specifiy Authorization header: Bearer [your_token]
```

## Scripts

 - **npm run start** : `node -r dotenv/config ./bin/www`
 - **npm run dev** : `cross-env DEBUG=:server nodemon -r dotenv/config ./bin/www`
 - **npm run readme** : `./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[body-parser](https://www.npmjs.com/package/body-parser) | ^1.15.0 | ✖
[bookshelf](https://www.npmjs.com/package/bookshelf) | ^0.9.2 | ✖
[dotenv](https://www.npmjs.com/package/dotenv) | ^2.0.0 | ✖
[express](https://www.npmjs.com/package/express) | ^4.13.4 | ✖
[express-jwt](https://www.npmjs.com/package/express-jwt) | ^3.3.0 | ✖
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | ^5.7.0 | ✖
[knex](https://www.npmjs.com/package/knex) | ^0.10.0 | ✖
[morgan](https://www.npmjs.com/package/morgan) | ^1.7.0 | ✖
[pg](https://www.npmjs.com/package/pg) | ^4.4.6 | ✖
[cross-env](https://www.npmjs.com/package/cross-env) | ^1.0.7 | ✔
[css-loader](https://www.npmjs.com/package/css-loader) | ^0.23.1 | ✔
[debug](https://www.npmjs.com/package/debug) | ^2.2.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nodemon](https://www.npmjs.com/package/nodemon) | ^1.9.0 | ✔
[sqlite3](https://www.npmjs.com/package/sqlite3) | ^3.1.1 | ✔


## Author



## License

 - **MIT** : http://opensource.org/licenses/MIT