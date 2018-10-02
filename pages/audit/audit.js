Page({
  data: {
    book: [],
    title_disabled: true,//控制修改表头名字
    management_good: false,
    select_all: false,
    middlebook: [],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    for (var i in this.data.book) {
      var c = "book[" + i + "].checked"
      console.log("增加checked")
      that.setData({
        [c]: "flase"
      })

    }
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
  moredetails: function () {
    wx.navigateTo({
      url: '../moredetails/moredetails',
    })

  },
  queryAllBorrowBooks: function () {
    var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      console.log(res)
      that.setData({
        book: res
      })
    });
  },
  queryOneBook: function (key) {
    var that = this;
    var inputMsg = that.data.inputValue;
    var options = {
      url: config.clubApi.list,
      data: {
        appkey: config.appKey,
        type: 'bookLibrary',
        key: key
      }
    };
    util.request(options, (res, err) => {
      var books = [];
      for (var i = 0; i < res.data.result.length; i++) {
        books.push(res.data.result[i].value);
      }
      that.setData({
        bookList: books
      });
    });

  },
  aus: function () {
    var that = this;
    let book = that.data.book;
    let book2 = [];
    wx.showModal({
      title: '提示',
      content: '确认通过审核',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.showModal({
            title: '提示',
            content: '通过审核',
          })
          console.log(book);
          for (let i = 0; i < book.length; i++) {
            if (book[i].checked == false) {
              book2.push(book[i]);
            }
          }
          that.setData({
            book: book2,
            middlebook: []
          })
          console.log('审核通过')
        } else {//这里是点击了取消以后
        wx.showModal({
          title: '提示',
          content: '审核取消',
        })
          console.log('用户点击取消')
        }
      }
    })
    console.log('审核结束')
  },
  auf: function () {
    var that = this;
    let book = that.data.book;
    let book2 = [];
    wx.showModal({
      title: '提示',
      content: '确认审核不通过',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.showModal({
            title: '提示',
            content: '确认审核不通过',
          }) 
          console.log(book);
          for (let i = 0; i < book.length; i++) {
            if (book[i].checked == false) {
              book2.push(book[i]);
            }
          }
          that.setData({
            book: book2,
            middlebook: []
          })
          console.log('确认审核不通过')
        } else {//这里是点击了取消以后
          wx.showModal({
            title: '提示',
            content: '审核取消',
          })
          console.log('审核不通过')
        }
      }
    })
    console.log('审核结束')
  },
  

  // 审核
  management:function(){
    let that = this;
    let book = that.data.book;
    let book2 = [];
    for (let i = 0; i < book.length; i++) {
      book[i].checked = false;
      book2.push(book[i]);
    }
    that.setData({
      book: book2,
    })
    that.setData({
      management_good: true,
      select_all: false,
    })
  },
  finish_management:function(){
    let that = this;
    that.setData({
      management_good:false,
    })
  },


  // 选择
  select:function(e){
    var that = this;
    let book2 = [];
    if (that.data.management_good == false){
       return;
    }else{
      var book = that.data.book;
      var index = e.currentTarget.dataset.id;
      book[index].checked = !book[index].checked;
      console.log(book);

      for(let i=0;i<book.length;i++){
         if(book[i].checked){
           book2.push(book[i])
         }
      };
      that.setData({
        book: book,
        middlebook:book2
      })
    }
  },

  // 全选
  select_all:function(){
    let that = this;
    console.log("全选")
    that.setData({
      select_all: !that.data.select_all
    })
    if (that.data.select_all){
      let book = that.data.book;
      let book2 = [];
      for (let i = 0; i < book.length; i++) {
        if (book[i].checked == true) {
          book2.push(book[i]);
        }else{
          book[i].checked = true;
          book2.push(book[i]);
        }
      }
      that.setData({
        book: book2,
        middlebook:book2
      })
    }
  },
  // 取消全选
  select_none:function(){
    let that = this;
    console.log("取消全选")
    that.setData({
      select_all: !that.data.select_all
    })
    let book = that.data.book;
    let book2 = [];
    for (let i = 0; i < book.length; i++) {
        book[i].checked = false;
        book2.push(book[i]);
    }
    that.setData({
      book: book2,
      middlebook:[]
    })
  },

})
