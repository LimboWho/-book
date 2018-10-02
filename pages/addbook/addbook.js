// pages/plan/plan.js
//教材录入
Page({
  /**
   * 页面的初始数据*/
  data: {
    plan:[{
      'num': "",
      'bookname': "",
      'press': "",
      'ISBN': "",
      'author': "",
      'edition': "",
      'price': "",
      'publishedtime': ""}],

    hideModal: true,
  },
  formSubmit: function (e) {
    this.setData({
      //输入数据赋值
      num: e.detail.value.num, //序号
      bookname: e.detail.value.bookname, //书名
      press: e.detail.value.press, //出版社
      ISBN: e.detail.value.ISBN, //ISBN
      author: e.detail.value.author, //作者
      edition: e.detail.value.edition, //版次
      publishedtime: e.detail.value.publishedtime,//出版时间
      price:e.detail.value.price//价钱
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    try {
      wx.setStorageSync('num', e.detail.value.num)
      wx.setStorageSync('bookname', e.detail.value.bookname)
      wx.setStorageSync('press', e.detail.value.press)
      wx.setStorageSync('ISBN', e.detail.value.ISBN)
      wx.setStorageSync('author', e.detail.value.author)
      wx.setStorageSync('edition', e.detail.value.edition)
      wx.setStorageSync('publishedtime', e.detail.value.publishedtime)
      wx.setStorageSync('price', e.detail.value.price)
      console.log("缓存成功")
    } catch (e) {
    }
    var obj = e.detail.value;
    var num = obj.num;
    var bookname = obj.bookname;
    var press = obj.press;
    var ISBN = obj.ISBN;
    var author = obj.author;
    var edition = obj.edition;
    var publishedtime = obj.publishedtime;
    var price = obj.price;
    if (num.length <= 0 || bookname.length <= 0 || press.length <= 0 || ISBN.length <= 0 || author.length <= 0 || edition.length <= 0 || publishedtime.length <= 0 || price.length <= 0) {
      return;
    }
    this.data.plan.push(obj);
    var update = this.data.plan;
    console.log(update);
  },
  
    //点击确认提交后的动作，弹窗检查信息
    clickCheck() {
      this.setData({
        hideModal: false,
        hidetextarea: true, //隐藏textarea区域，否则弹窗层无法覆盖
      })

    },

  clickCheck2() {
    var plan = this.data.plan;
    let planStr = JSON.stringify(plan)
    console.log(plan);
    wx.navigateTo({
      url: '../bookmessage/bookmessage?planStr=' + planStr,
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
      console.log("弹窗关闭，返回修正")
    },
    modalSubmit(e){//确认提交按钮
      console.log("确认提交")

      try {
        this.setData({
          'num': wx.getStorageSync('num'),
          'bookname': wx.getStorageSync('bookname'),
          'press': wx.getStorageSync('press'),
          'ISBN': wx.getStorageSync('ISBN'),
          'author': wx.getStorageSync('author'),
          'publishedtime': wx.getStorageSync('publishedtime'),
          'price': wx.getStorageSync('price'),
          hideModal: true,
          hidetextarea: false,
        })
        var value1 = wx.getStorageSync('num')
        var value2 = wx.getStorageSync('bookname')
        var value3 = wx.getStorageSync('press')
        var value4 = wx.getStorageSync('ISBN')
        var value5 = wx.getStorageSync('author')
        var value6 = wx.getStorageSync('edition')
        var value7 = wx.getStorageSync('publishedtime')
        var value8 = wx.getStorageSync('price')
        if (value1 && value2 && value3 && value4 && value5 && value6&&value8&&value7) {
          console.log(value1, value2, value3, value4, value5, value6,value7,value8)
          // Do something with return value
        } else {
          console.log("获取失败")
        }
      } catch (e) {
        // Do something when catch error
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
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