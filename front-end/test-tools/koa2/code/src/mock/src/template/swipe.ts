const { Random } = require('mockjs')
module.exports = {
  err: 0,
  'data|4-8': [{ url: Random.image('720x360', Random.hex(), 'swipe') }] 
}
