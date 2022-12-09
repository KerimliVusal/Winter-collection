import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteFromBasket} from '../../store/features/basketSlice'
function ShopCart({toggleShopCart,setToggleShopCart}) {
  const {basket}=useSelector(state=>state.basket);
  const dispatch=useDispatch();
  return (
    <div className={toggleShopCart? "ShopCart-Container show":"ShopCart-Container"}>
    <span className="closeCart" onClick={()=>setToggleShopCart(false)}>
      <i className="fas fa-times"></i>
    </span>
    <h2 className="mb-40">Your Cart</h2>
    <div className="carts-container">
      {
        basket.length==0?
      <h3>Your cart is empty</h3>
:   basket.map(product=>(
  <div className='cart-item flex'>
  <img src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/${product.PosterImg}`} alt="" />
  <div className='cart-item-text ml-10'>
    <Link to={"/product/"+product.id}>{product?.Title.length>35? product?.Title.slice(0,35)+"...":product?.Title}</Link>
          <p>${product.MainPrice}</p>
      <button class="clearCart" onClick={()=>dispatch(deleteFromBasket(product.id))}><i class="fas fa-trash-alt"></i></button>
  </div>
</div>
))
      }
    </div>
    <h3 className="total mt-20">Total: {basket.length}</h3>
    <div className="totalstick"></div>
    <a href="#sd" className="viewCart">
      View Cart
    </a>
  </div>
  )
}

export default ShopCart