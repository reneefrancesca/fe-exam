import React, { useState, useEffect } from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
import axios from 'axios';
import Moment from 'moment';
import * as constants from '../graphql/constants';
import newsImage from '../images/news-cover.png';

const News = () => {
    const [newsData, setNewsData] = useState({ newss: []});

    useEffect (() => {
        const fetchData = async() => {
            const queryResult = await axios.post (
                constants.graphql_api, {
                    query: constants.get_news_query
                }
            );

            const result = queryResult.data.data;
            setNewsData({ newss: result.posts })
        };

        fetchData();
    })
    return (
        <div className="news">
            <div className="container">
                <h2 className="news-heading">NEWS</h2>
                <div className="news-list-container">
                    {
                        newsData.newss.map(item => {
                            let news_date = Moment(`${item.createdAt}`).format('YYYY.MM.DD');
                            return(
                                <div key={item.id} className="news-list">
                                    <Link to={`/blog/${item.id}`} className="news-link">
                                        <img className="news-image" src={newsImage} alt="News Cover" />
                                        <time className="news-date" dateTime={news_date}>{news_date}</time>
                                        <p className="news-content">{item.content}</p>
                                    </Link>
                                </div>
                            )                         
                        })
                    }
                    
                    {/* <div className="news-list">
                        <img className="news-image" src={newsImage} alt="News Cover" />
                        <time className="news-date" dateTime="2019-06-19">2019.06.19</time>
                        <p className="news-content">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
                    </div>
                    <div className="news-list">
                        <img className="news-image" src={newsImage} alt="News Cover" />
                        <time className="news-date" dateTime="2019-06-19">2019.06.19</time>
                        <p className="news-content">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
                    </div>
                    <div className="news-list">
                        <img className="news-image" src={newsImage} alt="News Cover" />
                        <time className="news-date" dateTime="2019-06-19">2019.06.19</time>
                        <p className="news-content">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
                    </div>
                    <div className="news-list">
                        <img className="news-image" src={newsImage} alt="News Cover" />
                        <time className="news-date" dateTime="2019-06-19">2019.06.19</time>
                        <p className="news-content">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
                    </div>
                    <div className="news-list">
                        <img className="news-image" src={newsImage} alt="News Cover" />
                        <time className="news-date" dateTime="2019-06-19">2019.06.19</time>
                        <p className="news-content">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
                    </div> */}
                </div>
                <a className="news-button" href="#">LOAD MORE</a>
            </div>  
        </div>
    );
};

export default News;