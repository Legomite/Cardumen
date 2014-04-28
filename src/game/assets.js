game.module(
    'game.assets'
)
    .require(
        'engine.audio'
)
    .body(function () {
        // Sprites
        // game.addAsset('media/player1.png');
        // game.addAsset('media/obstacle.png');
        game.addAsset('images/cardumentest.png', 'player');
        game.addAsset('images/command.png', 'command');
        game.addAsset('images/Box.png', 'box');
        // game.addAsset('media/images/cardumentest.png', 'player');
    });