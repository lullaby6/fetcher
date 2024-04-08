# fetcher.js

### Example:

```js
const todosFetcher = fetcher({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'json',
})

const todoOne = await todosFetcher.get({
    query: 1
})

console.log(todoOne);

const first10Todos = await todosFetcher.get({
    params: {
        _limit: 10
    }
})

console.log(first10Todos);
```