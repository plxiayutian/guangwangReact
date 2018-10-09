//package.json配置：
// "start": "webpack-dev-server",
// "dev": "cross-env NODE_ENV=development webpack-dev-server --mode development",
// "build": "cross-env NODE_ENV=production webpack --mode production"
// {
//     "presets":[
//         ["env", {
//             "targets": {
//                 "browsers": ["last 2 versions", "not ie <= 8"]
//             }
//         }]
//     ]
// } 
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentBanner from './components/banner';
import ComponentConsultFixed from './components/consultfixed';
import ComponentModal from './components/modal';
import ComponentServices from './components/services';
// import ComponentBusiness from './components/business';
import ComponentGallery from './components/gallery';
import ComponentProfit from './components/profit';
import ComponentService from './components/service';
import ComponentNews from './components/news';
// import ComponentTeam from './components/team';
import ComponentAbout from './components/about';
import ComponentMap from './components/map';
import ComponentContact from './components/contact';
import ComponentFooter from './components/footer';
class Index extends React.Component{
    render(){
        return (
            <div>
                <ComponentConsultFixed/>
                <ComponentBanner/>
                <ComponentModal/>
                <ComponentServices/>
                {/* <ComponentBusiness/> */}
            </div>
        )
    }
}
ReactDOM.render(
    <Index/>,
    document.getElementById('divMain')
);
// 轮播
import './responsiveslides.min.js';
// Slideshow 4s
$("#slider4").responsiveSlides({
    auto: true,
    pager:true,
    nav:true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
        $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
        $('.events').append("<li>after event fired.</li>");
    }
});

class Content extends React.Component{
    render(){
        return (
            <div>
                <ComponentGallery/>
                <ComponentProfit/>
                <ComponentService/>
                <ComponentNews/>
                {/* <ComponentTeam/> */}
                <ComponentAbout/>
                <ComponentMap/>
                <ComponentContact/>
                <ComponentFooter/>
            </div>
        )
    }
}
ReactDOM.render(
    <Content/>,
    document.getElementById('divContent')
);
// 新闻动态
import './news/getnews.js';
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    //用来判断是否是移动端设备的,条件成立代表的是移动端的设备
    $("#gaodeMap").attr("src","https://m.amap.com/search/mapview/keywords=%E6%98%AD%E5%90%9B(%E5%8C%97%E4%BA%AC)%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&city=110111&poiid=B0FFJCSM06");
    // $("#baiduMap").attr("src","https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&da_src=searchBox.button&wd=%E6%98%AD%E5%90%9B%28%E5%8C%97%E4%BA%AC%29%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&c=131&src=0&wd2=&pn=0&sug=0&l=18&from=webmap&biz_forward=%7B%22scaler%22%3A1%2C%22styles%22%3A%22pl%22%7D&sug_forward=&auth=D64B6A&device_ratio=1&newmap=1&shareurl=1&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&uid=b2e4701266b88f826f3e1b63&industry=enterprise&qid=7833720249873169689/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_adtp=&da_log=&da_adquery=%E6%98%AD%E5%90%9B(%E5%8C%97%E4%BA%AC)%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&da_adtitle=%E6%98%AD%E5%90%9B(%E5%8C%97%E4%BA%AC)%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&da_adindus=%E5%85%AC%E5%8F%B8%E4%BC%81%E4%B8%9A;%E5%85%AC%E5%8F%B8&detail_from=list&vt=map");
} else {
    //pc端
    $("#gaodeMap").attr("src","https://www.amap.com/search?id=B0FFJCSM06&city=110111&geoobj=116.308125%7C39.843334%7C116.612308%7C39.971851&query_type=IDQ&query=%E6%98%AD%E5%90%9B(%E5%8C%97%E4%BA%AC)%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zoom=12");
    // $("#baiduMap").attr("src","https://map.baidu.com/?newmap=1&shareurl=1&l=18&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=12934149,4800256&s=s%26da_src%3DsearchBox.button%26wd%3D%E6%98%AD%E5%90%9B(%E5%8C%97%E4%BA%AC)%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%26c%3D131%26src%3D0%26wd2%3D%26pn%3D0%26sug%3D0%26l%3D18%26from%3Dwebmap%26biz_forward%3D%7B%22scaler%22%3A1%2C%22styles%22%3A%22pl%22%7D%26sug_forward%3D%26auth%3DD64B6AYg4YTAx37XaMNOFZKXVxeZzYguxHBHHEVEEBtjDc3YMxCEBwi04vy77u1GgvPUDZYOYIZuVt1cv3uxt2dd9dv7uPWv3GuBtWykiOUixAXXXXXXXXXwWvPYuxt8zv7u%40ZPuVteuztghxehwzJDJJGWGzJvswVVH32s99XvC%26device_ratio%3D1");
}
// 实现热更新
if(module.hot){
    module.hot.accept();
}
