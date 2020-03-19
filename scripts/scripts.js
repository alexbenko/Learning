var randomPage = function(){
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]; //returns a random element fromt the given array based on its length
      }

    var pageNames = ['yosemite.html','zion.html','crater.html'];
    var rando     = pageNames.sample();   

    document.getElementById("random").setAttribute("onclick",location.href=rando); //sets the href to the result of rando
};





var quoteOfTheDay = function(){
    
    var array =   ["Each path is the right one", "Let everything happen to you,  Beauty and terror Just keep going , No feeling is final"
    ,"It is such a quiet thing to fall... but far more terrible as to admit it."
    ,"Stuff is just things, it don't make a fuck"
    ,"4","5","6","7","8","9","10","11","12","13","14","15","16","17",
    "Live everyday like it's your last. But wear a condom and pay your bills, just in case it isn't."
    ,"Its a-me, Mario!"
    ,
    "20","21","22","23","24",'25',"26","27","28","29","30","31"];

    var date = new Date;
    var day = date.getDate();

    var quote = array[day];
   
    var date = new Date;
    
   // var finalQuote = document.createTextNode(quote);
    var id = document.getElementById("quoter");
    id.innerHTML = quote;
    //document.body.appendChild(finalQuote);

    

}