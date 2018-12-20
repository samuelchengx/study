
import Vue from 'vue'
import wx from 'weixin-js-amd-sdk'
import ajax from '@/api/ajax'
import storage from '@/assets/js-amd/storage'

export default async function wxShare(shareObj) {
    let wxconfig = null, url = location.href, isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

    const [resp] = await ajax.all([
        ajax.get('/science/h5/share',{
            params: {
                access_token: storage.getCookie('token'),
                url: url
            }
        })
    ])

    if(resp.data.code === 99999){
        wxconfig = resp.data.data
        // 微信配置功能
        wx.config({
            debug: false,
            appId: wxconfig.appId,
            timestamp: parseInt(wxconfig.timestamp),
            nonceStr: wxconfig.nonceStr,
            signature: wxconfig.signature,
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "updateAppMessageShareData",
                "updateTimelineShareData",
            ]
        })
        wx.ready(function () {
            !isiOS && wx.onMenuShareTimeline({
                title: shareObj.title || '', // 分享标题
                desc: shareObj.desc || '', // 分享描述
                link: shareObj.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareObj.imgUrl || '', // 分享图标
            });

            isiOS && wx.updateAppMessageShareData({
                title: shareObj.title || '', // 分享标题
                desc: shareObj.desc || '', // 分享描述
                link: shareObj.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareObj.imgUrl || '', // 分享图标
            }, function(res) {
                //这里是回调函数
            });

            !isiOS && wx.onMenuShareAppMessage({
                title: shareObj.title || '', // 分享标题
                link: shareObj.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareObj.imgUrl || '', // 分享图标
            });

            isiOS && wx.updateTimelineShareData({
                title: shareObj.title || '', // 分享标题
                link: shareObj.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareObj.imgUrl || '', // 分享图标
            }, function(res) {
                //这里是回调函数
            });
        })
    }
}

Vue.prototype.$wxShare = wxShare