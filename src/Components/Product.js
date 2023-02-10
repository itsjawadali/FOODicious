import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Burger, getProducts, Pizza, Rice, showAll, Starter, STATUSES} from '../Store/productSlice'
import { useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'
import { current } from '@reduxjs/toolkit'
import Card from './Card'

function Product() {

    const [prod, setProd] = useState([])
    const [search, setSearch] = useState('')

    
    
    

    const {data, category, status } = useSelector(state => state.products)

    

    useEffect(() => {
        setProd(category)
    }, [category])

    const dispatch = useDispatch()


   



    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    function getAll() {
        dispatch(showAll())

    }
    function getPizza() {
        dispatch(Pizza())
    }
    function getBurger() {
        dispatch(Burger())
    }
    function getStarter() {
        dispatch(Starter())
    }
    function getRice() {
        dispatch(Rice())
    }

    const handleSearch = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)
        const searched = data.filter(item=> (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
        setProd(searched)
    }



    if (status === STATUSES.LOADING) {
        return <Spinner animation="border" variant="secondary" />
    }

    if (status === STATUSES.ERROR) {
        return <h1>Something went wrong</h1>
    }

    return (
        <>
             <div className="d-flex justify-content-center align-items-center my-5" style={{height:'25vh'}}>
                <div className="text-center">
                    <h3>Giving your Hunger a New option</h3>
                    <div className='container'>
                    <div class="d-flex justify-content-center mt-3">
                        <input class="form-control w-100 me-2" type="search" placeholder="Search" aria-label="Search" value={search}
                        onChange={handleSearch}/>
                            {/* <button class="btn btn-outline-secondary" type="submit">Search</button> */}
                    </div>
                    </div> 
                </div>
            </div>

            <h4 className='my-3 text-center'>Offerings</h4>

            <button className='btn btn-outline-secondary m-4' onClick={() => { getAll() }}>All</button>
            <button className='btn btn-outline-secondary m-4' onClick={() => { getPizza() }}>Pizza</button>
            <button className='btn btn-outline-secondary m-4' onClick={() => { getBurger() }}>Burgers</button>
            <button className='btn btn-outline-secondary m-4' onClick={() => { getStarter() }}>Starters</button>
            <button className='btn btn-outline-secondary m-4' onClick={() => { getRice() }}>Biryani/Rice</button>

            <div className='row d-flex'>
                {prod.map((item) => {
                    return(
                        <Card item = {item}/>
                    )
                })}
            </div>
        </>
    )
}

export default Product