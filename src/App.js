import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Blog from './Components/Blog/Blog';
import FourOfour from './Components/FourOfour/FourOfour';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageItem from './Components/ManageItem/ManageItem';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<FourOfour></FourOfour>}></Route>
        <Route path='additem' element={<AddItem></AddItem>}></Route>
        {/* Not used path */}
        <Route path='construction' element={<FourOfour></FourOfour>}></Route>
      </Routes>
      {/* update Item page is avaiable */}
    </div>
  );
}

export default App;
