game.module(
        'game.world.actors.Behaviors'
        ).require(
        'engine.physics',
        'plugins.AI'
        ).body(function() {
            Behaviors = game.Class.extend({
                sinBehavior: function(ChaserBody,initialY,multFactor,amplitude,frequency){
                    //ChaserBody.position.x+=2;
                    ChaserBody.position.y =initialY+ (amplitude * Math.sin(frequency*ChaserBody.position.x));
                    //steeringBehavior.seek(ChaserBody,victimBody,25);
                   /* var temp = ChaserBody.position.clone();
                    temp.subtract(600,600);
                    temp.normalize();
                    temp.multiply(25);*/
                    ChaserBody.velocity = multFactor;
                }
            });
});