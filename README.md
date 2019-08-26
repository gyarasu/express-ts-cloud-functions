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
```

Then, you can access the functions via this URL.

> http://localhost:5000/your-firebase-project-id/your-firebase-project-region/api/userinfo/userinfo

## Directory Structure
### interfaces
TypeScript Interfaces used globally

### middleware
Express middleware created by yourself

### models
Database models adjust to table structure

### repositories
Database CURD and external API call.

### routes
HTTP Request handlers.
One endpoint is in one file to divide names for Firebase Cloud Functions.

*How to Export router*
```typescript
export const login: IRoutes = {
  name: genFunctionName(__dirname, __filename),
  router
};
```

You have to export router object with name property.
Function name is formed by combination of directory name and file name.

### services
Business Logic

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
