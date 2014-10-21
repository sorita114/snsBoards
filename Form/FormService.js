form.service('FormService', function(){
  var form = [];
  
  this.put = function(data){
    form.push(data);
    //TODO push lists and reset lists
  };
  this.get = function(index){
    if(index){
      //TODO return all lists;
    } else {
      //TODO get data for all lists;
    }
  };
});
