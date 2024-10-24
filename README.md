# Fetcher

Groups HTTP requests by entity.

## Installation

#### NPM

Install the library using NPM:

```bash
npm i @lullaby6/fetcher
```

#### Import

```js
// CoommonJS
const fetcher = require('@lullaby6/fetcher');

// ES Modules
import fetcher from '@lullaby6/fetcher';
```

#### CDN

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/fetcher/fetcher.js'></script>
```

#### Download

<a href="https://cdn.jsdelivr.net/gh/lullaby6/fetcher/fetcher.js" target="_blank">Download</a> and include the downloaded file in your project:

```js
<script src="/path/to/fetcher.js"></script>
```

## Basic Usage

Create a fetcher instance for your API endpoint:

```js
const api = fetcher({
    url: 'https://api.example.com/v1',
    type: 'json',
    headers: {
        'Authorization': 'Bearer your-token'
    }
});
```

## Usage

```js
const todosApi = fetcher({
    url: 'https://api.example.com/todos',
    type: 'json'
})

// Get all todos
const todos = await todosApi.get()

// Get single todo by ID
const todo = await todosApi.get({
    query: '123' // GET /todos/123
})

// Create todo
const newTodo = await todosApi.post({
    body: {
        title: 'New todo',
        completed: false
    }
})

// Update todo by ID
const updatedTodo = await todosApi.put({
    query: '123', // PUT /todos/123
    body: {
        completed: true
    }
})

// Delete todo by ID
const deleted = await todosApi.delete({
    query: '123' // DELETE /todos/123
})

// Using URL parameters
const filteredTodos = await todosApi.get({
    params: {
        completed: true,
        limit: 10
    }
    // GET /todos?completed=true&limit=10
})

// Using custom headers
const todoWithAuth = await todosApi.get({
    headers: {
        'Authorization': 'Bearer token'
    }
})
```

## License

MIT