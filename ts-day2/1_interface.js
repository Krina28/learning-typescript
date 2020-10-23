"use strict";
var area = function (rect) {
    rect.w = rect.w || rect.h;
    return rect.h * rect.w;
};
var s1 = { h: 20, w: 20 };
console.log(area(s1));
var s2 = { h: 20 };
console.log(area(s2));
