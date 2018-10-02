// pages/interface/index.js
var common = require("../../utils/common.js");
var Bmob = require('../../utils/bmob.js');
var student;
var teacher;
var ac;
var grids=[]
 var student = [
  //学生
  { "name": "教材一览", "ico": "database.png", "url": "../bookList/bookList" },
  { "name": "教材订购", "ico": "footer-icon-03.png", "url": "../shopcar/shopcar" },
  { "name": "教材评价", "ico": "edit.png", "url": "../accessable/accessable" }
  
];
var teacher=[
  //教师
  { "name": "选用教材", "ico": "edits.png", "url": "../choice/choice" },
  { "name": "查看教材信息 ", "ico": "book.png", "url": "../bookList/bookList" },
  { "name": "评价教材", "ico": "edit.png", "url": "../accessable/accessable" }
];
var ac=[
  //教务员
  { "name": "录入教学计划", "ico": "edits.png", "url": "../plan/plan" },
  { "name": "录入教材信息", "ico": "edits.png", "url": "../addbook/addbook" },
  { "name": "查询订购情况", "ico": "edits.png", "url": "../List/List" },
  { "name": "审核教材信息", "ico": "edits.png", "url": "../audit/audit" },
  { "name": "审核清单 ", "ico": "book.png", "url": "../stader/stader" },
];

Page({

  data: {
    grids:grids
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
      }
    })
    var value = wx.getStorageSync('manage')
    console.log(value)
    //学生
    if(value==0){
      this.setData({
        grids:student
      })
    }
    //教师
    if (value == 3) {
      this.setData({
        grids: teacher
      })
    }
    //教务员
    if (value == 5) {
      this.setData({
        grids: ac
      })
    }
    }
})