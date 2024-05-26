import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import { Home } from './Home';
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
        <Route path="/home" Component={Home}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
