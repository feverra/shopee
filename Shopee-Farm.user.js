// ==UserScript==
// @name         Shopee Farm Every 2 Hours
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://games.shopee.co.th/
// @downloadURL  https://github.com/feverra/shopee/raw/master/Shopee-Farm.user.js
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
    document.title = 'farm';
    var jqry = document.createElement('script');
    jqry.src = "https://dmama.pwa.co.th/mis/demo/Javascript/Bootstrap/jquery-3.2.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(jqry);

    setInterval(() => {
        $.get("https://games.shopee.co.th/farm/api/friend/share_link/get", data => {
            console.log(data)
        });

        $.get("https://games.shopee.co.th/farm/api/orchard/context/get", data => {
            console.log(data);
            var cropId = data.data.crops[0].id
            var resourceId = data.data.resources[0].id
            var water = data.data.resources[0].number
            var json = JSON.stringify({
                "cropId": cropId,
                "resourceId": resourceId
            })
            console.log('json', json);
            console.log('water', water);
            if (water > 10) {
                $.ajax({
                    type: "POST",
                    url: "https://games.shopee.co.th/farm/api/orchard/crop/water",
                    data: json,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: data => { console.log(data); },
                    failure: errMsg => { console.log(errMsg); }
                });
            }
        })
    }, 7200000);
})();