class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
        }
    update(state){
      database.ref('/').update({
          gameState : state
      })
    }
    async start(){
        if(gameState === 0 ){
            form = new Form();
            form.show();
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game has started",120,100);

    }
}