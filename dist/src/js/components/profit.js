import React from 'react';
export default class ComponentProfit extends React.Component{
    render(){
        return (
            //商标注册的好处
            <div className="news" id="profit">
                <div className="container">
                    <div className="wthree-heading">
                        <h3>商标注册的好处</h3>
                        <h4>P</h4>
                        <p className="color-gray">profit</p>
                    </div>
                    <div className="services-grids">
                        <div className="row wthree-services-grids text_align_center">
                            <div className="col-md-3 w3-agileits-services-grid">
                                <i className="fa fa-yoast fa_project" aria-hidden="true"></i>
                                <h4>便于品牌宣传</h4>
                                <p>商标即是品牌便于传播，有品牌的产品消费者更易于接受</p>
                            </div>
                            <div className="col-md-3 w3-agileits-services-grid agile-services1">
                                <i className="fa fa-thumbs-up fa_project" aria-hidden="true"></i>
                                <h4>获得竞争优势</h4>
                                <p>申请微信微信公众号品牌认证搜索引擎推广品牌保护</p>
                            </div>
                            <div className="col-md-3 w3-agileits-services-grid">
                                <i className="fa fa-hand-peace-o fa_project" aria-hidden="true"></i>
                                <h4>方便产品入驻</h4>
                                <p>申请入驻天猫、京东、唯品会等电商平台</p>
                            </div>
                            <div className="col-md-3 w3-agileits-services-grid">
                                <i className="fa fa-jpy fa_project" aria-hidden="true"></i>
                                <h4>还能帮您赚钱</h4>
                                <p>商标通过资产评估后可进行转让、继承资产投资、抵押贷款等</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}