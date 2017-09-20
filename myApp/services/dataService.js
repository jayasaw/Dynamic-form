(function(){
    'use strict'
    angular.module('app')
        .service('dataService', function($q){
            this.getGridData = getGridData;
            this.saveData = saveData;
         //   this.deleteRow = deleteRow;

var gridData = [{id :1 , firstname : 'Anvi', lastname : 'saw', email: 'anvisaw@gmail.com'},
                {id :2 , firstname : 'Anup', lastname : 'saw', email: 'anupsaw@gmail.com'},
                {id :3 , firstname : 'Ishaan', lastname : 'saw', email: 'ishaan@gmail.com'},
                {id :4 , firstname : 'Jaya', lastname : 'saw', email: 'jayasaw@gmail.com'},
              ]


                function getGridData(){
                    return $q.when(gridData);
                }

                function saveData(data){
                    data.id = gridData.length + 1;
                    gridData.push(data)
                }

                // function deleteRow(id){
                //     for(var i = 0; i < gridData.length; i++){
                //         if(gridData[i].id === id){
                //             gridData.splice(i,0);
                //         }
                //     }
                // }

        })
})()