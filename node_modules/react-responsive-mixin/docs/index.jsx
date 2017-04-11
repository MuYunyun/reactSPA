var React = require('react');
var Demo = require('./demo');
var Highlight = require('react-highlight');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var Docs = React.createClass({
  render: function () {
    return (
      <div className=''>
          <div className='title-bar primary'>
              <span className='title'>React Responsive Mixin</span>
          </div>
          <div className='grid-container'>
            <Highlight innerHTML={true}>
              {require('../README.md')}
            </Highlight>
            <Demo />
          </div>
        </div>
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    React.render(<Docs />, document.body);
  });
} 

module.exports = Docs;


