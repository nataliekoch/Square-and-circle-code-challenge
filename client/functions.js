$(function() {

    //sets up canvas
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var circles = [];
    var squares = [];

    randomShapeGenerator();

    setInterval(function(){
        circles = [];
        squares = [];
        randomShapeGenerator();
    }, 2000)

    function randomShapeGenerator() {
        for(var i = 0; i <= 50; i++){
            circles.push(makeCircles(randomNumber(1, 100)));
            squares.push(makeSquares(randomNumber(1, 100)));
        }
        sortShapes(circles, squares);
    }

    function makeCircles(size) {
        var area = getCircleArea(size);
        area = Math.ceil(area);
        // console.log( "Cirlce: Radius = " + radius + "px Area = " + area + "px");
        return area;
    }

    function getCircleArea(radius){
        var area = 3.14 * Math.pow(radius, 2);
        return area;
    }

    function makeSquares(size){
        var area = Math.ceil(getSquareArea(size));
        // console.log( "Square: Size = " + size + "px Area = " + area + "px");
        return size;
    }

    function getSquareArea(side){
        return area = Math.pow(side, 2);
    }

    function sortShapes(circles, squares){
        var circleArray = circles.sort(function(a, b){return b-a});
        var squareArray = squares.sort(function(a, b){return b-a});

        for(var i = 0; i < 50; i++){
            drawSquare(squareArray[i]);
        }

        for(var j = 0; j < 50; j++){
            drawCircle(circleArray[j]);
        }
    }

    function drawSquare(square){
        var x = randomNumber(0, 1400);
        var y = randomNumber(0, 1000);
        var hue = randomNumber(20, 70);
        context.strokeStyle = "rgb(255,255,255)";
        context.lineWidth = 4;
        context.fillStyle = "hsla(0, 100%, "+ hue +"%, 1)";
        context.fillRect(x,y,square,square);
        context.strokeRect(x, y, square, square);
    }

    function drawCircle(circle){
        var x = randomNumber(0, 1400);
        var y = randomNumber(0, 1000);
        var hue = randomNumber(20, 70);
        var radius = Math.sqrt(circle/3.14);
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = "hsla(238, 100%, "+ hue +"%, 1)";
        context.fill();
        context.lineWidth = 4;
        context.strokeStyle = "rgb(255,255,255)";
        context.stroke();
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
});
