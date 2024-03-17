import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = (props) => {
  const loader = useSelector((state) => state.loader)
  const products = useSelector((state) => state.products)

  return (
    <>
      <h2 className=''>About</h2>

      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p>The following is <strong>rendered as bold text</strong>.</p>
      <p>The following is <em>rendered as italicized text</em>.</p>
      <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>



      {
        products.length !== 0 && <h3 className='text-secondary'>Products</h3>
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

export default About