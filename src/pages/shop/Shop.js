import { PRODUCTS } from "../../products";
import Product from "./Product";
import './shop.css'

const Shop = () => {
    return ( 
        <div className="shop">
        <div className="shopTitle">
          <h1>PavleTech Shop</h1>
        </div>
  
        <div className="products">
          {PRODUCTS.map((product, id) => (
            <Product key={id} data={product} />
          ))}
        </div>
      </div>
     );
}
 
export default Shop;