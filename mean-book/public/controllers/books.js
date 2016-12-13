var bookstore = angular.module('bookstore');

bookstore.controller('BooksController',['$scope' , '$http', '$location', '$routeParams', function($scope , $http, $location, $routeParams)
         {
             //console.log('Books Controller');
             $scope.getBooks = function(){
                 $http.get('/api/books').success(function(response){
                    $scope.books = response; 
                 });
             }
             
             $scope.getBookById = function(){
                 var id = $routeParams.id;
                 $http.get('/api/book/' +id).success(function(response){
                     $scope.book = response;
                 });
             }
    
             
             $scope.addBook = function(){
                console.log($scope.book);
                 $http.post('/api/add/book/', $scope.book).success(function(response){
                     window.location.href = "#/books";
                 });
             }
             
             $scope.updateBook = function(){
                 console.log($scope.book);
                 var id = $routeParams.id;
                 $http.put('/api/book/' +id).success(function(response){
                    window.location.href = "#/books";
                 });
                /* $http.put('/api/' +id, $scope.book).success(function(response){
                     
                 });
                 */
             }
             
               $scope.deleteBook = function(id){
                 
                 $http.delete('/api/books/' +id).success(function(response){
                     window.location.href="#/books";
                 });
             }
             
           
             
    
}]);