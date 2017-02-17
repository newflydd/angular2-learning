"use strict";
var Hero = (function () {
    function Hero(id, name, alterName, skillIndex) {
        this.id = id;
        this.name = name;
        this.alterName = alterName;
        this.skillIndex = skillIndex;
    }
    return Hero;
}());
exports.Hero = Hero;
exports.SKILLS = ['code', 'think', 'make', 'eat'];
//# sourceMappingURL=hero.entity.js.map