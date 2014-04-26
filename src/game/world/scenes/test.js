game.module(
    'game.world.scenes.test'
)
    .require(
        'engine.scene',
        'game.world.actors.player'


).body(function () {
    sceneTest = game.Scene.extend({
        backgroundColor: 0xb9bec7,
        worldScale: 100,
        current: null,
        init: function () {
            this.container = new game.Container();
            this.container.position.x = 0;
            this.container.position.y = game.system.height;
            this.container.scale.x = this.worldScale;
            // look, inverting y scale
            this.container.scale.y = -this.worldScale;
            this.stage.addChild(this.container);
            // world creation
            this.world = new game.World();

            // adding a plane which will represent the ground
            var planeShape = new game.Plane();
            var planeBody = new game.Body({
                mass: 0,
                position: [0, -1]
            });
            planeBody.addShape(planeShape);
            this.world.addBody(planeBody);
            game.Player.dummytest();
            this.elements = new Element();
            //      this.interaction = new levelInteraction();

        },
        mousedown: function (e) {

        },
        click: function (event) {

            game.Interaction.click(event);
        },






    });
});
