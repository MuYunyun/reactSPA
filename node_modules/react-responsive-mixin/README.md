# react-responsive-mixin

> react-responsive-mixin makes building responsive components easy

This mixin adds method called `media()` to the react component.
This is a wrapper around [enquire.js](http://wicky.nillia.ms/enquire.js/)

### [Demo](http://webrafter.com/opensource/react-responsive-mixin)

### Usage
```javascript
this.media(query, handler)
```
##### `query`
query is a media query definition either in string or object format.
This mixin internally uses [json2mq](https://github.com/akiran/json2mq) to convert media query from object to string format.

##### `handler`
handler is a function that needs to be executed when media query matches. 
handler can also be an object according to [enquire.js](http://wicky.nillia.ms/enquire.js/#api) API

##### Example

```javascript
var React = require('react');
var ResponsiveMixin = require('react-responsive-mixin');

var Component = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return { url: '/img/large.img' };
  },
  componentDidMount: function () {
    this.media({maxWidth: 600}, function () {
      this.setState({url: '/img/small.jpg'});
    }.bind(this));
    this.media({minWidth:601, maxWidth: 1024}, function () {
      this.setState({url: '/img/medium.jpg'});
    }.bind(this));
    this.media({minWidth: 1025}, function () {
      this.setState({url: '/img/large.jpg'});
    }.bind(this));
  },
  render: function () {
    return <img src={this.state.url} />;
  }
});

```



