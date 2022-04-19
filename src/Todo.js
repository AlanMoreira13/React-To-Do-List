import React, { useEffect, useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item"
import "./Todo.css";


const SAVED_ITEMS = "savedItems"

function Todo() {
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if(savedItems) {
      setItems(savedItems);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  },[items])

    function onAddItem(text) {

        let it = new Item(text)

        setItems([...items,it])
        onHideModal()
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it=>it.id != item.id)

        setItems(filteredItems)
    };


    function onDone(item) {

      let updateItems = items.map(it=>{
            if(it.id === item.id) {
                it.done = !it.done
            }
            return it;
        }) 
 
        setItems(updateItems)
    }

    function onHideModal() {
      setShowModal(false)
  }

  return (

    <div className="container">
      <header className="header">
        <h1>To-Do List</h1>
        <i onClick={()=> {setShowModal(true)}} class="bi bi-plus-square-fill addButton"></i>
        </header>
      {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>



      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>

  );
};




export default Todo;
