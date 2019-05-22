var oHeader = getId('header');
var oNoticeList = getClass('notice-list', oHeader)[0];
var oNoticeLis = oNoticeList.children[0].children;

function show(targetElements, time) {
    var num = 0;
    var timer = null;
    timer = setInterval(function () {
        targetElements[num].className = '';
        num++;
        num = (num + targetElements.length) % targetElements.length;
        targetElements[num].className = 'active';
    }, time);
    return timer;
}

var timer1 = show(oNoticeLis, 2500);

oNoticeList.onmouseover = function () {
    clearInterval(timer1);
};

oNoticeList.onmouseout = function () {
    timer1 = show(oNoticeLis, 2500);
};

var oMain = getId('main');
var oRecommend = getClass('recommend', oMain)[0];
var oImgList = getClass('image-list', oRecommend)[0];
var oImgLis = oImgList.children[0].children;

var timer2 = show(oImgLis, 5000);

var oImgNav = getClass('img-nav-list', oMain)[0];
var oImgNavs = oImgNav.children[0].children;
var time3 = show(oImgNavs, 5000);