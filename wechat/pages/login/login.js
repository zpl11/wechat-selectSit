// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        studentNumber:'',
        studentPassoword:''
  },
  formInputStudentNumber:function(e){
    this.setData({
      studentNumber: e.detail.value
    })
  },
  formInputPassword:function(e){
    this.setData({
      studentPassoword: e.detail.value
    })
  },
  submitForm:function(e){
    console.log(this.data.studentNumber,this.data.studentPassoword);
    if(this.data.studentNumber === '123' && this.data.studentPassoword === '123'){
      wx.redirectTo({
        url: '/pages/home/home',
      })
    }
  },
  registerForm:function(e){
    wx.redirectTo({
      url: '/pages/index/index',
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