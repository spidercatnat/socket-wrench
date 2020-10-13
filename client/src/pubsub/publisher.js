import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const publisher = {
  subscribe: function (eventName, cache) {
    eventEmitter.on(eventName, data => {
      this.cache[eventName] = cache(data);
    });
  },
  unsubscribe: function (eventName, fn) {
    eventEmitter.off(eventName, fn)
  },
  send: function (eventName, payload) {
    eventEmitter.emit(eventName, payload)
    if (!this.cache[eventName]) {
      this.cache[eventName] = { data: payload };
    }
  },
  getState: function (topic) {
    return this.cache[topic] || {};
  },
  cache: {}
}

export { publisher }