// pages/interface/index.js
var grids = [
  { "name": "录入教学计划", "ico": "edits.png", "url": "../plan/plan" },
  { "name": "录入教材信息", "ico": "edits.png", "url": "../addbook/addbook" },
  { "name": "查询订购情况", "ico": "edits.png", "url": "../List/List" },
  { "name": "审核教材信息", "ico": "edits.png", "url": "../audit/audit" },
  { "name": "审核清单 ", "ico": "book.png", "url": "../stader/stader" },
  { "name": "查看教学计划 ", "ico": "book.png", "url": "../teacherplan/teacherplan"},
  { "name": "查看教材信息 ", "ico": "book.png", "url": "../bookmessage/bookmessage"}
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: grids,
  },
  onLoad: function () {
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
      /*fail: function (e) {
        //登录态失效时清空缓存重新登录
        console.log(e);
        wx.clearStorageSync()
        wx.reLaunch({
          url: '../login/login'
        })
      }*/
    })
  }
})