var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  render: () => {
    return (
        <div>
          <p>Timer Rendered</p>
          <Clock />
          <Controls />
        </div>
      )
  }
});

module.exports = Timer;