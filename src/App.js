import { RouterProvider } from 'react-router-dom';
import './App.css';
import HeaderNav from './Component/HeaderNav.js/HeaderNav';
import router from './Component/routes/routes';



function App() {
  return (
    <div>

      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
