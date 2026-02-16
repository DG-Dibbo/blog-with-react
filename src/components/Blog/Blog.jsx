import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
const Blog = ({ blog, handleBookMark }) => {
    const { authorName, authorProfile, authorThumbnail, description, postedDate, readingTime, title } = blog
    return (
        <div>
            <div className="card bg-base-100 shadow-sm mt-6">
                <figure>
                    <img
                        src={authorThumbnail}
                        alt="authorThumbnail" />
                </figure>
                <div className='flex mt-2 p-4'>
                    <div>
                        <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src={authorProfile} />
                            </div>
                        </div>
                        <h3 className='mt-2 font-medium'>{authorName}</h3>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div><button onClick={() => handleBookMark(blog)}><FaBookmark color="red" size={20} /></button></div>
                        </h2>
                        <p>Posted-Date: {postedDate} <br /> Reading-Time: {readingTime}</p>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <div><FaBook /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;