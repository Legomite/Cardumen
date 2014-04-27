game.module(
        'game.world.actors.Behaviors'
        ).require(
        'engine.physics',
        'plugins.AI'
        ).body(function() {
    Behaviors = game.Class.extend({
        sinBehavior: function(chaserBody, initialY, velFactor, amplitude, frequency) {
            chaserBody.position.y = initialY + (amplitude * Math.sin(frequency * chaserBody.position.x));
            if (chaserBody.last) {
                var temp = (chaserBody.position.y - chaserBody.last.y) / (chaserBody.position.x - chaserBody.last.x);
                chaserBody.rotation = (Math.atan(temp));
            }
            chaserBody.velocity = velFactor;
        },
        paralBehavior: function(chaserBody, velFactor, b) {
            //var discriminante = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
            //var point2 = ((-b + discriminante) / 2) + iniX;
            //var point1 = (-b - discriminante) / 2 + iniX;
            //var positionV = {x: -(b / 2) + iniX, y: -((Math.pow(b, 2) - (4 * a * c)) / 4)+deepLvl};
            //var left = point1 - chaserBody.position.x;

            if (chaserBody.position.x >= b) {
                chaserBody.position.x += 3;
                chaserBody.position.y -= 5;
                chaserBody.velocity = -1;
            } else {
                chaserBody.velocity = velFactor;
            }
            if (chaserBody.last) {
                var temp = (chaserBody.position.y - chaserBody.last.y) / (chaserBody.position.x - chaserBody.last.x);
                chaserBody.rotation = Math.atan(temp);

            }

        }
    });
});