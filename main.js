class Start {
    constructor() {
        this.playerName = "Player";
        this.botName = "BOT Godithiya";
        this.playerOption = "";
        this.botOption = "";
        this.winner = "";
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getBotOption() {
        return this,this.botOption;
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    get getPlayerOption() {
        return this.playerOption;
    }

    botBrain() {
        const option = ["✋", "✌️", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if(this.botOption == "✋" && this.playerOption == "✌️"){
            return this.winner = this.playerName
        }else if(this.botOption == "✋" && this.playerOption == "✊") {
            return this.winner = this.botName;
        }else if(this.botOption == "✌️" && this.playerOption == "✋") {
            return this.winner = this.botName;
        }else if(this.botOption == "✊" && this.playerOption == "✌️") {
            return this.winner = this.botName;
        }else if(this.botOption == "✌️" && this.playerOption == "✊") {
            return this.winner = this.playerName;
        }else if(this.botOption == "✊" && this.playerOption == "✋") {
            return this.winner = this.playerName;
        }else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if(this.winner != "SERI"){
            return `${this.winner} MENANG!`;
        }else {
            return `BJIRR ${this.winner}, GADA YANG MENANG 🤓`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.playerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    
    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
    
    inGame.textContent = "..."
    result.textContent = "..."
    setTimeout(() => {
        inGame.textContent = `player: ${start.getPlayerOption} VS bot: ${start.getBotOption}`;
        result.textContent = start.matchResult() ;
    }, 1000);



    // console.log(`player: ${start.getPlayerOption} VS bot: ${start.getBotOption}`)
    // console.log("hasil akhir : ", start.matchResult())
}
