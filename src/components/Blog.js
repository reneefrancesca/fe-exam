import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as constants from '../graphql/constants';
import Breadcrumb from './Breadcrumb';
import BlogPost from './BlogPost';


const Blog = () => {
    const { id }  = useParams();
    const [blogData, setBlogData] = useState({ blog: []});
    useEffect(() => {
        const fetchData = async() => {
            const queryResult = await axios.post (
                constants.graphql_api, {
                    query: `query getBlogPosts{ post(id: ${ id }){
                        id
                        title
                        content
                        createdAt
                        comments {
                            id
                          	postId
                            content
                            createdAt
                        }
                    }
                 }`
                });
    

            const result = queryResult.data.data;
            setBlogData({ blog: result.post })
        };
        fetchData();
    })
    return (
        <>
            <Breadcrumb title={blogData.blog.title}/>
            <BlogPost content={blogData}/>
        </>
    )
}

export default Blog;
