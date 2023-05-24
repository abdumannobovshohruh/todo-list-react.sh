import React, { useState } from 'react'
import './Section.css'
export default function Seciton() {
    // State hook - `useState`
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    //Helper Functions 
    function addItem() {
        // console.log(newItem);
        if (!newItem) {
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
    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }
    return (
        <div>
            <body>
                <div className="App">
                    {/* 1.Header */}
                    {/* 2. Input and button */}
                    <input className='inputText' type="text"
                        placeholder='Enter a todo'
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                    />
                    <button onClick={() => addItem()} className="add">Add</button>
                    {/* 3.List of items (unordered list  with list items) */}
                    <ul>
                        {items.map(item => {
                            return (
                                <div className='info'>
                                    <li className='right-text' key={item.id}>{item.value}</li>
                                    <button className='button-delete' onClick={() => deleteItem(item.id)}>delete</button>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </body>
        </div>
    )
}
