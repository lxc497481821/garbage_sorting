// pages/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '全国版垃圾分类测试上线，分享朋友圈，大家一起比拼！为大力推进垃圾分类，如有平台需接入垃圾查询服务，请留言',
	Page_body_height:0,
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
	var that = this;
	wx.getSystemInfo({
	  success:function(res){
		var clienHeight = res.windowHeight,
		clienWidth = res.windowWidth,
		rpxR = 750 / clienWidth;
		var calc = clienHeight * rpxR;
		that.setData({
			Page_body_height:calc
		})
	  },  
  }) 
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