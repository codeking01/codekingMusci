// index.js
// 获取应用实例
import request from "../../utils/request";

const app = getApp()

Page({
    data: {
        bannerList: {},
        musicList: {}
    },

    onLoad: async function (options) {
        let bannerListData = await request('/banner', {type: 0})
        // 推荐歌单
        let musicListData = await request('/personalized', {limit: 30})
        // console.log(bannerListData)
        // console.log("musicListData:", musicListData)
        this.setData({
            bannerList: bannerListData.banners,
            musicList: musicListData.result,
        })
    },
    onReady: () => {
    },
    onShow() {
    },
    onHide() {
    },
    onUnload() {
    },

})
