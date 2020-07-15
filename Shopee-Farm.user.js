// ==UserScript==
// @name         Shopee Farm Every 2 Hours
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  try to take over the world!
// @author       You
// @match        https://games.shopee.co.th/
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Farm.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict'
    document.title = 'farm'
    var str = ""
    var jqry = document.createElement('script')
    jqry.src = "https://code.jquery.com/jquery-3.5.1.min.js"
    document.getElementsByTagName('head')[0].appendChild(jqry)
    setInterval(() => {
        farm()
    }, 1800000)

    setTimeout(() => {
        $('body').append('<textarea id="txt" style="width: 100%;height: 100%"></textarea>')
        console.log('ตั้งเวลา')
        echo('ตั้งเวลา')
        farm()
    }, 1000)
    setTimeout(() => {
        location.reload()
    }, 28800000)
})()
function echo(val = '') {
    document.getElementById("txt").value += "\n" + val

}
function farm() {
    /*$.get( "https://games.shopee.co.th/farm/api/friend/share_link/get", data => {
            console.log(data)
        })*/

    $.get("https://games.shopee.co.th/farm/api/orchard/context/get", data => {
        //console.log(data)
        var cropId = data.data.crops[0].id
        var resourceId = data.data.resources[0].id
        var water = data.data.resources[0].number
        var json = JSON.stringify({
            "cropId": cropId,
            "resourceId": resourceId
        })
        console.log('json', json)
        console.log('water', water)
        echo('มีน้ำเหลือ : ' + water)
        if (water > 0) {
            $.ajax({
                type: "POST",
                url: "https://games.shopee.co.th/farm/api/orchard/crop/water",
                data: json,
                contentType: "application/json charset=utf-8",
                dataType: "json",
                success: data => {
                    console.log(data)
                    console.log('รดน้ำ')
                    echo('รดน้ำ')
                },
                failure: errMsg => {
                    console.log(errMsg)
                    echo('รดไม่ได้อะ')
                }
            })
        }

    })
}