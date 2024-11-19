import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
// import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishListItem } from '../Redux/slices/wishListSlice'
import { addItemToCart } from '../Redux/slices/cartSlice'
import services from '../data/data'
import { useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS



function ServiecesHome() {
  // const data = useFetch('https://fakestoreapi.com/products')
     const data = services
  console.log(data);
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartItem);
  const wishlist = useSelector(state => state.Wishlist); // Access wishlist state

  const handleAddToCart = (item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id);
    if (itemExists) {
      toast.warn('This item is already in your cart!')
    } else {
      dispatch(addItemToCart(item));
    }
  };


  const handleAddToWishlist = (item) => {
    const itemExists = wishlist.find(wishlistItem => wishlistItem.id === item.id);
    if (itemExists) {
      toast.warn('This item is already in your wishlist!');
    } else {
      dispatch(addWishListItem(item));
    }
  };

  return (
    <main className='px-[40px] mt-[50px] mb-[30px] md:grid grid-cols-4'> 
    { data?.length > 0 &&
    data?.map((item)=>(
      <div className='  px-[20px] py-[30px]'>
      <div className='w-full h-[360px] flex justify-center items-center'>
        <img src={item?.image} alt="" className='w-[80%] h-[80%] rounded'   />
      </div>
      <p className='px-[10px] pt-[10px]'>{item?.title.slice(0,25)}</p>
      <p className=' text-[18px] text-blue-900 font-bold p-[10px]'> $ {item.price}</p>
      <div className='flex justify-between px-[15px] text-[21px]'>
     <button onClick={()=>handleAddToWishlist(item)}> <FontAwesomeIcon icon={faHeart} className='border border-red-900 p-[12px] rounded text-red-800' /></button>
     <button onClick={()=>handleAddToCart(item)}> <FontAwesomeIcon icon={faCartShopping}  className='border border-blue-900 p-[12px] rounded text-blue-900'  /> </button>
      </div>
    </div>
    ))}
     <ToastContainer position="top-center" autoClose={1800} theme='light' />
      
  </main>
  )
}

export default ServiecesHome