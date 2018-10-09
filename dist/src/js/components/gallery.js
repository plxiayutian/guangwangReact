import React from 'react';
export default class ComponentGallery extends React.Component{
    render(){
        return (
            <div className="gallery" id="gallery" style={{paddingTop:0}}>
                {/* <div className="container">
                    <div className="wthree-heading">
                        <h3 className="color_white_i">案例展示</h3>
                        <h4>C</h4>
                    </div>
                    <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                        <ul id="myTab" className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#caseAll" id="caseAll-tab" role="tab" data-toggle="tab" aria-controls="caseAll" aria-expanded="true">全部</a></li>
                            <li role="presentation"><a href="#caseTrademark" role="tab" id="caseTrademark-tab" data-toggle="tab" aria-controls="caseTrademark">商标</a></li>
                            <li role="presentation"><a href="#caseCopyright" role="tab" id="caseCopyright-tab" data-toggle="tab" aria-controls="caseCopyright">版权</a></li>
                            <li role="presentation"><a href="#casePatent" role="tab" id="casePatent-tab" data-toggle="tab" aria-controls="casePatent">专利</a></li>
                            <li role="presentation"><a href="#caseOther" role="tab" id="caseOther-tab" data-toggle="tab" aria-controls="caseOther">其它</a></li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div role="tabpanel" className="tab-pane fade in active" id="caseAll" aria-labelledby="caseAll-tab">
                                <div className="w3_tab_img">
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/2.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/2.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/3.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/3.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/4.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/4.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/5.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/5.jpg" alt=" " className="img-responsive" />
                                            </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/6.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/6.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/7.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/7.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/8.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/8.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/9.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/9.jpg" alt=" " className="img-responsive" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="caseTrademark" aria-labelledby="caseTrademark-tab">
                                <div className="w3_tab_img">
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/2.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/2.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/3.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/3.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="caseCopyright" aria-labelledby="caseCopyright-tab">
                                <div className="w3_tab_img">
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/4.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/4.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/5.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/5.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/6.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/6.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/7.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/7.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="casePatent" aria-labelledby="casePatent-tab">
                                <div className="w3_tab_img">
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/8.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/8.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/9.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/9.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/2.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/2.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="caseOther" aria-labelledby="caseOther-tab">
                                <div className="w3_tab_img">
                                    <div className="col-md-3 w3_tab_img_left">
                                        <div className="demo">
                                            <a className="cm-overlay" href="./src/images/3.jpg">
                                                <figure className="imghvr-shutter-in-out-diag-2"><img src="./src/images/3.jpg" alt=" " className="img-responsive"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="./src/js/jquery.tools.min.js"></script>
                    <script src="./src/js/jquery.mobile.custom.min.js"></script>
                    <script src="./src/js/jquery.cm-overlay.js"></script>
                    <script>
                        $(document).ready(function(){
                            $('.cm-overlay').cmOverlay();
                        });
                    </script>
                </div> */}
                {/* 常见问题 */}
                <div className="container" id="quesstion" style={{paddingTop:'4rem'}}>
                    <div className="wthree-heading">
                        <h3 className="color_white_i">常见问题</h3>
                        <h4>Q</h4>
                    </div>
                    <div className="agileits-about-grid">
                        <div>
                            <a href="https://www.zhihu.com/question/291923341" target="_blank">
                                <h3>商标注册需要多久？</h3>
                            </a>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; 商标注册的时间其实和注册的流程相关，只要过程顺利，那么整个注册的时间就相对来讲比较短暂，但是如果在注册的过程中遇到什么问题，自然商标注册的时间就会偏长一些。正常情况下商标注册的流程需要按照这些步骤来进行：商标注册申请前查询→ 准备申请书件 → 在商标注册大厅受理窗口提交申请书件 →在打码窗口打收文条形码→ 在交费窗口缴纳商标注册规费 →三个月左右商标局发出《受理通知书》→商标注册申请补正。</p>
                        </div>
                        <div>
                            <a href="https://www.zhihu.com/question/291924193" target="_blank">
                                <h3>商标一标多类与一标一类的区别？</h3>
                            </a>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; 申请商标注册，大致要经历几个阶段：（1）商标受理期2个月；（2）审核期9个月左右；（3）公告期3个月。而要想走完整个流程，从商标局手上拿到注册证，大概要花14个月之久。由于每个类别的审查情况不一样，有的类别没有近似商标可以在商标局一次性通过，但有的就可能因为近似商标的存在被驳回。<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; 假如是一标多类，通过的类别就会受限，延长商标证下发的时间。一标一类就不同了，通过的类别在初审公告三个月后就会下发注册证书。</p>
                        </div>
                        <div>
                            <a href="./src/html/news/newsdetail.html?newsid=6" target="_blank">
                                <h3>商标都成功注册了，可是你知道该怎么正确规范地使用吗？</h3>
                            </a>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; 相信不少的公司在经历一番折腾之后成功注册商标，十分雀跃。可是注册成功之后，该怎么去使用这枚商标打造自己的品牌？又该如何正确规范地使用商标？
                            </p>
                        </div>
                        <div>
                            <a href="https://www.zhihu.com/question/291922993" target="_blank">
                                <h3>昭君知识产权是专门做商标代理的吗？</h3>
                            </a>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; 昭君（北京）知识产权代理有限公司业务范围涉及知识产权的所有领域，主要包括商标、专利、著作权的咨询、检索、申请、撤销、转让、监控、知识产权的侵权分析鉴定、行政查处、侵权诉讼、海关保护和反不正当竞争及商标和版权续展、变更等业务，用心去做，客户至上。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}