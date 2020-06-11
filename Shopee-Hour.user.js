// ==UserScript==
// @name         Shopee hour
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://luckydraw.shopee.co.th/event/8905bbc3679ec3e6
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Hour.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
    setTimeout(() => {
        let str = document.getElementsByClassName('container pc')[0].children[0].textContent
        str = str.replace('คุณเหลือสิทธิ์เล่นอีก  ', '')
        str = str.replace(' ครั้ง', '')
        let count = parseInt(str)
        console.log(count)
        if (count == 0) {
            console.log('ตั้งเวลา');
            setTimeout(() => {
                location.reload()
            }, 3600000)
        } else {
            if (count >= 1) {
                $.ajax({
                    method: 'POST',
                    url: 'https://luckydraw.shopee.co.th/api/v1/luckydraw/8905bbc3679ec3e6/',
                    success: function (data) {
                        console.log('done', data)
                    },
                    error: function (data) {
                        console.log('error')
                    }
                });
                setTimeout(() => {
                    location.reload()
                }, 2000)
            }
        }
        
    }, 2200);

})();