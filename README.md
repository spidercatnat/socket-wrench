# socket-wrench

### Quickstart

- Install dependencies for `/server` and `/client` and build with `yarn setup`
- Start developing with `yarn start:dev`
- Launch in production mode with `yarn start:prod`

### File structure overview

```
.
├── client # React app lives here
│   ├── package.json
│   ├── public
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── assets
│       ├── components # Component modules live here
│       ├── constants 
│       ├── context # Context API for top-level state management like authentication, etc.
│       ├── index.css
│       ├── index.js
│       ├── pubsub # Stream data directly to components with PubSub to avoid prop drilling
│       ├── router 
│       ├── serviceWorker.js
│       ├── setupProxy.js # Proxy for development
│       └── views 
├── internals # Internal/system scripts live here
├── package.json
├── README.md
└── server # Server and Socket.io live here
    ├── controllers
    │   ├── helloWorld
    │   └── index.js
    ├── index.js
    ├── router.js
    └── socket
        ├── index.js
        ├── socket-events.js
        ├── socket.js
        └── socket-listeners.js
```