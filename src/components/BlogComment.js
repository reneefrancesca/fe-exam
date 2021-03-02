import React from 'react';
import Moment from 'moment';

const BlogComment = (props) => {
    return (
        <div className="blogcomment">
            <h3 className="blogcomment__title">COMMENT</h3>
            {
                props.contents.map(content => {
                    let comment_date = Moment(`${content.createdAt}`).fromNow();
                    return (
                        <div className="blogcomment__container">
                            <p className="blogcomment__content">
                                {content.content}
                            </p>
                            <small>{comment_date}</small>
                        </div>
                    );
                })
            }
            <form>
                <textarea className="blogcomment__textarea"placeholder="Write Comment"></textarea>
                <button className="blogcomment__button">SUBMIT</button>
            </form>
        </div>
    )
}

export default BlogComment;
