game.module(
    'game.world.scenes.test'
)
    .require(
        'engine.scene',
        'game.world.actors.player'


).body(function () {
    sceneTest = game.Scene.extend({

        backgroundColor: 0xb9bec7,
        cardumen_number: 50,
        init: function () {
            //Add world
            this.world = new game.World();
            //Add cardumen Container
            this.cardumenContainer = new game.Container();
            //Add object container
            this.objectContainer = new game.Container();
            //Add container to stage
            this.stage.addChild(this.cardumenContainer);
            this.stage.addChild(this.objectContainer);
            //add cardumens to the world
            this.addCardumens();
        },
        addCardumens: function () {
            for (var i = 0; i < this.cardumen_number; i++) {
                var cardumen = new Cardumen();
                this.addObject(cardumen);
            }
        }




    });
});