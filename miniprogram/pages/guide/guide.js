// pages/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '全国版垃圾分类测试上线，分享朋友圈，大家一起比拼！为大力推进垃圾分类，如有平台需接入垃圾查询服务，请留言',
    marqueePace:1,
    marqueeDistance:0,
    size:22,
    interval:20
  },
  publicity: function () {
    var that = this;
    var length = that.data.text.length * than.data.size;//文字宽度
    var windowWidth = wx.getSystemInfoSync().windowWidth;//屏幕宽度
    that.setData({
      length,
      windowWidth
    });
    than.scrollFn();
  },
  scrollFn: function () {
    var that = this;
    var length = that.data.length;//滚动文字的宽度
    var windowWidth = that.data.windowWidth;
    if (length > windowWidth) {
      var interval = setInterval(function () {
        var crentleft = that.data.marqueeDistance;
        if (crentleft < 550) {//判断是否滚动到最大宽度
          that.setData({
            marqueeDistance: crentleft + that.data.marqueePace
          })
        }
        else {
          that.setData({
            marqueeDistance: 0 // 直接重新滚动
          });
          clearInterval(interval);
          that.scrollFn();
        }
      }, that.data.interval);
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