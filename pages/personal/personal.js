import request from "../../utils/request";

let startY = 0
let endY = 0
let moveDistance = 0
Page({
    /**
     * 页面的初始数据
     */
    data: {
        coverTransform: 'translateY(0)',
        coveTransition: '',
        userInfo: {},
        recentPlayList: []
    },
    handleTouchStart(e) {
        startY = e.touches[0].clientY
        this.setData({
            coveTransition: ''
        })
    },
    handleTouchMove(e) {
        endY = e.touches[0].clientY
        moveDistance = endY - startY
        if (moveDistance < 0) {
            return;
        }
        if (moveDistance > 100) {
            moveDistance = 100
        }
        this.setData({
            coverTransform: `translateY(${moveDistance}rpx)`,
        })
    },
    //处理跳转登录
    toLogin() {
        wx.reLaunch({
            url: "/pages/login/login",
        })
    },
    handleTouchEnd() {
        this.setData({
            coverTransform: `translateY(0rpx)`,
            coveTransition: 'transform 1s linear'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 读取用户的基本信息
        let userInfo = wx.getStorageSync('userInfo');
        if (userInfo) {
            this.setData({
                userInfo: JSON.parse(userInfo)
            })
            // 获取最近播放记录
            this.getRecentPlayList(this.data.userInfo.userId)
        }
    },
    async getRecentPlayList(userId) {
        let recentPlayData = await request("/user/record", {uid: userId, type: 0})
        let index = 0
        let recentPlayList = recentPlayData.allData.splice(0, 20).map(item => {
            item.id = index++
            return item
        })
        this.setData({
            recentPlayList
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})