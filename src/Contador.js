import React, { useSyncExternalStore } from "react";
import { StoreCount } from "./StoreCount";

const Contador = () => {
  const count = useSyncExternalStore(StoreCount.subscribe, StoreCount.getSnapshot);

  const handleOnClick = () => {
    StoreCount.somar();
    console.log(`Clicou ${StoreCount.getSnapshot()}`);
  }

  return (
    <div>
      Contador:&nbsp;{count}
      <button onClick={handleOnClick}>++</button>
    </div>
  );
}

export default Contador;