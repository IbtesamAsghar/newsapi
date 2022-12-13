import React, { useState, useEffect } from 'react'
import "./app.css"
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4a035d5b4a0b418d959c8a4d526133a5"
const App = () => {
  const [news, setNews] = useState([]);
  const fetchSet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data)
  }
  useEffect(() => {
    fetchSet()
  }, [])
  const remove = (title) => {
    const singleNews = news.filter((meriNews) => meriNews.title !== title)
    setNews(singleNews)
  }
  return (
    <div>
      <div className="heading">

        <h1 >Headlines:{news.length}</h1>
      </div>
      <div className='news'>

        {
          news.map((meriNews) => {
            return (
              <div className='headlines'>

                <img src={meriNews.urlToImage} alt={meriNews.content} />
                <h2>{meriNews.title.substring(0, 30)}....</h2>
                <p>{meriNews.description.substring(0, 250)}....</p>
                <a target="_blank" href={meriNews.url}>Read more</a>
                <footer>
                  <h3>{meriNews.author}</h3>
                  <h3>{meriNews.publishedAt}</h3>
                </footer>
                <button onClick={() => remove(meriNews.title)}>Remove</button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App