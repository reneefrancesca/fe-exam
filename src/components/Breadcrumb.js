import React from 'react'

export const Breadcrumb = (props) => {
    //console.log(props);
    return (
        <div className="breadcrumb">
            <div className="container">
                <p>HOME &#62; {props.title}</p>
            </div>
        </div>
    )
}

export default Breadcrumb;
