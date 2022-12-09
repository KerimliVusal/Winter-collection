import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {setBasket} from '../../store/features/basketSlice'
import './style.scss'
import {deleteFromBasket} from '../../store/features/basketSlice'
function ProductBox({product,duration}) {
  let stars=['star1','star2','star3','star4','star5'];
const dispatch=useDispatch();
const {basket}=useSelector(state=>state.basket)
let AddedProduct=basket.find(produc=>produc.id==product.id)
const handleAdd=()=>{
  let currentProduct=basket.find(produc=>produc.id==product.id)
  if(currentProduct){
  dispatch(deleteFromBasket(product.id))
   
  }
 else{
  dispatch(setBasket(product));
 }
}
  return (
    <div className='product-box' data-aos='fade-up'   data-aos-delay={duration*100}>
         <div className="p-box-image">
            <img src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/${product.PosterImg}`} alt=""/>
            <Link to={"/product/"+product.id} className="quickOverview">View Details</Link>
            <ul className="options">
              <li className="heart"><i className="far fa-heart"></i></li>
              <li className="Pcart" ><i onClick={()=>handleAdd(product)} className={AddedProduct?"fas fa-shopping-cart green":"fas fa-shopping-cart"} ></i></li>
              <li><i className="fas fa-search-plus"></i></li>
            </ul>
        </div>
        <Link to={"/product/"+product.id} className='p-box-text'>
          <h3 className='product-title'>{  product.Title.length > 35
        ? product.Title.slice(0, 35) + "..."
        : product.Title}</h3>
          <span className='stars'>
            {
              stars.map((star,index)=>{
              return  <i key={star} className={index<product.stars?'fa-star fas':"fa-star far"}></i>
              }
             )
            }
          </span>
          <ul className='product-prices flex align-center'>
          <li>${product.MainPrice}</li>
          <li>${product.FromPrice}</li>
          </ul>
        </Link>
    </div>
  )
}

export default ProductBox