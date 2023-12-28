import './index.css'

import * as React from "react"
import  * as ReactDOM from "react-dom/client"

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Loyaut from './pages/Loyaut';
import Diary from './pages/Diary';
import StudentTable from './components/StudentTable';
import AdministratorTable from './components/AdministratorTable';
import NppTable from './components/NppTable';
import SupervisorTable from './components/SupervisorTable';
import CreateFromStudent from './components/CreateFroStudent';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



const router = createBrowserRouter([
  {
    path: "/",
    element: <Loyaut/>,
    children: [{
      path: 'student',
      element: <StudentTable/>
    },
    {
      path: 'administrator',
      element: <AdministratorTable/>
    },
    {
      path: 'npp',
      element: <NppTable/>
    },
    {
      path: 'supervisor',
      element: <SupervisorTable/>
    },
    {
      path: 'createDiary',
      element: <CreateFromStudent/>
    }


  ]
    // children: 
    //   [
    //     {
    //       path: 'home',
    //       element: <Diary/>
    //     }
    //   ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);