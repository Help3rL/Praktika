import React, { useState } from "react";

export const Component = (props: any) => {
  const [counter, setCounter] = useState();

  return (
    <div>
      <button>Reset</button>
      <button>Add 1</button>
      <button>Reduce 1</button>
    </div>
  );
};

export default Component;
