# Hackathon's Backend Example
This repository can be use as an example backend, based on Express.js

## Install the correct Node version
#### Manually
See Node.js documentation to install version v24
https://nodejs.org/en

#### Using NVM
If you don't already have Node.js v24 installed, you can use NVM to install it

Folle these instructions: 
https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

Once NVM is installed, run this in the directory of the project (where the .nvmrc is)

```
nvm install
nvm use
```


## Install dependencies
```
npm i
```

## Build
```
npm run build
```

## Start the backend service
```
npm run build
```

## Examples

### Example of simple GET request using fetch
``` javascript
const response = await fetch("http://localhost:3000/");
if (!response.ok) {
    throw new Error(`Response status with error: ${response.status}`);
}

const resultBody = await response.json();
console.log(`Response body is: ${resultBody}`);
```

### Example of GET with parameters request using fetch
``` javascript
const response = await fetch("http://localhost:3000/example_params?name=pedro");
if (!response.ok) {
    throw new Error(`Response status with error: ${response.status}`);
}

const resultBody = await response.json();
console.log(`Response body is: ${resultBody}`);
```

### Example of POST request using fetch
``` javascript
const response = await fetch("http://localhost:3000/example_post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ "wallet_address": "my_wallet_address" }),
});

if (!response.ok) {
  throw new Error(`Response status with error: ${response.status}`);
}

const resultBody = await response.json();
console.log(`Response body is: ${resultBody}`);
```
