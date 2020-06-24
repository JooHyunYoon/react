import React from 'react';
import Counter from './Counter';
import Todos from './Todo';

function App() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
