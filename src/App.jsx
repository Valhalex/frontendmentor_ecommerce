import './app.scss';
import Navbar from './components/navbar/Navbar';
import {useState} from 'react';
import Cart from './components/cart/Cart';
import Avatar from './components/avatar/Avatar';
import ProductPage from './components/productPage/ProductPage';


function App() {
  // control the state if a menu should be opened for our shopping cart
  const [cartMenuOpen,setCartMenuOpen] = useState(false);
  const [avatarMenuOpen,setAvatarMenuOpen] = useState(false);


  return (
    <div className="App">
      <Navbar cartMenuOpen={cartMenuOpen} setCartMenuOpen={setCartMenuOpen}
      avatarMenuOpen={avatarMenuOpen} setAvatarMenuOpen={setAvatarMenuOpen}
      />
      {/* add state to cart and avatar so we can change it's style to visible */}
      <Cart cartMenuOpen={cartMenuOpen} setCartMenuOpen={setCartMenuOpen}/>
      <Avatar avatarMenuOpen={avatarMenuOpen} setAvatarMenuOpen={setAvatarMenuOpen}/>
      <ProductPage />
    </div>
  );
}

export default App;
