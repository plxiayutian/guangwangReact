import React from 'react';
export default class ComponentHeader extends React.Component {
    render() {
        return (
            <header className="header" id="header">
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
                            <h1 className="logo_all"><a href="./index.html">昭君(北京)知识产权代理有限公司</a></h1>
                            <h1 className="logo_short"><a href="./index.html">昭君知识产权</a></h1>
                        </div>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                        <nav>
                            <ul className="nav navbar-nav">
                                <li><a href="#index">首页</a></li>
                                <li><a href="#services" className="scroll">服务项目</a></li>
                                {/* <li><a href="#gallery" className="scroll">案例展示</a></li> */}
                                <li><a href="#gallery" className="scroll">常见问题</a></li>
                                <li><a href="#news" className="scroll">新闻动态</a></li>
                                {/* <li><a href="#team" className="scroll">专业团队</a></li> */}
                                <li><a href="#about" className="scroll">关于我们</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* navbar-collapse */}
                </nav>
            </header>
        )
    }
}