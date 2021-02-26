import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
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
                </div>
                <a className="news-button" href="#">LOAD MORE</a>
            </div>
        </div>
    );
};

export default News;