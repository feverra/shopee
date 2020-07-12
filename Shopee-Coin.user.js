// ==UserScript==
// @name         Shopee Coin
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://shopee.co.th/shopee-coins
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Coin.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict'
    var jqry = document.createElement('script')
    jqry.src = "https://dmama.pwa.co.th/mis/demo/Javascript/Bootstrap/jquery-3.2.1.min.js"
    document.getElementsByTagName('head')[0].appendChild(jqry)

    setTimeout(() => {
        let btnText = document.getElementsByTagName('button')[1].textContent
        var x = btnText.indexOf("เช็คอินวันนี้")
        if (x > -1) {
            console.log('ยังไม่รับ')
            $.ajax({
                method: 'POST',
                url: 'https://shopee.co.th/mkt/coins/api/v2/checkin',
                success: data => {
                    console.log('done', data)
                    setTimeout(() => {
                        location.reload()
                    }, 1000)
                },
                error: data => {
                    console.log('error')
                }
            })
            setTimeout(() => {
                location.reload()
            }, 43200000)
        }
    }, 2000)

})()