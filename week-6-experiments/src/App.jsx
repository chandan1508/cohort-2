// import React from "react"
// import {useState} from "react"

// function App() {
//   const [title, setTitle] = useState("my name is chandan");

//   function updateTitle(){
//      setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button><br /><br />
//       <Header title={title}></Header>
//       <Header title="mukhiya"></Header>
//       <Header title="mukhiya"></Header>
//       <Header title="mukhiya"></Header>
//       <Header title="mukhiya"></Header>
//       <Header title="mukhiya"></Header> 
//     </div>
//   )
// }

// // function Header({title}){
// //   return <div>
// //     {title}
// //   </div>
// // }

// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// })

// export default App

// <-- Todo App -->

// import React from "react";
// import { useState } from "react";

// function App(){
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to gym today"
//   },{
//     id: 2,
//     title: "eat food",
//     description: "eat food"
//   },{
//     id: 3,
//     title: "go to class",
//     description: "go to class"
//   }])

//   function addTodo(){
//     const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;

//     const newTodo = {
//       id: newId,
//       title: Math.random(),
//       description: Math.random()
//     }

//     setTodos([...todos, newTodo]);
//   }

//   return (
//     <div>
//     <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App

function App(){
   return <div>
    <CardWrapper>
       hi there
    </CardWrapper><br />
    <CardWrapper>
       hi there
    </CardWrapper><br />
    <CardWrapper>
       hi there
    </CardWrapper>
   </div>
}

function CardWrapper({children}){
   return <div style={{border: "2px solid black", padding: "20px"}}>
    {children}
   </div>
}

// function TextComponent(){
//     return <div>
//         hi there
//     </div>
// }

// function TextComponent2(){
//     return <div>
//         trdshgvkhl
//     </div>
// }

// function TextComponent3(){
//     return <div>
//         esdxpojknuyg
//     </div>
// }

export default App
