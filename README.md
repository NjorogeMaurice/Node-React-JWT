# Node-React-JWT

This is a project to create a JWT authentication using Node js(backend) and React js(frontend).
## Table of Contents

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Prerequisite

To run Node-React-JWT you need to have node installed on your computer for live compiling of the css file. To install node follow the instructions [here](https://nodejs.org/en/download/).

## Installation

To get started with the Node-React-JWT project, follow these installation steps:

1. Go to the directory where you want to create your project and clone the repo:
    
```bash
git clone https://github.com/NjorogeMaurice/Node-React-JWT.git
```

2. Change into the project directory:

```bash
cd Node-React-JWT
```


3. Install all the dependencies for Nodejs (backend) using npm:

```bash
npm install
```


4. Change into the frontend directory:

```bash
cd frontend
```

5. Install all the dependencies for Reactjs (frontend) using npm:

```bash
npm install
```

## Usage
5. Create a .env file in the root directory of your project. Add the following to it:

```bash
PORT = 5000
JWT_SECRET_KEY = 'your secret key'(use comand "openssl rand -hex 32 or 64" to generate the random key)
TOKEN_HEADER_KEY =  'your secret key'(use comand "openssl rand -hex 32 or 64" to generate the random key)
SQL_DB_NAME=''
SQL_USER_NAME=''
SQL_USER_PASSWORD=''
SQL_DB_HOST=''
SQL_DB_DIALECT='mysql'
```


5. After that you can run the backend on your local machine:

```bash
node main.js
```

## Running Reactjs(Frontend)

Change to the frontend directory

```bash
cd frontend
```

Then run the following command:
```
npm start
```

Happy Coding!
