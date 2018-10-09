import React from 'react';
export default class ComponentContact extends React.Component{
    render(){
        return (
            //联系我们
            <div className="contact" id="contact">
                <div className="container">
                    <div className="wthree-heading">
                        <h3 className="color_white_i">联系我们</h3>
                        <h4>C</h4>
                    </div>
                    {/* <div className="contact-form">
                        <form action="#" method="post">
                            <input type="text" placeholder="姓名" required=""/>
                            <input type="email" placeholder="Email" required=""/>
                            <input type="text" placeholder="电话" required=""/>
                            <textarea placeholder="请留言..." required=""></textarea>
                            <div className="text_align_center">
                                <input type="submit" value="留言"/>
                            </div>
                        </form>
                    </div> */}
                    <div className="agileits-about-grids">
                        <div className="agileits-about-grid text_align_center">
                            <div>
                                <div className="col-md-8">
                                    <h3>知识产权代理业务</h3>
                                    <p>email：lizhaojun_lynn@163.com</p>
                                    <div className="padding_20">
                                        <div className="col-md-6 margin_top_10">
                                            <img className="width_200 height_200" src="./src/images/common/ewm/zjzcdyh.jpg" alt="昭君(北京)知识产权代理有限公司"/>
                                            <p>微信公众号：昭君知产</p>
                                        </div>
                                        <div className="col-md-6 margin_top_10">
                                            <img className="width_200 height_200" src="./src/images/common/ewm/lynn.png" alt="代理业务负责人"/>
                                            <p>微信：昭君</p>
                                        </div>
                                        <div className="col-md-6 margin_top_10">
                                            <img className="width_200" src="./src/images/common/ewm/wbzctx.jpg" alt="知产天下"/>
                                            <p>微博扫码关注</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h3>网络研发业务</h3>
                                    <p>email：aaron_peng@foxmail.com</p>
                                    <div className="padding_20">
                                        <div className="col-md-12 margin_top_10">
                                            <img className="width_200 height_200" src="./src/images/common/ewm/aaron.jpg" alt="技术研发团队负责人"/>
                                            <p>微信：Aaron</p>
                                        </div>
                                        <div className="col-md-12 margin_top_10">
                                            <img className="width_200" src="./src/images/common/ewm/wbaaron.jpg" alt="技术研发团队负责人"/>
                                            <p>微博扫码关注</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}