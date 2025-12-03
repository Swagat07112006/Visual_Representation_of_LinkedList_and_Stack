import React from 'react';
import { useState, useEffect } from 'react';
import VisualizationArea from './VisualizationArea';
import InputFields from './InputFields';

function App() {
  const [linkedList, setLinkedList] = useState([
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
  ]);

  const [position, setPosition] = useState('end');
  const [stack, setStack] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState('');
  const [customPosition, setCustomPosition] = useState('');

  useEffect(() => {
    if(error){
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [error]);

  const addNode = () => {
    if(!inputVal.trim()){
      setError("Please enter a value");
      return;
    }

    const maxId = linkedList.length > 0 ? Math.max(...linkedList.map(node => node.id)) : 0;

    const newNode = {
      id: maxId + 1,
      value: parseInt(inputVal),
    };

    let newLinkedList = [...linkedList];

    if(position === 'beginning'){
      newLinkedList.unshift(newNode);
    }
    else if(position==='end'){
      newLinkedList.push(newNode)
    }
    else if(position === 'anyPosition'){
      if(customPosition === linkedList.length+1){
        newLinkedList.push(newNode)
      }
      else if(customPosition > linkedList.length+1 || customPosition <= 0){
        setError("Invalid Position");
        setInputVal('');
        setCustomPosition('');
        setPosition('end');
        return;
      }
      else{
        newLinkedList.splice(customPosition-1,0,newNode);
      }
    }

    setLinkedList(newLinkedList);
    setInputVal('');
    setCustomPosition('');
    setPosition('end');
  }

  const deleteNode = (id) => {
    const nodeDeleted = linkedList.find((node) => node.id === id);
    if(!nodeDeleted){
      return;
    }
    setStack((stack) => [nodeDeleted, ...stack])
    const newLinkedList = linkedList.filter((node) => node.id !== id);
    setLinkedList(newLinkedList);
  }

  return (
    <div className="
      min-h-screen bg-linear-to-br from-slate-950 to-slate-900 text-slate-100 flex flex-col items-center px-6 py-10 gap-12
    ">
      <header className='text-center'>
        <h1 className="
          text-4xl md:text-5xl font-bold tracking-wide text-emerald-400
        ">Visual Representation of Linked List and Stack</h1>
      </header>

      {error && (
        <div className='
          w-full max-w-xl bg-red-500/10 border border-red-500 text-red-400 px-6 py-3 rounded-xl text-center shadow
        '>
          {error}
        </div>
      )}

      {/* Visualization Section */}

      <VisualizationArea linkedList={linkedList} setLinkedList={setLinkedList} position={position} stack={stack} setStack={setStack} deleteNode={deleteNode}/>

      {/* Input and Control Section */}

      <InputFields position={position} setPosition={setPosition} inputVal={inputVal} setInputVal={setInputVal} linkedList={linkedList} error={error} setError={setError} addNode={addNode} customPosition={customPosition} setCustomPosition={setCustomPosition}/>
    </div>
  );
}

export default App;
