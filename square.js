function createSquare(config) {
    var newSquare = {
        color: '#ddd',
        area: 10
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'red', width: 20 });
console.log(mySquare);
