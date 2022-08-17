/*
 封装ajax
*/
import config from "./config";

export default (url, data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            header: {"cookie": "NTES_P_UTID=8PdR4DwrT4oBGMjCUT46rjnlxV7Zgs7w|1659948075; P_INFO=jialiang_xiong@163.com|1659948075|0|mail163|00&99|hun&1659948040&163#hun&430400#10#0#0|&0|163&mailmaster_android|jialiang_xiong@163.com; nts_mail_user=jialiang_xiong@163.com:-1:1; _ntes_nuid=78515142ada7d6e282261c59f16492ae; _ntes_nnid=78515142ada7d6e282261c59f16492ae,1659948082595; NMTID=00OcIBmQaeBEcP2LUR2hzAjzJzmKxsAAAGCfJ2gZg; WM_TID=MSycEmjGRHtFUAVBREeBTC71wvaJGRlo; WM_NI=ZYHEYZ1Gn8tSnzDQ6r0NRcisz1%2BwSB7YeycDTFGPKqOluuOWqCTsaDaIlSOprnlRCrgywSKYuWfcagwUe1YzqjdgBkVjwjlvoBtBnu0to7Q0M6LCDtcDfRgNuqFb2u1wbWE%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeaaf84a8f93beb1ea50a28e8ea2c14b938f9bacc1609ab28295cc4b9b9c9fd9cd2af0fea7c3b92a9a8788a6dc52f399a2d9f759aea68cb2b57af4929e84ec79baefe598d24af587ab9ae250989a89b1ca7b8db4bb96ce5db39d9c94e450a397a4b4ce7cb2b2a4b3c27aa5a7b9b4ca53b789aa84e46db58babd2dc72b3b6ac88c16196b6b98bef7ead9ebca3ed7ff4aca1d8d43c8fea84a4c780a19caab3e646b7af8a83b17ff3a9aeb8c837e2a3; _iuqxldmzr_=33; JSESSIONID-WYYY=tp7%2FMeTvsnK9OE7tQe2sb3qlNOd3%5C1spD63xwp7Tu%2B%2FiJHSDsNTvsPgSOwfkxYvJxKxGVUqvi0EuKABSOoYDi6ZIE4ByajxEINpQbV8c3FMShaejAYJez8HcOhZKcFWWGz%5CRpD6ptJRqQKq%2BGAaY94ueFOSISh%5C8gB%2Brw%2FtMe4RWblkb%3A1660724418847; __snaker__id=hQPUP8gcFr75qdYX; gdxidpyhxdE=pInJqdPvRAwvo%2BJNSEIOUL58LC4PXEPMc1AkA635YbibpUhGjTIRQMe8toxZUoPNKAZpNBsNmb24B7rlb16HKSCgRxOjf5bB%2Fww5LxguNEnIQv5Q%2BzJaoRx%2BpbrWV3IobQifLvS0t5e49ZgNodQJPcsfj2hWwx7%2FUgmVzqm1aEw6aANf%3A1660723526895; _9755xjdesxxd_=32; YD00000558929251%3AWM_NI=LsZ%2B75Qew8kwNimAWXnkauVpMhTzxuEh0xnURpWf56AS2RB8fNBGrD4EFiW82If5ainUSIcCdt8wkWQgm%2BIcYiS4dUfy6%2FKzW6NEf0mfln3DTV5zvuFaVKQfftLrzpyDdHk%3D; YD00000558929251%3AWM_TID=E%2FMHOtMNU4hBAERUAVfQSd2Y9MQgSzFL; YD00000558929251%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea9ee39b6b2b7b7fc348be78aa2d44f938f8e82c14d9ba68791d95ea98da7a3e82af0fea7c3b92a90ad96ccb63f93bbb9d9ea7d8eb7a3a2d654aeb5af96d57c8fb89c9bfb7f87b80099ed5f92b09987b83e838dfeb3c134a6928ea8f150f89b8a8ad634f297aad6e463ae8b9daae249a8acf898ea5d93b9a3cccc699bb79dd5e75fa6a7fad0ca7295ea82a6e53cafbaa48fb250988afb9bf57f86bf9aacd46ea6ac8493f97cbb9caca9ea37e2a3; MUSIC_U=6f60dddda337a869b120554520a845c76e09d742c72ebdd2ba94ec0c393685f7993166e004087dd3f823a3292714ef09c08d4f7a41a221d8a13623e8b95a932cf89120ca16569330d4dbf082a8813684; __csrf=8f0874c57637a7493df4f9af235e8cb1; ntes_kaola_ad=1"},
            url: config.host + url,
            data,
            method,
            success: (res) => {
                // console.log(res)
                resolve(res.data)
            },
            fail: (err) => {
                // console.log(err)
                reject(err)
            }
        })
    })
}