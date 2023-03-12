## Furniture Home Assessment

### How to run

#### Run Server
 - Go to `server` directory (`cd server`)
 - Install dependencies `npm install`
 - run the project `npm start`
#### Run Client
 - Go to `client` directory (`cd client`)
 - Install dependencies `npm install`
 - run the project `npm start`

### Notes
 - App uses tailwind for CSS. And it uses default breakpoints for responsive styling.
 - Apollo Client is being used for data fetching.
 - Eslint and Prettier has been configured.
 - Unit and integration Tests were written using Jest and React Testing Library. They can be run using `npm test` and `npm run coverage`.
 - Husky has been configured to run eslint when a user commit to a repo (lint-stage is used to only lint staged files). And `npm test` when a user pushes commits to a remote repo.
 - Need to improve/add relevant accessibility attributes
