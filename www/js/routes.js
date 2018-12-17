angular.module('app.routes', [])

        .config(function($stateProvider, $urlRouterProvider) {
            
            // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    
            .state('home', {
                url: '/page1',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    
            .state('userLogin', {
                url: '/page2',
        templateUrl: 'templates/userlogin.html',
        controller: 'userLoginCtrl'
    })
    
            .state('userSignup', {
                url: '/page3',
        templateUrl: 'templates/usersignup.html',
        controller: 'userSignupCtrl'
    })
    
            .state('userCars', {
                url: '/page4',
        templateUrl: 'templates/usercars.html',
        controller: 'userCarsCtrl'
    })
    
            .state('sellerLogin', {
                url: '/page5',
        templateUrl: 'templates/sellerlogin.html',
        controller: 'sellerLoginCtrl'
    })
    
            .state('sellerSignup', {
                url: '/page6',
        templateUrl: 'templates/sellersignup.html',
        controller: 'sellerSignupCtrl'
    })
    
            .state('sellerChoice', {
                url: '/page7',
        templateUrl: 'templates/sellerchoice.html',
        controller: 'sellerChoiceCtrl'
    })
    
            .state('sellerCars', {
                url: '/page8',
        templateUrl: 'templates/sellercars.html',
        controller: 'sellerCarsCtrl'
    })
    
            .state('addCar', {
                url: '/page9',
        templateUrl: 'templates/addcar.html',
        controller: 'addCarCtrl'
    });
    
    $urlRouterProvider.otherwise('/page1');
    
    
});