// ==UserScript==
// @name         Shopee hour
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  try to take over the world!
// @author       You
// @match        https://luckydraw.shopee.co.th/event/7766d3dee4a5551f?scenario=1
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Hour.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict'
    //หาชม ต่อไป
    let nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1)
    nextHour.setMinutes('1')
    let now = new Date()
    let timeout = nextHour - now

    setTimeout(() => {
        let str = document.getElementsByClassName('container pc')[0].children[0].textContent
        let id = window.location.pathname.split('/')[2]
        str = str.replace(/[^0-9]/g, '')
        let count = parseInt(str)
        console.log(count)
        if (count == 0) {
            console.log('ตั้งเวลา : ' + nextHour.toTimeString())
            setTimeout(() => {
                location.reload()
            }, timeout)
        } else {
            if (count > 0) {
                $.ajax({
                    method: 'POST',
                    url: `https://luckydraw.shopee.co.th/api/v1/luckydraw/${id}/`,
                    success: data => {
                        console.log('done', data)
                    },
                    error: data => {
                        console.log('error')
                    }
                })
                setTimeout(() => {
                    location.reload()
                }, 2000)
            }
        }
    }, 2000)

    //เผื่อค้าง
    setTimeout(() => {
        location.reload()
    }, 4320000)
})()