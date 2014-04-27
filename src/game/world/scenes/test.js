game.module(
    'game.world.scenes.test'
)
    .require(
        'engine.scene',
        'game.world.actors.player',
        'engine.pool'


).body(function () {
    sceneTest = game.Scene.extend({

        backgroundColor: 0x55dff8,
        cardumen_number: 5,
        init: function () {
            //Add world
            this.world = new game.World();
            //Add cardumen Container
            this.cardumenContainer = new game.Container();
            //add command container
            this.commandContainter = new game.Container();
            this.cardumenPool = new Array();
            this.commandPool = new Array();
            // this.cardumenPool = new.game.Pool.create();
            //Add object container
            this.objectContainer = new game.Container();
            //Add container to stage
            this.stage.addChild(this.cardumenContainer);
            this.stage.addChild(this.objectContainer);
            this.stage.addChild(this.commandContainter);
            //add cardumens to the world
            this.addCardumens();
        },
        addCardumens: function () {
            for (var i = 0; i < this.cardumen_number; i++) {
                var cardumen = new Cardumen();
                cardumen.id = i;
                this.cardumenPool.push(cardumen);
                this.addObject(cardumen);
            }
        },
        click: function (event) {
            var command = new Command(event.global);
            command.id = this.commandPool.length;
            this.commandPool.push(command);

            this.addObject(command);
        },





    });
});
