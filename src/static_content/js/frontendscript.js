
        angular.module('MyApp', [])
            .controller('displayController', function($scope, $http) {
                var url = "/api/message";
                $http.get(url).success(function (response) {
                    $scope.datas = response;
                });


                $scope.getColor = function(el) {
                    if (!el.isRead) {
                        return {'background-color': '#FFFFE0'};
                    } else {
                            return {'background-color': 'white'};
                      }
                };


                $scope.getiColor = function(el) {
                    if (!el.isStarred) {
                        return {'color': 'yellow'};
                    } else {
                            return {'color': 'white'};
                      }
                };


                $scope.delete=function(){
                    angular.forEach($scope.datas, function(val, key){
                        if(val.clicked){
                            //delete $scope.datas[key]
                            var userId = $scope.datas[key].id;
                            console.log (userId);
                            $http.delete('/api/message/' + userId)
                            .success(function (response) {
                                $scope.refresh();
                            });
                            console.log ('hello');
                            $scope.refresh = function(){
                                var url = "/api/message";
                                $http.get(url).success(function (response) {
                                    $scope.datas = response;
                                });
                            }
                        }
                    })
                }
        });
      