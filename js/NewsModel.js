class NewsModel{
    constructor(keywords = []){
        this.keywords = keywords;
        this.subscribers = [];
    }

    addKeyword(keyword){
        if(!this.keywords.some(k => k == keyword)){
            this.keywords = [keyword, ...this.keywords]
            this.notifyObservers();
        }
    }

    removeKeyword(keyword){
        this.keywords = this.keywords.filter(k => k !== keyword);
        this.notifyObservers();
    }

    getKeywords(){
        const keywords = this.keywords;
        return keywords;
    }

    addObserver(callback){
        this.subscribers=this.subscribers.concat(callback);                                                        
    }
    notifyObservers(){
        this.subscribers.forEach(callback=>{try{callback()}catch(err){
            console.error("Error ", err, callback);
        }                                    
    });
    }
    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=> o !== obs);
    }

}