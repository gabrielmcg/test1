/*
 * 
 * 
 * -meta---
 * version:    
 * builddate:  2015-08-01T15:20:05.507Z
 * generator:  interleave@0.5.24
 * 
 * 
 * 
 */ // req: 

    //${DEBUG}
/* SiteCatalyst code version: H.22.1.
 Copyright 1996-2011 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
 */
var hpmmd = (!window.hpmmd ? {type:'HP Legacy', page:{events:[]}, product:{}, user:{}, legacy:{}, promo:{}, version:"201108A"} : window.hpmmd); // Legacy Data Object
hpmmd.code = {version:"20150326A"};

(function () {
    var cookieKillList = [
        (/^(QSI_History.+)\=/)
    ];

    function fixCookies(maxLengthBeforeFixingCookies) {
        function killCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

        var cookie = document.cookie,
            hpComCookies = cookie.split("; ");
        if (cookie.length > maxLengthBeforeFixingCookies) {
            for (var j = 0, m = cookieKillList.length;
                 j < m && document.cookie.length > maxLengthBeforeFixingCookies;
                 j++) {
                for (var i = 0, l = hpComCookies.length;
                     i < l && document.cookie.length > maxLengthBeforeFixingCookies;
                     i++) {
                    var testResult = cookieKillList[j].exec(hpComCookies[i]);
                    if (testResult) {
                        killCookie(testResult[0]);
                    }
                }
            }
        }
    }

    fixCookies(6000);
    /*
     function testCondition1() {
     function setCookieset1() {

     document.cookie = "s_test1=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test2=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test3=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test4=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test5=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test6=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test7=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test8=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test9=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test10=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test11=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test12=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test13=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test14=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test15=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test16=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test17=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test18=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test19=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test20=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test21=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test22=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test23=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test24=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test25=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test26=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test27=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test28=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test29=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test30=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test41=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test42=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test43=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test44=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test45=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test46=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test47=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test48=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test49=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test50=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     }

     function setCookieset2() {

     document.cookie = "s_test51=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test52=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test53=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test54=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test55=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test56=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test57=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test58=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test59=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test60=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test61=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test62=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test63=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test64=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test65=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test66=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test67=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test68=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test69=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test70=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test71=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test72=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test73=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test74=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test75=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test76=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test77=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test78=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test79=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test80=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";

     document.cookie = "s_test81=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test82=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test83=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test84=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test85=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test86=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test87=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test88=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test89=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     document.cookie = "s_test90=32d37eb59a7c3735635db329adad86d7ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4ddbea519e4d03cfb96beb773e7745ed4";
     }

     cookieKillList.push(/^(s_test\d+)\=/);
     hpmmd.log.log("Start Test 1: Cookie size before test: " +document.cookie.length);
     setCookieset1();
     hpmmd.log.log("Test 1: Cookie size artificially high, testing trimming if no size adjustments are needed");
     fixCookies(8000);
     hpmmd.log.log("Test 1 Result: should be no more than 8000 characters: " +document.cookie.length);

     hpmmd.log.log("Start Test 2: Cookie size before: " +document.cookie.length);
     setCookieset1();
     hpmmd.log.log("Test 2: Cookie size artificially high, trimmed to at least 4000 characters");
     fixCookies(4000);
     hpmmd.log.log("Test 2 Result: Should be at least 4000 characters: " +document.cookie.length);

     hpmmd.log.log("Start Test 2: Cookie size before: " +document.cookie.length);
     setCookieset1();
     hpmmd.log.log("Test 2: Cookie size artificially high, trimmed to at least 2000 characters");
     fixCookies(2000);
     hpmmd.log.log("Test 2 Result: Should be at least 2000 characters: " +document.cookie.length);

     }
     testCondition1();
     */
})();


