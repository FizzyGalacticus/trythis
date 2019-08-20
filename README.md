# trythis

A util to help trace errors

## Installation

Using `npm`:
```sh
npm i --save-dev @fizzygalacticus/trythis
```

Using `yarn`:
```sh
yarn add --dev @fizzygalacticus/trythis
```

## Usage

`trythis` can be used on both asynchronous and synchronous functions:

**synchronous:**
```js
trythis(() => `this shouldn't throw`)(/* ...params */);
trythis(() => {throw new Error('this should throw')})(/* ...params */);
```

output:
![sync-output](https://i.imgur.com/JMeuVAg.png)

**asynchronous:**
```js
trythis(() => Promise.resolve(`this shouldn't throw`))(/* ...params */);
trythis(() => Promise.reject('this should throw'))(/* ...params */);
```

output:
![async-output](https://i.imgur.com/1ni4Y2e.png)
