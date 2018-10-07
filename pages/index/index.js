// pages/interface/index.js
//var common = require("../../utils/common.js");
var grids = [
  { "name": "教材一览", "ico": "database.png", "url": "../bookList/bookList" },
  { "name": "教材订购", "ico": "footer-icon-03.png", "url": "../shopcar/shopcar" },
  { "name": "教材评价", "ico": "edit.png", "url": "../accessable/accessable"}
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: grids,
  },
  onLoad:function(){
      wx.checkSession({
        success: function () {
          //session_key 未过期，并且在本生命周期一直有效
          if (wx.getStorageSync('user_id') == '') {
            wx.clearStorageSync()
            wx.reLaunch({
              url: '../login/login'
            })
          }
        },
      })
  }
})