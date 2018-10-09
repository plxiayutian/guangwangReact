import React from 'react';
export default class ComponentModal extends React.Component{
    render(){
        return (
            // 更多 公司简介
            <div className="modal about-modal fade" id="myModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header"> 
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Brand</h4>
                            </div> 
                            <div className="modal-body">
                            <div className="agileits-w3layouts-info">
                                <div className="height_200 text_align_center">
                                    <img src="./src/images/common/logo.png" alt="" />
                                </div>
                                <p>昭君（北京）知识产权代理有限公司是经国家工商行政管理总局批准、国家商标局备案认可，为国内外企事业单位、社会团体、个体工商户及个人提供商标、专利、著作权等法律咨询与知识产权代理服务的专业性机构。 昭君（北京）知识产权代理有限公司业务范围涉及知识产权的所有领域，主要包括商标、专利、著作权的咨询、检索、申请、撤销、转让、监控、知识产权的侵权分析鉴定、行政查处、侵权诉讼、海关保护和反不正当竞争等。 昭君（北京）知识产权代理有限公司注册资本500万，以“服务四海、诚信天下”为核心宗旨，始终不渝地坚持以真诚的态度取信客户，以专业的素养服务客户，以最佳的效率满足客户。愿与您和您的公司共创辉煌，携手共建良好的知识产权环境，为您和您的企业创立名牌、打造名牌提供法律支持。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}