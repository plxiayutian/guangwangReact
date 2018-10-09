import React from 'react';
export default class ComponentNews extends React.Component{
    render(){
        return (
            //新闻动态
            <div className="news" id="news">
                <div className="container">
                    <div className="wthree-heading">
                        <h3>新闻动态</h3>
                        <h4>N</h4>
                        <p className="color-gray">news</p>
                    </div>
                    <div className="min_height_500 padding_vertical_20">
                        <div className="line_height_50 border_left_title">
                            <span className="font_size_20 font_weight color-a">最新动态</span> 
                            <span className="pull-right"><a href="./src/html/news/newslist.html" target="_blank">更多 <i className="fa fa-angle-right"></i></a></span>
                        </div>
                        <hr/>
                        <div className="news-list" id="newsList">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}