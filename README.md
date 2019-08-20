## express-ts-cloud-functions
This is a template for firebase cloud functions.

### Reference
- https://firebase.google.com/docs/functions/typescript
- https://firebase.google.com/docs/hosting/functions

## About
- Typescrpt
- Express.js

## Requirements
- Firebase CLI
- Node 8.11.x
- tsc

## Firebase Project Setting
To run on localhost, you have to setup your firebase project as below.

```bash
$ firebase login
$ firebase use "<your project id>"
$ firebase serve
```

Then, you can access the functions via this URL.

> http://localhost:5000/\<your firebase project id>/\<your firebase project region>/api/sample/userinfo


## Build Setup
```bash
$ cd functions

# install dependencies
$ yarn install

# ts to js
$ yarn build

# run on localhost
$ firebase serve
```
