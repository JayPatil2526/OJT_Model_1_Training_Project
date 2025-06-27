import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Header from './components/header';
import CardExample from './components/CardExample';
import EventHandlingBtn from './components/EventHandlingBtn';
import './App.css';
import Faqs from './components/Faqs';

function App() {

  let [todoList, setTodoList] = useState([]);

  let [navshow, setNavshow] = useState(false);

  let SaveTodoList = (event) => {

    let TodoInput = event.target.TodoInput.value;
    if (!todoList.includes(TodoInput)) {

      let finalTodoList = [...todoList, TodoInput];
      setTodoList(finalTodoList);


    } else {
      alert("Todo List Already Exists...!")
    }

    event.preventDefault();
  }

  let list = todoList.map((item, index) => {
    return (

      <TodoListItems item={item} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList} />

    )
  })


  return (
    <>

      <div className={navshow ? 'overLay' : ''} onClick={() => setNavshow(false)} ></div>

      <button className='navBtn' onClick={() => setNavshow(!navshow)}>{navshow ? <span>&times;</span> : <span>&#9776;</span>}</button>

      <div className={`navSlide ${navshow ? 'showNav' : ''}`}>
        <li>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>sevices</ul>
          <ul>Contact US</ul>
        </li>
      </div>

      <Header />

      <Faqs />

      <br />

      <div className='Todo col-12 text-center container rounded-4 '>

        <h1>TodoList</h1>

        <form onSubmit={SaveTodoList}>
          <input type="text" placeholder='Add Task' className='TodoInput p-2 m-2 rounded-2' name='TodoInput'></input>
          <button className='TodoBtn p-2 m-1 rounded-2'>Save</button>
        </form>

        <div className='TodoShowingList col-6 m-auto rounded-2'>

          <ul className='m-auto p-auto  list-unstyled rounded-2'>
            {list}
          </ul>

        </div>

      </div>


      <div>

        <h2>Password Button</h2>
        <EventHandlingBtn />

      </div>

      <CardExample />

    </>
  );
}

export default App;

function TodoListItems({ item,indexNumber,todoList,setTodoList }) {

  let [checked, setChecked] = useState(false);

  let deleteItem = (event) => {
    // Prevent the event from bubbling up to the parent li element
    event.stopPropagation();

    let afterDeleteFinalTodoList = todoList.filter((item, index) => {
      return index !== indexNumber;
    })

    setTodoList(afterDeleteFinalTodoList);
    
  }

  let checkedTodo = () => {
    setChecked(!checked);
    
  }
  return (

    <li onClick={checkedTodo} className={` p-2  overflow-hidden position-relative text-white bg-black m-2 rounded-2
     ${checked ? 'completeTodo' : ''} `} >
      {item} 
      <span className='TodoCrossBtn text-center text-white' onClick={deleteItem}>&times;</span>
    </li>

  )
}