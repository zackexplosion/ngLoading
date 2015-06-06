angular
.module('zackexplosion.ng-loading',[])
.config(
[       '$locationProvider', '$httpProvider',
function($locationProvider,   $httpProvider) {
    $httpProvider.interceptors.push('LoadingInterceptor');
}])
.factory('LoadingInterceptor', 
[       '$rootScope', 
function($rootScope){
    $rootScope.loading = true;

    return {
        'request': function(config) {
            $rootScope.loading = true;
            return config;
        },
        'response': function(response) {
            $rootScope.loading = false;
            return response;
        }
    };
}]);