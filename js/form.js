class Form{
    constructor(){
        // properties
        this.title = createElement("h1");
        this.guide_btn = createButton("Press to go to 'instructions' Page");
        this.play_btn = createButton("Press to directly PLAY the game");
        this.subtitle = createElement("h2");
    }
    display(){
        this.title.html("WELCOME TO THE MAZE GAME!!!");
        this.title.position(displayWidth/2-240,displayHeight/2-320);
        this.title.style('color', 'blue');

        this.subtitle.html(":-Tap either of these buttons-:");
        this.subtitle.position(displayWidth/2-120,displayHeight/2-160);
        this.subtitle.style('color', 'red');

        this.guide_btn.position(displayWidth/2-270,displayHeight/2-100);
        this.guide_btn.style('color', 'green');
        this.guide_btn.style('background', 'yellow');

        this.play_btn.position(displayWidth-430,displayHeight/2-100);
        this.play_btn.style('color', 'yellow');
        this.play_btn.style('background', 'green');


        this.guide_btn.mousePressed(()=> {
            this.title.hide();
            this.subtitle.hide();
            this.guide_btn.hide();
            this.play_btn.hide();
            var instructions = new Instructions();
            instructions.display();
        });

        this.play_btn.mousePressed(()=> {
            this.title.hide();
            this.subtitle.hide();
            this.guide_btn.hide();
            this.play_btn.hide();
            var maze = new Maze();
            maze.display();
        });



    }
}