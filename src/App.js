import { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import Form from './components/Form';

function App() {

  const [colors, setColors] = useState([]);
  return (
    <div className="App">
      <Form onAddColors={(colors) => setColors(colors)} colors={colors} />
      <BoxGenerator colors={colors} />
    </div>
  );
}

export default App;
