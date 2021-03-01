import React from 'react'

const BlogComment = (props) => {
    return (
        <div className="blogcomment">
            <h3 className="blogcomment__title">COMMENT</h3>
            {
                props.contents.map(content => {
                    return (
                        <div className="blogcomment__container">
                            <p className="blogcomment__content">
                                {content.content}
                            </p>
                            <small>{content.createdAt}</small>
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
