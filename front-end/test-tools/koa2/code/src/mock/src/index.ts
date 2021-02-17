// import module
const Mock = require('mockjs')
const appRoot = require('app-root-path');
const logString = require(appRoot + '/src/utils/log_string.js');
// end import module

// import template
const swipeTemplate = require('./template/swipe')
// end import template

const swipeData: Swipe = Mock.mock(swipeTemplate)

if (process.env.NODE_ENV === 'test' && process.env.MOCK_DEBUG === 'true') {
  // log swipe data
  console.log(logString.DELIMITER_LOG)
  console.log('swipe data =')
  console.log(swipeData);
  console.log(logString.DELIMITER_LOG)
}


module.exports = {
  swipeData
}
