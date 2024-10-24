# fetcher.js

Download/export and print data in various formats, such as JSON, CSV, XLSX (Excel), PDF and images (using canvas).

## Installation

#### NPM

Install the library using NPM:


```bash
npm i fetcher.js
```

Import it into your project:

#### CommonJS

```js
const fetcher = require('fetcher.js/fetcher.cjs.js');
```

#### ES Modules

```js
import fetcher from 'fetcher.js/fetcher.esm.js';
```

#### CDN

Add the library directly to your HTML via CDN:

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/fetcher.js/fetcher.cdn.js'></script>
```

#### Direct Download

Download the cdn version: <a href="https://cdn.jsdelivr.net/gh/lullaby6/fetcher.js/fetcher.cdn.js" target="_blank">fetcher.cdn.js</a>

Include the downloaded file in your project:

```js
<script src="/path/to/fetcher.js"></script>
```

### Usage:

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
