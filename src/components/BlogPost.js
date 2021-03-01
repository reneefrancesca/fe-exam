import React from 'react';
import Moment from 'moment';
import Comment from './BlogComment';

export const BlogPost = (props) => {
    const image = require('../images/hero.png').default;
    let blog_date = Moment(`${props.content.blog.createdAt}`).format('YYYY.MM.DD');
    return (
        <div className="container">
            <p className="blogpost__edit">Edit Post</p>
            <p className="blogpost__date">{blog_date}</p>
            <article>
                <h2 className="blogpost__title">{props.content.blog.title}</h2>
                <img className="blogpost__image" src={image} alt="Women sitting on the rock" />
                <div className="blogpost__content-container">
                    <p>{props.content.blog.content}</p>
                </div>
            </article>
            {props.content.blog.comments ? <Comment contents={props.content.blog.comments}/ > : ''}      
        </div>
    )
}

export default BlogPost;
