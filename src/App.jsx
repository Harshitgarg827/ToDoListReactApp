import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
    
    const [inputList,setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== idv;
            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/><h1>ToDo List</h1><br/>
                    <input type="text" onChange={itemEvents} placeholder="Add an item" value={inputList}/>
                    <button onClick={listofItems}> + </button>

                    <ol>
                        {Items.map( (itemVal, index) => {
                            return (
                                <ToDoList 
                                    key={index} 
                                    id={index} 
                                    onSelect={deleteItems}
                                    text={itemVal}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;