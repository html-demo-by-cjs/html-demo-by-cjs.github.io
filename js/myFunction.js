//region 通过id获取元素
function getId(idName) {
    return document.getElementById(idName);
}

//endregion

//region 通过类名获取元素
function getClass(className, obj) {
    obj = obj || document;
    if (obj.getElementsByClassName) {
        return obj.getElementsByClassName(className);
    } else {
        var targetElements = [],
            allElements = obj.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className === className) {
                targetElements.push(allElements[i]);
            }
        }
        return targetElements;
    }
}

//endregion

//region 通过标签名获取元素
function getTag(tagName, obj) {
    obj = obj || document;
    return obj.getElementsByTagName(tagName);
}

//endregion

//region 获取元素的CSS样式
function getCSS(targetElement, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(targetElement, null)[attr];
    } else {
        return targetElement.currentStyle[attr];
    }
}

//endregion

//region 给元素添加css样式
function setCSS(targetElement, css) {
    for (var key in css) {
        targetElement.style[key] = css[key];
    }
}

//endregion

//region 获取元素左上角在画布中的坐标位置
function getPosition(targetElement) {
    var pos = {
        left: targetElement.offsetLeft,
        top: targetElement.offsetTop
    };
    cur = targetElement;
    while (cur.offsetParent != document.body) {
        var curPosPar = cur.offsetParent;
        pos.left += curPosPar.offsetLeft + parseInt(getCSS(curPosPar, 'borderLeftWidth'));
        pos.top += curPosPar.offsetTop + parseInt(getCSS(curPosPar, 'borderTopWidth'));
        cur = curPosPar;
    }
    return pos;
}

//endregion

//region 增加索引值
function addIndex(targetArr) {
    for (var i = 0; i < targetArr.length; i++) {
        targetArr[i].index = i;
    }
}

//endregion

//region 数组去重
function duplicate(targetArr) {
    var obj = {};
    for (var i = 0; i < targetArr.length; i++) {
        var cur = targetArr[i];
        if (obj[cur] == undefined) {
            obj[cur] = cur;
        } else {
            targetArr.splice(i, 1);
            i--;
        }
    }
    return targetArr;
}

//endregion

//region 获取0-9的数字数组
function getNumsArr() {
    var numsArr = [];
    for (var i = 48; i <= 57; i++) {
        numsArr.push(String.fromCharCode(i));
    }
    return numsArr;
}

//endregion

//region 获取A-Z的字母数组
function getUpperArr() {
    var upperArr = [];
    for (var i = 65; i <= 90; i++) {
        upperArr.push(String.fromCharCode(i));
    }
    return upperArr;
}

//endregion

//region 获取a-z的字母数组
function getLowerArr() {
    var lowerArr = [];
    for (var i = 97; i <= 122; i++) {
        lowerArr.push(String.fromCharCode(i));
    }
    return lowerArr;
}

//endregion

//region 范围随机数
function rnd(max, min) {
    min = min || 0;
    return Math.random() * (max - min) + min;
}

//endregion

//region 一般二级菜单隐藏显示
function listShowUp(firstLevel, secondLevel) {
    for (var i = 0; i < secondLevel.length; i++) {
        secondLevel[i].style.display = 'none';
        (function () {
            var temp = i;
            firstLevel[temp].onmouseover = function () {
                secondLevel[temp].style.display = 'block';
            };
            firstLevel[temp].onmouseout = function () {
                secondLevel[temp].style.display = 'none';
            }
        })();
    }
}

//endregion

//region 解决innerText兼容
function innerText(value, obj) {
    obj = obj || document;
    if (obj.innerText) {
        return obj.innerText = value;
    } else {
        return obj.textContent = value;
    }
}

//endregion

//region 节点相关方法
//region 获取父容器
function getPAR(curElement) {
    return curElement.parentNode;
}

//endregion

//region 获取子元素节点数组
function getChild(curElement) {
    var childArr = [];
    for (var i = 0; i < curElement.children.length; i++) {
        childArr.push(curElement.children[i]);
    }
    return childArr;
}

//endregion

//region 获取第一个元素节点
function getFirstElement(curElement) {
    return curElement.children[0];
}

//endregion

//region 获取最后一个元素节点
function getLastElement(curElement) {
    return curElement.children[curElement.children.length - 1];
}

//endregion

//region 获取元素节点在父容器中的索引值
function getIndex(curElement, childArr) {
    var curIndex = -1;
    for (var i = 0; i < childArr.length; i++) {
        if (childArr[i] == curElement) {
            curIndex = i;
            break;
        }
    }
    return curIndex;
}

//endregion

//region 获取当前元素节点的上一个兄弟节点
function getPrevBro(curElement) {
    var childArr = getChild(getPAR(curElement)),
        curIndex = getIndex(curElement, childArr);
    if (curIndex == 0 || curIndex == -1) {
        return null;
    }
    return childArr[curIndex - 1];
}

//endregion

//region 获取当前元素节点的下一个兄弟节点
function getNextBro(curElement) {
    var childArr = getChild(getPAR(curElement)),
        curIndex = getIndex(curElement, childArr);
    if (curIndex == childArr.length - 1 || curIndex == -1) {
        return null;
    }
    return childArr[curIndex + 1];
}

//endregion

//region 获取当前元素节点的所有兄弟节点
function getBros(curElement) {
    var childArr = getChild(getPAR(curElement)),
        curIndex = getIndex(curElement, childArr);
    childArr.splice(curIndex, 1);
    return childArr;
}

//endregion

//endregion
