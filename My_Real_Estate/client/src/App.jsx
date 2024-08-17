import HomePage from './routes/HomePage/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './routes/ListPage/ListPage';
import Layout from './routes/layout/layout';
import SinglePage from './routes/SinglePage/SinglePage';
import ProfilePage from './routes/ProfilePage.jsx/ProfilePage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/list',
        element:<ListPage/>
      },
      {
        path:'/:id',
        element:<SinglePage/>
      },
      {
        path:'/profile',
        element:<ProfilePage/>
      },

    ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App