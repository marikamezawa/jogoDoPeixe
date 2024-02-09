var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('peixe', 'assets/peixes/peixe_listra.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe2', 'peixe_verde.png');
    this.load.image('turtle', 'tartaruga.png');
}


function create() {
    this.add.image(400, 300, 'mar');   
    this.add.image(400, 530, 'logo').setScale(0.5);
    this.add.image(700, 500, 'peixe2');
    this.add.image(130, 100, 'turtle');

    turtle = this.add.image(400, 700, 'turtle');

    peixe2 = this.add.image(400, 700, 'peixe2');

    peixe = this.add.image(400, 300, 'peixe');
    peixe.setFlip(true, false);
    
}
function update() {
    peixe.x = this.input.x;
    peixe.y = this.input.y;

    
}
