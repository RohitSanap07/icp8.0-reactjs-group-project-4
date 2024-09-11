import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import JobInfo from  './views/JobInfo/JobInfo';
import News from './views/News/News';
import Login from './views/Login/Login';
import Setting from './views/Setting/Setting';
import RecuriterProfile from './views/RecuriterProfile/RecuriterProfile';
import AddPost from './views/AddPost/AddPost';
import ViewPost from './views/ViewPost/ViewPost';
import UserProfile from './views/UserProfile/UserProfile';
import 'remixicon/fonts/remixicon.css'
import { Toaster } from 'react-hot-toast';

const NOTIFICATION = localStorage.getItem('NOTIFICATION') || true

let body= document.querySelector("#root")
window.addEventListener('load', ()=> {
  const darkTheme = localStorage.getItem('DARKTHEME') || true
  if(darkTheme){
    body.classList.add("dark-theme")
  }
  else{
    body.classList.add("white-theme")
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/job/:id",
    element: <JobInfo />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/profile",
    element: <RecuriterProfile />,
  },
  {
    path: "/addpost",
    element: <AddPost />,
  },
  {
    path: "/viewpost",
    element: <ViewPost />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  }
]);

root.render(
<>

<RouterProvider router={router}/> 
{NOTIFICATION ? <Toaster/> : null}
</>);