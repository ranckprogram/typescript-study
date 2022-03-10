var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculationDistanceFromOriginToPoint = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    // 原点坐标
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.0);
var dist1 = grid1.calculationDistanceFromOriginToPoint({ x: 3, y: 4 });
console.log(dist1);
var grid2 = new Grid(0.5);
console.log(grid2.calculationDistanceFromOriginToPoint({ x: 4, y: 3 }));
