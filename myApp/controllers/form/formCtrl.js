(function(){
    'use strict'
    angular.module('app')
        .controller('formCtrl', function(configService,dataService){
            var vm = this;
           vm.modelObj = {};
            // vm.addForm = [];
            // vm.addColumn =[];
            // vm.addData = [];

           configService.getConfigForm().then(function(response){
               vm.addForm = response;
           });

        configService.getGridConfig().then(function(response){
                vm.addColumn = response;
        })

        dataService.getGridData().then(function(response){
            vm.addData = response;
        })

            // vm.remove = function(id){
            //     dataService.deleteRow(id);
               
            // }

              vm.remove = function(id){
                    for(var i = 0; i < vm.addData.length; i++){
                        if(vm.addData[i].id === id){
                            vm.addData.splice(i,1);
                        }
                    }
                }

        vm.save = function(){
            console.log(vm.modelObj);
            dataService.saveData(vm.modelObj);
            vm.config = false;
         
        }

         vm.back = function(){
            vm.config = true;
        }



    //         configService.getOptionData().then(function(response){
    //     vm.addOption = response;
    // })
    })

   
})()