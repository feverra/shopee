// ==UserScript==
// @name         Shopee hour
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       You
// @match        https://luckydraw.shopee.co.th/event/7766d3dee4a5551f?scenario=1
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Hour.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict'
    setTimeout(() => {
        let str = document.getElementsByClassName('container pc')[0].children[0].textContent
        let id = window.location.pathname.split('/')[2]
        str = str.replace(/[^0-9]/g, '')
        let count = parseInt(str)
        console.log(count)
        if (count == 0) {
            console.log('ตั้งเวลา')
            setTimeout(() => {
                location.reload()
            }, 3600000)
        } else {
            if (count >= 1) {
                $.ajax({
                    method: 'POST',
                    url: `https://luckydraw.shopee.co.th/api/v1/luckydraw/${id}/`,
                    success: function (data) {
                        console.log('done', data)
                    },
                    error: function (data) {
                        console.log('error')
                    }
                })
                setTimeout(() => {
                    location.reload()
                }, 2000)
            }
        }
    }, 2200)
})()