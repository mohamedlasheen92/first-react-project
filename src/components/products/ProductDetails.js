import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import productDetailsAction from '../store/actions/productDetails'

const ProductDetails = () => {
  const loader = useSelector((state) => state.loader)
  const params = useParams()
  const dispatch = useDispatch()
  // const [productDetails, setProductDetails] = useState({})
  const productDetails = useSelector((state) => state.productDetails)

  useEffect(() => {

    dispatch(productDetailsAction(params.id))

  }, [])

  return (
    <>
      <h3 className='text-warning'>Product Details</h3>

      {
        loader ? (<div className='text-center my-3'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>) :
          <>
            <h1>ID: {params.id}</h1>
            <h3>{productDetails.title}</h3>

            <img src={productDetails.image} alt={productDetails.category} className='w-25' />
            <h4>${productDetails.price}</h4>
          </>

      }



    </>
  )
}

export default ProductDetails