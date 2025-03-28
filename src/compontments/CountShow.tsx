// src/popup.tsx
import React from 'react';
import useChromeStorageLocal from '../tools/localStore';

export function App() {
  const [count1, setCount1] = useChromeStorageLocal<number>("count1", 0);
  return (
    <div >
      <div className='flex gap-10 items-center'>
        <p>Stored Count1: <span role="countInfo">{count1}</span></p>
        <button className="btn btn-primary" onClick={() => setCount1(count1 + 1)}>Increment</button>
        <button className="btn btn-primary" onClick={() => setCount1(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;