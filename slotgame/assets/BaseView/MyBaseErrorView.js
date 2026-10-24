var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        description:cc.Label,
        button:cc.Button,
        backLobbyBtn:cc.Node,
        isFinalError:false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(this.button!=null)
        this.button.node.on('click', this.disableError, this);
        if(this.backLobbyBtn!=null){
            this.backLobbyBtn.on('click', this.backToLobby, this);
            this.backLobbyBtn.active = false;
        }
    },

    start () {
        this.disableError();
    },  
    backToLobby(){

        if(!cc.sys.isNative){
            //location.reload();
            //window.actionDisconnect;
            //console.log(window.actionDisconnect);
            window.actionDisconnect();
        }
        else{
            if(this.controller!=null)
            this.controller.backToLobby();
        }
    },
    errorGameLock(gameType){
        // console.log("Game Type 2: " +gameType);
        let game = window.GAMETYPE[gameType];
        this.node.active = true;
        this.isFinalError =true;
        this.description.string = "You have unfinish Feature GameMode in " +game +" . Please complete it to continue another game.";
        if(this.backLobbyBtn!=null)
        this.backLobbyBtn.active = true;
    },
    insuffucientCoins(){
        if(this.isFinalError){
            return;
        }
        this.node.active = true;
        this.description.string = "Insuffucient Coins.";
        if(this.button!=null)
        this.button.node.active = true;
    },
    loginFail(){
        if(this.isFinalError){
            return;
        }
        this.node.active = true;
        this.description.string = "Login failed,  please try again. If this issue persists, please contact our customer support";
        if(this.backLobbyBtn!=null)
        this.backLobbyBtn.active = true;
    },
    disconnect(){
        if(this.isFinalError){
            return;
        }
        this.node.active = true;
        this.description.string = "Disconnect From Server.";
        if(this.backLobbyBtn!=null)
        this.backLobbyBtn.active = true;
    },
    disconnectWithMsg(type,msg){
        if(this.isFinalError){
            return;
        }
        this.node.active = true;

        var errMsg = "Disconnect From Server.";
        if(type !=null && msg !=null)
        errMsg = "Disconnect From Server. Error : "+type +"," +msg;
    
        this.description.string = errMsg;
        if(this.backLobbyBtn!=null)
        this.backLobbyBtn.active = true;

        
    },
    show(msg){
        this.node.active = true;
        var errMsg = msg;
        this.description.string = errMsg;
    },
    disableError(){
        if(this.isFinalError){
            return;
        }
        this.node.active = false;
        if(this.button!=null)
        this.button.node.active = false;
    },

    // update (dt) {},
});
