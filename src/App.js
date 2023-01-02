
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
  ]);
  return (
    <div>
    
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
