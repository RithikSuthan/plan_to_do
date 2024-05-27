import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' Component={Login}>
        </Route>
        <Route path="/register" Component={Register}>
        </Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
