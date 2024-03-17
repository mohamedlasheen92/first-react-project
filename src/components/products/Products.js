import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../axiosConfig/AxiosConfig'
import { useDispatch, useSelector } from 'react-redux'
import productsAction from '../store/actions/productsAction'


const Products = () => {
  const loader = useSelector((state) => state.loader)
  const dispatch = useDispatch()

  // const [products, setProducts] = useState([])
  const products = useSelector((state) => state.products)

  useEffect(() => {

    dispatch(productsAction())

  }, [])

  return (
    <>
      <h3 className='text-secondary'>Products</h3>

      {
        products.length === 0 && loader && <div className='text-center my-3'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }



      {
        <div className='text-center list-unstyled'>

          {
            products.map((product, index) => {
              return (
                <li key={index}>
                  <Link to={`/productDetails/${product.id}`}>{product.title}</Link>
                </li>
              )
            })
          }

        </div>

      }
    </>
  )
}

export default Products