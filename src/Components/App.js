import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}>
        </Route>
        <Route path="/register" Component={Register}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
