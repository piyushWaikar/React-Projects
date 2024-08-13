import Dashboard from "./pages/Dashboard/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPage from "./pages/Transaction/TransactionPage";
import SupportPage from "./pages/Support/SupportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <TransactionPage/>
  },
  {
    path: "/support",
    element: <SupportPage/>,
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
