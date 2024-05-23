import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../CreactSlice/CartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const formItems = useSelector (state => state.form.form)
  const dispatch = useDispatch();

  function handleSubmit(itemId) {
    dispatch(remove(itemId));
  }

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-5">
      {cartItems.map(function (cartItem) {
        return (
          <div key={cartItem.id} className='bg-white shadow-md rounded-xl overflow-hidden'>
            <div className='flex justify-center'>
            {cartItem.video && <ReactPlayer url={cartItem.video} controls />}
            </div>
            <div className='p-4'>
            <div  className="font-semibold text-xl text-gray-800">{cartItem.name}</div>
            <div className="text-gray-600 text-sm">{cartItem.subject}</div>
            <div className="text-gray-700 mt-2">{cartItem.description}</div>
            <div className="text-gray-800 font-bold mt-2">${cartItem.price}</div>
            <button onClick={() => handleSubmit(cartItem.id)} className='btn-96'>remove</button>
            </div>
          </div>
        );
      })}
    </div>
    
    </div>
  );
}

export default Cart;
