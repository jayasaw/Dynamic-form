(function(){
    'use strict'
    angular.module('app')
        .service('configService', function($q){
            this.getConfigForm = getConfigForm;
            this.getGridConfig = getGridConfig;

var formConfig = [
                {labelName :'FirstName', fieldName : 'firstname', type :'text'},
                {labelName :'LastName', fieldName : 'lastname', type :'text'},
                {labelName :'Email', fieldName : 'email', type :'email'},
                {labelName :'Zip', fieldName : 'zip', type :'number'},
                {labelName :'City', fieldName : 'city', type :'text'},
                
            ]

               function getConfigForm(){
                   return $q.when(formConfig);
               } 

               var gridConfig = [
                                {columnName : 'id', displayName : 'ID'},
                                {columnName : 'firstname', displayName : 'FirstName'},
                                {columnName : 'lastname', displayName : 'LastName'},
                                {columnName : 'email', displayName : 'Email'},
                                {columnName : 'btn', displayName : 'Acion', action : [{button :'delete'}]},
                              ]

                         function getGridConfig(){
                             return $q.when(gridConfig);
                         }     


               
//    var stateOption = [{code : 'Mh', description : 'Maharastra'},
//                     {code : 'jsr', description : 'Jharkhand'},
//                     {code : 'Wb', description : 'westBengal'},
//                     {code : 'bihar', description : 'patna'}
//                     ];

//                    function getOptionData(){
//                        return $q.when(stateOption);
//                    } 

    })

  
})()