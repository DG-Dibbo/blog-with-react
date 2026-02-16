import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handleBookMark,bookMark}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>Total Blg-Item: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} isBookMarked={bookMark.some(b => b.id === blog.id)}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;