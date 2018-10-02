//app.js
//var Bmob = require('utils/bmob.js');
//Bmob.initialize("f7db22b6f5f5dc772b38e15f31c2e3ea", "888793a3b35fc38e902da6e1c74fef81");
App({
  onLaunch: function () {
   
      // require SDK
      require('./sdk-v1.7.0')
      wx.BaaS.init('85dd1001b84526b8f0f8')
    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },

})