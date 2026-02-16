import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMark, setBookMark] = useState([])
  const [AsreadingTime, setAsreadingTime] = useState(0)
  const [showToast, setShowToast] = useState(false)
  // Handle BookMark
  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog])
    setAsreadingTime(prev => prev + parseInt(blog.readingTime))

    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Handle as read
  const handleAsRead = (readMark) => {
    const remainingAsRead = bookMark.filter((mark) => mark.id !== readMark.id)
    setBookMark(remainingAsRead)
    setAsreadingTime(prev => {
      const updatedTime = prev - parseInt(readMark.readingTime)
      return updatedTime > 0 ? updatedTime : 0
    })
  }


  return (
    <>
      <Navbar></Navbar>
      {/* Main container */}
      <div className="container main-container grid grid-cols-1 lg:grid-cols-12 gap-12 mx-auto lg:px-40 md:px-20 px-6">

        {/* left-content */}
        <div className="left-content lg:col-span-8 lg:ml-3 md:ml-3">
          <Blogs handleBookMark={handleBookMark} bookMark={bookMark}></Blogs>
        </div>
        {/* right content */}
        <div className="right-content lg:col-span-4 text-center">
          {/* Toast just above bookmark list */}

          <div className='flex justify-between'>
            {
              AsreadingTime > 0 && (
                <h3 className='font-medium'>Reading-Time -{AsreadingTime}min on read</h3>
              )
            }
            <p className='font-medium'>Bookmarked - {bookMark.length} </p>

          </div>
          {showToast && (
            <div className="fixed lg:top-4 md:top-4 top-12 right-12 lg:right-62 md:right-62 z-50 flex justify-end">
              <div className="toast-gradient-border">
                <div className="toast-content">
                  Bookmarked successfully!
                </div>
              </div>
            </div>
          )}

          <div className='mt-4'>
            {
              bookMark.map(mark => (

                <div key={mark.id} className="card bg-base-100 card-xs shadow-sm">
                  <div className="card-body flex flex-col justify-start">
                    <h2 className="card-title font-extrabold">{mark.authorName}</h2>
                    <h2 className='font-bold text-start'>{mark.title}</h2>
                    <p className='text-start'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="justify-end card-actions">
                      <button onClick={() => handleAsRead(mark)} className="btn btn-primary">As Read</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default App
