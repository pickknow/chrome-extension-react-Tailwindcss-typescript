import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CountShow from './compontments/CountShow';
const App: React.FC = () => {

  return (
    <div className='min-h-[300px] flex flex-col justify-center items-center min-w-[300px]'>
      <h1 className='text-4xl'>An example, how to use react hook with chrome local store</h1>
      <div className='mt-10'>
        <CountShow />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
