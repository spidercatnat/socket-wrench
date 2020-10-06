import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const publisher = {
  subscribe: (event, fn) => eventEmitter.on(event, fn),
  unsubscribe: (event, fn) => eventEmitter.off(event, fn),
  send: (event, payload) => eventEmitter.emit(event, payload)
}

Object.freeze(publisher);

export { publisher }