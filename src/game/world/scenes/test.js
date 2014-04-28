game.module(
    'game.world.scenes.test'
)
    .require(
        'engine.scene',
        'game.world.actors.player',
        'engine.pool',
        'game.world.actors.bots'


).body(function () {
    sceneTest = game.Scene.extend({

        backgroundColor: 0x55dff8,
        cardumen_number: 20,
        score: 0,
        MAX_COMMAND: 3,
        ended: false,
        init: function () {
            //Add world
            this.world = new game.World();
            this.world.mass = 1;
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
            this.addTimer(3000, this.addEnemies.bind(this), true);
            this.addTimer(7000, this.addCommand.bind(this), true);
            // this.addEnemies();


            this.scoreText = new game.BitmapText(this.score.toString(), {
                font: 'Pixel'
            });
            this.scoreText.position.x = game.system.width / 2 - this.scoreText.textWidth / 2;
            this.stage.addChild(this.scoreText);

            this.cardumenText = new game.BitmapText("Left :" + this.cardumenPool.length.toString(), {
                font: 'Pixel'
            });
            this.cardumenText.scale.x = 0.5;
            this.cardumenText.scale.y = 0.5;
            this.cardumenText.position.x = game.system.width / 6 - this.cardumenText.textWidth / 2;
            this.cardumenText.position.y = game.system.height - 50;
            this.stage.addChild(this.cardumenText);
        },
        restart: function () {
            /*   this.score = 0;
            this.cardumenContainer = new game.Container();
            for (var i = 0; i < this.cardumenPool; i++) {
                this.removeObject(this.cardumenPool[i]);
                this.world.removeBody(this.cardumenPool[i].body);
                this.cardumenContainer.removeChild(this.cardumenPool[i].sprite);
                this.cardumenPool.erase(this.cardumenPool[i]);
                this.world.removeBodyCollision(this.cardumenPool[i].body);
            }
            this.ended = false;
            this.scoreText.setText(this.score.toString());
            this.addCardumens();

            this.cardumenText.setText("Left :" + this.cardumenPool.length.toString());
            this.cardumenText.scale.x = 0.5;
            this.cardumenText.scale.y = 0.5;
            this.cardumenText.position.x = game.system.width / 6 - this.cardumenText.textWidth / 2;
            this.cardumenText.position.y = game.system.height - 50;*/
            // game.start(sceneTest, 800, 600);
            game.system.resume();
            game.system.setScene(sceneTest);
            //this.init();
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
            if (this.commandPool.length <= this.MAX_COMMAND && !this.ended) {
                var command = new Command(event.global);
                command.id = this.commandPool.length;
                this.commandPool.push(command);

                this.addObject(command);
            }
            if (this.ended) {
                console.log("clicked");
                this.restart();
            }

        },
        addEnemies: function () {
            if (!this.ended) {
                var enemy = new Bot();
                enemy.currentType = enemy.type.penguin;
                enemy.create();
            }


        },
        addCommand: function () {
            // console.log(this.commandPool.length);
            if (!this.ended) {
                if (this.commandPool.length < 1) {

                    var command = new Command();
                    command.id = this.commandPool.length;
                    this.commandPool.push(command);

                    this.addObject(command);
                }
            }


        },
        addScore: function () {
            this.score++;
            this.scoreText.setText(this.score.toString());
            //game.audio.playSound('score');
        },
        removeLeft: function () {
            this.cardumenText.setText("Left :" + this.cardumenPool.length.toString());
            if (this.cardumenPool.length < (this.cardumen_number / 2)) {
                this.gameOver();
            }
        },
        gameOver: function () {
            this.cardumenText.setText("GAME OVER\n CLICK ON SCREEN\n TO RESTART");
            this.cardumenText.scale.x = 1;
            this.cardumenText.scale.y = 1;
            this.cardumenText.position.x = 100;
            this.cardumenText.position.y = game.system.height / 2;
            this.ended = true;
            game.system.pause();

        },





    });
});