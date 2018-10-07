// pages/plan/plan.js
/*var plan = [{
  weekly: '', //周次
  content: '', //教学内容
  target: '', //教学目标
  examination: '', //考核方式
  homework: '', //课外作业
  note: '',//备注
}]*/
Page({
  /**
   * 页面的初始数据*/
  data: {
    plan: [{
      'weekly': '',
      'classname':'',
      'content': '',
      'target': '',
      'examination': '',
      'homework': '',
      'note': ''
    }],
    hideModal: true,
  },
  formSubmit(e){
    this.setData({
      classname: e.detail.value.classname,//课程名称
      weekly: e.detail.value.weekly, //周次
      content: e.detail.value.content, //教学内容
      target: e.detail.value.target, //教学目标
      examination: e.detail.value.examination, //考核方式
      homework: e.detail.value.homework, //课外作业
      note: e.detail.value.note, //备注
      //plan: temp//数组换值
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    try {
      wx.setStorageSync('weekly', e.detail.value.weekly)
      wx.setStorageSync('classname', e.detail.value.classname)
      wx.setStorageSync('content', e.detail.value.content)
      wx.setStorageSync('target', e.detail.value.target)
      wx.setStorageSync('examination', e.detail.value.examination)
      wx.setStorageSync('homework', e.detail.value.homework)
      wx.setStorageSync('note', e.detail.value.note)
      console.log("缓存成功")
      let tableID = 53619
      let Product = new wx.BaaS.TableObject(tableID)
      let product = Product.create()
      let plane = {
        week: e.detail.value.weekly, //周次
        course_name:e.detail.value.classname,
        content: e.detail.value.content, //教学内容
        target: e.detail.value.target, //教学目标
        exam: e.detail.value.examination, //考核方式
        homework: e.detail.value.homework, //课外作业
        note: e.detail.value.note, //备注
      }
      product.set(plane).save().then(res => {
      }, err => {
        // err
      })
      console.log("上传成功")
    } catch (e) {
    }
    var obj = e.detail.value;
    var weekly = obj.weekly;
    var content = obj.content;
    var target = obj.target;
    var examination = obj.examination;
    var homework = obj.homework;
    var note = obj.note;
    if (weekly.length <= 0 || content.length <= 0 || target.length <= 0 || examination.length <= 0 || homework.length <= 0 || note.length <= 0) {
return
    }
    this.data.plan.push(obj);
    var update = this.data.plan;
    console.log(update);

  },
  //点击确认提交后的动作，弹窗检查信息
  clickCheck() {
    this.setData({
      'plan': this.data.plan,
      hideModal: false,
      hidetextarea: true, //隐藏textarea区域，否则弹窗层无法覆盖
    })
  },

  clickCheck2() {
    var plan = this.data.plan;
    let planStr = JSON.stringify(plan)
    console.log(plan);
    wx.navigateTo({
      url: '../teacherplan/teacherplan?planStr=' + planStr,
      success: function (res) {
      }
    })
  },
  //关闭弹窗
  modalCancel(e) {
    console.log("关闭", e)
    this.setData({
      hideModal: true,
      hidetextarea: false, //隐藏textarea区域，否则弹窗层无法覆盖  
    })
    console.log("弹窗关闭")
  },
  modalSubmit(e) {
    this.setData({
      'week': wx.getStorageSync('weekly'),
      'content': wx.getStorageSync('content'),
      'target': wx.getStorageSync('target'),
      'examination': wx.getStorageSync('examination'),
      'homework': wx.getStorageSync('homework'),
      'note': wx.getStorageSync('note'),
      hideModal: true,
      hidetextarea: false,
    })
    
    wx.switchTab({
      url: '../function/function',
    })
    //缓存数据到本地
    console.log("确认提交")
    //获取缓存内容打印确认、
    try {
      var value1 = wx.getStorageSync('weekly')
      var value2 = wx.getStorageSync('content')
      var value3 = wx.getStorageSync('target')
      var value4 = wx.getStorageSync('examination')
      var value5 = wx.getStorageSync('homework')
      var value6 = wx.getStorageSync('note')
      if (value1 && value2 && value3 && value4 && value5 && value6) {
        console.log(value1, value2, value3, value4, value5, value6)
        // Do something with return value
      } else {
        console.log("获取失败")
      }
    } catch (e) {
      // Do something when catch error
    }
  },


  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


