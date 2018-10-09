var React = require('react');
var ReactDOM = require('react-dom');
import ComponentNewsHeader from './components/newsheader';
import ComponentNewsFooter from './components/newsfooter';
class NewsHeader extends React.Component {
    render() { return (<ComponentNewsHeader />); }
}
ReactDOM.render(
    <NewsHeader />,
    document.getElementById('newsheader')
);

class NewsFooter extends React.Component {
    render() { return (<ComponentNewsFooter />); }
}
ReactDOM.render(
    <NewsFooter />,
    document.getElementById('newsfooter')
);
// 实现热更新
if (module.hot) {
    module.hot.accept();
}
