// pages/login/login.js
import request from "../../utils/request";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        phone: '',
        password: '',
    },
    // 表单项内容发生改变的回调
    handleInput(event) {
        // let type = event.currentTarget.id;// id传值 取值： phone || password
        let type = event.currentTarget.dataset.type; // data-key=value
        // console.log(event);
        this.setData({
            [type]: event.detail.value
        })
    },

    // 登录网易云
    async login() {
        wx.showLoading({
            title: '登陆中',
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 2000)
        // 获取用户输入的手机号和密码
        let phone = this.data.phone
        let password = this.data.password
        // 判断是否输入了手机号和密码
        if (!phone || !password) {
            wx.showToast({
                title: '请输入手机号和密码',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            wx.showToast({
                title: '手机号格式不正确',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (password.length < 6) {
            wx.showToast({
                title: '密码不能少于6位',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (password.length > 20) {
            wx.showToast({
                title: '密码不能多于20位',
                icon: 'none',
                duration: 2000
            })
            return
        }
        let result = await request('/login/cellphone', {phone, password}, 'GET')
        // console.log(result)
        if (result.code === 200) {
            // 将用户信息存储至本地
            wx.setStorageSync('userInfo', JSON.stringify(result.profile))
            wx.reLaunch({
                url: '/pages/personal/personal',
            })
        } else {
            wx.showToast({
                title: `${result.message}`,
                icon: 'none',
                duration: 2000
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
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