import React from 'react';
export default class ComponentFooter extends React.Component{
    render(){
        return (
            <div>
                <div className="agileits-w3layouts-footer">
                    <div className="container">
                        <div className="col-md-4 w3-agile-grid">
                            <h5>关于我们</h5>
                            <p>昭君（北京）知识产权代理有限公司业务范围涉及知识产权的所有领域，主要包括商标、专利、著作权的咨询、检索、申请、撤销、转让、续展、变更、监控、知识产权的侵权分析鉴定、行政查处、侵权诉讼、海关保护和反不正当竞争等。 </p>
                            <div className="agileinfo-social-grids">
                                <ul>
                                    <li title="facebook搜索：昭君知产"><i className="fa fa-facebook"></i></li>
                                    <li title="twitter搜索：昭君知产"><i className="fa fa-twitter"></i></li>
                                    <li title="微信搜索公众号：昭君知产"><i className="fa fa-weixin"></i></li>
                                    <li title="微博搜索：知产天下"><i className="fa fa-weibo"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 w3-agile-grid">
                            <h5>直达</h5>
                            <nav className="nav footer-nav">
                                <div><a href="#index">首页</a></div>
                                <div><a href="#services" className="scroll">服务项目</a></div>
                                {/* <div><a href="#gallery" className="scroll">案例展示</a></div> */}
                                <div><a href="#gallery" className="scroll">常见问题</a></div>
                                <div><a href="#news" className="scroll">新闻动态</a></div>
                                {/* <div><a href="#team" className="scroll">专业团队</a></div> */}
                                <div><a href="#about" className="scroll">关于我们</a></div>
                            </nav>
                        </div>
                        <div className="col-md-4 w3-agile-grid">
                            <h5>联系方式</h5>
                            <div className="w3-address">
                                <div className="w3-address-grid">
                                    <div className="w3-address-left">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3-address-right">
                                        <h6>电话</h6>
                                        <p>+86 18510662327</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="w3-address-grid">
                                    <div className="w3-address-left">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3-address-right">
                                        <h6>公司邮箱</h6>
                                        <p>Email :<a href="mailto:lizhaojun_lynn@163.com"> lizhaojun_lynn@163.com</a></p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="w3-address-grid">
                                    <div className="w3-address-left">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3-address-right">
                                        <h6>地址</h6>
                                        <p>北京市房山区卓秀北街8号院8号楼911室
                                            <span>(地铁良乡大学城北站旁 绿地诺亚方舟北区)</span>
                                        </p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <p className="text_align_center friendship-link">友情链接：
                    <span title="企查查"><a href="https://www.qichacha.com" target="_blank">企查查</a></span>
                    <span title="天眼查"><a href="https://www.tianyancha.com" target="_blank">天眼查</a></span>
                    <span title="国家企业信用信息公示系统示系统"><a href="http://www.gsxt.gov.cn/index.html" target="_blank">国家企业信用信息公示系统示系统</a></span>
                    <span title="商标局"><a href="http://sbj.saic.gov.cn" target="_blank">商标局</a></span>
                    <span title="版权中心"><a href="https://www.qichacha.com" target="_blank">版权中心</a></span>
                    <span title="国家知识产权局"><a href="http://www.sipo.gov.cn" target="_blank">国家知识产权局</a></span>
                </p>
                <div className="copyright">
                    <div className="container">
                        <p> © Copyright 2018 版权所有</p>
                        <p> 昭君(北京)知识产权代理有限公司 </p>
                        <p> @服务邮箱：aaron_peng@foxmail.com</p>
                        <p> 京ICP备18020490号</p>
                    </div>
                </div>
            </div>
        )
    }
}