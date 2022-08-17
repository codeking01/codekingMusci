// index.js
// 获取应用实例
import request from "../../utils/request";

const app = getApp()

Page({
    data: {
        bannerList: {},
        musicList: {},
        topList: []
    },
    onLoad(options) {
        this.initData();
    },
    // 获取加载数据
    async initData() {
        let bannerListData = await request('/banner', {type: 0})
        // 推荐歌单
        let musicListData = await request('/personalized', {limit: 30})
        // console.log(bannerListData)
        // console.log("musicListData:", musicListData)
        this.setData({
            bannerList: bannerListData.banners,
            musicList: musicListData.result,
        })
        // 获取排行榜数据
        let index = 0
        let resultArray = []
        while (index < 5) {
            let topListData = await request('/toplist/detail', {idx: index++})
            // console.log(topListData)
            let topListItem = {
                name: topListData.list[index].name,
                imgUrl: topListData.list[index].coverImgUrl,
                tracks: topListData.list[index].tracks
            }
            resultArray.push(topListItem)
            this.setData({
                topList: resultArray
            })
        }
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
