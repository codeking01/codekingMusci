/*
 封装ajax
*/
import config from "./config";

export default (url, data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            header: {"cookie": "NMTID=00OHLZHwx_yrd3PdUbPpqqFb2SH5hcAAAGCqtAE7Q; __remember_me=true; __csrf=fbee73b1312f7a64925cfa256e59d610; MUSIC_U=6f60dddda337a869b120554520a845c7d1607a46f667e811ae7b1940ae5f82de993166e004087dd3999bd155bb0711143cc919e8c4b8ea9fa13623e8b95a932cf89120ca165693307a561ba977ae766d"},
            url: config.host + url,
            data,
            method,
            /*header:{
                     'cookie': wx.getStorageSync('cookies')
             },*/
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                // console.log(err)
                reject(err)
            }
        })
    })
}