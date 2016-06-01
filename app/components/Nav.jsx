var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: () => {
    return (
        <nav id="main-nav" className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer</li>
              <li><IndexLink to='/' activeClassName="active-route">Timer</IndexLink></li>
              <li><Link to='/countdown' activeClassName="active-route">Countdown</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by Ryan Smith
              </li>
            </ul>
          </div>
        </nav>
      )
  }
});

module.exports = Nav;