import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home'
import About from './View/About/About';
import Contact from './View/Contact/Contact';
import './index.css'
import  {CreatBrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
  }
])

root.render(<RouterProvider router={router} />);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from './View/Home/Home'
// import About from './View/About/About';
// import Contact from './View/Contact/Contact';
// import './index.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// const currentpath = window.location.pathname;
// if(currentpath ==="/"){
//   root.render(<Home/>)
// }else if(currentpath ==="/about"){
//   root.render(<About/>)
// }else if(currentpath ==="/contact"){
//   root.render(<Contact/>)
// }else{
//   root.render(<h1>404 Not Found</h1>)

// }

//Component

// function  Card(){
//   const randomNumber = Math.random();
//   return(
//     <div>
//       <h1>Card {randomNumber}</h1>
//     </div>
//   )
// }

// root.render(
//   <>
//   <Card/>
//   </>
// )

//props

// function Greeting(props){
//   console.log(props)
//   return(
//     <div>
//       <h1>Hello Greeting {props.name} from {props.city}</h1>
//     </div>
//   )
// }
// root.render(
//   <>
//   <Greeting name="Abhijit" city="Pune" />
//   </>
// )

//Image adding 


// import IMG from './white-and-red-cherry.jpg'

// function App() {
//   return (
//     <div>
//         <h1>This is a App component</h1>
//         <img src='https://t4.ftcdn.net/jpg/08/87/17/59/360_F_887175938_aaAkIaSJswq2lKCr499Xf4dgQwqhLvf6.jpg'
//         height="350px" alt='img'/>
//         <img src={IMG} height="350px" />
//      <counter/>
//     </div>
//   )
// }

// root.render(
//   <>
//   <App/>
//   </>
// )

