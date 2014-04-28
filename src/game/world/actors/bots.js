game.module(
        'game.world.actors.bots'
        )
        .require(
                'engine.physics',
                'plugins.AI',
                'plugins.Behaviors'
                )
        .body(function() {
            Bot = game.Class.extend({
                type: {
                    penguin: 1,
                    whale: 2,
                    killerWhale: 3,
                    seal: 4,
                    walrus: 5,
                    birdOfPrey: 6
                },
                currentType: null,
                _speed: null,
                init: function() {
                    this.body = new game.Body();
                    this.body.position.x = 200;
                    this.body.position.y = 200;
                    this.body.collisionGroup = 2;
                    this.body.collideAgainst = 0;
                    this.steeringB = new game.SteeringBehavior();
                    this.behavior = new Behaviors();
                    // this.create();
                    this.body.collide = this.collide.bind(this);
                    //  this.update = this.update.bind(this);
                },
                create: function() {
                    switch (this.currentType) {
                        case this.type.penguin:
                            this.createPenguin();
                            break;
                        case this.type.whale:
                            this.createWhale();
                            break;
                    }
                    this.addWorld();
                },
                createPenguin: function() {
                    console.log("create penguin");
                    this.sprite = new game.Sprite('box');
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                },
                createWhale: function() {
                    this.sprite = new game.Sprite('box');
                    var shape = new game.Rectangle(64, 64);
                    this.body.addShape(shape);
                    
                },
                addWorld: function() {
                    game.scene.world.addBody(this.body);
                    game.scene.commandContainter.addChild(this.sprite);
                    game.scene.addObject(this);
                },
                collide: function() {
                    game.scene.cardumenPool.erase(this);
                    game.scene.world.removeBody(this);
                    game.scene.cardumenContainer.removeChild(this.sprite);
                    game.scene.removeObject(this);
                    // game.scene.interactive.addScore(this.value);
                    game.scene.world.removeBodyCollision(this.body);
                },
                behaviorasd: function() {
                    switch (this.currentType) {
                        case this.type.penguin:
                            this.behavior.rectBehavior(this.body, 3, "derech");
                            break;
                        case this.type.whale:
                            this.behavior.paralBehavior(this.body, 125, 250);
                            break;

                    }
                },
                update: function() {
                    console.log("x position :");
                    this.behaviorasd();
                    this.sprite.position.x = this.body.position.x;
                    this.sprite.position.y = this.body.position.y;
                    this.sprite.rotation = this.body.rotation;
                }

            });
        });