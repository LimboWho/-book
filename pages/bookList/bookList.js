//var Bmob = require('../../utils/bmob.js');

Page({
  data: {
    book:[],
    message:[],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let query = new wx.BaaS.Query()
    let MyTableObject = new wx.BaaS.TableObject(53564)
    MyTableObject.setQuery(query).find().then(res => {
      // success
      this.setData({
        book: res.data
      })
      console.log(res.data)
    }, err => {
      // err
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  moredetails:function(){
    wx.navigateTo({
      url: '../moredetails/moredetails',
    })
  },
})