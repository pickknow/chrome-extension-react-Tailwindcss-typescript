// src/popup.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import CountShow from './compontments/CountShow';
import { handleGoToOptions } from './tools/functions';
const App: React.FC = () => {

  return (
    <div className='min-h-[300px] flex flex-col justify-center items-center min-w-[300px]'>
        <h1 className='text-4xl'>Hello from React!</h1>
        <button className="btn btn-primary" onClick={handleGoToOptions}>Open Optinos</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
