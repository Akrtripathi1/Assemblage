import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayPage from './components/DisplayPage';
import Home from './components/Home';
import Login from './components/LOgin';
import Signup from './components/Signup';
import UserAuth from './components/UserAuth';
import Notfound from './components/Notfound';
import LinkBuilder from './components/LinkBuilder';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='main' >
            <Route index element={<Home></Home>} />
            <Route element={<Login></Login>} path='login' />
            <Route element={<Signup></Signup>} path='signup' />
            <Route element={<UserAuth><LinkBuilder /></UserAuth>} path='linkbuilder' />

            <Route element={<Notfound></Notfound>} path='*' />
          </Route>
          <Route element={<DisplayPage />} path='displaypage/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
