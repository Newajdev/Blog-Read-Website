import { useEffect, useState } from "react"
import Blogs from "./components/Blogs"
import Header from "./components/Header"
import Previews from "./components/Previews"



function App() {

  const [blogs, setblogs] = useState([])
  const [ReadingTime, setReadingTime] = useState (0)
  const [bookmarks, setbookmarks] = useState ([]);


  useEffect(() => {
    fetch('Blogposts.json')
      .then(res => res.json())
      .then(data => setblogs(data))
  }, [])
  
  const hendlerRead = (id, Time) => {
    setReadingTime(ReadingTime+Time);

    const isReaded = bookmarks.filter(bookmark => bookmark.id !==id)
    setbookmarks(isReaded)
    
  }
  
  const Disaible= ''

  const hendlerBookmark = (blog) =>{
      const newBookmarkslist = [...bookmarks, blog]
      setbookmarks(newBookmarkslist)

      
  }

  

  

  
  
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="flex mt-8 gap-6 relative">
          <div>
            {
              blogs.map(blog => <Blogs
              key={blog.id}               
                blog={blog}
                hendlerBookmark={hendlerBookmark}
                hendlerRead={hendlerRead}

              
              ></Blogs>)
            }
          </div>

          <Previews ReadingTime={ReadingTime} bookmarks={bookmarks}></Previews>
        </div>

      </div>
    </>
  )
}

export default App
