import React from 'react'

const BlogComment = () => {
    return (
        <div className="blogcomment">
            <h3 className="blogcomment__title">COMMENT</h3>
            <div className="blogcomment__container">
                <p className="blogcomment__content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りま
                すここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入
                りますここにはテキストが入りますここにはテキストが入ります。
                </p>
                <small>3 months ago</small>
            </div>
            <div className="blogcomment__container">
                <p className="blogcomment__content">
                ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りま
                すここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入
                りますここにはテキストが入りますここにはテキストが入ります。
                </p>
                <small>3 months ago</small>
            </div>
            <form>
                <textarea className="blogcomment__textarea"placeholder="Write Comment"></textarea>
                <button className="blogcomment__button">SUBMIT</button>
            </form>
        </div>
    )
}

export default BlogComment;