LazyLoad=function(e){var t,s,n={},r=0,a={css:[],js:[]},c=e.styleSheets;function i(t,s){var n=e.createElement(t),r;for(r in s){if(s.hasOwnProperty(r)){n.setAttribute(r,s[r])}}return n}function l(e){var t=n[e],s,c;if(t){s=t.callback;c=t.urls;c.shift();r=0;if(!c.length){s&&s.call(t.context,t.obj);n[e]=null;a[e].length&&f(e)}}}function o(){var s=navigator.userAgent;t={async:e.createElement("script").async===true};(t.webkit=/AppleWebKit\//.test(s))||(t.ie=/MSIE|Trident/.test(s))||(t.opera=/Opera/.test(s))||(t.gecko=/Gecko\//.test(s))||(t.unknown=true)}function f(r,c,f,g,y){var d=function(){l(r)},p=r==="css",b=[],k,m,v,j,w,T;t||o();if(c){c=typeof c==="string"?[c]:c.concat();if(p||t.async||t.gecko||t.opera){a[r].push({urls:c,callback:f,obj:g,context:y})}else{for(k=0,m=c.length;k<m;++k){a[r].push({urls:[c[k]],callback:k===m-1?f:null,obj:g,context:y})}}}if(n[r]||!(j=n[r]=a[r].shift())){return}s||(s=e.head||e.getElementsByTagName("head")[0]);w=j.urls;for(k=0,m=w.length;k<m;++k){T=w[k];if(p){v=t.gecko?i("style"):i("link",{href:T,rel:"stylesheet"})}else{v=i("script",{src:T});v.async=false}v.className="lazyload";v.setAttribute("charset","utf-8");if(t.ie&&!p&&"onreadystatechange"in v&&!("draggable"in v)){v.onreadystatechange=function(){if(/loaded|complete/.test(v.readyState)){v.onreadystatechange=null;d()}}}else if(p&&(t.gecko||t.webkit)){if(t.webkit){j.urls[k]=v.href;h()}else{v.innerHTML='@import "'+T+'";';u(v)}}else{v.onload=v.onerror=d}b.push(v)}for(k=0,m=b.length;k<m;++k){s.appendChild(b[k])}}function u(e){var t;try{t=!!e.sheet.cssRules}catch(s){r+=1;if(r<200){setTimeout(function(){u(e)},50)}else{t&&l("css")}return}l("css")}function h(){var e=n.css,t;if(e){t=c.length;while(--t>=0){if(c[t].href===e.urls[0]){l("css");break}}r+=1;if(e){if(r<200){setTimeout(h,50)}else{l("css")}}}}return{css:function(e,t,s,n){f("css",e,t,s,n)},js:function(e,t,s,n){f("js",e,t,s,n)}}}(this.document);

(function() {
    var w = window, d = document, isjQ = typeof (jQuery) != "undefined";
    window._domReady=window._domReady||{};
    var DomReady=window._domReady;
    if (!window._domReady.inject) {
        DomReady.inject = function(x) {/* Used to include other files on the page */
            if (d.getElementsByTagName) {
                var h = d.getElementsByTagName("head")[0], s = d.createElement("script");
                s.type = 'text/javascript';
                s.async = true;
                s.src = x;
                h.appendChild(s);
            }
        };
        DomReady.injectSmartScript = function(coreURL) {
            var isSSL = (window.location.protocol.toLowerCase().indexOf('https') != -1);
            if (isSSL && coreURL.indexOf("http:") != -1) {
                coreURL = coreURL.replace("http:", "https:");
                if (coreURL.indexOf("welcome.hp-ww.com") != -1) {
                    coreURL = coreURL.replace("welcome.hp-ww.com", "secure.hp-ww.com");
                }
            }
            DomReady.inject(coreURL);
        };
        DomReady.injectSmartScriptWhenReady = function(coreURL) {
            DomReady.ready(function() {
                _domReady.injectSmartScript(coreURL);
            });
        };
        DomReady.onload = function(f) {
            if ( typeof (f) != "function") {
                return;
            }
            if (w.addEventListener) {
                w.addEventListener("load", f, false);
            } else if (w.attachEvent) {
                w.attachEvent("onload", f);
            } else if (isjQ) {
                jQuery(w).load(f);
            }
            // jQuery
        };

    }
    // Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery.

    var userAgent = navigator.userAgent.toLowerCase();

    // Figure out what browser is being used
    var browser = {
        version : (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
        safari : /webkit/.test(userAgent),
        opera : /opera/.test(userAgent),
        msie : (/msie/.test(userAgent)) && (!/opera/.test(userAgent)),
        mozilla : (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent))
    };

    var readyBound = false;
    var isReady = false;
    var readyList = [];

    // Handle when the DOM is ready
    function domReady() {
        // Make sure that the DOM is not already loaded
        if (!isReady) {
            // Remember that the DOM is ready
            isReady = true;

            if (readyList) {
                for (var fn = 0; fn < readyList.length; fn++) {
                    readyList[fn].call(window, []);
                }

                readyList = [];
            }
        }
    }

    // From Simon Willison. A safe way to fire onload w/o screwing up everyone else.
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if ( typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            };
        }
    }

    // does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.
    function bindReady() {
        if (readyBound) {
            return;
        }

        readyBound = true;

        // Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
        if (document.addEventListener && !browser.opera) {
            // Use the handy event callback
            document.addEventListener("DOMContentLoaded", domReady, false);
        }

        // If IE is used and is not in a frame
        // Continually check to see if the document is ready
        if (browser.msie && window == top)
            (function() {
                if (isReady)
                    return;
                try {
                    // If IE is used, use the trick by Diego Perini
                    // http://javascript.nwbox.com/IEContentLoaded/
                    document.documentElement.doScroll("left");
                } catch(error) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                // and execute any waiting functions
                domReady();
            })();

        if (browser.opera) {
            document.addEventListener("DOMContentLoaded", function() {
                if (isReady)
                    return;
                for (var i = 0; i < document.styleSheets.length; i++)
                    if (document.styleSheets[i].disabled) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                // and execute any waiting functions
                domReady();
            }, false);
        }

        if (browser.safari) {
            var numStyles;
            (function() {
                if (isReady)
                    return;
                if (document.readyState != "loaded" && document.readyState != "complete") {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                if (numStyles === undefined) {
                    var links = document.getElementsByTagName("link");
                    for (var i = 0; i < links.length; i++) {
                        if (links[i].getAttribute('rel') == 'stylesheet') {
                            numStyles++;
                        }
                    }
                    var styles = document.getElementsByTagName("style");
                    numStyles += styles.length;
                }
                if (document.styleSheets.length != numStyles) {
                    setTimeout(arguments.callee, 0);
                    return;
                }

                // and execute any waiting functions
                domReady();
            })();
        }

        // A fallback to window.onload, that will always work
        addLoadEvent(domReady);
    }

    // This is the public function that people can use to hook up ready.
    DomReady.ready = function(fn, args) {
        // Attach the listeners
        bindReady();

        // If the DOM is already ready
        if (isReady) {
            // Execute the function immediately
            fn.call(window, []);
        } else {
            // Add the function to the wait list
            readyList.push(function() {
                return fn.call(window, []);
            });
        }
    };
    bindReady();
    DomReady.onReady = DomReady.ready;
})();



/* load the privacy cookie js */
function s_hp_doPrivacyCheck() {
    var results=(/hpeuck_prefs\=\d(\d)\d/).exec(document.cookie);
    if(!!results&&results.length>1) {
        if(results[1]==="0") { hpmmd.beacon_ignore=true; return true;}
    }
    return false;
}

(function () {
    function loadScript(url) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = url;
                    document.getElementsByTagName("head")[0].appendChild(script);
    }
    if(hpmmd.type.indexOf("Legacy")!==-1) {
        //load the privacy cookie js
        var jsScript,hpeuck_loaded=window.hpeuck_loaded||false;
        /*jslint vars: true */
        /* if(typeof hpeuck_loaded === 'undefined') {
                var hpeuck_loaded = false;
        } */
        /*jslint vars: false */
         
        if (document.location.protocol === "https:") {
                        jsScript = "https://ssl.www8.hp.com/uk/en/system/include/privacy_cookie.JS";
        } else {
                        jsScript = "http://www8.hp.com/uk/en/system/include/privacy_cookie.JS";
        }
        if(!hpeuck_loaded) {
          loadScript(jsScript);
        }
    }     

    /* if(hpmmd.type.indexOf("Legacy")!=-1) { 
        window.hpeuck_loaded=false;
        var jsScript;
        if (document.location.protocol == "https:") {
                        jsScript = "https://ssl.www8.hp.com/uk/en/system/include/privacy_cookie.JS";
        } else {
                        jsScript = "http://www8.hp.com/uk/en/system/include/privacy_cookie.JS"
        }
        if(!window.hpeuck_loaded) {
            LazyLoad.js(jsScript,function() {
                window.hpeuck_loaded = true;
                s_hp_doPrivacyCheck();
            });
        }
    } else { 
        s_hp_doPrivacyCheck();
    } */
   s_hp_doPrivacyCheck();
}());


hpmmd.stage = (function (srch) {
    function attach(a, suf) {
        return (a.indexOf(suf) != -1 ? a : a.replace(".js", suf + ".js"));
    }

    var r = {name:"pro", addSuffix:function (a) {
        return a;
    }};
    if ((/[\?\&]hpanalyticsitg\=/).test(srch)) {
        r = {name:"itg", addSuffix:function (a) {
            return attach(a, "_itg");
        }};
    }
    if ((/[\?\&]hpanalyticsdev\=/).test(srch)) {
        r = {name:"dev", addSuffix:function (a) {
            a = a.replace("www.hp.com","s3.amazonaws.com/hpcma/dev");
            a = a.replace("welcome.hp-ww.com","s3.amazonaws.com/hpcma/dev");
            a = a.replace("secure.hp-ww.com","s3.amazonaws.com/hpcma/dev");
            return attach(a, "_dev");
        }};
    }
    return r;
})(window.location.search || "");
hpmmd.log = function () {
};
var _mbootstrap;

/* if(window.location.href.indexOf("h41183.www4.hp.com/inflexion")!=-1) {  Inflextion: inclusion  
 _domReady.ready(function(){s_hp_includeJavaScriptFile(hpmmd.stage.addSuffix("http://www.hp.com/cma/ng/lib/abmvt/abmvt2.js"));});
 } */
/*  DFA and Survey Integration  */
hpmmd.omniture = {
    do_once:function (s) {
        /********************************************************************
         *
         * Supporting functions that may be shared between plug-ins
         *
         *******************************************************************/
        /*
         * Utility Function: vpr - set the variable vs with value v
         */
        s.vpr = new Function("vs", "v", "if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

        /*
         * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
         */
        s.split = new Function("l", "d", "" +
            "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

        /*
         * Plugin Utility: Replace v1.0
         */
        s.repl = new Function("x", "o", "n", "" +
            "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");

//        if (s.prop7 == "uk") {
//            window.dfaConfig = {
//                CSID: '1516691', /*  DFA Client Site ID */
//                SPOTID: '2326416', /*  DFA Spotlight ID */
//                tEvar: 'eVar58', /*  Transfer variable, typically the "View Through" eVar. */
//                errorEvar: 'eVar60', /*  DFA error tracking (optional) */
//                timeoutEvent: 'event51', /*  Tracks timeouts/empty responses (optional) */
//                requestURL: "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]", /*  the DFA request URL */
//                maxDelay: "2550", /*  The maximum time to wait for DFA servers to respond, in milliseconds. */
//                visitCookie: "s_dfa", /*  The name of the visitor cookie to use to restrict DFA calls to once per visit. */
//                clickThroughParam: "dfaid", /*  A query string paramter that will force the DFA call to occur. */
//                searchCenterParam: undefined, /*  SearchCenter identifier. */
//                newRsidsProp: undefined /* "prop34"  Stores the new report suites that need the DFA tracking code. (optional) */
//            };
//            /************************ END DFA Variables ************************/
//
//            s.maxDelay = dfaConfig.maxDelay;
//            s.loadModule("Integrate")
//            s.Integrate.onLoad = function(s, m){
//                var dfaCheck = s.partnerDFACheck(dfaConfig);
//                if (dfaCheck) {
//                    s.Integrate.add("DFA");
//                    s.Integrate.DFA.tEvar = dfaConfig.tEvar;
//                    s.Integrate.DFA.errorEvar = dfaConfig.errorEvar;
//                    s.Integrate.DFA.timeoutEvent = dfaConfig.timeoutEvent;
//                    s.Integrate.DFA.CSID = dfaConfig.CSID;
//                    s.Integrate.DFA.SPOTID = dfaConfig.SPOTID;
//                    s.Integrate.DFA.get(dfaConfig.requestURL);
//                    s.Integrate.DFA.setVars = function(s, p){
//                        if (window[p.VAR]) { /*  got a response */
//                            if (!p.ec) { /*  no errors */
//                                s[p.tEvar] = "DFA-" + (p.lis ? p.lis : 0) + "-" + (p.lip ? p.lip : 0) + "-" + (p.lastimp ? p.lastimp : 0) + "-" + (p.lastimptime ? p.lastimptime : 0) + "-" + (p.lcs ? p.lcs : 0) + "-" + (p.lcp ? p.lcp : 0) + "-" + (p.lastclk ? p.lastclk : 0) + "-" + (p.lastclktime ? p.lastclktime : 0)
//                            }
//                            else
//                                if (p.errorEvar) { /*  got an error response, track */
//                                    s[p.errorEvar] = p.ec;
//                                }
//                        }
//                        else
//                            if (p.timeoutEvent) { /*  empty response or timeout */
//                                s.events = ((!s.events || s.events == '') ? '' : (s.events + ',')) + p.timeoutEvent; /*  timeout event */
//                            }
//                    }
//                }
//            }
//
//            /*
//     * Partner Plugin: DFA Check 1.0 - Restrict DFA calls to once a visit, per report suite, per click
//     * through. Used in conjunction with VISTA. Deduplicates SCM hits.
//     */
//            s.partnerDFACheck = new Function("cfg", "" +
//            "var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new A" +
//            "rray;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);aa=s.split(s.un,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn" +
//            "]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}q=s.wd.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLow" +
//            "erCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}r" +
//            "eturn v>=1;");
//
//
//            /* Module: Integrate */
//            s.m_Integrate_c = "var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get" +
//            "=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]" +
//            "];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function" +
//            "(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*1000000000000" +
//            "0):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v)==p[x])u=" +
//            "s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule(" +
//            "'Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<" +
//            "m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[" +
//            "x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;i" +
//            "m=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
//            try {
//                window.s=s; s.m_i("Integrate"); delete(window.s);
//            } catch(e) {
//                /*  hpmmd.log("error","Omniture Module Load: Survey or Integrate:",e); */
//            }
//        }
//
//        s.m_Survey_c = "var m=s.m_i(\"Survey\");m.launch=function(i,e,c,o,f){this._boot();var m=this,g=window.s_sv_globals||{},l,j;if(g.unloaded||m._blocked())return 0;i=i&&i.constructor&&i.constructor==Array?" +
//        "i:[i];l=g.manualTriggers;for(j=0;j<i.length;++j)l[l.length]={l:m._suites,i:i[j],e:e||0,c:c||0,o:o||0,f:f||0};m._execute();return 1;};m.version = 10001;m._t=function(){this._boot();var m=this,s=m.s," +
//        "g=window.s_sv_globals||{},l,impr,i,k,impr={};if(m._blocked())return;for(i=0;i<s.va_t.length;i++){k=s.va_t[i];if(s[k]) impr[k]=s[k];}impr[\"l\"]=m._suites;impr[\"n\"]=impr[\"pageName\"]||\"\";impr[" +
//        "\"u\"]=impr[\"pageURL\"]||\"\";impr[\"c\"]=impr[\"campaign\"]||\"\";impr[\"r\"]=impr[\"referrer\"]||\"\";l=g.pageImpressions;if(l.length > 4) l[l.length - 4]=null;l[l.length]=impr;m._execute();};m." +
//        "_rr=function(){var g=window.s_sv_globals||{},f=g.onScQueueEmpty||0;if(f)f();};m._blocked=function(){var m=this,g=window.s_sv_globals||{};return !m._booted||g.stop||!g.pending&&!g.triggerRequested;}" +
//        ";m._execute=function(){if(s_sv_globals.execute)setTimeout(\"s_sv_globals.execute();\",0);};m._boot=function(){var m=this,s=m.s,w=window,g,c,d=s.dc,e=s.visitorNamespace,n=navigator.appName.toLowerCa" +
//        "se(),a=navigator.userAgent,v=navigator.appVersion,h,i,j,k,l,b;if(w.s_sv_globals)return;if(!((b=v.match(/AppleWebKit\\/([0-9]+)/))?521<b[1]:n==\"netscape\"?a.match(/gecko\\//i):(b=a.match(/opera[ \\" +
//        "/]?([0-9]+).[0-9]+/i))?7<b[1]:n==\"microsoft internet explorer\"&&!v.match(/macintosh/i)&&(b=v.match(/msie ([0-9]+).([0-9]+)/i))&&(5<b[1]||b[1]==5&&4<b[2])))return;g=w.s_sv_globals={};g.module=m;g." +
//        "pending=0;g.incomingLists=[];g.pageImpressions=[];g.manualTriggers=[];e=\"survey\";c=g.config={};m._param(c,\"dynamic_root\",(e?e+\".\":\"\")+d+\".2o7.net/survey/dynamic\");m._param(c,\"gather_root" +
//        "\",(e?e+\".\":\"\")+d+\".2o7.net/survey/gather\");g.url=location.protocol+\"//\"+c.dynamic_root;g.gatherUrl=location.protocol+\"//\"+c.gather_root;g.dataCenter=d;g.onListLoaded=new Function(\"r\"," +
//        "\"b\",\"d\",\"i\",\"l\",\"s_sv_globals.module._loaded(r,b,d,i,l);\");m._suites=(m.suites||s.un).toLowerCase().split(\",\");l=m._suites;b={};for(j=0;j<l.length;++j){i=l[j];if(i&&!b[i]){h=i.length;fo" +
//        "r(k=0;k<i.length;++k)h=(h&0x03ffffff)<<5^h>>26^i.charCodeAt(k);b[i]={url:g.url+\"/suites/\"+(h%251+100)+\"/\"+encodeURIComponent(i.replace(/\\|/,\"||\").replace(/\\//,\"|-\"))};++g.pending;}}g.suit" +
//        "es=b;setTimeout(\"s_sv_globals.module._load();\",0);m._booted=1;};m._param=function(c,n,v){var p=\"s_sv_\",w=window,u=\"undefined\";if(typeof c[n]==u)c[n]=typeof w[p+n]==u?v:w[p+n];};m._load=functi" +
//        "on(){var m=this,g=s_sv_globals,q=g.suites,r,i,n=\"s_sv_sid\",b=m.s.c_r(n);if(!b){b=parseInt((new Date()).getTime()*Math.random());m.s.c_w(n,b);}for(i in q){r=q[i];if(!r.requested){r.requested=1;m._" +
//        "script(r.url+\"/list.js?\"+b);}}};m._loaded=function(r,b,d,i,l){var m=this,g=s_sv_globals,n=g.incomingLists;--g.pending;if(!g.commonRevision){g.bulkRevision=b;g.commonRevision=r;g.commonUrl=g.url+" +
//        "\"/common/\"+b;}else if(g.commonRevision!=r)return;if(!l.length)return;n[n.length]={r:i,l:l};if(g.execute)g.execute();else if(!g.triggerRequested){g.triggerRequested=1;m._script(g.commonUrl+\"/trig" +
//        "ger.js\");}};m._script=function(u){var d=document,e=d.createElement(\"script\");e.type=\"text/javascript\";e.src=u;d.getElementsByTagName(\"head\")[0].appendChild(e);};if(m.onLoad)m.onLoad(s,m)";
//        s.m_i("Survey");
    }
};


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.3';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
+"fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
+"s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
+"rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
+"pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
+"(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
+"=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
+"_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
+"x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
+"r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+"oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
+"s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
+"('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
+"ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
+"ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
+"=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
+"(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window"
+".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
+"s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
+"(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
+"me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
+"=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
+"=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
+"e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
+"=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
+"bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
+"){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)"
+"&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)"
+"sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(s"
+"v)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk="
+"='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring("
+"0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv"
+"+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].tra"
+"ckEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.sub"
+"string(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';"
+"else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigra"
+"tionServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUp"
+"perCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='varia"
+"bleProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDep"
+"th')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connec"
+"tionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('"
+"c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else "
+"if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b="
+"='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=funct"
+"ion(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?"
+"t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=li"
+"f?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef'"
+",h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true"
+"');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||"
+"s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if"
+"(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.subs"
+"tring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toU"
+"pperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c"
+",n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),"
+"\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.s"
+"rc;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf('"
+",'+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&'"
+",'rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=functi"
+"on(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x i"
+"n s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q"
+"||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.leng"
+"th;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s"
+"=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'o"
+"nload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*="
+"100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,"
+"x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccoun"
+"tMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0"
+"?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substrin"
+"g(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in"
+"++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r"
+"._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._"
+"in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m."
+"_i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_"
+"l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if"
+"(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.lengt"
+"h;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+"
+"1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;"
+"b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.m"
+"axDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\""
+");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}r"
+"eturn o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};"
+"s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k]"
+"[x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)f"
+"or(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.d"
+"lt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250"
+";s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.ge"
+"tYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='"
+"',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&Str"
+"ing.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Funct"
+"ion('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'"
+"Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.doc"
+"umentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}cat"
+"ch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl"
+".length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight"
+"=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pag"
+"eURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,o"
+"c;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.ind"
+"exOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s."
+"linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o."
+"sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}"
+"else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s"
+".retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd"
+".s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.l"
+"ightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&"
+"&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s["
+"x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if"
+"(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLow"
+"erCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netsca"
+"pe6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netsc"
+"ape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s"
+".ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%"
+"C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,v"
+"isitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,"
+"retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s."
+"vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s."
+"vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaE"
+"nabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCo"
+"okieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlin"
+"eStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg="
+"pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functio"
+"n(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


/* ========================= BEGIN PACK SECTION ========================= */
var s_hp_searchEngineList = "bing.com,altavista,search.aol,ask.com,baidu.com,biglobe.,daum.net,eniro,excite.,goo.ne.jp,google.,infoseek.,go.com,kvasir.,live.com,msn.,myway.,naver.,search.netscape,virgilio.,web.de,yahoo,yandex.ru";
var s_hp_spamFilterList = "spvod.com,131.12.111.219.st.bbexcite.jp,194.12.111.219.st.bbexcite.jp,10.96.156.220.st.bbexcite.jp,164.1.111.219.st.bbexcite.jp";

var s_hp_enableBaynote = true;
/*  you can comment out this line and use locally to have control on enabling baynote */
var s_hp_enableTimeParting = true;
var h_url = window.location.href;



function s_sendCustomLinkEvent_Social(addlAccount, linkName) {
    linkName = "social: " + linkName;
    s_sendRawCustomLinkEvent(addlAccount, linkName, "o");
}
function s_sendCustomLinkEvent_PSC(addlAccount, linkName) {
    window.s_linkTrackVars = 'events,products';
    window.s_linkTrackEvents = 'scView,event15';
    s_sendRawCustomLinkEvent(addlAccount, linkName, "o");
}

function s_sendRawAnalyticsEvent(newAccount, myPageName) {
    if (!!hpmmd.beacon_ignore) {
        return;
    }
    var flag48 = false;
    /* Code part for Search Center Bounce Rate Implementation  */
    /* s.ActionDepthTest=true; 
     if (s.ActionDepthTest) {
     s.pdvalue = s.getActionDepth("s_depth");
     if (s.pdvalue == 1)
     s_events = s.apl(s_events, 'event47', ',', 2);
     if (s.pdvalue == 2) {
     var flag47 = s.inList ("event47",s_events);
     flag48=true;
     if (flag47){
     s_events = s.repl (s_events,"event47","event48");
     }
     else {
     s_events = s.apl(s_events, 'event48', ',', 2);
     }
     }
     }
     s.ActionDepthTest=false;  */

    if (newAccount != null && newAccount.length > 0 && (window.s_account && s_account.indexOf(newAccount) == -1)) {
        s_account += "," + newAccount;
    }
    mypn = myPageName != null ? myPageName : "";
    s = s_hp_doScreen();
    var temp_prop8 = window.s_prop8.substring(0, 2);
    var temp_pageName = "gw: " + window.s_prop7 + "/" + temp_prop8 + ": welcome";
    mypn = (mypn.indexOf(temp_pageName) != -1) ? mypn : mypn + s;
    window.s_pageName = mypn;
    if (window.s_hp_jumpid_path_prop && s_hp_jumpid_path_prop.indexOf('prop17') > -1) {
        window.s_prop17 = window.s_pageName;
    }
    if (window.s_hp_jumpid_path_prop && s_hp_jumpid_path_prop.indexOf('prop4') > -1) {
        window.s_prop4 = window.s_pageName;
    }
    var slnk;
    if ((window.s_events && window.s_events.length > 1)) {
        slnk = s_gi(s_account, 1);
    }
    else {
        slnk = s_gi(s_account);
    }
    slnk.pageName = mypn;
    hp_config_doSettings(slnk);

    if (!flag48 && (window.s_events && s_events.indexOf("event48") > -1)) {
        window.s_events = s_events.split("event48").join("");
        slnk.events = window.s_events;
    }
    /*  This part of code is to clean up additional "," & ",," within the event list */
    if (window.s_events.indexOf(",,") > -1) {
        window.s_events = window.s_events.split(',,').join(',');
    }
    if (window.s_events.charAt(0) == ',') {
        window.s_events = window.s_events.substring(1);
    }

    if (window.s_events) {
        var len = s_events.length;
        if (s_events.charAt(len - 1) == ',') {
            window.s_events = s_events.slice(0, -1);
        }
    }

    /* This part of code is to reset events and Product string once after the ajax call in ISCS Store */
    if (window.s_hp_resetVarList && window.s_hp_resetVarList != '') {
        s.products = "";
        s.events = "";
        s_products = "";
        s_events = "";
        slnk.products = "";
        slnk.events = "";
        window.s_hp_resetVarList = '';
    }
    slnk.t();

    if (window.s_events && s_events.indexOf("event48") > -1) {
        window.s_events = s_events.split("event48").join("");
        slnk.events = window.s_events;
    }
    if(!!window.doTandTIntegration) {
        doTandTIntegration(slnk.events||window.s_events,slnk.products||window.s_products,
            slnk.prop7||window.s_prop7, slnk.prop8||window.s_prop8, slnk.purchaseID||window.s_purchaseID);
    }
}

function s_sendRawCustomLinkEvent(newAccount, linkName, linkType) {
    if (!!hpmmd.beacon_ignore) {
        return;
    }
    if (newAccount != null && newAccount.length > 0 && (window.s_account && s_account.indexOf(newAccount) == -1)) {
        s_account += "," + newAccount;
    }
    s_hp_doScreen();
    window.s_pageName = "";
    slnk = s_gi(s_account);
    hp_config_doSettings(slnk);
    slnk.pageName = "";
    slnk.tl(this, linkType, linkName);
    if(!!window.doTandTIntegration) {
        doTandTIntegration(slnk.events||window.s_events,slnk.products||window.s_products,
            slnk.prop7||window.s_prop7, slnk.prop8||window.s_prop8, slnk.purchaseID||window.s_purchaseID);
    }
}
/* This function sets the campagin reference id value on each visit. */
function s_hp_apj_setCampaignRef(campVal) {
    s_vp_setSessionCookie("hpcampRef", campVal);
}

var s, s_eVar42;
if (s_doABTestPlugin(window.doABTest, "test") != true && !hpmmd.beacon_ignore) {
    /* Variable Initalization Function */
    s_hp_initSCodeVars();

    /* Social media optimization  */
    /*  s_hp_doSMOTagging(); */

    /* Build Persistent Segments & ABC Testing */
    s_hp_identPersistentSegment();

    /* Configure s_account and Dynamic Accounts */
    hp_config_dynamicAccount();

    // Fix all s.account values related to SMO
    window.smoObject =
        (function(global, account) {
        // Split report suites - these are known report suites that should be split
        var splitReportSuites = ["easybuy",
                "hpcsecamsussmbs",
                "hpcsecglobal", {
                    "re": (/hphqna(casmb|customeradv[^\,]+)?\,/i),
                    "replacePrefix": "hphqna"
                }, {
                    "re": (/hphqemea(emrt[^\,]+|smb[^\,]+|testeasybuy|uk)?\,/i),
                    "replacePrefix": "hphqemea"
                }, {
                    "re": (/hphqap(commercialesupport[^\,]+|jp|enterprise|onlinestore|smb)?/i),
                    "replacePrefix": "hphqap"
                },
                "hphqb2b",
                "hphqwweprime",
                "hphqwwdspp",
                "hphqwwcsn",
                "hphqwwsuresupply", "hphqaqueduct",
                "hphqtouchpoint", "hphqpsector", "hphqpublicsector", "hphqsmb"
            ],
    
            // HPE Assert Report Suites
            hpeAssertionCheck = ["hpcstsg,",
                "hphqwwesg",
                "hphqnaentmktg",
                "hphqmatter",
                "hphqstoragevision",
                "hphqstoragevisiondev",
                "hphqbcs",
                "hphqemeaprocurve",
                "hphqenterprisesolutions",
                "hphqescomsml",
                "hphqiss",
                "hphqcloudservices",
                "hphqcorpinfo",
                "hphqhpss",
                "hphqnacomprod",
                "hphqopenvms",
                "hphqwwnetworking",
                "hphqwwnonstop",
                "hphqwwswinfomgt"
            ];
    
    
        function fixReportSuites(account, splitArray, hpeAssertionCheck, decisionLevel) {
            // Decision levels:
            // - Level 0: Do nothing (pass through)
            // - Level 1: Only assert that the report suites are setup correct (consistency checks)
            // - Level 2: Fix and assert that the report suites are setup correct, replicate existing report suites
            // - Level 3: Fix and assert that the report suites are setup correct, only use new report suites
            var companyCodeLookup = document.getElementsByName("company_code"),
                companyCodeFound = companyCodeLookup.length > 0,
                websectionIdLookup = document.getElementsByName("web_section_id"),
                websectionId = websectionIdLookup.length > 0 ? websectionIdLookup[0].content : "unk-" + location.hostname,
                companyCode = companyCodeFound ? companyCodeLookup[0].content : "hpi", // Assume all non-HPE is HPI
                isHPi = (/.*hpi.*/i).test(companyCode),
                isHPe = !isHPi,
                prefixValue = isHPe ? "hpe-" : "hpi-",
                tmpAccount = account.toLowerCase(),
                decisionLevel = decisionLevel || 2, // Assume that we will fix and assert correctness by default
                assertionCheck = false; // Assume no assertion
    
            if (decisionLevel === 3) {
                tmpAccount += ",";
                for (var i = 0, l = splitArray.length; i < l; i++) {
                    if (!!splitArray[i].re) {
                        if (splitArray[i].re.test(tmpAccount)) {
                            tmpAccount = tmpAccount.replace(new RegExp(splitArray[i].replacePrefix, "ig"), prefixValue + splitArray[i].replacePrefix);
                        }
                    } else {
                        tmpAccount = tmpAccount.replace(new RegExp(splitArray[i], "ig"), prefixValue + splitArray[i]);
                    }
                }
                if (isHPe && tmpAccount.indexOf("hpcstsg") === -1) {
                    tmpAccount = tmpAccount.replace("hphqglobal", "hphqglobal,hpcstsg");
                }
                // Other cleanup
                tmpAccount = tmpAccount.replace(/(hpcsglobal|hpcsamerus)/ig, "");
                tmpAccount = tmpAccount.replace(/[\,]+/ig, ",");
            }
            if (decisionLevel === 2) {
                var iterateTmpAccount = tmpAccount.split(",");
                for (var h = 0, m = iterateTmpAccount.length; h < m && iterateTmpAccount[h].indexOf(prefixValue) === -1; h++) {
                    var previousAccountPart = iterateTmpAccount[h];
                    iterateTmpAccount[h] += ",";
                    for (var i = 0, l = splitArray.length; i < l; i++) {
                        if (!!splitArray[i].re) {
                            if (splitArray[i].re.test(iterateTmpAccount[h])) {
                                iterateTmpAccount[h] = iterateTmpAccount[h].replace(new RegExp(splitArray[i].replacePrefix, "ig"), prefixValue + splitArray[i].replacePrefix);
                                iterateTmpAccount[h] += "," + previousAccountPart;
                            }
                        } else {
                            var tmpRegex = new RegExp(splitArray[i], "ig");
                            if (tmpRegex.test(iterateTmpAccount[h])) {
                                iterateTmpAccount[h] = iterateTmpAccount[h].replace(tmpRegex, prefixValue + splitArray[i]);
                                iterateTmpAccount[h] += "," + previousAccountPart;
                            }
                        }
                    }
                }
                tmpAccount = iterateTmpAccount.join(",");
                if (isHPe && tmpAccount.indexOf("hpcstsg") === -1) {
                    tmpAccount = tmpAccount.replace("hphqglobal", "hphqglobal,hpcstsg");
                }
                // Other cleanup - remove extra report suites and kill all the extra commas
                tmpAccount = tmpAccount.replace(/(hpcsglobal|hpcsamerus)/ig, "");
                tmpAccount = tmpAccount.replace(/[\,]+/ig, ",");
            }
            if (decisionLevel > 0) {
                assertionCheck = assertionCheck || (isHPi && tmpAccount.indexOf("hpcstsg") !== -1); // HPi, but contains hpcstsg rollup report suites
                assertionCheck = assertionCheck || (isHPe && tmpAccount.indexOf("hpcstsg") === -1); // HPe, but is missing hpcstsg rollup report suites
                assertionCheck = assertionCheck || (isHPi && tmpAccount.indexOf("hpe-") !== -1); // HPi, but contains hpe- report suites
                assertionCheck = assertionCheck || (isHPe && tmpAccount.indexOf("hpi-") !== -1); // Enterprise, but contains hpi- report suites
                for (var i = 0, l = hpeAssertionCheck.length; i < l && assertionCheck == false; i++) {
                    assertionCheck = assertionCheck || (isHPi && tmpAccount.indexOf(hpeAssertionCheck[i]) !== -1);
                }
            }
            return {
                "account": tmpAccount.replace(/\,$/, ""),
                "companycode_found": companyCodeFound,
                "assertionCheck": assertionCheck,
                "web_section_id": websectionId.toLowerCase()
            };
        }
        return fixReportSuites(account, splitReportSuites, hpeAssertionCheck);
    })(typeof(window) !== "undefined" ? window : global, window.s_account);
    window.s_account = smoObject.account;
    window.s_prop13 = window.s_account;
    
    // (function(smoObject) {
    //     s.prop17 = "SMO Debug: found=" + smoObject.companycode_found +
    //         ",rsErrorCheck=" + smoObject.assertionCheck +
    //         ",websection=" + smoObject.web_section_id;
    
    // })(window.smoObject);
    

    /* Get Omniture Instance */
    s = s_gi(s_account, 1);
    /* This part of code inclues FPC for Philippines */
    s.trackingServer = "met1.hp.com";
    s.trackingServerSecure = "met2.hp.com";
    if (window.s_account != null && s_account.indexOf("eprime") == -1) {
        s.vmk = "4A466CB3";
    }

    if (s_account.indexOf("hphqnahpshopping") == -1) {
        if (s_prop12 != null && s_prop12.length > 0) {
            s_vp_setSessionCookie("prop12", s_prop12);
        }
    } else {
        x = s_vp_readCookie("prop12");
        s_eVar42 = x.length > 0 ? x : "HHOStore";
    }

    /* Set Omniture Variables after Instance is configured  */
    hp_config_doSettings(s);
    s_vp_setHCodePlugins();

    /* DFA and Survey Integration:  */
    if (typeof(hpmmd.omniture.do_once) == "function") {
        hpmmd.omniture.do_once(s);
    }

    /*  Do jumpid processing & message block work */
    /* Added to Retrieve Jumpid */
    aoid=s.getQueryParam("aoid");
    if(aoid.length>0 && !(s.campaign!=null && s.campaign.length>0)) {
    s.campaign=aoid;
    }
    
    if(!!s.getQueryParam("gclid")){
        s_eVar54 = s.getQueryParam("gclid");
    }
    s_hp_jumpIdProcessing(s);
    s_hp_doUserIdentity();
    s_hp_captureMTXClicks();
    s_hp_doSearchCenterSettings();
    s_hp_doGeoRedirectCheck();

    s_hp_setBouceRateEvent();

    /* Do User Defined Plugins */
    s_doPlugins();
    s.dc = "112";
    /*  This part of code disables traffic if the referrer is a Spam */
    var s_hp_disableSpamTraffic = s_hp_checkReferrer(s_hp_spamFilterList);
    if (s_hp_disableSpamTraffic) {
        window.s_hp_optOut = true;
    }
    /* Code Version Setting */
    var tver = hpmmd.version || "ERROR", cver = hpmmd.code.version || "ERROR";
    tver = (tver.indexOf("WASH") != -1 ? "wash" : "legacy-" + tver);
    s.prop22 = tver + ":js-" + cver;
    window.s_prop22 = s.prop22;

    (function (w, s) {
        function readCookie(c) {
            var unescape = (typeof(unescape) == "function" ? unescape : decodeURIComponent),
                r = new RegExp(c + "\\=([^\\;]+)"),
                found = r.exec(document.cookie);
            return found ? unescape(found[1]) : null
        }
    
        var numberOfCheckTimes = 2;
    
        function latentFindBluekaiId() {
            if (--numberOfCheckTimes <= 0) {
                return;
            }
            if (!!w._bluekai_guid) {
                try {
                    document.cookie = "bkguid=" + w._bluekai_guid + ";domain=.hp.com;path=/";
                }
                catch (e) {
                }
            } else {
                setTimeout(latentFindBluekaiId, 5000);
            }
        }
    
        var bluekaiId = w._bluekai_guid || readCookie("bkguid");
        if (!!bluekaiId) {
            s.prop71 = "bkguid:" + unescape(bluekaiId);
        } else {
            setTimeout(latentFindBluekaiId, 2000);
        }
    })(window, s);


    if(s.prop9){
        //Check if segment metatag exist, read from it if not check the dictionary value
        var segment = (document.getElementsByName('segment').length>0)?document.getElementsByName('segment')[0].content.toLowerCase():hpmmd.page.segment || window.s_prop9;
        switch(segment.toLowerCase().replace(/^\s+|\s+$/g, '')){
            case "hhos":
            case "hho":
            case "consumer.home":
            case "commercial.hho":
            case "consumer":
            case "consumer-public":
                segment = "consumer.home";
            break;
            case "smb":
            case "smbs":
            case "commercial.smb":
                segment = "commercial.smb";
            break;
            case "leb":
            case "commercial.large":
            case "commercial.b2b":
                segment = "commercial.large";
            break;
            case "ga":
            case "commercial.ga":
                segment = "commercial.ga";
            break;
            case "ghe":
            case "commercial.pubsector":
                segment = "commercial.pubsector";
            break;
            case "segment neutral":
                segment = "segment neutral";
            break;
            case "partner":
            case "partners":
                segment = "partners";
            break;
            case "corporate":
                segment = "corporate";
            break;
            default:
                segment = "undefined segment";
    
        }
        s.prop9 = window.s_prop9 = segment;
    }
    
    hpmmd.page.country = s.prop7 || window.s_prop7;
    hpmmd.page.segment = s.prop9 || window.s_prop9;

    /* Metadata Addition for BlueKai: set scView event on all Cart View conditions in legacy, CS, and Atlas */
    (function (country, url, s) {
        if (url.indexOf("cart") != -1) {
            hpmmd.bluekai = {name:s.pageName || window.location.pathname};
            if ((/cart\/basket\.asp/i).test(url) || (/dcart\/cart\.asp/i).test(url) ||
                (/shopping\/cart_detail.do\?[^\=]+\=checkout/).test(url) ||
                (/shopping\/cart_detail.do\?pageLink\=true\&bvLoadCart\=1\&action\=add\&disp_msg\=0/).test(url)) {
                /* s.events = eStackPush("scView",s.events); */
                hpmmd.bluekai.isCart = true;
            }
        }
    })(hpmmd.page.country, window.location.href, s);

    hpmmd.omniture = {events:s.events, object:s};

    /* Do Omniture Beacon Call */
    var s_code;
    if (!(window.s_hp_optOut && window.s_hp_optOut == true)) {
        var seg = s.c_r("hp_last_segment") || "";
        seg = (seg.length > 0 ? seg.toLowerCase() : "noseg");
        s_prop21 = 'D="cs:' + seg;
        try {
            (function(smoObject) {
                s.prop17 = "SMO Debug: found=" + smoObject.companycode_found +
                    ",rsErrorCheck=" + smoObject.assertionCheck +
                    ",websection=" + smoObject.web_section_id;
                s.prop17 = s.prop17.replace("Debug", "Debug:hpanalytics static");
            })(window.smoObject);
        } catch (e) {}
        s_code = s.t();
    }

    (function includeCSFiles(cc) {
        if (window.s_account.indexOf("hphqmobile") == -1 && window.s_account.indexOf("hphqwweprime") == -1 && !/(GermanyStore|FranceStore|SwedenStore|SpainStore|SwitzerlandStore|ItalyStore|NetherlandsStore)/gi.test(window.location.href)) {
            s_hp_includeJavaScriptFile(hpmmd.stage.addSuffix("http://welcome.hp-ww.com/cma/ng/lib/bluekai/hpbluekai.js"));
        }
        var ipgPhoto = s_vp_readCookie("ipgPhoto");
        /* IPG Photo Engagement - include mbox.js as needed until satisfied */
        /* if(cc=="us" && ipgPhoto=="0") {
         s_hp_includeJavaScriptFile("http://www.hp.com/cma/ng/lib/abmvt/abmvt2.js");
         } */
    })(hpmmd.page.country);
} else {
    window.s_hp_optOut = true;
}

if(typeof(s)!=="undefined"){
(function doBlueKai(cc, pn, ev) {

    if (navigator.userAgent.indexOf("MSIE ") != -1) {
        return;
    }
    /*  Don't execute on IE browsers */
    var inflag = true, pageNamefilters = [(/cs:.+home/), (/gw\:.+welcome.*/)];
    var isssl = (window.location.protocol.indexOf("https") != -1 ? true : false);
    var urlFilters = [(/\/webapp\/shopping\/cart_detail\.do/)];
    for (i = pageNamefilters.length - 1; i >= 0; i--) {
        if (pageNamefilters[i].exec(pn) !== null) {
            inflag = false;
        }
    }
    for (i = urlFilters.length - 1; i >= 0; i--) {
        if (urlFilters[i].exec(window.location.href) !== null) {
            inflag = false;
        }
    }
    if (ev.indexOf("sc") != -1 || ev.indexOf("purchase") != -1) {
        inflag = false;
    }
})(s.prop7 || "", s.pageName || "", s.events || "");
}



/* ------- HP Functions ------- */
var s_hp_region, s_prop7, s_prop8, s_prop9, s_prop10, s_prop12, s_prop14, s_pageName, s_hp_apj_pageName, s_prop3;
function s_hp_initSCodeVars() {
    s_hp_scrapeMetaTags();
    if (window.s_pageType && window.s_pageType.toLowerCase().indexOf("error") != -1) {
        window.s_pageType = "errorPage";
        window.s_pageName = "";
    }
    if (!(window.s_hp_region != null && s_hp_region.length > 0)) {
        switch (s_prop7.toLowerCase()) {
            case "us":
            case "ca":
                s_hp_region = "na";
                break;
            case "kr":
            case "cn":
            case "jp":
            case "tw":
            case "au":
            case "hk":
            case "sg":
            case "in":
            case "th":
            case "nz":
            case "my":
            case "ph":
            case "vn":
            case "id":
                s_hp_region = "ap";
                break;
            case "de":
            case "fr":
            case "es":
            case "uk":
            case "nl":
            case "it":
            case "pl":
            case "se":
            case "be":
            case "dk":
            case "ch":
            case "pt":
            case "ru":
            case "no":
            case "at":
            case "fi":
            case "cz":
            case "tr":
            case "hu":
            case "il":
            case "gr":
            case "za":
            case "ie":
            case "sk":
            case "ro":
            case "ua":
            case "gb":
            case "sa":
            case "emea_africa":
            case "emea_middle_east":
                s_hp_region = "emea";
                break;
            case "lamerica_nsc_carib":
            case "lamerica_nsc_cnt_amer":
            case "br":
            case "mx":
            case "ar":
            case "co":
            case "cl":
            case "ve":
            case "pe":
            case "pr":
            case "ec":
            case "ns":
            case "bo":
            case "uy":
            case "sv":
            case "py":
            case "hn":
                s_hp_region = "la";
                break;
            default:
                s_hp_region = "";
        }
    }
    if (!(window.s_prop10 && s_prop10.length > 0)) s_prop10 = s_prop7 + "|" + s_prop8 + "|" + s_prop9;

    /* Do conditional post-meta tag functions */
    if (window.s_hp_doPostMetaTagFunction) s_hp_doPostMetaTagFunction();

    if (s_hp_region.indexOf("emea") != -1) {
        /* adding the error value and websection id to contact */
        if (s_prop14) {
            s_prop14 = s_prop14 + " - " + s_prop12
        }
    }
    if (s_hp_region.indexOf("ap") != -1) {
        if (!(window.s_pageName && window.s_pageName.length > 0)) {
            if (!(window.s_hp_apj_pageName && window.s_hp_apj_pageName.length > 0)) {
                s_hp_apj_pageName = document.title;
            }
            if (!(window.s_pageType && window.s_pageType.toLowerCase().indexOf("error") != -1)) {
                s_pageName = s_prop7 + "|" + s_prop8 + "|" + s_prop3 + "|" + s_hp_apj_pageName;
            }
        }
        /*  this is to duplicate the value of prop2 in eVar9 for compaign reference requested by liviu edited by Pradeep SV */
        if (window.s_hp_apj_campaignRef && window.s_hp_apj_campaignRef.length > 0) {
            s_eVar9 = "campaign:" + s_prop7 + "|" + s_prop8 + "|" + s_hp_apj_campaignRef + "||";
        } else {
            t_crid = s_vp_readCookie("hpcampRef");
            if (t_crid && t_crid.length > 0) {
                s_eVar9 = "cpath:" + s_prop7 + "|" + s_prop8 + "|" + t_crid + "||";
            }
        }
    }
    seg = s_vp_readCookie("hp_cust_seg_sel");
    window.s_prop22 = "";
    if (seg != null && seg.length > 0) {
        window.s_prop22 = seg.toLowerCase();
    } else {
        window.s_prop22 = "noseg";
    }
    window.s_eVar13 = "";
    s_hp_doScreen();
    if (window.s_hp_doHHOSReferrerGrouping != null) {
        s_hp_doHHOSReferrerGrouping();
    }
    if (window.location.hostname.indexOf("support.openview.hp.com") != -1) {
        s_prop12 = window.s_prop12 || "r1207";
    }
}

function s_hp_doScreen() {
    var wpn = window.s_pageName != null ? window.s_pageName : "";
    var wps = window.s_screen != null ? window.s_screen : "";
    window.s_prop21 = window.s_prop22 + "|";
    if (wpn.length > 3) {
        window.s_prop21 += wpn;
        if (wps.length > 0) {
            window.s_prop21 += ": s=" + wps;
        }
        if (wpn.indexOf("gw:") != -1 && wpn.indexOf("welcome") != -1) {
            window.s_eVar25 = window.s_prop21;
            if (wps.indexOf("explore") != -1 || wps.indexOf("support") != -1) {
                if (window.s_prop21 != null && window.s_prop21.length > 4) {
                    window.s_eVar13 = window.s_prop21;
                }
            } else {
                window.s_eVar13 = "";
            }
        }
    } else {
        window.s_prop21 += window.location.hostname + window.location.pathname;
    }
    return wps != null && wps.length > 0 ? ": s=" + wps : "";
}

function hp_config_dynamicAccount() {
    var hp_wsa = window.s_account;

    if (window.s_dynamicAccountSelection && s_dynamicAccountSelection == true &&
        window.s_dynamicAccountList && s_dynamicAccountList.length > 0) {
        if (!(window.s_dynamicAccountMatch && s_dynamicAccountMatch.length > 0)) {
            s_dynamicAccountMatch = window.location.hostname
        }
        dal = s_dynamicAccountList.toLowerCase();
        dam = s_dynamicAccountMatch.toLowerCase();
        v = dal.split(";");
        for (i = 0; i < v.length; i++) {
            w = v[i].split("=");
            if (w.length == 2) {
                x = w[1].split(",");
                for (j = 0; j < x.length; j++) {
                    if (dam.indexOf(x[j]) != -1) {
                        hp_wsa = w[0];
                    }
                }
            }
        }
    }
    if (!(hp_wsa != null && hp_wsa.length > 0)) {
        hp_wsa = "hphqglobal";
    } else {
        hp_wsa = hp_wsa.toLowerCase();
        if ((hp_wsa.indexOf("devhphq") == -1 && hp_wsa.indexOf("hphqintraathp") == -1 && hp_wsa.indexOf("hphqsearch") == -1) && hp_wsa.indexOf('hphqglobal') == -1 && hp_wsa.indexOf('hphqqatestap') == -1 && window.s_hp_isException == null) {
            hp_wsa = "hphqglobal," + hp_wsa;
        }
    }
    hp_wsa = s_hp_abcTest(hp_wsa);
    if (s_hp_region.indexOf("ap") != -1 && hp_wsa.indexOf("hphqap") == -1 && hp_wsa.indexOf('hphqqatestap') == -1 && window.s_hp_isException == null) {
        hp_wsa += ",hphqap"
    }
    hp_wsa = s_hp_buildPersistentSegment("semapj", hp_wsa, "hphqapsem");
    /* hp_wsa = s_hp_buildPersistentSegment("tsgsc",hp_wsa,"hphqglobalsctest"); */
    hp_wsa = s_hp_buildPersistentSegment("agencyzo", hp_wsa, "hphqwwzoall");
    /* This part of code is commented as requested by Tyrone - 20110301 */
    /* hp_wsa = s_hp_buildPersistentSegment("nstrafficseg",hp_wsa,"hphqextsearch"); */

    hp_wsa = s_hp_vistaTest(hp_wsa);
    hp_wsa = s_hp_classifyEB(hp_wsa);

    /*  This part of code is to update mobile domain visitors to another mobile reportsuite */
    if ((window.s_hp_WAPSite && s_hp_WAPSite == true) || h_url.indexOf("h41105.www4.hp.com") > -1) {
        hp_wsa += ",hphqmobile";
    }

    /*  Override: */
    if (typeof(window.s_account_override) != "undefined") {
        hp_wsa = window.s_account_override;
    }
    if(window.s_account.indexOf("hphqwwsuresupply")!==-1){
        window.s_account = window.s_account.replace("hphqglobal,","");
        window.s_account = window.s_account.replace(",hphqglobal","");
        hp_wsa = window.s_account;
    }

    window.s_prop13 = hp_wsa;
    window.s_account = hp_wsa;
    if (window.s_addAccount != null) {
        window.s_account = window.s_account + "," + s_addAccount;
    }
    
}

function hp_config_doSettings(mys) {
    mys.visitorNamespace = "hpcorp";
    mys.dynamicAccountSelection = false;
    if (window.s_trackDownloadLinks) {
        mys.trackDownloadLinks = s_trackDownloadLinks;
    } else {
        mys.trackDownloadLinks = true;
    }
    if (window.s_trackExternalLinks) {
        mys.trackExternalLinks = s_trackExternalLinks;
    } else {
        mys.trackExternalLinks = true;
    }
    mys.trackInlineStats = true;
    if (window.s_linkDownloadFileTypes) {
        mys.linkDownloadFileTypes = s_linkDownloadFileTypes;
    } else {
        mys.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
    }
    if (window.s_linkInternalFilters) {
        mys.linkInternalFilters = s_linkInternalFilters;
    } else {
        mys.linkInternalFilters = "javascript:,hp.,.hp,compaq.,.compaq";
    }
    mys.linkInternalFilters += (mys.linkInternalFilters.indexOf("hp.,.hp") == -1 ? ",hp.,.hp,compaq.,.compaq" : "");
    if (window.s_linkLeaveQueryString) {
        mys.linkLeaveQueryString = s_linkLeaveQueryString;
    } else {
        mys.linkLeaveQueryString = false;
    }
    if (window.s_linkTrackVars) {
        mys.linkTrackVars = s_linkTrackVars;
    } else {
        mys.linkTrackVars = "None";
    }
    if (window.s_linkTrackEvents) {
        mys.linkTrackEvents = s_linkTrackEvents;
    } else {
        mys.linkTrackEvents = "None";
    }
    if (window.s_charSet) {
        mys.charSet = s_charSet
    } else {
        mys.charSet = "UTF-8";
    }
    mys.eVar13 = "";
    /* if(window.s_events) {mys.s_events=window.s_events;delete window.s_events;} */
}
/* MetaTag code, V2.0 */
var s_prop7, s_prop8, s_prop9, s_prop12;
function s_hp_scrapeMetaTags() {
    if (document.getElementsByTagName) {
        if (!(window.s_prop8 && s_prop8.length > 0)) {
            window.s_prop8 = window.document.documentElement.lang;
        }
        var allMyStuff = document.getElementsByTagName("META");
        var myMeta;
        var myVariableNames;
        var myVariableMap = new Array();
        if (!(window.s_prop7 && s_prop7.length > 0)) {
            myVariableMap["target_country"] = "s_prop7";
        }
        if (!(window.s_prop12 && s_prop12.length > 0)) {
            myVariableMap["web_section_id"] = "s_prop12";
        }
        if (!(window.s_prop9 && s_prop9.length > 0)) {
            myVariableMap["segment"] = "s_prop9";
        }
        myVariableMap["PageType"] = "s_pageType";
        hpmmd.metatags = hpmmd.metatags || {};
        for (var i = 0; i < allMyStuff.length; i++) {
            myMeta = allMyStuff[i];
            myContent = myMeta.content.toLowerCase();
            hpmmd.metatags[myMeta.name] = myContent;
            if (myVariableMap[myMeta.name] != null) {
                window[myVariableMap[myMeta.name]] = myContent;
            } else {
                if (myContent.indexOf("charset") != -1 && !(window.s_charSet && s_charSet.length > 0)) {
                    myCharSetArray = myContent.split("rset=");
                    window.s_charSet = myCharSetArray[1].toUpperCase();
                }
            }
        }
    }
    if (!(window.s_prop7 && s_prop7.length > 0)) {
        s_prop7 = "undef";
    }
    if (!(window.s_prop8 && s_prop8.length > 0)) {
        s_prop8 = "undef";
    }
    if (!(window.s_prop9 && s_prop9.length > 0)) {
        s_prop9 = "undef";
    }
    if (!(window.s_prop12 && s_prop12.length > 0)) {
        s_prop12 = "undef:" + window.location.hostname + window.location.pathname;
    }
}
function s_hp_doSearchCenterSettings() {
    var wsa = window.s_account;
    var wlh = window.location.href != null ? window.location.href.toLowerCase() : "";

    if (wsa.indexOf("hphqwwesg") != -1 || wsa.indexOf("hphqnaentmktg") != -1 || wsa.indexOf("hphqwwopenviewgmgmtsw") != -1 || wlh.indexOf("/formlab/") != -1 || wlh.indexOf("/promo/imhub/registration/") != -1) {
        function hp_popFind(a, obj) {
            var i = a.length;
            while (i--) {
                if (a[i].length < 3) {
                    a.splice(i, 1);
                }
                if (a[i] === obj) {
                    a.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        var wpn = window.s_pageName != null ? window.s_pageName.toLowerCase().split("/").join("|") : "";
        var evt = (window.s_events != null ? window.s_events : "").split(",");
        var reg = false;
        var dow = false;
        if (wlh.indexOf("/promo/imhub/registration/") != -1) {
            reg = true;
        }
        if (wpn.indexOf("promo|") != -1 || wpn.indexOf("campaigns|") != -1) {
            if (wpn.indexOf("|thanks") != -1) {
                reg = true
            }
            ;
        }
        if (wpn.indexOf("|regist") != -1 && wpn.indexOf("|thank") != -1) {
            reg = true;
        }
        if (wpn.indexOf("litserv:") != -1 && wpn.indexOf("download|") != -1) {
            dow = true;
        }

        /* This part of code is added to trigger both event7 and 8 if its registration thank you page from formlab */
        if (wlh.indexOf("h50043.www5.hp.com") > -1 && wlh.indexOf("thankyoupage.aspx") > -1) {
            reg = true;
            dow = true;
        }

        if (hp_popFind(evt, "event7")) {
            dow = true;
        }
        if (hp_popFind(evt, "event8")) {
            reg = true;
        }

        if (dow == true) {
            addevt1 = s.getValOnce("e71" + wsa, "hptsg1", 1);
            addevt1.length > 0 ? evt.push("event71") : evt;
            evt.push("event7");
            s.prop48 = window.location.href;
            s.prop49 = wpn.length > 0 ? s_prop7 + ":" + s_prop8 + ":" + s_prop12 + ":" + wpn : s_prop7 + ":" + s_prop8 + ":" + s_prop12 + ":" + s.prop48;
        }
        if (reg == true) {
            addevt1 = s.getValOnce("e70" + wsa, "hptsg2", 1);
            addevt1.length > 0 ? evt.push("event70") : evt;
            evt.push("event8");
            s.prop48 = window.location.href;
            s.prop49 = wpn.length > 0 ? s_prop7 + ":" + s_prop8 + ":" + s_prop12 + ":" + wpn : s_prop7 + ":" + s_prop8 + ":" + s_prop12 + ":" + s.prop48;
        }
        window.s_events = evt.join(",");
        s.events = window.s_events;
    }
}
function s_hp_doUserIdentity() {
    /* SMB site email ID code  - captures e-mail identy in eVar10 */
    s_hp_emid = window.s_hp_emid || "dimid";
    s_hp_autoemcid = window.s_hp_autoemcid || "dicid";
    if (s_hp_emid && s_hp_emid.length > 0) {
        t_emcid = s.getQueryParam(s_hp_autoemcid);
        t_emid = s_vp_readCookie("EMID");
        if (!(t_emid && t_emid.length > 0)) {
            t_emid = s.getQueryParam(s_hp_emid);
            s_vp_setPersistentCookieExact("EMID", t_emid, 90);
        }
        if (t_emid && t_emid.length > 0) {
            s.eVar10 = ("EMID:" + t_emid + "|" + t_emcid).toLowerCase();
            if (window.s_pageName && s_pageName.length > 0) {
                s.prop24 = s.eVar10 + "|" + "t_emcid" + "|" + s_pageName;
            } else {
                s.prop24 = s.eVar10 + "|" + "t_emcid" + "|" + window.location.hostname + window.location.pathname;
            }
            s.prop24 = s.prop24.toLowerCase();
            if (t_emcid && t_emcid.length > 0) {
                s.eVar22 = "em_auto_" + t_emcid;
            }
        }
    }

    /* HHOS Newsletter tracking code  - captures the user identifier in eVar10 for analysis */
    hhosnl_value = s.getQueryParam("hhosnl").toLowerCase();
    if (hhosnl_value && hhosnl_value.length > 0) {
        s.eVar10 = "HHOSNL|" + hhosnl_value;
    }
}
/* Link Tracking Code: Store object ID: Legacy */
function s_hp_fixObjectID(objid) {
    /* Check to see if we're on the home page AND if the link is an SMB store link to shopping1.hp.com */
    var i, doi = false, o = objid.toLowerCase();
    // if (o.indexOf("gw/us/en/welcomeov2/smb") != -1) {
    //     setupsearch = "laptop:desktop:monitor:workstation:handheld:scanners:atlas-link".split(":");
    //     for (i = setupsearch.length - 1; i >= 0; i--) {
    //         doi = doi || (o.indexOf(setupsearch[i]) != -1);
    //         /*  If we find a link, then we set it as true */
    //     }
    //     if (doi) { /* Do immediate call with eVar13 set */
    //         var smbi = s_gi("hphqglobal,hphqna,hphqsmbrollup,hphqsmbmktg,hphqsmbstore");
    //         smbi.linkTrackVars = "eVar13";
    //         smbi.eVar13 = o;
    //         smbi.tl(this, "o", "US:Legacy Home Page:eVar13 immediate call");
    //         return;
    //     }
    // }
    objid = objid.split("&").join(" ");
    var pn = window.s_pageName != null ? window.s_pageName : "";
    v = escape("&pid=" + escape(pn) + "&pidt=1&oid=" + escape(objid) + "&oidt=1&ot=A&oi=1");
    if (pn != null && pn.indexOf("welcome orig")) {
        s_vp_setSessionCookie("h_cm", "hphqglobal=" + v);
    }
    s_vp_setSessionCookie("s_sq", s_account + v);
}
/* Link Tracking code: Cleansheet */
function s_hp_linkPromoTrack(cookieName) {
    var t = s_vp_readCookie(cookieName);
    t = (t == null ? "" : unescape(t));
    if (t.length > 1) {
        s_vp_setPersistentCookieExact(cookieName, "i", -1);
    }
    return (t.length > 4 ? t : "");
}
/* Link tracking code: Legacy */
function s_hp_overrideClickmap() {
    var t;
    if (window.s_account != null && window.s_account.indexOf("eprime") == -1) {
        t = s_vp_readCookie("h_cm") || "";
        var res = (/oid\=(gw.+)\&oidt\=/).exec(unescape(unescape(t)));
        if (res) {
            s_vp_setSessionCookie("h_cm", "i");
            t = res[1].toLowerCase();
            t = t.indexOf("welcomeov2") != -1 ? t : "";
        }
    }
    /* Data validation: */
    return (t != null && t.length > 4 && t.indexOf("welcomeov2") != -1 ? t : "");
}
/* Warning - this code is common across Atlas, Cleansheet, and Legacy platforms.
 * Do *NOT* modify unless you know what you're doing
 */
function s_hp_jumpIdProcessing(s) {
    var hpmmd = (window.jsmd ? jsmd.plugin : window.hpmmd || {ck: {}}),
        cookieBaseObject = hpmmd.ck || hpmmd.cookie || {},
        cookieSet = cookieBaseObject.set || s_vp_setPersistentCookieExact,
        cookieGet = cookieBaseObject.get || function (x) {
            s.c_r(x);
        },
        getQueryParam = hpmmd.gQuery ? function (x) {
            return hpmmd.gQuery(x);
        } : function (x) {
            return s.getQueryParam(x);
        };
    // var s_hp_jumpid_mixedcase = false;
    // var h_um = window.location.href;
    window.s_setJumpid = function (jumpid) {
        cookieSet("hpjumpidv2", jumpid, 30);
    };
    /* var kwcid = cookieGet("s_kwcid").split("\"").join("");
     if (!!kwcid && kwcid.length > 0) {
     cookieSet("s_kwcid", "i", -1);
     if (h_um.indexOf("s_kwcid=") == -1) {
     h_um = (h_um.indexOf("?") != -1) ? h_um.split("?").join("?s_kwcid=" + kwcid + "&") : h_um + "?s_kwcid=" + kwcid;
     }
     } */
    /* Kenshoo Logic: 3/21/2011 */
    s.eVar54 = getQueryParam("k_clickid") || "";
    /* End Kenshoo Logic */
    /*AOID ENABLEMENT, RALLY US20:  READ AOID QUERYSTRING CODE AND ASSIGN IT TO HPMMD CAMPAIGN VARIABLE, TO LATER PASS IT TO THE S OBJECT
     ON CLEANSHEET_WEB s_beacon_plugins function, otherwise if passed directly to S object it will be overriden in the load_plugins(s) function for homepage
     */
    var aoid = getQueryParam("aoid") || "";
    if (aoid.length > 0 && !(hpmmd.campaign != null && hpmmd.campaign.length > 0)) {
        s.campaign = hpmmd.campaign = aoid;
    }

    /*hootpostid mapping to eVar29*/
    var hootpostid=getQueryParam("hootpostid") || "";
    if(hootpostid!=""){
        s.eVar29=hootpostid;
    }
    /*mailzqj mapping to eVar20*/
    var mailzqj = getQueryParam("mailzqj") || "";
    if(mailzqj!="" && mailzqj.length<11){
       s.eVar20=_set(mailzqj); 
    }

    var jumpid = getQueryParam("jumpid") || "",
        jumpidc = cookieGet("hpjumpidv2") || cookieGet("atlasjumpid");
    if (!!jumpidc && (jumpid.length < 3 || jumpid.indexOf("in_") === 0)) { // Use Jumpid Cookie if it's already defined - otehrwise use existing jumpid
        jumpidc = jumpidc.split("\"").join("");
        cookieSet("hpjumpidv2", "i", -1); // Reset the jumpid cookie to expire with no value
        cookieSet("atlasjumpid", "i", -1); // Reset the jumpid cookie to expire with no value
        jumpid = jumpidc.length > 3 ? jumpidc : jumpid;
    }
//    if (jumpid.indexOf("TC") === 0) {
//        s_hp_jumpid_mixedcase = true;
//        /* Temp fix: rename jumpid in Omniture URL to jumpid_t ONLY IF it's not a TC parameter */
//        if (h_um.indexOf("jumpid=") == -1) {
//            h_um = (h_um.indexOf("?") != -1) ? h_um.split("?").join("?jumpid=" + jumpid + "&") : h_um + "?jumpid=" + jumpid;
//        }
//        /* End of Temp Fix: */
//    }
    /* else {
     h_um=h_um.split("jumpid=").join("jumpid_t=");  // Swap the jumpid for jumpid_t since Search Center will look at all jumpid values in the URL - // Remove this once we fix teh HP software issues with not persisting the search center s_kwcid parameter
     } */
    // s.pageURL = h_um; // Remove this once we fix teh HP software issues with not persisting the search center s_kwcid parameter
    // h_um = (window.location.href.indexOf("<") != -1) ? escape(window.location.href.substring(0, 100).toLowerCase()) : window.location.href.toLowerCase(); // No cross-site scripting attempts

    /* if (!s_hp_jumpid_mixedcase) { */
    jumpid = jumpid.toLowerCase();
    /* } */

    /* Remove pound sign on improperly formed Jumpid pages */
    jumpid = jumpid.split("#")[0];

    /* 
     * Check to see if the previous jumpid is identicial to the current jumpid.  If not, then 
     */
    var prevJumpid = s.getPreviousValue(jumpid || "-", "ddj");

    s.eVar15 = s.eVar16 = s.eVar17 = s.eVar18 = s.eVar19 = "";
    if (jumpid.length > 3 && prevJumpid !== jumpid) {
        jumpid = (jumpid.indexOf("<") != -1) ? escape(jumpid) : jumpid; // No cross-site scripting attempts
        if (window.s_hp_doFilterJumpids) {
            jumpid = s_hp_doFilterJumpids(jumpid);
        } // Call custom jumpid filter function if it exists
        var s_jumpIdType = jumpid.substring(0, 3);
        if (typeof RegExp != "undefined") { // Pull MCC code from the Jumpid, if defined
            var getMCC = /mcc\|([A-Za-z0-9]+)/i;
            if (getMCC.test(jumpid)) {
                r = getMCC.exec(jumpid);
                if (r.length > 0) {
                    s.eVar9 = "||" + r[1];
                }
            }
        }
        // var loc = "15";
        /*DART logic filter for evar 15 starts*/
        var strip_jumpid = jumpid;
        var isDart = jumpid.indexOf("dm:") !=-1;
        var isSf= jumpid.indexOf("sf:")!= -1;
        if (isDart) {
            strip_jumpid = jumpid.split("/dm:")[0];
        }
        if(isSf){
            strip_jumpid = jumpid.split("/sf:")[0];
        }

        /* var reg = /dm:[^\/]*[^\/]?/gi;
         var dart_jumpid = reg.exec(jumpid);
         if (isDart) {
         var sub_jmpids = jumpid.split("/dm:");
         var strip_index = sub_jmpids.indexOf(dart_jumpid[0])
         sub_jmpids.splice(strip_index, 1);
         strip_jumpid = sub_jmpids.join("/");
         }
         else {
         strip_jumpid = jumpid;
         }   */
        /*DART LOGIC filter  evar 15 ends*/

        switch (s_jumpIdType) {
            case 'ps_':
            case 'va_':
            case 'af_':
            case 'mb_':
            case 'sc_':
            case 'em_':
            case 'ba_':
                if (strip_jumpid.length < 14 || (!!s.prop5 && s.prop5.indexOf('tsg.software') != -1) || location.hostname =="store.hp.com" ||
                    /(ba_r329_hhoaffiliate|ps_r329_hhosem|ba_r329_hhocse|ba_r329_hhodisplay|sc_r329_hhosocial|em_r329_hho_.*)/gi.test(strip_jumpid)) {
                    s.eVar15 = strip_jumpid;
                    s.eVar17 = jumpid;

                    if (typeof(sStackPush) === "function") {
                        s.events = sStackPush("event80", s.events);
                    } else {
                        s.events = (!!s.events ? s.events + ",event80" : "event80");
                    }
                }

                break;
            case 'in_':
                s.eVar16 = jumpid;
                // loc = "16";
                break;
            case 're_':
                s.eVar18 = jumpid;
                // loc = "18";
                break;
            case 'TC|':
            case 'TC-':
                s.eVar15 = strip_jumpid;
                s.eVar17 = jumpid;

                if (typeof(sStackPush) === "function") {
                    s.events = sStackPush("event80", s.events);
                } else {
                    s.events = (!!s.events ? s.events + ",event80" : "event80");
                }
                break;
            case 'sh_':
                s.eVar15 = strip_jumpid;
                s.eVar17 = jumpid;

                if (typeof(sStackPush) === "function") {
                    s.events = sStackPush("event80", s.events);
                } else {
                    s.events = (!!s.events ? s.events + ",event80" : "event80");
                }
                if (!document.referrer) {
                    (function() {
                        var a = jumpid,
                            b = [];
                        b = a.split("_");
                        if (b.length > 2 && b[2]) {
                            s.referrer = "http://" + b[2] + ".com";
                        }
                    }());
                }
                break;
            case 'cp_':
                s.eVar18 = jumpid;
                // loc = "18";
                break;
            default:
                if (jumpid.indexOf("ex_") !== 0) {
                    s.eVar19 = jumpid;
                }
                // loc = "19";
                break;
        }

        /* s.eVar20="D=v"+loc; */
        /* s.prop17 = 'D=v' + loc + '+"|"+c49';
         if (hpmmd.page.region === "na" && !s.prop4) {
         s.prop4 = s.prop17;
         } */
        /* if(s_hp_jumpid_prop && s_hp_jumpid_prop.length>0) {
         s_hp_jumpid_prop=s_hp_jumpid_prop.split("_").join(".");
         eval(s_hp_jumpid_prop + "='" + jumpid + "'");
         } */
        /* if (window.s_hp_doFilterJumpids) {
         jumpid = s_hp_doFilterJumpids(jumpid);
         } */
    }
    /* else { // No Jumpid found: set jumpid pathing within NA Region still
     if (hpmmd.page.region === "na" && !s.prop4 && hpmmd.metatags.lifecycle !== 'support') {
     s.prop4 = 'D="|"+c49';
     }
     } */
    /* if(hpmmd.ck.get("hpjidc").indexOf("37")!=-1) { 
     s.events=sStackPush("event37",s.events);
     }  */
}



//var s_hp_jumpid_prop, s_hp_jumpid_path_prop, s_hp_jumpid_mixedcase, s_hp_emid, s_hp_autoemcid;
//function s_hp_jumpIdProcessing() {
//    /* aoid=s.getQueryParam("aoid");
//     if(aoid.length>0 && !(s.campaign!=null && s.campaign.length>0)) {
//     s.campaign=aoid;
//     } */
//    /* s_kwcid logic to read value from cookie */
//    var t1 = s_hp_overrideClickmap(), t2 = s_hp_linkPromoTrack("h_cm2");
//    s.eVar13 = (t1.length >= t2.length ? t1 : t2);
//    h_um = window.location.href;
//
//    var kwcid = s_vp_readCookie("s_kwcid").split("\"").join("");
//    if (kwcid != null && kwcid.length > 0) {
//        s_vp_setPersistentCookieExact("s_kwcid", "i", -1);
//        if (h_um.indexOf("s_kwcid=") == -1) {
//            h_um = (h_um.indexOf("?") != -1) ? h_um.split("?").join("?s_kwcid=" + kwcid + "&") : h_um + "?s_kwcid=" + kwcid;
//        }
//    }
//
//    jumpid = s.getQueryParam("jumpid");
//    if (jumpid.length < 3 || jumpid.indexOf("in_") == 0) { /*  Use Jumpid Cookie if it's already defined - otehrwise use existing jumpid */
//        jumpidc = s_vp_readCookie("hpjumpidv2").split("\"").join("");
//        s_vp_setPersistentCookieExact("hpjumpidv2", "i", -1);
//        jumpid = jumpidc.length > 3 ? jumpidc : jumpid;
//    }
//    if (jumpid.indexOf("TC") == 0) {
//        s_hp_jumpid_mixedcase = true;
//        /* Temp fix: rename jumpid in Omniture URL to jumpid_t ONLY IF it's not a TC parameter */
//        if (h_um.indexOf("jumpid=") == -1) {
//            h_um = (h_um.indexOf("?") != -1) ? h_um.split("?").join("?jumpid=" + jumpid + "&") : h_um + "?jumpid=" + jumpid;
//        }
//        /* End of Temp Fix: */
//    } else {
//        h_um = h_um.split("jumpid=").join("jumpid_t=");
//        /*  Swap the jumpid for jumpid_t since Search Center will look at all jumpid values in the URL - Remove this once we fix teh HP software issues with not persisting the search center s_kwcid parameter */
//    }
//    s.pageURL = h_um;
//    /* Remove this once we fix teh HP software issues with not persisting the search center s_kwcid parameter */
//    h_um = (window.location.href.indexOf("\<") != -1) ? escape(window.location.href.substring(0, 100).toLowerCase()) : window.location.href.toLowerCase();
//    if (jumpid.length > 3) {
//        jumpid = (jumpid.indexOf("\<") != -1) ? escape(jumpid) : jumpid;
//        if (s_hp_jumpid_mixedcase != true) {
//            jumpid = jumpid.toLowerCase();
//        }
//        if (window.s_hp_doFilterJumpids) {
//            jumpid = s_hp_doFilterJumpids(jumpid);
//        }
//        s_hp_resetJumpids();
//        /* s.eVar20 = jumpid; */
//        s_jumpIdType = jumpid.substring(0, 3);
//        if (typeof RegExp != "undefined") { /* Pull MCC code from the Jumpid, if defined */
//            var getMCC = /mcc\|([A-Za-z0-9]+)/i;
//            if (getMCC.test(jumpid)) {
//                r = getMCC.exec(jumpid);
//                if (r.length > 0) {
//                    s.eVar9 = "||" + r[1];
//                }
//            }
//        }
//        switch (s_jumpIdType) {
//            case 'ex_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'in_':
//                s.eVar16 = jumpid;
//                break;
//            case 'em_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 're_':
//                s.eVar18 = jumpid;
//                break;
//            case 'TC|':
//            case 'TC-':
//                s.eVar15 = jumpid;
//                break;
//            case 'va_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'ps_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'af_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'mb_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'sc_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'ba_':
//                s.eVar15 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            case 'cp_':
//                s.eVar18 = jumpid;
//                s_vp_setPersistentCookieExact("hpjidc", "37", 30);
//                break;
//            default:
//                s.eVar19 = jumpid;
//                break;
//        }
//        if (s_hp_jumpid_prop && s_hp_jumpid_prop.length > 0) {
//            s_hp_jumpid_prop = s_hp_jumpid_prop.split("_").join(".");
//            eval(s_hp_jumpid_prop + "='" + escape(jumpid.replace(/\W+/, "")) + "'");
//        }
//        /* if(window.s_hp_doFilterJumpids) {jumpid=s.eVar20} */
//    }
//    if (s_hp_jumpid_path_prop && s_hp_jumpid_path_prop.length > 0) {
//        s_hp_jumpid_path_prop = s_hp_jumpid_path_prop.split("_").join(".");
//        eval(s_hp_jumpid_path_prop + "='" + escape(jumpid.replace(/\W+/, "")) + "|" + escape(h_um) + "'")
//    }
//    if (s_vp_readCookie("hpjidc").indexOf("37") != -1) {
//        s.events = s.events != null ? s.events += ",event37" : s.events = "event37";
//    }
//    /* Kenshoo Logic: 3/21/2011 */
//    s.eVar54 = s.getQueryParam("k_clickid");
//    /* End Kenshoo Logic */
//}

function s_hp_buildPersistentSegment(segmentType, current_s_account, additional_s_account_to_add) {
    type = s_vp_readCookie("hp_cidww");
    typeNST = s_vp_readCookie("hp_nstseg");
    /* Code is Part of NSTSeg */
    if (type && type == segmentType && current_s_account.indexOf(additional_s_account_to_add) == -1) {
        current_s_account += "," + additional_s_account_to_add;
    }
    /*  Code is Part of NSTSeg */
    if (typeNST && typeNST == segmentType && current_s_account.indexOf(additional_s_account_to_add) == -1) {
        current_s_account += "," + additional_s_account_to_add;
    }
    return current_s_account;
}

/* Identify any persistent segments and setup functionality */
function s_hp_identPersistentSegment() {
    j1 = window.location.search.toLowerCase().split("jumpid=");
    var s_scFlag = window.location.search.toLowerCase().split("s_kwcid=");
    /* Temp slice of TSG data for Search Center testing */
    var wsa = window.s_account != null ? window.s_account : "";
    var wlh = window.location.href;
    if (wsa.indexOf("hphqwwesg") != -1 || wsa.indexOf("hphqnaentmktg") != -1 || wsa.indexOf("hphqwwopenviewgmgmtsw") != -1 || wlh.indexOf("/formlab/") != -1 || wlh.indexOf("/promo/imhub/registration/") != -1) {
        s_vp_setPersistentCookieExact("hp_cidww", "tsgsc", 30);
    }
    /* End of TSG data slice */
    var h_enableNSTraffic = s_hp_checkReferrer(s_hp_searchEngineList);
    /* Check if the traffic is lead from Natural Search Engine */
   /* if (j1 && j1.length > 1) {
        jumpid = j1[1].split("&")[0];
        if (jumpid.indexOf("ex_r163_") != -1 && jumpid.indexOf("/apsem") != -1) {
            s_vp_setPersistentCookieExact("hp_cidww", "semapj", 90);
        }
        if (jumpid.indexOf("ex_") != -1 && jumpid.indexOf("agn:zo") != -1) {
            s_vp_setPersistentCookieExact("hp_cidww", "agencyzo", 90);
        }
    }*/
    if (s_scFlag && s_scFlag.length > 1) {
        var accVal = "hphqemea,hphqemea" + window.s_prop7;
        /* create a string which has emea roll up and emea country specific reportsuites */
        s_vp_setPersistentCookieExact("hp_scemea", accVal, 1);
        /* create a session cookie and store the same account value in that cookie expires on session */
    }
    if (h_enableNSTraffic) {
        s_vp_setPersistentCookieExact("hp_nstseg", "nstrafficseg", 90);
    }
}

function s_hp_checkReferrer(h_referrerList) {
    var h_referrerListArray = (h_referrerList != null ? h_referrerList : "").split(",");
    var h_referrer = document.referrer != null ? document.referrer.toLowerCase() : 0;
    if (h_referrer) {
        for (var i = 0; i < h_referrerListArray.length; i++) {
            var h_checkRef = h_referrer.indexOf(h_referrerListArray[i]);
            if (h_checkRef > -1) {
                return true;
            }
        }
    }
    return false;
}

var s_hpabtst, s_eVar24, s_eVar25, s_eVar26, s_eVar27, s_eVar28, s_hpevar24;
function s_hp_abcTest(wsa) {
    var av = "";
    if (s_vp_readCookie("tmpIgnore").length > 0) return wsa;
    var cookiePatterns = "hpcssprint1ab|hpcssprint2ab|hpcssprint3ab|hpcssprint4ab|hpcssprint22ab|hpcshponlyab";
    var ca = cookiePatterns.split("|"), i, acctArray = [], fpObj = {};
    for (i = ca.length - 1; i > -1; i--) {
        var r = new RegExp("^.*(" + ca[i] + ")\\=(\\d).*$"), c = document.cookie;
        if (r.test(c)) {
            av = c.replace(r, "$1$2");
            if (av.indexOf("hpcssprint21a") != -1) {
                s_hp_includeJavaScriptFile2("welcome.hp.com", "/cma/metrics/survey/sv_cleansheet.js");
                if (av.indexOf("hpcssprint22ab0") != -1) {
                    acctArray.push("hphqglobaljan11testa" + (wsa.indexOf("hphqnahpshopping") != -1 ? ",hphqhhostorejan11testa" : ""));
                }
                if (av.indexOf("hpcssprint22ab1") != -1) {
                    acctArray.push("hphqglobaljan11testb" + (wsa.indexOf("hphqnahpshopping") != -1 ? ",hphqhhostorejan11testb" : ""));
                }
                if (av.indexOf("hpcssprint22ab2") != -1) {
                    acctArray.push("hphqglobaljan11testc" + (wsa.indexOf("hphqnahpshopping") != -1 ? ",hphqhhostorejan11testc" : ""));
                }
                if (av.indexOf("hpcssprint22ab3") != -1) {
                    acctArray.push("hphqglobaljan11testd" + (wsa.indexOf("hphqnahpshopping") != -1 ? ",hphqhhostorejan11testd" : ""));
                }
            } else {
                acctArray.push(av);
            }
            fpObj[ca[i]] = av;
        }
    }
    c = s_vp_readCookie("hpabfirstpg");
    if (acctArray.length > 0 && c.length > 0) {
        if (c.indexOf("hpcssprint1ab") != -1) s_eVar25 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        if (c.indexOf("hpcssprint2ab") != -1) s_eVar26 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        if (c.indexOf("hpcssprint3ab") != -1) s_eVar27 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        if (c.indexOf("hpcssprint4ab") != -1) s_eVar28 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        if (c.indexOf("hpcshponlyab") != -1) s_eVar28 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        if (c.indexOf("hpcssprint22ab") != -1) s_eVar28 = s_prop7 + ":" + s_prop8 + ":" + fpObj[c];
        s_vp_setPersistentCookieExact("hpabfirstpg", "-1", -1);
    }
    acctArray.splice(0, 0, "hphqglobal");
    return wsa.replace("hphqglobal", acctArray.join(","));
}

function s_hp_doGeoRedirectCheck() {
    var wpn = window.s_pageName != null ? window.s_pageName : "";
    var check_geoLo = s_vp_readCookie('geoLocation');
    var dbg_geo = s_vp_readCookie('geoLocationDBG');
    var us_cookie = s_vp_readCookie('lang');
    var rexp = /^([a-z])([a-z])-(([a-z])+(_)?)*([a-z]+)$/i;
    if (check_geoLo == 'redirection') {
        if (us_cookie.match(rexp)) {
            if (us_cookie.split("-")[1] != "null" && us_cookie.split("-")[1] != "undefined") {
                if (us_cookie != 'en-us') {
                    if (wpn.indexOf("gw:") > -1 && wpn.indexOf("welcome") > -1) {
                        s_eVar24 = (dbg_geo.length > 0 ? "GeoRedirectDBG: " + pn + " " + unescape(dbg_geo) : "GeoRedirect: " + pn);
                        window.s_prop24 = s_eVar24;
                        s_vp_setPersistentCookieExact('geoLocation', 'i', -1);
                        s_vp_setPersistentCookieExact('geoLocationDBG', 'i', -1);
                    }
                }
            }
        }
    }
};

function s_hp_vistaTest(wsa) {
    var onrep = "hphqnahpshopping";
    var cname = "OV_VISTA_2009_04_09";
    var vrs = "hphqvistadev";
    var cvst = s_vp_readCookie(cname);
    if (wsa.indexOf(onrep) >= 0 && wsa.indexOf(vrs) < 0) {
        if (cvst == null || cvst.length != 1) {
            if (!((Math.random() < .9 )))
                s_vp_setSessionCookie(cname, 1);
            else s_vp_setSessionCookie(cname, 0);
            cvst = s_vp_readCookie(cname);
        }

        if (cvst == 1) wsa += "," + vrs;
    }
    return wsa;
}

/* ------- HP & Omniture Plugins ------- */

var s_prop39, s_eVar39;
function s_doPlugins() {
    if (window.s_hp_doMetricsPlugins) {
        s_hp_doMetricsPlugins();
    }
    if (s_hpevar24) {
        s.eVar24 = s.getValOnce("Geo:US_Reset", "georeset");
    }
    /*Commented the loading of  _base62.js files depending on the current locale
     if ((window.s_prop7 && (s_prop7 === "de" || s_prop7 === "fr")) || (window.country_code && (country_code === "de" || country_code === "fr"))) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com", "/cma/region/emea/personalization/omniture-additions_criteo_base62.js");
     }
     else if ((window.s_prop7 && s_prop7 === "ch") || (window.country_code && country_code === "ch")) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com", "/cma/region/emea/personalization/omniture-additions_fh_base62.js");
     }
     else if ((window.s_prop7 && (s_prop7 === "uk" || s_prop7 === "es")) || (window.country_code && (country_code === "uk" || country_code === "es"))) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com", "/cma/region/emea/personalization/criteo_base62.js");
     }
     */
    /* BlueKai File include if the country is US
     if (window.s_prop7 && s_prop7 === "us"){
     s_hp_includeJavaScriptFile("http://www.hp.com/cma/ng/lib/bluekai/hpbluekai.js");
     s_hp_includeJavaScriptFile2("","hpbluekai.js");
     } */
}

function s_vp_readCookie(k) {
    rv = "";
    if (s && s.c_r) {
        rv = s.c_r(k);
    } else {
        if (typeof RegExp != "undefined") {
            var getC = new RegExp(k + "\=([^\;]*)\;?");
            if (getC.test(document.cookie)) {
                r = getC.exec(document.cookie);
                if (r.length > 0) {
                    rv = r[1];
                }
            }
        }
    }
    return rv;
}
function s_vp_setSessionCookie(k, v) {
    var d = ".hp.com";
    if (k)document.cookie = k +
        '=' + escape(v) + '; path=/;' + (d ? ' domain=' + d + ';' : '');
}
function s_vp_setPersistentCookie(k, v) {
    s_vp_setPersistentCookieExact(k, v, 1825);
}
function s_vp_setPersistentCookieExact(k, v, dt) {
    var exp = new Date;
    var d = ".hp.com";
    exp.setTime(exp.getTime() + (3600 * 1000 * 24 * dt));
    if (k) {
        document.cookie = k + '=' + escape(v) + '; path=/;' + (d ? ' domain=' + d + ';' : '') + ' expires=' + exp.toGMTString();
    }
}


function s_hp_includeJavaScriptFile2(hp_hostname, hp_path) {
    if (!(window.s_hp_optOut && window.s_hp_optOut == true)) {
        var hp_ssl = (window.location.protocol.toLowerCase().indexOf('https') != -1);
        if (hp_hostname && hp_hostname.length > 0) {
            if (hp_ssl == true && hp_hostname.toLowerCase().indexOf("welcome.") != -1) {
                hp_hostname = "secure.hp-ww.com";
            }
            var fullURL = "http" + (hp_ssl ? "s" : "") + "://" + hp_hostname + hp_path;
        }
        else {
            var fullURL = hp_path;
        }
        s_hp_includeJavaScriptFile(fullURL);
        /*  document.write("<sc" + "ript language=\"JavaScript\" src=\""+fullURL+"\"></sc" + "ript>"); */
    }
}

function s_hp_includeRegionNumberOfClicks() {
    /* Removing TCE surveys - Ram 03142013 */
    /*
     wpn=window.s_pageName;
     if(wpn==null || (wpn!=null && wpn.indexOf("welcome") == -1)) {
     if((s_hp_region.toLowerCase().indexOf("ww") != -1) || (s_hp_region.toLowerCase().indexOf("w1") != -1)) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com","/cma/metrics/survey/na_num_clicks.js");
     }
     if(s_hp_region.toLowerCase().indexOf("na") != -1) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com","/cma/metrics/survey/na_num_clicks.js");
     }
     if(s_hp_region.toLowerCase().indexOf("ap") != -1) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com","/cma/metrics/survey/ap_num_clicks.js");
     }
     if(s_hp_region.toLowerCase().indexOf("la") != -1) {
     s_hp_includeJavaScriptFile2("welcome.hp-ww.com","/cma/metrics/survey/la_num_clicks.js");
     }
     }
     */
    if (window.s_account != null && window.s_account.indexOf("hpcssprint") != -1) {
        s_hp_includeJavaScriptFile2("welcome.hp-ww.com", "/cma/metrics/survey/sv_cleansheet.js");
    }
}
function s_hp_resetVariables() {
    if(!!hpmmd.beacon_ignore){
        return;
    }
    var vlist = "prop30,prop31,eVar10,eVar13,eVar23,eVar24,eVar25".split(",");
    for (i = 0; i < vlist.length; i++) {
        window["s_" + vlist[i]] = "";
        window.s[vlist[i]] = "";
    }
    s_hp_resetJumpids();
}
function s_hp_resetJumpids() {
    var vlist = "eVar15,eVar16,eVar17,eVar18,eVar19,eVar20".split(",");
    for (i = 0; i < vlist.length; i++) {
        window["s_" + vlist[i]] = "";
        window.s[vlist[i]] = "";
    }
}

/* This will set bounce rate events to created final Bounce Rate as calculated metrics */
function s_hp_setBouceRateEvent() {
    /* Code part for Search Center Bounce Rate Implementation */
    /* s.ActionDepthTest=true; */
    /* Set Landing Page and Second Page Event */
    /* if (s.ActionDepthTest) {
     s.pdvalue = s.getActionDepth("s_depth");
     if (s.pdvalue == 1)
     s_events = s.apl(s_events, 'event47', ',', 2);
     if (s.pdvalue == 2)
     s_events = s.apl(s_events, 'event48', ',', 2);
     }
     s.ActionDepthTest = false; */
}

function s_vp_setHCodePlugins() {


    /* This plugin is used as below 
     s.inList("prodView",s.events)
     Above function call checks if prodView exists in s.events and return true if yes and false if no
     */
    s.inList = new Function("v", "l", "d", ""
        + "var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s."
        + "split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}e"
        + "lse ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return fals"
        + "e;");

    s.manageQueryParam = new function () {
    };
    /* =new Function("p","w","e","u",""
     +"var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo"
     +"cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1"
     +"?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf("
     +"'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring"
     +"(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le"
     +"ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1"
     +",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su"
     +"bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)"
     +"{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0"
     +";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break"
     +";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re"
     +"p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i"
     +"f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='"
     +"?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if"
     +"(qp)qs='?'+qp;return u+qs;");  */

    /*
     * Plugin: getQueryParam 2.3
     */
    s.getQueryParam = new Function("p", "d", "u", ""
        + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
        + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
        + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
        + "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
        + "=p.length?i:i+1)}return v");
    s.p_gpv = new Function("k", "u", ""
        + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
        + "=s.pt(q,'&','p_gvf',k)}return v");
    s.p_gvf = new Function("t", "k", ""
        + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
        + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
        + "epa(v)}return ''");
    /*
     * Plugin: getValOnce 0.2 - get a value once per session or number of days
     */
    s.getValOnce = new Function("v", "c", "e", ""
        + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
        + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

    /********************************************************************
     *
     * Main Plug-in code (should be in Plug-ins section)
     *
     *******************************************************************/
//    /*
//     * Partner Plugin: DFA Check 0.8 - Restrict DFA calls to once a visit,
//     * per report suite, per click through. Used in conjunction with VISTA
//     */
//    s.partnerDFACheck = new Function("c", "src", "p", ""
//        + "var s=this,dl=',',cr,nc,q,g,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Ar"
//        + "ray,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c"
//        + "_r(c);if(cr){v=0;}ca=s.split(cr,dl);aa=s.split(s.un,dl);for(i=0;i<a"
//        + "a.length;i++){fnd=0;for(j=0;j<ca.length;j++){if(aa[i]==ca[j]){fnd=1"
//        + ";}}if(!fnd){cs[cn]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k"
//        + "++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}q="
//        + "s.wd.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf("
//        + "'&'+src.toLowerCase()+'=');if(g>-1){s.vpr(p,cr);v=1;}if(!s.c_w(c,cr"
//        + ",t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}if(v<1){s.vpr('variableProvi"
//        + "der','');}");

    /********************************************************************
     *
     * Commented example of how to use this in doPlugins function
     *
     *******************************************************************/
    /* Plugin Example: partnerDFACheck 0.8
     s.partnerDFACheck("dfa_cookie","CID","prop34");
     */


    /********************************************************************
     *
     * Config variables (should be above doPlugins section)
     *
     *******************************************************************/

    /********************************************************************
     *
     * Supporting functions that may be shared between plug-ins
     *
     *******************************************************************/


    /*
     * Utility Function: vpr - set the variable vs with value v
     */
    s.vpr = new Function("vs", "v",
        "if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

    /*
     * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
     */
    s.split = new Function("l", "d", ""
        + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
        + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

    /*
     * Plugin Utility: Replace v1.0
     */
    s.repl = new Function("x", "o", "n", ""
        + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
        + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

    /*
     * Plugin: getActionDepth v1.0 - Returns the current
     * page number of the visit
     */
    s.getActionDepth = new Function("c", ""
        + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
        + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
        + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

    /*
     * Plugin Utility: apl v1.1
     The Append List (or apl) plug-in utility provides a simple mechanism to append a value to any delimited lists, with the option of a case sensitive or case-insensitive check to insure the value doesn�t already exist in the list.

     s.apl(L,v,d,u)

     L = source list, empty list is accepted
     v = value to append
     d = list delimiter
     u (optional, defaults to 0) Unique value check. 0=no unique check, value is always appended. 1=case insensitive check, append only if value isn�t in list. 2=case sensitive check, append only if value isn�t in list.

     */
    s.apl = new Function("l", "v", "d", "u", ""
        + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
        + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
        + "e()));}}if(!m)l=l?l+d+v:v;return l");


    /********************************************************************
     *
     * getTimeParting 2.0
     *
     *******************************************************************/
    /*
     * Plugin: getTimeParting 2.0 
     */
    s.getTimeParting = new Function("t", "z", "y", "l", ""
        + "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
        + "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
        + ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
        + "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
        + "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
        + "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
        + "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
        + "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
        + " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
        + "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
        + "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
        + "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
        + "00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
        + "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
        + "le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
        + "eturn A}}else{return Z+', '+W}}}");

    /********************************************************************
     *
     * Commented example of how to use this in doPlugins function
     *
     *******************************************************************/
    /* getTimeParting example with year check
     s.prop1=s.getTimeParting('h','-7','2009');
     */

    /* getTimeParting example without year check
     s.prop1=s.getTimeParting('h','-7');
     */

    /* getTimeParting example without daylight savings, GMT timezone
     s.prop1=s.getTimeParting('h','','','0');
     */

    /* getTimeParting example without year check, GMT timezone
     s.prop1=s.getTimeParting('h');
     */

    /* getTimeParting example without year check, GMT timezone, combine hour and day
     s.prop1=s.getTimeParting();
     */
    /********************************************************************
     *
     * Config variables (should be above doPlugins section)
     *
     *******************************************************************/


    /*
     * Get Visit Start
     */
    s.getVisitStart = new Function("c", ""
        + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
        + ")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

    /*
     *  Plug-in: crossVisitParticipation v1.6 - stacks values from
     *  specified variable in cookie and returns value
     */

    s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", ""
        + "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
        + " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
        + "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
        + "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
        + "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
        + ";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY"
        + "ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar"
        + "ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new"
        + " Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var "
        + "td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun"
        + "d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr"
        + "y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli"
        + "m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join"
        + "(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");


    /*
     * Plugin: getQueryParamNoEncode - return non-encoded query string parameter(s)
     */
    s.getQueryParamNoEncode = new Function("p", "d", "u", ""
        + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
        + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
        + ".length:i;t=s.p_gpvne(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
        + "tring(i==p.length?i:i+1)}return v");
    s.p_gpvne = new Function("k", "u", ""
        + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
        + "=s.pt(q,'&','p_gvfne',k)}return v");
    s.p_gvfne = new Function("t", "k", ""
        + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
        + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return v;"
        + "}return ''");


    /* s.join: 1.0 - s.join(v,p) */

    s.join = new Function("v", "p", ""
        + "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
        + ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
        + ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
        + "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

    /*
     * Plugin: getPreviousValue_v1.0 - return previous value of designated
     * variable (requires split utility)
     */
    s.getPreviousValue = new Function("v", "c", "el", ""
        + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
        + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
        + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
        + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
        + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

    if (s_hp_region == "emea" && window.s_account.indexOf("hphqemeauk") > -1) {
        /* DFA Integration
         s.variableProvider ='DFA#1516691:v3=[["DFA:"+lis+":"+lip+":"+lastimp+":"+lastimptime+":"+lcs+":"+lcp+":"+lastclk+":"+lastclktime]]'; */
        s.usePlugins = true;
        function s_doSPlugins(s) {
            /* s.partnerDFACheck('hp_dfa','jumpid'); */
            /* SearchCenter Campaign Stacking */
            var scmcvp = s.getQueryParamNoEncode('s_kwcid', '', s.pageURL);
            s.eVar44 = s.crossVisitParticipation(scmcvp, 's_cpmscm', '90', '8', '>', 'purchase'); // Modified eVar Number to align with CS Standards eVar38>eVar44 - Pradeep SV 20101119 //
        }

        if (s.variableProvider) {
            s.plugins = "";
        }
        s.doPlugins = s_doSPlugins;
    }
    /* Do query string capture universally for Kenshoo code */
    s.eVar30 = s.getQueryParam('k_clickid');
    s.eVar31 = s.getQueryParam('s_mid');

    try {
        (function includeSpecificOmnitureIntegrations(s) {
            /* Survey logic: Performed contextually only on EMEA site pages */
            if (s.prop13.indexOf("hphqemea") != -1) {
                s.loadModule("Survey");
                s.Survey.suites = "hphqemeauk";
                window.s_sv_dynamic_root = "survey.112.2o7.net/survey/dynamic";
                window.s_sv_gather_root = "survey.112.2o7.net/survey/gather";
            }
        })(s);
    } catch (e) {
        var x = "NA:" + e;
    }
    (function () {
        function clearClickTrackingCookies() {
            var expires = new Date("Thu, 01 Jan 1970 00:00:00 GMT");
            s.c_w("h_inavclk", "-", expires);
            s.c_w("h_cm", "-", expires);
            s.c_w("h_cm2", "-", expires);
        }
    
        function setSegmentCK() {
            var expires = new Date(),
            seg_tag = (document.getElementsByName('segment').length > 0)?document.getElementsByName('segment')[0].getAttribute('content'):null,
            cookie_name="";
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); //30 days
    
            if (!!seg_tag) {
                seg_tag=seg_tag.toLowerCase().replace(/^\s+|\s+$/g, '');
                //Homepage use case, don't write the cookie unless it doesn't exist, if it exists don't write it again.
                if (seg_tag != "segment neutral" || s.c_r("hp_last_segment") === "") {
                    switch (seg_tag) {
                        case "smb":
                        case "commercial.smb":
                            cookie_name="commercial.smb";
                            break;
                        case "hho":
                        case "consumer.home":
                        case "commercial.hho":
                        case "consumer":
                        case "consumer-public":
                           cookie_name="consumer.home";
                            break;
                        case "commercial.b2b":
                        case "leb":
                        case "large":
                        case "commercial":
                        case "commercial.large":
                            var sub_bu="";
                            if(document.getElementsByName('sub_bu').length>0){
                                sub_bu="."+document.getElementsByName('sub_bu')[0].getAttribute('content').toLowerCase();
                            }
                            else if(typeof(hpmmd)==="object"){                            
                                sub_bu=(!!hpmmd.page.sub_business_unit)?"."+hpmmd.page.sub_business_unit:"";
                            }
                            cookie_name="commercial.large"+sub_bu;
                            break;
                        case "ghe":
                        case "commercial.pubsector":
                           cookie_name="commercial.pubsector";
                            break;
                        case "ga":
                        case "commercial.ga":
                           cookie_name="commercial.ga";
                            break;
                        case "segment neutral":
                        case "any":
                        case "neutral":
                        case "segment-neutral":
                        case "products":
                        if(!!!s.c_r("hp_last_segment")){
                            cookie_name="segment neutral";
                        }
                        else{
                            cookie_name=s.c_r("hp_last_segment");
                        }
    
                        break;
                        case "partner":
                        case "partners":
                        cookie_name="partners";
                        break;
                        case "corporate":
                          if (s.c_r("hp_last_segment") === "segment neutral" || s.c_r("hp_last_segment") === "" || s.c_r("hp_last_segment") == "any") {
                                cookie_name="corporate";
                          }
                        break;
                        default:
                            if (seg_tag == "consumer.home" || seg_tag == "commercial.smb" || seg_tag=="commercial.large" || seg_tag=="commercial.pubsector" || seg_tag=="commercial.ga" || seg_tag=="partners" || seg_tag=="segment neutral"){
                               cookie_name=seg_tag;
                            }                        
                            break;
                    }
                    if(!!cookie_name){
                    document.cookie = "hp_last_segment="+cookie_name+";expires=" + expires.toGMTString() + "; domain=.hp.com;path=/";
                    }  
    
                }
    
            } else {
                //Segment metatag is not defined  
                var smt;
                if(document.getElementsByName('segment').length === 0){
                    smt = document.createElement("meta");
                    smt.setAttribute("name", "segment");
                    document.getElementsByTagName("head")[0].appendChild(smt);
                }else{
                    smt = document.getElementsByName("segment")[0];
                }
                if (/(shopping|store).hp.com/.test(window.location.href)) {
                    cookie_name="consumer.home";
                    smt.setAttribute("content", "consumer.home");
                }
                else if (/shopping\d?.hp.com/.test(window.location.href)) {
                    cookie_name="commercial.smb";
                    smt.setAttribute("content", "commercial.smb");
                }
                else {
                    //Set segment neutral cookie only if cookie value is undefined or cookie doesn't exist.
                    if (s.c_r("hp_last_segment") === "")
                    cookie_name="segment neutral";
                    smt.setAttribute("content", "segment neutral");
                }
                // document.head.appendChild(smt);
                document.cookie = "hp_last_segment="+cookie_name+";expires=" + expires.toGMTString() + "; domain=.hp.com;path=/";
            }
    
            document.cookie = "hp_cust_seg_sel=-;expires=" + new Date("Thu, 01 Jan 1970 00:00:00 GMT") + "; domain=.hp.com;path=/";
    
        }
    
        var inavcookieValue = s.c_r("h_inavclk"),
            legacyeVar13 = s.c_r("h_cm") || s.c_r("h_cm2"),
            metatags = hpmmd.metatags || {},
            _setValue = (typeof(_set) == "function" ? _set : function (x) {
                return x
            }),
            country = hpmmd.page.country || metatags.target_country || "us",
            language = hpmmd.page.language || metatags.language || "en";
        if (!!window.jsmd) {
            metatags = jsmd.mdata.metatags;
        } else if (typeof(window.dictionary) !== "undefined") {
            metatags = dictionary.get("metatags");
        }
        if (!!inavcookieValue && inavcookieValue !== "-") {
            s.eVar68 = unescape(inavcookieValue);
            s.prop68 = "D=v68";
            s.events = ( !!s.events ? s.events + ",event69" : "event69");
            if (inavcookieValue.indexOf("home:") == 0) {
                s.eVar13 = country + ":" + language + ":" + inavcookieValue.replace("home:", "");
                // s.eVar68 = s.eVar68.replace("home:","");
            }
            clearClickTrackingCookies();
        } else if (!!legacyeVar13) {
            s.eVar13 = unescape(legacyeVar13);
            clearClickTrackingCookies();
        }
        s.prop51 = s.prop51 + ":" + (metatags.hp_inav_version || "hflegacy");
        s.prop73 = s.getPreviousValue(s.pageName, "s_prevPage");
        s.eVar69 = "D=c73";
        
        var setProp21 = function(){
            var seg = s.c_r("hp_last_segment") || "";
            seg = (seg.length > 0 ? seg.toLowerCase() : "noseg");
            s.prop21 = 'D="cs:' + seg ;
        };
    
        if (typeof(_mbootstrap) === "object") {
            _mbootstrap.checkCaas.ready(setSegmentCK);
            _mbootstrap.checkCaas.ready(setProp21);
        }
        else{
            setSegmentCK();
            setProp21();
        }
    })();
}


/* ------- HP POST Omniture Beacon ------- */


var s_hp_disableSurvey = false;
if (h_url.indexOf("https://h20500.www2.hp.com") != -1 || h_url.indexOf("https://vatlnzproe.atlanta.hp.com") != -1 || h_url.indexOf("https://vatlnzitge.atlanta.hp.com") != -1) {
    var s_hp_disableSurvey = true;
}
if (!s_hp_disableSurvey) {
    s_hp_includeRegionNumberOfClicks();
}

s_hp_resetVariables();

if (window.s_account != null) {
    s_doAdditionalBeacons(window.s_account, 1);
}

/* ------- Deprecated ------- */
function s_hp_snonclick(e) {
    return true;
}
function s_hp_doSMOTagging() {
}
var s_hp_mtxjumpid_flag, s_prop11;
function s_hp_captureMTXClicks() {
    t_variable0 = s.wd.location.href;
    mtxs = s.getQueryParam('mtxs');
    mtxb = s.getQueryParam('mtxb');
    mtxl = s.getQueryParam('mtxl');
    mtxc = s.getQueryParam('mtxc');
    if (mtxc.length > 0) {
        mtxc += "/";
    }
    else {
        mtxc = "";
    }
    if (mtxs.length > 0 || mtxb.length > 0 || mtxl.length > 0 && !(window.s_prop11 && s_prop11.length > 0)) {
        s.prop11 = mtxc + mtxs + '|' + mtxb + '|' + mtxl + '|' + t_variable0;
    }
}
function s_vp_getCGI(vs, k) {
    return;
}
function s_vp_getValue(vs) {
    return "";
}
function s_vp_getCGIValue(vs, k) {
    return;
}

/* Below is the part of EMEA OV2 Banners Impresssion tracking Code */
function s_hp_getBeaconInstance(s_account) {
    var s = s_gi(s_account);
    s.trackingServer = "met1.hp.com";
    s.trackingServerSecure = "met2.hp.com";
    s.vmk = "4A466CB3";
    /************************** CONFIG SECTION **************************/
    /* You may add or alter any code config here. */
    /* E-commerce Config */
    s.currencyCode = window.s_currencyCode||"USD";
    /* Link Tracking Config */
    s.trackDownloadLinks = true;
    s.trackExternalLinks = true;
    s.trackInlineStats = true;
    s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
    s.linkInternalFilters = "javascript:,hp,compaq,cpqcorp";
    s.linkLeaveQueryString = false;
    s.linkTrackVars = "None";
    s.linkTrackEvents = "None";
    return s;
}
function s_hp_classifyEB(rsid) {
    /* Check for cookie condition */
    var eb = s_vp_readCookie("ebautoseg"), rsa = rsid.split(",");
    if (eb !== "1" && rsid.indexOf("hphqwwesg") != -1) {
        s_vp_setSessionCookie("ebautoseg", "1");
    }
    if (rsid.indexOf("hphqwwesg") == -1 && eb === "1") {
        var hn = window.location.hostname.split(".hp.com").join(""), validList = "h71028.www7,h10134.www1,h20219.www2,h40060.www4,h20384.www2,h18004.www1,h18006.www1,h20341.www2";
        if (hn.indexOf(".") != -1 && validList.indexOf(hn) != -1) {
            rsa.push("hphqwwesg");
            return rsa.join(",")
        }
    }
    return rsid;
}
function s_hp_cleanRS(rsid) {
    if (RegExp) {
        rsid = rsid.replace(/[\,]+/g, ",").replace(/\,$/, "").replace(/[\s]+/g, "");
    }
    return rsid;
}
function s_hp_sendSecondAnalyticsEvent(s) {
    s_code = s.t();
    if (s_code && s_hp_optOut == false) {
        document.write(s_code);
    }
}
/* ========================= END PACK SECTION ========================= */

function s_hp_includeJavaScriptFile(hp_path) {
    var wlh = window.location.hostname, hn = "http://www.hp.com", shn = "https://www.hp.com",
        d = document, hp = hp_path, ssl = (window.location.protocol.toLowerCase().indexOf('https') != -1), urlre = /^(http[s]?\:\/\/[^\/]+)(\/?.*)$/;
    if (wlh.indexOf("welcome.") != -1) {
        hn = "http://welcome.hp-ww.com";
        shn = "https://secure.hp-ww.com";
    }
    if (urlre.test(hp)) {
        hp = (ssl ? hp.replace(urlre, shn + "$2") : hp.replace(urlre, hn + "$2"));
    }
    _domReady.ready(new Function("_domReady.inject('" + hp + "');"));
    /*  EVal required to ensure IE 6 compat */
}

function s_hp_emea_sendDownloadLinkEvent(downloadFileName) {
    if (!window.s_events) {
        window.s_linkTrackVars = "events,products";
        window.s_linkTrackEvents = "event7";
        s_events = "event7";
        s_products = ";" + downloadFileName
        linkName = downloadFileName;
        s_sendDownloadLinkEvent('', linkName);
    }
}
/*  end of globalizing code from emeacma.js file to s_code_remote.js file */

/* ------- HP Supporting Functions ------- */
function s_sendAnalyticsEvent(addlAccount, pageName) {
    /* This part of code is to check if the pageName is as per the APJ standards or Not, and this is identifyied with prefix "apj:" */
    if (window.s_hp_region.indexOf("ap") != -1) {
        pageName = pageName.toLowerCase();
        if (pageName.indexOf("apj:") == 0) {
            var pN = pageName.substring(4);
            pageName = window.s_prop7 + "|" + window.s_prop8 + "|" + window.s_prop3 + "|" + pN
        }
    }
    s_sendRawAnalyticsEvent(addlAccount, pageName);
}
function s_sendCustomLinkEvent(addlAccount, linkName) {
    /* This part of code is to check if the pageName is as per the APJ standards or Not, and this is identifyied with prefix "apj:" */
    if (window.s_hp_region.indexOf("ap") != -1) {
        linkName = linkName.toLowerCase();
        if (linkName.indexOf("apj:") == 0) {
            var lN = linkName.substring(4);
            if (window.s_prop2 && s_prop2.length > 0) {
                linkName = window.s_prop2 + "|" + lN + "|" + window.s_prop5;
            }
            else {
                linkName = window.s_prop7 + "|" + window.s_prop8 + "|*|" + lN + "|" + window.s_prop5;
            }
        }
    }
    s_sendRawCustomLinkEvent(addlAccount, linkName, "o");
}
function s_sendDownloadLinkEvent(addlAccount, linkName) {
    s_sendRawCustomLinkEvent(addlAccount, linkName, "d");
}
function s_sendExitLinkEvent(addlAccount, linkName) {
    s_sendRawCustomLinkEvent(addlAccount, linkName, "e");
}
function trackMetrics(param, data) {
    /* Temporary wrapper function for legacy support of trackMetrics calls */
    data = data || {}
    var badPagename = window.location.hostname.split(".")[0] + window.location.pathname;
    switch (param) {
        case "newLink":
            s_sendRawCustomLinkEvent("", data.name || "UNK:" + badPagename, "o");
            break;
        default:
            s_sendRawAnalyticsEvent("", data.name || badPagename);
            break;
    }
}
function s_setJumpid(jumpid) {
    s_vp_setPersistentCookieExact("hpjumpidv2", jumpid, 30);
}
function _doOrAddLoad(f) {
    function _addLoadEvent(func) {
        if (window.addEventListener) {
            window.addEventListener('load', func, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onload', func);
        }
        else {
            if (typeof(window.onload) == "function") {
                var old = window.onload;
                window.onload = function () {
                    old();
                    func();
                };
            } else {
                window.onload = func;
            }
        }
    }

    if (document && document.getElementById
        && document.getElementsByTagName
        && document.body
        && document.head) {
        try {
            f();
        } catch (e) {
        }
    } else {
        _addLoadEvent(f);
    }
}
function s_doAdditionalBeacons(rsid, option) {
    return;
    /* var _wd=window.document,isSSL=window.location.protocol.indexOf("https")!=-1;
     var isPotentialRetargetPage=(!isSSL&&rsid.indexOf("hphqnahpshopping")==-1&&(rsid.indexOf("hphqna")!=-1||rsid.indexOf("hphqwwcesna")!=-1||rsid.indexOf("hphq-ces-na")!=-1||rsid.indexOf("hpcorpsprint1")!=-1));
     if(!isPotentialRetargetPage) {return;}
     function _prvDoDC(dctype,src,type,cat,ord,qty,cost) {
     var axel = Math.random()+"";
     var num= axel * 10000000000000;
     _wd = window.document;
     var hp_ssl=(window.location.protocol.toLowerCase().indexOf('https')!=-1);
     var url = "http://fls.doubleclick.net";
     if(hp_ssl==true) { url="https://fls.doubleclick.net"; }
     switch(dctype) {
     case 1: url+="/activityi;src="+src+";type="+type+";cat="+cat+";ord="+ord+";num="+num+ "?"; break;
     case 2: url+="/activityi;src="+src+";type="+type+";cat="+cat+";;qty="+qty+";cost="+cost+";ord="+num+ "?";   break;
     case 3: url+="/activityi;src="+src+";type="+type+";cat="+cat+";ord="+num+";num="+num+ "?"; break;
     case 4: url+="/activityi;src="+src+";type="+type+";cat="+cat+";ord="+num+"?"; break;
     }
     return url;
     }
     function _doInsertBeacon(payload) {
     if(_wd.getElementById) {
     var target=_wd.getElementById("retarget_zone"),p=_wd.createElement("p");
     if(target == null) {
     var target = document.createElement('div');
     target.setAttribute("id","retarget_zone");
     target.style.border = '0px';
     target.style.width = '0px';
     target.style.height = '0px';
     _wd.body.appendChild(target);
     }
     if(payload.indexOf("/activityi;src")!=-1) {
     var sifr=_wd.getElementById("hpdc");
     if(sifr == null) {
     var sifr = document.createElement('IFRAME');
     sifr.setAttribute("id","hpdc");
     sifr.style.border = '0px';
     sifr.style.width = '0px';
     sifr.style.height = '0px';
     sifr.src=payload;
     target.appendChild(sifr);
     } else {
     sifr.src=payload;
     }
     } else {
     p.innerHTML=payload;
     target.appendChild(p);
     }
     }
     }
     var index={
     "DCHHO": _prvDoDC(1,"2305757","hpcom559","hpcom619","1"),
     "DCOther": _prvDoDC(1,"2964791","hpcom779","hpcom893","1"),
     "RightMedia": "<img src=\"http://ad.yieldmanager.com/pixel?id=1071987&t=2\" width=\"1\" height=\"1\" />",
     "DCAdExchange":"<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"http://www.googleadservices.com/pagead/conversion/1033191019/?label=OXjiCKX85AEQ6_zU7AM&amp;guid=ON&amp;script=0\"/>",
     "TurnAccuen":"<img border=\"0\" src=\"http://r.turn.com/r/beacon?b2=xsKlvalg4lwfy8LPcIiVCPKkpSxp_RJng-zvuwC70piejuJEq_LImxDsetEai8Le1n88qWVlF6FRdkauRZlBdQ\">"
     };

     if(isPotentialRetargetPage) {
     if(option!=1) {
     _doOrAddLoad(function(){
     for(var i in index) {
     _doInsertBeacon(index[i]);
     }
     });
     } else {
     _doOrAddLoad(function(){
     _doInsertBeacon(index["DCHHO"]);
     });
     }
     }*/
}
(function () {
    if(!!hpmmd.beacon_ignore){
        return;
    }
    /* eco-tag on D+ store*/
    var matchURL = window.location.href;
    if (s.prop13.indexOf("hphqaponlinestore") !== -1 &&
        (/(h20547\.www2\.hp\.com|h50146\.www5\.hp\.com\/directplus\/)/i).test(matchURL)) {
        (function (d, t) {
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = window.location.protocol + '//ct.eco-tag.jp/44597248';
            s.parentNode.insertBefore(g, s);
        }(document, 'script'));
    }
})();


function s_doABTestPlugin(flag, actionValue) {
    return false;
    if (window.location.href.indexOf("faketest=") != -1) {
        flag = "HomepageUSOnly";
    }/* Default Faketest */
    var rval = false, isdefined = (!!flag && typeof (flag) == "string");
    if (!isdefined) {
        return rval;
    }
    // Definitions:
    var tmpck = {
        "get" : function(k) {
            var c = ' ' + document.cookie, s = c.indexOf(' ' + k + '='), e = s < 0 ? s : c.indexOf(';', s), v = s < 0 ? '' : c.substring(s + 2 + k.length, e < 0 ? c.length : e);
            return v;
        },
        "set" : function(k, v, e) {
            var exp = new Date((new Date().getTime()) + e * 86400000);
            document.cookie = k + "=" + escape(v) + (!!e ? "; expires=" + exp.toGMTString() : "") + "; path=/; domain=.hp.com";
        }
    };
    var abdefs = {
        "HomepageUSOnly" : {
            name : "homepage",
            regex : ["http...welcome.hp.com/country/(us/en)/welcome.html", "http...www.hp.com/country/(us/en)/welcome.html", "http...(www).hp.com/$"],
            compare : "http://" + window.location.hostname + window.location.pathname,
            report_suite : "hpcssprint22ab",
            cookie : "hptest20120530a",
            sample : 0.1,
            duration : 1,
            // rollout:"http://welcome.hp.com/country/us/en/cs/home_d.html", // Force rollout to a final page regardless
            map : {
                "homepage-us/en" : ["http://welcome.hp.com/country/us/en/cs/home_a.html", "http://welcome.hp.com/country/us/en/cs/home.html"],
                "homepage-www" : ["http://welcome.hp.com/country/us/en/cs/home_a.html", "http://welcome.hp.com/country/us/en/cs/home.html"]
            }
        }
    };
    function _prvDoRedirect(d) {
        var df = document.referrer, l = location, lh = "http://" + window.location.hostname + window.location.pathname;
        if (lh != d) {
            if (df) {
                tmpck.set("ab_ref", df);
            }
            location.href = d;
            return true;
        }
        return false;
    }

    if (actionValue == "test") {
        var _fullTest=function(abtest, name, namedate, samplesize, testduration, hponlyflag) {
            var testName = name, testNameDate = namedate, sampleSize = samplesize, duration = testduration;
            function doABTest(actions) {
                if (!!actions && !!actions.constructor && actions.constructor.toString().indexOf("Array") != -1) {
                    var c = parseInt(tmpck.get(testName),10);
                    var alreadyInTest = tmpck.get(testNameDate).length > 1;
                    if (window.location.href.indexOf("faketest=") != -1) {
                        alreadyInTest = false;
                        c = NaN;
                        sampleSize = 1;
                    }
                    if (!alreadyInTest) {
                        /* function RNG(seed) {
                            (function(j, i, f, m, k, n, o) {
                                function q(b) {
                                    var c, e, a = this, g = b.length, d = 0, h = a.c = a.d = a.f = 0;
                                    a.a = [];
                                    a.e = [];
                                    for (g || ( b = [g++]); d < f; )
                                        a.a[d] = d++;
                                    for ( d = 0; d < f; d++)
                                        c = a.a[d], h = h + c + b[d % g] & f - 1, e = a.a[h], a.a[d] = e, a.a[h] = c;
                                    a.b = function(b) {
                                        var d = a.a, c = a.c + 1 & f - 1, e = d[c], g = a.d + e & f - 1, h = d[g];
                                        d[c] = h;
                                        d[g] = e;
                                        for (var i = d[e + h & f - 1]; --b; )
                                            c = c + 1 & f - 1, e = d[c], g = g + e & f - 1, h = d[g], d[c] = h, d[g] = e, i = i * f + d[e + h & f - 1];
                                        a.c = c;
                                        a.d = g;
                                        return i
                                    };
                                    a.b(f)
                                }

                                function p(b, c, e, a) {
                                    e = [];
                                    if (c && typeof b == "object")
                                        for (a in b)
                                        if (a.indexOf("S") < 5)
                                            try {
                                                e.push(p(b[a], c - 1))
                                            } catch(g) {
                                            }
                                    return e.length ? e : "" + b
                                }

                                function l(b, c, e, a) {
                                    b += "";
                                    for ( a = e = 0; a < b.length; a++) {
                                        var g = c, d = a & f - 1, h = (e ^=c[a & f - 1] * 19) + b.charCodeAt(a);
                                        g[d] = h & f - 1
                                    }
                                    b = "";
                                    for (a in c)
                                    b += String.fromCharCode(c[a]);
                                    return b
                                }
                                i.seedrandom = function(b, c) {
                                    var e = [], a, b = l(p( c ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), e);
                                    a = new q(e);
                                    l(a.a, j);
                                    i.random = function() {
                                        for (var b = a.b(m), d = o, c = 0; b < k; )
                                            b = (b + c) * f, d *= f, c = a.b(1);
                                        for (; b >= n; )
                                            b /= 2, d /= 2, c >>>= 1;
                                        return (b + c) / d
                                    };
                                    return b
                                };
                                o = i.pow(f, m);
                                k = i.pow(2, k);
                                n = k * 2;
                                l(i.random(), j)
                            })([], Math, 256, 6, 52);
                            var r = ["mnt6QYQli1NmRkeRwmao", "qQZ6WRI4JVq7RBnSNNhGfj", "ubFUkcue1RD1ECaj", "JI6mtbp8VzGWXUEz8Vn2Bl", "C0nMBBusbXv9EVPFOW5bJ", "cljGbLQF3gcBglPR8g", "uLM9L3PWe47419syK24In", "LKQhhtab4v2fSZZnmjhY", "qUhwTZdjUzGV0LVUHw1Zd", "B5RaWNaAWHa7prDOJ6pC", "ED0XPvntMongREcGXU40", "DWlcNl4cFfJXGrW2geA", "E20T5keLndOC6IchX4ILPa", "fbvSzuIvqnQHI245K5xgp", "WNN9TRqJAhdX9ZQMfAY", "EoY3QZ6eaRKfQb5h6y", "D6nCLOgFlI65gN01vxWc7Ei", "rv7h7NXNnTsIjYDtnTvK", "7JL7AqdLOdHOq0CF00Z", "i1GJtXlC8OdrTsDGCb", "mrkaeItGZvDJxfONqNB30Yz", "CUICJl2f4dc1WOI2V8Tc", "DFn5Pfl2m9Yq2EAZNan", "5ygbIEdcNHemxgCRWB", "DEhh8t0i7h2hlUxMOSAdenm", "5fmoYvCeajs0xqdKBqs2Y", "TbWcH01Q2MH2iGOwxuF", "vHwJDcddOocT9OpsM", "c9Rtjes2oibJEH2GOeI6HKB", "j1qjdA93VtK47msH9gNYJ", "vMfE9nnZCNriyeh5ezc3", "hu58bOTIP8c0MDvR"];
                            this.m = 0x100000000;
                            this.a = 1103515245;
                            this.c = 12345;
                            Math.seedrandom(new Date().getTime() + window._rngmouse || "");
                            seed = seed ? seed : r[Math.floor(Math.random() * 100000000) % 32];
                            Math.seedrandom(seed + "|" + tmpck.get("s_vi") + navigator.userAgent + (new Date()).getTime());
                            // if(document.getElementById && oldmouse!=null) {document.onmouseover=oldmouse;}
                        }
                        */
                       var RNG={
                           nextRange:function(start,end) {
                               return Math.floor(Math.random()*end)+start;
                           },
                           nextFloat:function() {
                               return Math.random();
                           }
                       };

                        /* RNG.prototype.nextInt = function() {
                            return (this.a * (Math.floor(Math.random() * (this.m - 1))) + this.c) % this.m;
                        }
                        RNG.prototype.nextRange = function(start, end) {
                            var rangeSize = end - start;
                            var randomUnder1 = this.nextInt() / this.m;
                            return start + Math.floor(randomUnder1 * rangeSize);
                        }
                        RNG.prototype.nextFloat = function() {
                            return this.nextInt() / (this.m - 1);
                        } */
                        c = (RNG.nextFloat() >= (1 - sampleSize)) ? RNG.nextRange(0, actions.length) : -1;
                        if (c >= 0) {
                            tmpck.set(testName, c, duration);
                            tmpck.set("hpabfirstpg", testName);
                            tmpck.set(testNameDate, testName + c, duration);
                        }
                    }
                    if ((c >= 0 && c < actions.length)) {
                        redir = actions[c][0];
                        return redir(actions[c][1]);
                    }
                }
                return false;
            }
            function _prv_abTrigger(t) {
                var map = t.map, n = t.name, re = t.regex, curl = t.compare, i, reres, rval = [];
                try {
                    for ( i = re.length - 1; i >= 0; i--) {
                        if (!reres) {
                            reres = curl.match(new RegExp(re[i], "i"));
                        }
                    }
                    if (!!reres && reres.length > 1) {
                        if (t.rollout) {
                            return [t.rollout];
                        }
                        var cc = reres[1];
                        rval = map[n + "-" + cc];
                        if (rval.length <= 1) {
                            rval = map[n + "-" + cc];
                            rval[1] = rval[0];
                        }
                    }
                } catch(x) {
                    hpmmd.log.log("AB Testing _prv_abTrigger" + JSON.stringify(x) );
                }
                return !!rval ? rval : [];
            }
            function checkValidUsers(hponlyflag) {
                return true;
                /* var hpignore = false,
                 srchEx = window.location.search.indexOf("viewonly=1") != -1,
                 ckEx = tmpck.get("tmpIgnore3").length > 0,
                 ckExHP = tmpck.get("tmpIgnoreHP").length > 0,
                 check = (hponlyflag == true ? (!hpignore) : (srchEx || hpignore || ckEx));
                 if (check) {
                 tmpck.set((hponlyflag == true ? "tmpIgnoreHP": "tmpIgnore3"), "1", 30);
                 return false;
                 }
                 return true; */
            }

            if (window.location.search.indexOf("viewonly=1") != -1) {
                return false;
            }
            var trig = _prv_abTrigger(abtest), i;
            if (trig.length > 0) {
                if (checkValidUsers(hponlyflag === true || hponlyflag === "hp" ? true : null)) {
                    if (trig.length == 1 || (trig.length > 1 && trig[0] === trig[1])) {
                        return _prvDoRedirect(trig[0]);
                    }
                    var nrTest = [];
                    for ( i = 0; i < trig.length; i++) {
                        nrTest[i] = [_prvDoRedirect, trig[i]];
                    }
                    return doABTest(nrTest);
                }
            }
            return false;
        };

        if (window.location.search.indexOf("viewonly=1") != -1) {
            return false;
        }
        // US Only Redirection:
        /* if(flag=="HomepageUSOnly"&& typeof(window._prv_getIPSegment)=="function" &&_prv_getIPSegment()==="hp") {
        return _prvDoRedirect("http://www8.hp.com/us/en/home.html");
        // tmpck.set("hpcshponlyab", 0, 1);
        // tmpck.set("hpabfirstpg", "hpcshponlyab");
        // tmpck.set("hptest20101022", "hpcshponlyab"+"0", 1);
        } */
        // Do all tests
        if (isdefined && !!abdefs[flag]) {
            rval = _fullTest(abdefs[flag], abdefs[flag].report_suite, abdefs[flag].cookie, abdefs[flag].sample, abdefs[flag].duration, (abdefs[flag].hp === true ? true : false));
        }
    }
    if (actionValue == "checkvalidtest") {
        var k, robj = {}, rsid;
        for (k in abdefs) {
            rsid = abdefs[k].report_suite;
            robj[rsid] = abdefs[k].cookie;
        }
        return robj;
    }
    return rval;
}


// Qualtrics loader script
// AMD compatible
// Avoiding dependencies (i.e. jQuery) for simple <script> tag compatibility
;
(function() {
    var hpmmd = window.hpmmd || null,
        jsmd = window.jsmd || null,
        baselineSurveySampleRate = 0.25, // Overall sample rate for all surveys.  The value is effectively only 50%
        languageId = "en-us", // Default value is en-us for undefined language codes
        countryId = "us", // Default value is us for undefined country codes
        webSectionId = "", // No default assigned - we do not survey the customer if this is not defined

        // Exclusion and special logic code:
        surveyWebSectionsToExclude = "r4155:r11690:r11554:r10925:r11781:r11839", //Added r11839 to exclude pps support
        surveyDomainsToExclude = "store.hp.com:c0004954.itcs.hp.com:c0004934.itcs.hp.com:c0007988.itcs.hp.com:c0008015.itcs.hp.com:g4t5118g.houston.hp.com:g4t5117g.houston.hp.com:g9t2435g.houston.hp.com:g9t2434g.houston.hp.com:h30487.www3.hp.com:h30507.www3.hp.com:h30434.www3.hp.com:h30467.www3.hp.com:h30471.www3.hp.com:h30478.www3.hp.com:h30478.www3.hp.com:h30491.www3.hp.com:h30492.www3.hp.com:h30624.www3.hp.com:h22207.www2.hp.com:h22212.www2.hp.com";
        lowVolumeCountries = ["cl", "ec", "pe", "ve", "id", "ph", "th", "vn", "at", "be", "cz", "dk", "gr", "hu",
            "lamerica_nsc_cnt_amer"
        ],
        lowVolumeWebSections = ["r11662"],
        // Checks for low-volume sites for any increases in sampling
        isLowVolumeCountry = function() {
            return lowVolumeCountries.join(":").indexOf(countryId) !== -1
        },
        isLowVolumeWebSection = function() {
            return lowVolumeWebSections.join(":").indexOf(webSectionId) !== -1
        },
        lowVolumeSurveySampleRate = baselineSurveySampleRate * 2,

        version = "QUALTRICS_VERSION";

    // Helper function: check to see if the survey has already been taken
    // Cookie helper functions and checks

    function readCookie(c) {
        var unescape = (typeof(unescape) == "function" ? unescape : decodeURIComponent),
            r = new RegExp(c + "\\=([^\\;]+)"),
            found = r.exec(document.cookie);
        return found ? unescape(found[1]) : null
    }

    function readQuery(c) {
        var unescape = (typeof(unescape) == "function" ? unescape : decodeURIComponent),
            r = new RegExp(c + "\\=([^\\;]+)"),
            found = r.exec(window.location.search);
        return found ? unescape(found[1]) : null
    }

    function isSurveyOptOutOrAlreadyTaken() {
        var cookieHP_EBUS = readCookie("HP_EBUS") || "",
            cookieTakenTheSurvey = readCookie("TakenTheSurvey") || "";
        return cookieHP_EBUS !== "TRUE" && cookieTakenTheSurvey !== "TRUE"
    }

    // Only provide the survey to people who have not already taken the survey
    if (isSurveyOptOutOrAlreadyTaken()) {
        if ( !! hpmmd && !! hpmmd.metatags) {
            webSectionId = hpmmd.metatags.web_section_id || webSectionId;
            countryId = hpmmd.metatags.target_country || hpmmd.metatags.country || countryId;
            languageId = hpmmd.metatags.language || languageId;
        }
        if (window.location.hostname.indexOf("shopping") !== -1 || typeof(_jsmd) !== "undefined") {
            webSectionId = "r329";
        }
        if ( !! jsmd) {
            webSectionId = jsmd.get("metatags.sectionid") || jsmd.get("metatags.web_section_id") || "r329";
        }
        webSectionId = webSectionId.toLowerCase();

        // Increase the sample rate if the surveys are from low volume web sections
        if (isLowVolumeCountry() || isLowVolumeWebSection()) {
            baselineSurveySampleRate = lowVolumeSurveySampleRate;
        }

        // Make certain that the baseline survey sample rate is less than 100%, just in case there are issues
        baselineSurveySampleRate = baselineSurveySampleRate > 1 ? 1 : baselineSurveySampleRate;

        function multiInterceptSupport(share1, share2) {
            var selected = 0,
                cookieName = "surveyShare",
                forceSurvey = readQuery("forceIntercept");
            if (document.cookie.indexOf(cookieName) !== -1) {
                selected = parseInt(readCookie(cookieName)) || selected;
            } else {
                var rval = Math.random();
                if (0. < rval && rval < share1) {
                    selected = 1;
                }
                if (share1 < rval && rval < (share1 + share2)) {
                    selected = 2;
                }
                if ((share1 + share2) < rval && rval < 1) {
                    selected = 3;
                }
                if (forceSurvey) {
                    selected = parseInt(forceSurvey);
                }
                document.cookie = cookieName + "=" + selected;
            }
            return selected;
        }

        // Only survey if web section is defined and the web section ID does not match the list of exclusion web sections
        if ( !! webSectionId && surveyWebSectionsToExclude.indexOf(webSectionId) == -1 && surveyDomainsToExclude.indexOf(window.location.hostname) == -1) {
            try {
                var qual_div = document.createElement('div');
                if (typeof(qual_div.setAttribute) !== "undefined") {
                    qual_div.setAttribute("id", "SI_cRWs3ZXrfLlMM97");
                    _domReady.ready(function() {
                        document.getElementsByTagName('body')[0].appendChild(qual_div);
                    });
                }
                (function() {
                    var g = function(e, h, f, g) {
                        this.get = function(a) {
                            for (var a = a + "=", c = document.cookie.split(";"), b = 0, e = c.length; b < e; b++) {
                                for (var d = c[b];
                                    " " == d.charAt(0);) d = d.substring(1, d.length);
                                if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
                            }
                            return null
                        };
                        this.set = function(a, c) {
                            var b = "",
                                b = new Date;
                            b.setTime(b.getTime() + 6048E5);
                            b = "; expires=" + b.toGMTString();
                            document.cookie = a + "=" + c + b + "; path=/; "
                        };
                        this.check = function() {
                            var a = this.get(f);
                            if (a) a = a.split(":");
                            else if (100 != e) "v" == h && (e = Math.random() >= e / 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(":"));
                            else return !0;
                            var c = a[1];
                            if (100 == c) return !0;
                            switch (a[0]) {
                                case "v":
                                    return !1;
                                case "r":
                                    return c = a[2] % Math.floor(100 / c), a[2]++, this.set(f, a.join(":")), !c
                            }
                            return !0
                        };
                        this.go = function() {
                            if (this.check()) {
                                var a = document.createElement("script");
                                a.type = "text/javascript";
                                a.src = g + "&t=" + (new Date()).getTime();
                                document.body && document.body.appendChild(a)
                            }
                        };
                        this.start = function() {
                            var a = this;
                            window.addEventListener ? window.addEventListener("load", function() {
                                a.go()
                            }, !1) : window.attachEvent && window.attachEvent("onload", function() {
                                a.go()
                            })
                        }
                    };
                    try {
                        var select = multiInterceptSupport(baselineSurveySampleRate, 0.5);
                        if (select == 1) {
                            /* (new g(Math.floor(100 * baselineSurveySampleRate), "r", "QSI_S_SI_bmzq7cpQAevceB7", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_bmzq7cpQAevceB7&Q_LOC=" + encodeURIComponent(window.location.href))).start(); */
                            (new g(100, "r", "QSI_S_SI_bmzq7cpQAevceB7", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_bmzq7cpQAevceB7&Q_LOC=" + encodeURIComponent(window.location.href))).start();
                        } else if (select == 2) {
                            var rand= Math.random();
                            if(window.location.href.toLowerCase().indexOf("http://h30499.www3.hp.com")!=-1){
                                
                                if(rand<0.45){
                                (new g(100, "r", "QSI_S_SI_cxbQWjGHEaiHZOd", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_cxbQWjGHEaiHZOd&Q_LOC=" + encodeURIComponent(window.location.href))).start();
                                }
                                else{
                                 (new g(100, "r", "QSI_S_SI_9FiY3tma5C6b9eR", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_9FiY3tma5C6b9eR&Q_LOC=" + encodeURIComponent(window.location.href))).start();   
                                }


                            }
                            else{
                                if(rand<0.5){
                                    
                                    (new g(100,"r","QSI_S_SI_8cOB28F7mBZnMFv","//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_8cOB28F7mBZnMFv&Q_LOC="+encodeURIComponent(window.location.href))).start();                                
                                }
                                else{
                                   (new g(100, "r", "QSI_S_SI_9FiY3tma5C6b9eR", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_9FiY3tma5C6b9eR&Q_LOC=" + encodeURIComponent(window.location.href))).start(); 
                                }
                            }
                            
                        }
                        else if (select==3){
                            (new g(100, "r", "QSI_S_SI_cRWs3ZXrfLlMM97", "//zn_37vecqsvfmo7awf-hpdigital.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_cRWs3ZXrfLlMM97&Q_LOC=" + encodeURIComponent(window.location.href))).start(); //Software Intercept  

                           
                        }
                    } catch (i) {}
                })();
            } catch (i) {}
        }
    }
})();




(function () {
    if (!!window.s) {
        // if(typeof(_mbootstrap)!=="undefined") {
        //     curlRequire(["debug/HPLog"],function(log) {
        //         hpmmd.log = log;
        //     });
        // }
        /* Percent Page Viewed Plugins */
        /*
         * Plugin: getPercentPageViewed v1.x
         * This code has been modified from the original version distributed
         * by Omniture and will not be supported by Omniture in any way
         */
        /* s.getPercentPageViewed = new Function("", ""
         + "var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var"
         + " v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}"); */
        if (!(window.location.href.indexOf("eprime20.houston.hp.com") !== -1 && navigator.userAgent.indexOf("MSIE") !== -1)) {

            s.getPPVCalc = function () {
                var s = window.s, d = s.d;
                try {
                    if (!!d.body) {
                        var dh = Math.max(Math.max(d.body.scrollHeight, d.documentElement.scrollHeight), Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
                                Math.max(d.body.clientHeight, d.documentElement.clientHeight)),
                            vph = d.clientHeight || Math.min(d.documentElement.clientHeight, d.body.clientHeight),
                            st = s.wd.pageYOffset || (s.wd.document.documentElement.scrollTop || s.wd.document.body.scrollTop),
                            vh = st + vph, pv = Math.round(vh / dh * 100), cv = s.c_r('s_ppv'), cpi = cv.indexOf('|'),
                            cpv = '', ps = '';
                        if (cpi != -1) {
                            cpv = cv.substring(0, cpi);
                            ps = parseInt(cv.substring(cpi + 1));
                        } else {
                            cpv = ps = 0;
                        }
                        if (pv <= 100) {
                            if (pv > parseInt(cpv)) {
                                ps = pv - Math.round(vph / dh * 100);
                                s.c_w('s_ppv', pv + '|' + ps);
                                //hpmmd.log.log("Writing page view cookie: " + pv + '|' + ps);
                            }
                        } else {
                            s.c_w('s_ppv', '');
                        }

                    }
                } catch (e) {
                }
            };
            /* s.getPPVCalc = new Function("", ""
             + "var s=window.s,d=s.d,dh=Math.max(Math.max(d.body.scrollHeight,d.documentElement."
             + "scrollHeight),Math.max(d.body.xoffsetHeight,d.documentElement.of"
             + "fsetHeight),Math.max(d.body.clientHeight,d.documentElement.clie"
             + "ntHeight)),vph=d.clientHeight||Math.min(d.documentElement.clien"
             + "tHeight,d.body.clientHeight),st=s.wd.pageYOffset||(s.wd.document."
             + "documentElement.scrollTop||s.wd.document.body.scrollTop),vh=st+vph,"
             + "pv=Math.round(vh/dh*100),cv=s.c_r('s_ppv'),cpi=cv.indexOf('|'),cpv="
             + "'',ps='';try{if(cpi!=-1){cpv=cv.substring(0,cpi);ps=parseInt(cv.substri"
             + "ng(cpi+1));}else{cpv=ps=0;}if(pv<=100){if(pv>parseInt(cpv)){ps=pv-M"
             + "ath.round(vph/dh*100);s.c_w('s_ppv',pv+'|'+ps);}}else{s.c_w('s_ppv'"
             + ",'');}}catch(e){hpmmd.log.log('ERROR: getPPVCalc: '+e)}"); */
            s.getPPVSetup = function () {
                var s = this;
                if (s.wd.addEventListener) {
                    s.wd.addEventListener('load', s.getPPVCalc, false);
                    s.wd.addEventListener('scroll', s.getPPVCalc, false);
                    s.wd.addEventListener('resize', s.getPPVCalc, false);
                } else if (s.wd.attachEvent) {
                    s.wd.attachEvent('onload', s.getPPVCalc);
                    s.wd.attachEvent('onscroll', s.getPPVCalc);
                    s.wd.attachEvent('onresize', s.getPPVCalc);
                }
            };
            /* s.getPPVSetup = new Function("", ""
             + "var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
             + ".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
             + "e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
             + ".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
             + "ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
             + "lc);}"); */
            var percentViewed = unescape(s.c_r("s_ppv"));
            s.prop60 = percentViewed; // Set the value to replicate whatever the previous page value existed in the cookie

            s.c_w("s_ppv", "0", (new Date("Jan 1, 2000 00:00:00")));
            /* function doGetPPVSetup(countdown) {
             countdown=countdown-1;
             if(countdown < 0) {return;}
             if(!!window.s.d) {
             s.getPPVSetup();
             }
             else setTimeout(function() {doGetPPVSetup(countdown)},1000);
             }
             doGetPPVSetup(10); */
            s.getPPVSetup();
        }
    }
})();

var doTandTIntegration = function (events, products, country, language, purchaseID) {
    function insertHiddenDomElement(type, id) {
        var ga = document.createElement(type);
        ga.id = id;
        if (typeof(ga.style.cssText) !== "undefined") {
            ga.style.cssText = "visibility: hidden"; // Microsoft, I love you
        } else {
            ga.style = "visibility: hidden";
        }
        var s = document.getElementsByTagName('body')[0];
        s.parentNode.insertBefore(ga, s);
    }

    function doSuccessMbox(mboxName, parametersJSON) {
        if (!window.mboxDefine) {
            return;
        }
        var defineParameters = ["tt_" + mboxName, mboxName],
            updateParameters = [mboxName];

        for (i in parametersJSON) {
            if (parametersJSON.hasOwnProperty(i)) {
                defineParameters.push(i + "=" + parametersJSON[i]);
                updateParameters.push(i + "=" + parametersJSON[i]);
            }
        }
        insertHiddenDomElement("div", "tt_" + mboxName);
        window.mboxDefine.apply(window, defineParameters);
        window.mboxUpdate.apply(window, updateParameters);
    }

    function grabSkusFromProductString(productString) {
        var prodArray = productString.split(","),
            productList = [];
        for (var i = 0, l = prodArray.length; i < l; i++) {
            var product = prodArray[i].split(";");
            if (product.length > 1) {
                productList.push(product[1]);
            }
        }
        return productList.join(",");
    }

    function grabTotalBasketValue(productString) {
        var prodArray = productString.split(","),
            total = 0.0;
        for (var i = 0, l = prodArray.length; i < l; i++) {
            var product = prodArray[i].split(";");
            if (product.length > 3) {
                try {
                    total = total + parseFloat(product[3]);
                } catch (e) {
                }
            }
        }
        return "" + total;
    }

    var parameterObject = {countryCode:country, languageCode:language};
    if (events.indexOf("prodView") !== -1) {
        parameterObject["productPurchasedId"] = grabSkusFromProductString(products);
        doSuccessMbox("auto_prodView", parameterObject);
    }
    if (events.indexOf("scAdd") !== -1) {
        parameterObject["productPurchasedId"] = grabSkusFromProductString(products);
        doSuccessMbox("auto_cartAdd", parameterObject);
    }
    if (events.indexOf("scRemove") !== -1) {
        parameterObject["productPurchasedId"] = grabSkusFromProductString(products);
        doSuccessMbox("auto_cartRemove", parameterObject);
    }
    if (events.indexOf("scCheckout") !== -1) {
        parameterObject["productPurchasedId"] = grabSkusFromProductString(products);
        doSuccessMbox("auto_cartCheckout", parameterObject);
    }
    if (events.indexOf("purchase") !== -1) {
        parameterObject["productPurchasedId"] = grabSkusFromProductString(products);
        parameterObject["orderTotal"] = grabTotalBasketValue(products);
        parameterObject["orderId"] = purchaseID;
        doSuccessMbox("auto_orderConfirm", parameterObject);
    }
};
if (!!window.s && !!window.mboxDefine) {
    doTandTIntegration(s.events || window.s_events, s.products || window.s_products,
        s.prop7 || window.s_prop7, s.prop8 || window.s_prop8, s.purchaseID || window.s_purchaseID);
}


;
(function () {
    var urlMatchArray = [
            {urls: ["shopping.hp.com/webapp/shopping/order_confirm.do"], "execute": hhoPurchaseSuccess},
            {urls: ["dstore/dcart/ssl/confirmed.asp"], "execute": smbPurchaseSuccess}
        ],
        matchString = window.location.href;

    function insertScript(src) {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = src;
        var s = document.getElementsByTagName('body')[0];
        s.parentNode.insertBefore(ga, s);
    }

    // Optimost code
    function hhoPurchaseSuccess() {
        /* function parseOmnitureRevenue(sproducts) {
         var splitRevenue = sproducts.split(","),total=0.;
         for(var i= 0,l=splitRevenue.length;i<l;i++) {
         try {
         total += parseFloat(splitRevenue[i].split(";")[3]||"");
         } catch(e) {}
         }
         return total;
         } */
        var _o = typeof opcounter == "object" ? opcounter : {};
        // var s=window.s||{};
        _o.opOrderID = window.ci_orderid || "";
        _o.opRevenue = window.ci_transactionValue || 0.;// parseOmnitureRevenue(s.products||"");

        _o.D = document;

        _o.L = _o.D.location;

        _o.T = new Date();

        _o.Q = {};

        _o.C = {};

        _o.U = "https://by.essl.optimost.com/by/counter/1666/-/2/event.js";

        _o.D_ts = Math.round(_o.T.getTime() / 1e3);

        _o.D_tzo = _o.T.getTimezoneOffset();

        _o.D_loc = _o.L.protocol + "//" + _o.L.hostname + _o.L.pathname;

        _o.D_ckl = _o.D.cookie.length;

        _o.D_ref = _o.D.referrer;

        function _oI() {
            var s = _o.L.search;
            var c = _o.D.cookie;
            if (s.length > 3) {
                for (var a = s.substring(1).split("&"), i = 0, l = a.length; i < l; i++) {
                    var p = a[i].indexOf("=");
                    if (p > 0) _o.Q[a[i].substring(0, p)] = unescape(a[i].substring(p + 1));
                }
            }
            if (c.length > 3) {
                for (var a = c.split(";"), i = 0, b = a.length; i < b; i++) {
                    var v = a[i].split("=");
                    while (v[0].substring(0, 1) == " ") v[0] = v[0].substring(1, v[0].length);
                    if (v.length == 2) _o.C[v[0]] = unescape(v[1]);
                }
            }
        }

        function _oS() {
            var o = {};
            for (var n in _o) o[n] = _o[n];
            o.D = o.L = o.T = o.Q = o.C = o.U = null;
            var q = "";
            for (var n in o) if (o[n] != null && o[n] != "") q += (q.length > 0 ? "&" : _o.U.indexOf("?") > 0 ? "&" : "?") + n + "=" + escape(o[n]);
            return _o.U + q;
        }

        _oI();

        for (var n in _o.Q) if (n.substring(0, 2) == "op") _o[n] = _o.Q[n];

        for (var n in _o.C) if (n.substring(0, 2) == "op") _o[n] = _o.C[n];

        // _o.D.write("<" + 'script type="text/javascript" src="' + _oS() + '"></script>');
        insertScript(_oS());
    }

    function smbPurchaseSuccess() {
        function parseOmnitureRevenue(sproducts) {
            var splitRevenue = sproducts.split(","), total = 0.;
            for (var i = 0, l = splitRevenue.length; i < l; i++) {
                try {
                    total += parseFloat(splitRevenue[i].split(";")[3] || "");
                } catch (e) {
                }
            }
            return total;
        }

        var _o = typeof opcounter == "object" ? opcounter : {};

        var s = window.s || {};
        _o.opOrderID = window.ci_orderid || s.purchaseID || window.s_purchaseID || "";
        _o.opRevenue = window.ci_transactionValue || parseOmnitureRevenue(s.products||"") || 0.;

        _o.D = document;

        _o.L = _o.D.location;

        _o.T = new Date();

        _o.Q = {};

        _o.C = {};

        _o.U = "https://by.essl.optimost.com/by/counter/1666/-/22/event.js";

        _o.D_ts = Math.round(_o.T.getTime() / 1e3);

        _o.D_tzo = _o.T.getTimezoneOffset();

        _o.D_loc = _o.L.protocol + "//" + _o.L.hostname + _o.L.pathname;

        _o.D_ckl = _o.D.cookie.length;

        _o.D_ref = _o.D.referrer;

        function _oI() {
            var s = _o.L.search;
            var c = _o.D.cookie;
            if (s.length > 3) {
                for (var a = s.substring(1).split("&"), i = 0, l = a.length; i < l; i++) {
                    var p = a[i].indexOf("=");
                    if (p > 0) _o.Q[a[i].substring(0, p)] = unescape(a[i].substring(p + 1));
                }
            }
            if (c.length > 3) {
                for (var a = c.split(";"), i = 0, b = a.length; i < b; i++) {
                    var v = a[i].split("=");
                    while (v[0].substring(0, 1) == " ") v[0] = v[0].substring(1, v[0].length);
                    if (v.length == 2) _o.C[v[0]] = unescape(v[1]);
                }
            }
        }

        function _oS() {
            var o = {};
            for (var n in _o) o[n] = _o[n];
            o.D = o.L = o.T = o.Q = o.C = o.U = null;
            var q = "";
            for (var n in o) if (o[n] != null && o[n] != "") q += (q.length > 0 ? "&" : _o.U.indexOf("?") > 0 ? "&" : "?") + n + "=" + escape(o[n]);
            return _o.U + q;
        }

        _oI();

        for (var n in _o.Q) if (n.substring(0, 2) == "op") _o[n] = _o.Q[n];

        for (var n in _o.C) if (n.substring(0, 2) == "op") _o[n] = _o.C[n];

        // _o.D.write("<" + 'script type="text/javascript" src="' + _oS() + '"></script>');
        insertScript(_oS());
    }

    for (var i = 0, l = urlMatchArray.length; i < l; i++) {
        var urlsToMatch = urlMatchArray[i].urls,
            doMatch = false;
        for (var j = 0, m = urlsToMatch.length; j < m; j++) {
            if (urlsToMatch[j].test &&
                urlsToMatch[j].test(matchString)) {
                doMatch = true;
            } else if (urlsToMatch[j].indexOf &&
                matchString.indexOf(urlsToMatch[j]) !== -1) {
                doMatch = true;
            }
        }
        if (doMatch == true && typeof(urlMatchArray[i].execute) == "function") {
            urlMatchArray[i].execute();
        }
    }
})();
