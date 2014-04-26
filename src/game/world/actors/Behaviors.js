game.module(
        'game.world.actors.Behaviors'
        ).require(
        'engine.physics',
        'plugins.AI'
        ).body(function() {
            Behaviors = game.Class.extend({
                sinBehavior: function(ChaserBody,victimBody,initialY,steeringBehavior,amplitude,frequency){
                    ChaserBody.position.y =initialY+ (amplitude * Math.sin(frequency*ChaserBody.position.x));
                    steeringBehavior.seek(ChaserBody,victimBody,25);
                }
            });
});