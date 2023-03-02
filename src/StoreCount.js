let listeners = [];
let count = 0;

export const StoreCount = {
  somar() {
    count++;
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return count;
  },
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}