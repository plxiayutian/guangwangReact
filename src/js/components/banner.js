import React from 'react';
import ComponentHeader from './header';
export default class ComponentBanner extends React.Component{
    render(){
        return (
            <div className="banner" id="banner">
                <ComponentHeader/>
                <div className="banner-top color-blue">
                    <div className="container">
                        <div className="slider">
                            <div className="callbacks_container">
                                <ul className="rslides callbacks callbacks1" id="slider4">
                                    <li>	
                                        <div className="banner_text">
                                            <h3>商标注册</h3>
                                            <p>Trademark registration</p>
                                            <div className="w3-button">
                                                <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>	
                                        <div className="banner_text">
                                            <h3>版权登记</h3>
                                            <p>Copyright registration</p>
                                            <div className="w3-button">
                                                <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>	
                                        <div className="banner_text">
                                            <h3>软件著作权申请</h3>
                                            <p>Software copyright application</p>
                                            <div className="w3-button">
                                                <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>	
                                        <div className="banner_text">
                                            <h3>专利</h3>
                                            <p>Patent application</p>
                                            <div className="w3-button">
                                                <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}