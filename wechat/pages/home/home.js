// pages/home/home.js
Page({
  data: {
    "showPageIndex" : '1',
      list: [{
          "showPage":"1",
          "text": "选座",
          "iconPath": "/pages/images/select-site.png",
          "selectedIconPath": "/pages/images/selected.png"
      },
      {
        "showPage":"2",
        "text": "我的",
        "iconPath": "/pages/images/my.png",
        "selectedIconPath": "/pages/images/my-selected.png"
    },
      ],
      siteAray:[]
  },
  tabChange(e) {
      this.setData({
        showPageIndex : e.detail.item.showPage
      })
  },
  formatNumber(n){
    n = n.toString();
    return n[1]?n:'0'+n;
  },
  formatTimeTwo(number, format) {
    var formateArr = ['Y', 'M', 'D','H','M','S']; 
    var returnArr = [];  
    var date = new Date(number * 1000);  
    returnArr.push(date.getFullYear());  
    returnArr.push(this.formatNumber(date.getMonth() + 1));  
    returnArr.push(this.formatNumber(date.getDate()));  
    returnArr.push(this.formatNumber(date.getHours()));  
    returnArr.push(this.formatNumber(date.getMinutes()));  
    returnArr.push(this.formatNumber(date.getSeconds()));  
     for (var i in returnArr) {    
       format = format.replace(formateArr[i], returnArr[i]);  
     }  
     return format;
   },
   goDetailSite(event){
     let column = event.currentTarget.dataset.seatcolumn;
     let seatrow = event.currentTarget.dataset.seatrow;
     let roomTime = event.currentTarget.dataset.selectedtime;
     console.log(event);
     wx.navigateTo({
       url: '../selectSite/selectSite?seatColumn='+column+'&seatRow='+seatrow+'&roomTime='+roomTime,
     })
   },
  // 进入页面发送请求，查看当前可以使用的教室的数量
  sendDateRequest(){
    let _that = this;
    // 在这里发送 ajax 请求，请求后台接口
    wx.request({
      url: 'http://localhost:8080/wechat/getRoomList',
      method:'POST',
      data: {
      },
      header: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success: function(res){
        console.log(res)
        var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        for(let i = 0; i<res.data.length; i++){
          res.data[i].roomTime = _that.formatTimeTwo(res.data[i].roomTime/1000,'Y/M/D')
          let myDate = new Date(Date.parse(res.data[i].roomTime));
          res.data[i].roomWeek = weekDay[myDate.getDay()]
        }
        _that.setData({
          siteAray:res.data,
        })
      },
      fail:function(res){
        console.log(res);
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.sendDateRequest();
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