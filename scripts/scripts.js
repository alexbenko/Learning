var randomPage = function(){
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]; //returns a random element fromt the given array based on its length
      }

    var pageNames = ['yosemite.html','zion.html','crater.html'];
    var rando     = pageNames.sample();   

    document.getElementById("random").setAttribute("onclick",location.href=rando); //sets the href to the result of rando
};



var test = function(){
    alert("You Linked Correctly");
};