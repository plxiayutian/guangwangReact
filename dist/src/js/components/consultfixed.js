import React from 'react';
export default class ComponentConsultFixed extends React.Component{
    render(){
        return (
            // 联系方式
            <div className="consult_fixed" id="consultFixed">
                <div className="consult_show">
                    <div><i className="fa fa-phone" aria-hidden="true"></i></div>
                    <p>在线咨询</p>
                </div>
                <div className="consult_content">
                    <div>
                        <p>咨询热线：</p>
                        <p>18519164916(微信同号)</p>
                    </div>
                    <div className="consult_img">
                        <img src="./src/images/common/ewm/lynn.png" alt="在线咨询"/>
                    </div>
                </div>
            </div>
        )
    }
}