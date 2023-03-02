import React, { useSyncExternalStore } from "react";

const subscribe = (listener) => {
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('resize', listener);
  }
}

const getSnapshot = () => {
  return window.innerWidth
}

const Size = () => {
  // useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?) 
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      Width:&nbsp;{width}
    </div>
  );
}

export default Size;