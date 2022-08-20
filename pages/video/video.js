// pages/video/video.js
import request from "../../utils/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 视频标签下的列表
        videoGroupList: [],
        navId: '',
        videoList: [],
    },
    // 获取视频列表的数据
    async getvideoGroupList() {
        let videoGroupListData = await request("/video/group/list")
        this.setData({
            videoGroupList: videoGroupListData.data.slice(0, 15),
            navId: videoGroupListData.data[0].id
        })
        await this.getVideoListByVid(this.data.navId)
    },
    // 获取视频列表的数据
    async getVideoListByVid(navId) {
        wx.showLoading({
            title: '加载中..',
        })
        let videoListData = await request("/video/group", {id: navId})
        let tempVideoList = [];
        let getVideoList = [];

        // 拿到vid 然后获取视频列表
        for (let i = 0; i < videoListData.datas.length; i++) {
            let getVideoListData = await request("/video/url", {id: videoListData.datas[i].data.vid})
            // console.log('getVideoListData', getVideoListData)
            // tempVideoList[i] = getVideoList.urls[0].url
            getVideoList.push(getVideoListData)
        }
        console.log('getVideoList', getVideoList)
        console.log('videoListData', videoListData)
        let index = 0;
        let videoList= await videoListData.datas.map( item => {
            item.data.urlInfo = getVideoList[index++]
            return item
        })
        console.log('videoList', videoList)
        this.setData({
            videoList: videoList
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 500)
    },
    changeNav(event) {
        let navId = event.currentTarget.id
        this.setData({
            navId: navId >>> 0
        })
        this.getVideoListByVid(this.data.navId)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getvideoGroupList()
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