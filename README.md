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

## Examples:

### Basic CRUD Operations

```js
// GET request
const users = await api.get({
    query: 'users'  // GET https://api.example.com/v1/users
});

// GET with query parameters
const activeUsers = await api.get({
    query: 'users',
    params: {
        status: 'active',
        limit: 10
    }
    // GET https://api.example.com/v1/users?status=active&limit=10
});

// POST request with body
const newUser = await api.post({
    query: 'users',
    body: {
        name: 'John Doe',
        email: 'john@example.com'
    }
});

// PUT request
const updatedUser = await api.put({
    query: 'users/123',
    body: {
        name: 'John Updated'
    }
});

// DELETE request
const deletedUser = await api.delete({
    query: 'users/123'
});
```

### Advanced Usage

#### Custom Headers Per Request

```js
const response = await api.get({
    query: 'secure-endpoint',
    headers: {
        'X-Custom-Header': 'value',
        'Authorization': 'Bearer different-token'
    }
});
```

#### Different Content Types

```js
// Form Data
const formSubmission = await api.post({
    query: 'upload',
    contentType: 'multipart/form-data',
    body: {
        file: fileInput.files[0],
        description: 'Profile picture'
    }
});

// URL Encoded
const urlEncodedSubmission = await api.post({
    query: 'submit-form',
    contentType: 'application/x-www-form-urlencoded',
    body: {
        username: 'john_doe',
        password: 'secure123'
    }
});
```

### Instance Configuration

You can configure default options when creating a fetcher instance:

```js
const api = fetcher({
    url: 'https://api.example.com',
    type: 'json',
    headers: {
        'Authorization': 'Bearer token',
        'Accept': 'application/json'
    },
    mode: 'cors',
    cache: 'no-cache',
    params: {
        version: 'v1'  // Applied to all requests
    }
});
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.