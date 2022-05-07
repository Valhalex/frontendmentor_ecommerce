import React from 'react';
import './productpage.scss';
import image1 from '../../challengeAssets/images/image-product-1.jpg';
import thumbnail1 from '../../challengeAssets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../challengeAssets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../challengeAssets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../challengeAssets/images/image-product-4-thumbnail.jpg';
import plus from '../../challengeAssets/images/icon-plus.svg';
import minus from '../../challengeAssets/images/icon-minus.svg';
import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';



const ProductPage = () => {

    // call this function on the "add to cart" button click to add 
    //an item to our users cart
    const handleSubmit = async () => {
        try {
            let title = document.querySelector(".productName").textContent;
            let quantity = parseInt(document.querySelector(".numToBuy").textContent);
            let price = document.querySelector(".price").textContent;
            // preferably, we would have a database full of items where we would connect to the database, 
            //search for the id the user clicked on
            //and get the information that way....
            // But this project will have a small scope
            //so for me it is ok to simply make a table that will only hold 1 item on our website.
            //I am also choosing to do it this way just for practice working with firebase.
            
            //remove all symbols
            const regex = /\d+/g;
            price = parseFloat(price.match(regex));



            await addDoc(collection(db, 'Cart'), {
                //because this is a simple project, I won't be creating a seperate table of items, and rather I will just be hardcoding
                //an id as apart of this item, I am aware this is not best practice.
                id:1,
                title:title,
                image: thumbnail1,
                quantity: quantity,
                price:price,
                selected: true,
                created: Timestamp.now()
            })
            
        } catch (err) {
            alert(err)
        }
        console.log("added to cart")
    }
    
    // handles the plus and minus buttons to add or subtract quantity
    let [count, setCount]= useState(1);
    const incNum = () => {
        setCount(count + 1);
    }
    const decNum = () => {
        if(count ===1){
            alert("You cannot go lower than quantity: 1")
        }else{
            setCount(count - 1);

        }

    }
        
    


    return (
        <div className="content">
            <div className="left">
                <div className="topImage">
                    <img src={image1} alt="" />
                </div>
                <div className="bottomSlide">
                    <img src={thumbnail1} alt="" />
                    <img src={thumbnail2} alt="" />
                    <img src={thumbnail3} alt="" />
                    <img src={thumbnail4} alt="" />

                </div>

            </div>

            <div className="right">
                <div className="top">
                    <h2>Sneaker Company</h2>
                    <h1 className='productName'>Fall Limited Edition
                        Sneakers</h1>
                </div>
                <div className="mid">
                    <span className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</span>
                    <div className="listPricing">
                        <span className="price">$125.00</span>
                        <span className="rate">50%</span>
                        <span className="discMobile">$250</span>
                    </div>
                    <div >
                        <span className="discount">$250.00</span>
                    </div>
                </div>


                <div className="bottom">
                    <div className="quantity">
                        <img className="minus" src={minus} onClick={decNum}  alt="" />
                        <span className="numToBuy" >{count}</span>
                        <img className="plus" src={plus} onClick={incNum} alt="" />
                    </div>
                    <div className="cartBtn" >
                        <img src="./images/icon-cart.svg" alt="" />
                        <span className="addText" onClick={handleSubmit}>Add To Cart</span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ProductPage