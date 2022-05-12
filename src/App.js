import { Route, Routes } from 'react-router-dom';
import AddItem from './Components/AddItem/AddItem';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import FourOfour from './Components/FourOfour/FourOfour';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItem from './Components/MyItem/Myitem';
import Product from './Components/Product/Product';
import Products from './Components/Products/Products';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='myitem' element={<MyItem></MyItem>}></Route>
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        
        <Route path='*' element={<FourOfour></FourOfour>}></Route>
        <Route path='additem' element={<AddItem></AddItem>}></Route>
        <Route path='updateitem' element={<UpdateItem></UpdateItem>}></Route>
        {/* <Route path='manageitem' element={<Products ></Products>}></Route> */}
        
        <Route path='manageitem/:_id' element={<UpdateProduct></UpdateProduct>}></Route>

        {/* Not used path */}
        <Route path='construction' element={<FourOfour></FourOfour>}></Route>
      </Routes>
      {/* update Item page is avaiable */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
