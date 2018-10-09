import React from 'react';
export default class ComponentNewsHeader extends React.Component{
    render(){
        return (
            //新闻页头部
            <nav className="navbar navbar-default margin_horizontal_20">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">昭君知产</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="w3layouts-logo">
                        <h1 className="logo_all"><a href="/index.html">昭君(北京)知识产权代理有限公司</a></h1>
                        <h1 className="logo_short"><a href="/index.html">昭君知识产权</a></h1>
                    </div>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                    <nav>
                        <ul className="nav navbar-nav">
                            <li><a href="/index.html" target="_blank">首页</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        )
    }
}