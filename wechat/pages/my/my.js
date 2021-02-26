// pages/my/my.js
import drawQrcode from '../../utils/weapp.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedRow:'',
    selectedColumn:'',
    roomTime:''
  },
  getSelectedSeat(options){
    let selectedRow = parseInt(options.selectedRow)+1;
    let selectedColumn = parseInt(options.selectedColumn)+1;
    let roomTime = options.selectedRoomTime;
    this.setData({
      selectedRow:selectedRow,
      selectedColumn:selectedColumn,
      roomTime:roomTime
    })
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      text: `time:${roomTime}|selectedRow:${selectedRow}|selectedColumn:${selectedColumn}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getSelectedSeat(options);
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