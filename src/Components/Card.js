import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/cartSlice'

function Card(props) {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    function handleAdd(item) {
        dispatch(add({...item,finalPrice, qty, size}))
    }


    let {item} = props

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState('')
    let options = item.options[0]
    let foodSize = Object.keys(options)
    const priceRef = useRef()
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[size])
    
    const finalPrice = parseInt(qty) * parseInt(options[size], 10)
    
    return (
        <div className="col-sm-6 col-md-6 col-lg-3" key={item._id}>
            <div class="card shadow mb-5 border-0" >
                <img
                    className="card-img-top rounded"
                    src={item.img}
                    alt="product-img-here"
                    style={{ objectFit: "fill", height: "25vh" }}
                />
                <div className="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <div className='w-100 d-flex'>
                        <select className='me-2 h-100 bg-secondary text-white rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (<option key={i + 1}> {i + 1} </option>)
                            })}
                        </select>
                        <select className='me-3 h-100 w-auto bg-secondary text-white rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {
                                foodSize.map((i) => {
                                    return <option>{i}</option>
                                })
                            }
                        </select>
                        <h5>Rs{finalPrice}/</h5>
                    </div>
                    {(localStorage.getItem('authToken')) ? (
                        cartItems.some((cartItem) => cartItem._id === item._id) ? (
                            <button className="btn btn-primary btn-sm my-2" disabled>
                                Added to Order List
                            </button>
                        ) : (
                            <button className="btn btn-outline-primary btn-sm my-2"
                                onClick={() => { handleAdd(item) }}>
                                Order Now
                            </button>
                        )
                    ) : ('')}

                </div>
            </div>
        </div>

    )
}

export default Card
