class Maze {
    constructor() {
        this.greeting = createElement('h1');
        
    }

    display() {
        var block1 = createSprite(windowWidth/2, windowHeight/2, 30, 30);
        block1.shapeColour = "red";
        drawSprites();
    }
}