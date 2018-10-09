import React from 'react';
export default class ComponentMap extends React.Component{
    render(){
        return (
            //地图
            <div className="mapArea map-grid">
                {/* 高德地图 */}
                <iframe id="gaodeMap" src="#"></iframe>
                {/* 百度地图 */}
                {/* <iframe id="baiduMap" src="#"></iframe> */}
            </div>
        )
    }
}