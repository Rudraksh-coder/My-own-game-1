class Instructions {
    constructor() {
        this.h1 = createElement('h1');
        this.h2A = createElement('h2');
        this.h2B = createElement('h2');

        this.back_btn = createButton("<= BACK");
    } 

    display() {
        this.back_btn.position(windowWidth/2-60, windowHeight/2+140);
        this.back_btn.style('background', 'red');
        this.back_btn.style('color', 'blue');
        this.back_btn.mousePressed(()=>{
            var form2 = new Form();
            form2.display();
            this.back_btn.hide();
            this.h1.hide();
            this.h2A.hide();
            this.h2B.hide();
        });
        this.h1.html("Instructions-:");
        this.h1.position(windowWidth/2-550, windowHeight/2-280);
        this.h1.style('color', 'orange');

        this.h2A.html("Hello, Welcome to the maze game. In this game, there will be a few levels which you have to cross. Once you cross all the levels, you will be awarded many coins to choose your player.");
        this.h2A.position(windowWidth/2-480, windowHeight/2-220);
        this.h2A.style('color', 'cyan');

        this.h2B.html("Playing this game is very easy. you just have to use your UP, DOWN, RIGHT, LEFT arrow keys to move.");
        this.h2B.position(windowWidth/2-480, windowHeight/2-120);
        this.h2B.style('color', 'cyan');
    }
}