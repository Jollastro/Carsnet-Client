angular.module('app.controllers', [])

        .controller('userLoginCtrl', ['$scope', '$stateParams','$http', '$ionicPopup',
    // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup) {
        
        $scope.data={};
        
        $scope.submit = function () {
            var link = 'https://carsnet.herokuapp.com/userLogin';
            this.email = $scope.data.email;
            this.password = $scope.data.password;
            
            
            $http.post(link, {email : this.email, password : this.password}).then(function (res){
                $scope.response = res.data;
                if(res.data.message === undefined){
                    window.location.href = "#/page4";
                }
                else {
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: res.data.message,
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                }
            });
            
        };
        
    }])

        .controller('userSignupCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup) {
        
        $scope.data={};
        
        $scope.submit = function () {
            var link = 'https://carsnet.herokuapp.com/user';
            this.nome = $scope.data.nome;
            this.cognome = $scope.data.cognome;
            this.email = $scope.data.email;
            this.password = $scope.data.password;
            
            if((this.nome  === undefined) || (this.nome === "")){
                var myPopup = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            } else if ((this.cognome  === undefined) || (this.cognome === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if (this.email === undefined){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Formato email: example@example.it',
                    
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if (this.password === undefined){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing password',
                    
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            } else if (this.password.length < 6){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Formato password: minimo 6 caratteri',
                    
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }
            
            $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password}).then(function (res){
                $scope.response = res.data;
                if(res.data.message === undefined){
                    var myPopup = $ionicPopup.show({
                        title: 'Registrazione effettuata',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                    window.location.href = "#/page2";
                }
            });
            
        };
        
        
    }])

        .controller('userCarsCtrl', ['$scope', '$http', '$stateParams',  '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup) {
        var link = 'https://carsnet.herokuapp.com/cars';
        cars: any = [];
        
        $http.get(link).then(function (res){
            cars = res.data;
            
            $scope.cars = cars;
        });
        
        
        
        $scope.buy = function() {
            var myPopup = $ionicPopup.show({
                title: 'Macchina acquistata',
                buttons: [{text: 'OK', type: 'button button-positive button-small'}]
            });
        };
        
        $scope.logout = function() {
            var linkout = 'https://carsnet.herokuapp.com/logout';
            var myPopup = $ionicPopup.show({
                title: 'Logout effettuato',
                buttons: [{text: 'OK', type: 'button button-positive button-small'}]
            });
            window.location.href = "#/page2";
            
        };
    }])

        .controller('sellerLoginCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup','sellerCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup, sellerCompany) {
        
        $scope.data={};
        
        $scope.submit = function () {
            var link = 'https://carsnet.herokuapp.com/sellerLogin';
            this.email = $scope.data.email;
            this.password = $scope.data.password;
            var loggedSeller = "";
            
            
            
            $http.post(link, {email : this.email, password : this.password}).then(function (res){
                $scope.response = res.data.message;
                loggedSeller = res.data.seller;
                sellerCompany.addConcessionaria(loggedSeller.concessionaria);
                if(res.data.message === "Logged In Successfully"){
                    window.location.href = "#/page7";
                }
                else {
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: res.data.message,
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                }
            });
            
        };
        
        
    }])

        .controller('sellerSignupCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup) {
        
        $scope.data={};
        
        $scope.submit = function () {
            var link = 'https://carsnet.herokuapp.com/seller';
            this.nome = $scope.data.nome;
            this.cognome = $scope.data.cognome;
            this.email = $scope.data.email;
            this.password = $scope.data.password;
            this.concessionaria = $scope.data.concessionaria;
            this.indirizzo_concessionaria = $scope.data.indirizzo_concessionaria;
            
            if((this.nome  === undefined) || (this.nome === "")){
                var myPopup = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            } else if ((this.cognome  === undefined) || (this.cognome === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if (this.email === undefined){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Formato email: example@example.it',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if (this.password === undefined){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing password',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            } else if (this.password.length < 6){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Formato password: minimo 6 caratteri',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if ((this.concessionaria  === undefined) || (this.concessionaria === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if ((this.indirizzo_concessionaria  === undefined) || (this.indirizzo_concessionaria === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Missing credentials',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }
            
            
            $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password, concessionaria: this.concessionaria, indirizzo_concessionaria: this.indirizzo_concessionaria}).then(function (res){
                $scope.response = res.data;
                if(res.data.message === undefined){
                    var myPopup = $ionicPopup.show({
                        title: 'Registrazione effettuata',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                    window.location.href = "#/page5";
                }
            });
            
        };
        
        
    }])

        .controller('homeCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams) {
        
    }])

        .controller('sellerChoiceCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'sellerCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup, sellerCompany) {
        
        $scope.logout = function() {
            var linkout = 'https://carsnet.herokuapp.com/logout';
            var myPopup = $ionicPopup.show({
                title: 'Logout effettuato',
                buttons: [{text: 'OK', type: 'button button-positive button-small'}]
            });
            window.location.href = "#/page5";
        };
        
    }])

        .controller('sellerCarsCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'sellerCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup, sellerCompany) {
        var link = 'https://carsnet.herokuapp.com/cars';
        cars: any = [];
        
        concessionariaLoggata = sellerCompany.getConcessionaria();
        
        $http.get(link).then(function (res){
            cars = res.data;
            
            $scope.cars = cars;
        });
        
        $scope.remove = function(array, index) {
            cod = cars[index].id;
            concessionariaMacchina = cars[index].concessionaria;
            var link = 'https://carsnet.herokuapp.com/cars/destroy/' + cod;
            if(concessionariaLoggata === concessionariaMacchina){
                array.splice(index,1);
                $http.delete(link).then(function (res){
                    var myPopup = $ionicPopup.show({
                        title: 'Macchina eliminata',
                        buttons: [{text: 'OK', type: 'button button-positive button-small'}]
                    });
                });
            } else {
                var myPopup = $ionicPopup.show({
                    title: 'Non hai i permessi per eliminare questa macchina',
                    buttons: [{text: 'OK', type: 'button button-positive button-small'}]
                });
            }
        };
    }])

        .controller('addCarCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'sellerCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams, $ionicPopup, sellerCompany) {
        
        $scope.data={};
        
        
        $scope.submit = function () {
            var link = 'https://carsnet.herokuapp.com/cars';
            marca = $scope.data.marca;
            modello = $scope.data.modello;
            tipo = $scope.data.tipo;
            carburazione = $scope.data.carburazione;
            prezzo = $scope.data.prezzo;
            concessionariaLoggata = sellerCompany.getConcessionaria();
            
            
            
            if((marca  === undefined) || (marca === "")){
                var myPopup = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Compila tutti i campi',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if ((modello  === undefined) || (modello === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Compila tutti i campi',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }else if ((tipo  === undefined) || (tipo === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Compila tutti i campi',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }
            else if ((carburazione  === undefined) || (carburazione === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Compila tutti i campi',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }
            else if ((prezzo  === undefined) || (prezzo === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Compila tutti i campi',
                    buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
            }
            
            
            $http.post(link,{marca : marca, modello : modello, tipo : tipo, carburazione : carburazione, prezzo : prezzo, concessionaria : concessionariaLoggata}).then(function (res){
                $scope.response = res.data;
                if(res.data.message === undefined){
                    var myPopup = $ionicPopup.show({
                        title: 'Macchina aggiunta',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                    window.location.href = "#/page7";
                }
                else {
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: res.data.message,
                        buttons: [{text: 'OK', type: 'button-positive'}]
                    });
                }
            });
            
        };
        
        
    }]);