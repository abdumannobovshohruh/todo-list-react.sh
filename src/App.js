import { useState } from 'react';
import './App.css';

function App() {
  // State hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  //Helper Functions 
  function addItem() {
    // console.log(newItem);
if(!newItem){
  alert("Enter an item.");
  return;
}

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }
  function deleteItem(id){
const newArray = items.filter(item => item.id !== id);
setItems(newArray); 
  }
  return (
    <div className="App">
      {/* 1.Header */}
  <h1>Todo List App</h1>
  {/* 2. Input and button */}
  <input type="text"
  placeholder='Add an iteam...'
  value={newItem}
  onChange={e => setNewItem(e.target.value)}
  />

<button onClick={() => addItem()}>Add</button>
{/* 3.List of items (unordered list  with list items) */}

<ul>
{items.map(item => {
  return(
    <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
  )
})}
</ul>
    </div>
  );
}

export default App;
