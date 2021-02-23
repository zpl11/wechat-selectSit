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
    // 在这里发送 ajax 请求，请求后台接口
    wx.request({
      url: 'http://localhost:8080/wechat/index',
      method:'POST',
      data: {
        "studentNumber":this.data.studentNumber,
        "studentPassoword":this.data.studentPassoword
      },
      header: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success: function(res){
        if(res.data.studentId === null){
          wx.showToast({
              title: '请检查账号密码',
              icon: 'none',
              duration: 1000,
          })
        }else{
          wx.redirectTo({
            url: `/pages/home/home?studentId=${res.data.studentId}`,
          })
        }
      },
      fail:function(res){
        console.log(res);
      }
    })
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