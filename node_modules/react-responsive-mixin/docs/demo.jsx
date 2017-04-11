var React = require('react');
var ResponsiveMixin = require('../');

var baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://static.webrafter.com';
}

var Component = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return { url: baseUrl + '/img/large.img' };
  },
  componentDidMount: function () {
    this.media({maxWidth: 640}, function () {
      this.setState({url: baseUrl + '/img/small.jpg'});
    }.bind(this));
    this.media({minWidth:641, maxWidth: 1200}, function () {
      this.setState({url: baseUrl + '/img/medium.jpg'});
    }.bind(this));
    this.media({minWidth: 1201}, function () {
      this.setState({url: baseUrl + '/img/large.jpg'});
    }.bind(this));
  },
  render: function () {
    return (
      <div className=''>
        <h4>Demo</h4> 
        <p>Resize the browser window and see image changes when browser hit breakpoint 640px, 1200px</p>
        <img src={this.state.url} />
      </div>
    );
  }
});

module.exports = Component;