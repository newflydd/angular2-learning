"use strict";
var Hero = (function () {
    //它可能看上去不像是有属性的类，但它确实有
    //利用的是 TypeScript 提供的简写形式
    //用构造函数的参数直接定义属性
    function Hero(id, name, power, alter, isSecret) {
        if (isSecret === void 0) { isSecret = false; }
        this.id = id;
        this.name = name;
        this.power = power;
        this.alter = alter;
        this.isSecret = isSecret;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map