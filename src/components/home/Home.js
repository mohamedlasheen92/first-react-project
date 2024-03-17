import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import langAction from '../store/actions/langAction'



const Home = () => {
  const lang = useSelector((state) => state.language)
  const loader = useSelector((state) => state.loader)
  const dispatch = useDispatch()

  const toggleLang = () => {
    dispatch(langAction(lang === "en" ? "ar" : "en"))
  }

  return (
    <>
      <div dir={`${lang === "en" ? "ltr" : "rtl"}`}>

        <h2 className=''>Home</h2>
        <h2 className=''>{`${loader}`}</h2>

        <h1 className='text-warning'>{lang}</h1>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p>The following is <strong>rendered as bold text</strong>.</p>
        <p>The following is <em>rendered as italicized text</em>.</p>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>

        <button className='btn btn-warning' onClick={() => toggleLang()}>Change Language</button>

      </div>

    </>
  )
}

export default Home