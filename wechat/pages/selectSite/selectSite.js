// pages/selectSite/selectSite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rowNumber:0, //行数
    columnNumber:0, //列数
    roomTime:'', //选择的日期
    selectedRow:'',
    selectedColumn:''
  },
  getClickPosition:function(e){
    this.setData({
      selectedRow:e.currentTarget.dataset['row'],
      selectedColumn:e.currentTarget.dataset['column']
    })
  },
  getInformation:function(){
    if(this.data.selectedRow && this.data.selectedColumn !== null){
      wx.navigateTo({
        url: '../my/my?selectedRow='+this.data.selectedRow+'&selectedColumn='+this.data.selectedColumn+'&selectedRoomTime='+this.data.roomTime,
      })
    }else{
      wx.showModal({
        content: '未选择座位不能生成信息二维码',
        success: function (res) {
            if (res.confirm) {
                console.log('用户点击确定')
            }else{
              console.log('用户点击取消')
            }

        }
      })
    }
    
  },
  // 通过 url 中的数据渲染有几行几列数据
  setRoomData:function(options){
    let seatRow = parseInt(options.seatRow);
    let seatColumn = parseInt(options.seatColumn);
    let roomTime = options.roomTime;
    this.setData({
      rowNumber:seatRow,
      columnNumber:seatColumn,
      roomTime:roomTime
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setRoomData(options);
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