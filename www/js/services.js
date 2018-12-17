angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('sellerCompany', [function(){
    var concessionariaLoggata;

      var addConcessionaria = function(newObj) {
          concessionariaLoggata = newObj;
      };

      var getConcessionaria = function(){
          return concessionariaLoggata;
      };

      return {
        addConcessionaria: addConcessionaria,
        getConcessionaria: getConcessionaria
      };


}]);