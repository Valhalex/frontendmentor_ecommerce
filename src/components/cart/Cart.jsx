import { React } from 'react';
import './cart.scss'
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';
import remove from '../../challengeAssets/images/icon-delete.svg';


const Cart = ({ cartMenuOpen, setCartMenuOpen }) => {

    const [cart, setCart] = useState([])
    /*  get all tasks from firestore in realtime */
    useEffect(() => {
        // connect to DB, access 'cart' table return ordered data by the time it was added
        //this will be a nice feature to remember on a larger project so that it will display the users items 
        //in the order that they added them
        const q = query(collection(db, 'cart'), orderBy('created', 'desc'))
        // get realtime snapshot of items in my db
        onSnapshot(q, (querySnapshot) => {
            setCart(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])







    return (
        <div className={"shoppingCart " + (cartMenuOpen && "active")}>
            <div className="top">
                <span>Cart</span>
            </div>
            <div className="bottom">
                {/* Items inside the users shopping cart */}

                {
                    (cart !== []) ?
                        cart.map((item) => (

                            <div className='wrapper' id={cart.id}>
                                <div className="left">
                                    <img src={item.data.image} alt="" />
                                </div>
                                <div className="middle">
                                    <span>{item.data.title}</span>
                                    <span>{item.data.price} x {item.data.quantity} = {item.data.price * item.data.quantity}</span>
                                </div>
                                <div className="right" onClick={e => deleteDoc(doc(db, "cart", "1"))}>
                                    <img src={remove} alt="" />
                                </div>
                            </div>
                        )
                    ) :<div>Cart is empty</div>
                        
                }
            </div>
            <div className="checkout">checkout</div>
        </div>
    )
}

export default Cart