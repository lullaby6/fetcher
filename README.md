# Fetcher

Groups HTTP requests by entity.

## Installation

#### NPM

Install the library using NPM:

```bash
npm i @lullaby6/fetcher
```

#### CommonJS

```js
const fetcher = require('@lullaby6/fetcher');
```

#### ES Modules

```js
import fetcher from '@lullaby6/fetcher';
```

#### CDN

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/fetcher/fetcher.js'></script>
```

#### Download

<a href="https://cdn.jsdelivr.net/gh/lullaby6/fetcher/fetcher.js" target="_blank">Download</a> and include the downloaded file in your project:

```js
<script src="/path/to/fetcher.cdn.js"></script>
```

## Examples:

```js
const todosFetcher = fetcher({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'json',
})

// query path value
const todoOne = await todosFetcher.get({
    query: 1
})

console.log(todoOne);

// url params
const first10Todos = await todosFetcher.get({
    params: {
        _limit: 10
    }
})

console.log(first10Todos);

// create
const newTodo = await todosFetcher.post({
    body: {
        title: 'New todo',
        completed: false
    }
})

console.log(newTodo);

// update
const updatedTodo = await todosFetcher.put({
    query: 1,
    body: {
        title: 'Updated todo',
        completed: true
    }
})

console.log(updatedTodo);

// delete
const deletedTodo = await todosFetcher.delete({
    query: 1
})

console.log(deletedTodo);

// headers
const todosHeaders = await todosFetcher.get({
    headers: {
        'Content-Type': 'application/json'
    }
})

console.log(todosHeaders);
```
