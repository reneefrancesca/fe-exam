import React from 'react';
import Comment from './BlogComment';

export const BlogPost = () => {
    const image = require('../images/hero.png').default;
    return (
        <div className="container">
            <p className="blogpost__edit">Edit Post</p>
            <p className="blogpost__date">2019.06.19</p>
            <article>
                <h2 className="blogpost__title">サンプルテキストサンプル ルテキストサンプルテキ
                ストサンプルテキストサンプル ルテキスト </h2>
                <img className="blogpost__image" src={image} alt="Women sitting on the rock" />
                <div className="blogpost__content-container">
                    <p className="blogpost__content">ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                    <p className="blogpost__content">ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                </div>
            </article>
            <Comment / >
        </div>
    )
}

export default BlogPost;
