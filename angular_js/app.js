(function () {
    'use strict';

    angular.module('myFirstApp',[])

    .controller('myFirstController',function($scope) {
        $scope.name = "Lakshya"; 


        /*=======================================================*/
        /*section-6*/
        $scope.input_stream = "";
        $scope.input_stream_sum = 0;

        $scope.displayNumeric = () => {
            let string = $scope.input_stream;
            let sum = 0;

            for (let i=0;i<string.length;++i)
                sum+=string.charCodeAt(i);

            $scope.input_stream_sum = sum;
        }
        /*=======================================================*/
    
        
    });
}
)();