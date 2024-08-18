import { Navbar, Welcome, Footer, Services, Transactions, Home, Exchange, TransactionTable, Tokens } from "./components";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Exchange",
    element: <Exchange />
  },
  {
    path: "/Transactions",
    element: <TransactionTable />
  },
  {
    path: "/Tokens",
    element: <Tokens />
  }
])

const App = ({routes}) => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;