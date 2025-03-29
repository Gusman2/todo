import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 py-8">
        <Todo />
      </div>
    </div>
  );
}

export default App;
