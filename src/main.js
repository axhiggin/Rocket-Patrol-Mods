/*
Name: Aidan Higgins
Mod Title: Rocket Patrol on Roids
Time to complete:
Mod list:
  1. Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5): Added a lil alien spaceship that flies across the screen and is worth 50 points
  2. 

Citations:
*/



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
  
let game = new Phaser.Game(config)
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;