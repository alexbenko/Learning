var randomPage = function(){
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]; //returns a random element fromt the given array based on its length
      }

    var pageNames = ['home.html','yosemite.html'];
    var rando     = pageNames.sample();    
    return rando;
}



