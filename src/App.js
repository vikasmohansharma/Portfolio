// App.js
import React from 'react';
import  {RouterProvider, createBrowserRouter,} from "react-router-dom";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage";
import Resume from './components/Resume/Resume';


function App() {

const router = createBrowserRouter([
  {path:'/', element:<Layout />, errorElement:<ErrorPage />, children:
[
  {index: true, element: <Home />},
  {path:'about', element: <About />},
  {path:'projects', element: <Projects />},
  {path:'resume', element: <Resume />},
  {path:'contact', element: <Contact />},
]},
  
]);
  
  return (
    <div className="App">
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
