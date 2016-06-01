var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');


describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render the correct time output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={105}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var expected = "01:45";
      var actual = $el.find('.clock-text').text();
      expect(actual).toBe(expected);
    });
  });

  describe('formatTime', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatTime(seconds);
      expect(actual).toBe(expected);
    });
    it('should format minutes/seconds with zero padding', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatTime(seconds);
      expect(actual).toBe(expected);
    });
  });
});