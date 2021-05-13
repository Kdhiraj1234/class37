class Form{
    constructor(){
     this.input = createInput("Name")
     this.button = createButton("PLAY")
     this.greeting = createElement("h2")
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    show(){
        var title = createElement('h2');
        title.html("Car Racing Game"); 
        title.position(470, 100);

        this.input.position(470, 260);
        this.button.position(530, 300);
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount = playerCoutn+1;
            player.updateCount(playerCount)
            this.greeting.html("Hello " + player.name );
            this.greeting.position(130, 160);
        })
        
    }
}
