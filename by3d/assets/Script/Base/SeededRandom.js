function SeededRandom(seed){

    this.seed = seed; 

    this.seededRandom = function(min, max) { 
        max = max || 1;
        min = min || 0; 
        this.seed = (this.seed * 9301 + 49297) % 233280; 
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min); 
    }
};

module.exports = SeededRandom