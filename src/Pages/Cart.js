import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'

function Cart() {
  const cartItems = useSelector((state) => state.cart)

  const dispatch = useDispatch()


  function handleRemove(itemId){
    dispatch(remove(itemId))
  }
 const totalPrice = cartItems.reduce((total, food)=> total + food.finalPrice, 0)
  return (
    <div>
      <h4>Order List</h4>
      {cartItems.map((item, idx) => {
        return (<>
          <div className='row border my-3 py-3 shadow-sm'>
            <div className='col-1'>
              {idx+1}
            </div>
            <div className='col-2'>
              <img
                class="card-img-top"
                src={item.img}
                alt="product-img-here"
                style={{ objectFit: "cover", height: "10vh" }}
              />
            </div>
            <div className='col-3'>
              <h6>{item.name}</h6>
            </div>
            <div className='col-3'>
              <p>quantity: {item.qty}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.finalPrice}</p>

            </div>
            <div className='col-1'>
              <button className="btn btn-danger btn-sm my-2"
              onClick={()=>{handleRemove(item._id)}}>
                Remove
              </button>
            </div>
          </div>
        </>)

      })}
      <div className='d-flex justify-content-end my-2 mx-5'>
      <h4>Total Price : {totalPrice}</h4>
      </div>
    </div>
  )
}

export default Cart