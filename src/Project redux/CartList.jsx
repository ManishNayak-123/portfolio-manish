import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem , clearAllItems} from '../redux/slice';
import {useNavigate} from 'react-router';
function CartList(){
    const cartSelector = useSelector((state) =>state.cart.items);
    console.log(cartSelector);
    const [cartItems, setCartItems] = useState(cartSelector);
    useEffect(() =>{
           setCartItems(cartSelector);
    }, [cartSelector]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const manageQuantity =(id, q) =>{
      let quantity = parseInt(q)>1 ? parseInt(q):1;
      const cartTempItems = cartSelector.map((item) =>{
        return item.id == id?
        {...item, quantity} :item;
      })
      console.log(cartTempItems[0]);
      setCartItems(cartTempItems);
    }

      const handlePlaceOrder = () =>{
        localStorage.clear();
        dispatch(clearAllItems());
        alert("Order has placed");
        navigate("/");
      }
    return(
        <center><div className="py-20  w-200  shadow-2xl self-center rounded-2xl">
            <div className='text-3xl font-bold bg-white shadow-white text-blue-600 rounded-2xl'>
                <h2>Your cart Items</h2>
                <span>{cartItems.length}</span>
            </div>
            {
                cartItems.length>0 ? cartItems.map((item)=>(
                  <div key={item.id} className='space-x-15 h-35 border-t-1 shadow-2xl shadow-stone-300 flex p-5 my-10 rounded-2xl'>
                    <div className="h-35 w-20 object-cover">
                      <img src={item.thumbnail} />
                    </div>
                    <div className="ml-10">
                      <h1 className='font-bold text-[18px]'>{item.title}</h1>
                      <br />
                      <p>{item.brand}</p>
                    </div>
                     <div className='ml-43'>
                          <div>
                            <input onChange={(e) =>manageQuantity(item.id, e.target.value)} className='border' value = {item.quantity?item.quantity:1} type='number' placeholder='enter number' />
                            <div>
                        <span className=''>${(item.quantity?item.price*item.quantity:item.price).toFixed(2)}</span>
                        <br />
                        <button onClick={() => dispatch(removeItem(item))} className='mt-2  h-11  rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-blue-700 hover:scale-105 object-cover  text-white text-[17px] font-bold w-40 bg-blue-500
           '>Remove</button>
                            </div>
                          </div>
                     </div>
                    
                  </div>
                 
                )):null
            }
            <div className='h-15 bg-blue-600 text-3xl font-bold text-white p-2 '>
              Total : ${cartItems.reduce((sum, item) => item.quantity? sum + item.price*item.quantity:sum + item.price, 0).toFixed(2)}
            </div>
            <button onClick={handlePlaceOrder} className='mt-3  h-11  rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-blue-700 hover:scale-105 object-cover  text-white text-[21px] font-bold w-40 bg-blue-500
           '>
              Place Order
            </button>
        </div></center>
    )
}
export default CartList;
 