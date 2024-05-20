import { useContext } from 'react';
import {ShopContext} from '../../context/shop-context'



const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart} = useContext(ShopContext)
    const currentItemsAmount = cartItems[id];
    
    return ( 
        <div className="product">
            <img src={productImage} alt="" />     
            <div className="desctiption">
                <p>
                    <b>{productName}</b>    
                </p>    
                <p>{price}$</p>
                <button 
                    onClick={() => addToCart(id)} className="addToCartBttn">Add To Cart {currentItemsAmount > 0 && <>({currentItemsAmount})</>}
                </button>
            </div>              
        </div>
     );
}
 
export default Product;