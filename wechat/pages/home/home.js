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
      siteAray:[
        {day:'Monday',siteNumber:'12'},
        {day:'Tuesday',siteNumber:'12'},
        {day:'Wednesday',siteNumber:'12'},
        {day:'Thursday',siteNumber:'12'},
        {day:'Friday',siteNumber:'12'},
        {day:'Saturday',siteNumber:'12'},
        {day:'Sunday',siteNumber:'0'}
      ]
  },
  tabChange(e) {
      this.setData({
        showPageIndex : e.detail.item.showPage
      })
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