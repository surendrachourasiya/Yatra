var app = angular.module('TransportApp', ['ngMaterial', 'ngMessages',"xeditable", "ngMockE2E"]);

/*--------------------Add vwhicle javascript----------------------------
*/

   app.controller("AddVehicle", function($scope) {
        $scope.userdetails = [
            {'tdate':'8/7/2016',
                         'ttype': 'car',
                         'tvehicle_number': 'MP 41 RC 6669',
                         'ttotal_seat': '9',
                         'ttrans_name': 'xyz',
                         'ttrans_office':'abc',
                         'ttrans_address':' ctyiiuqsd',
                          'ttrans_contact_number':'9876543210',
                          'tdriver_name': 'utdxc',
                          'tdriver_contact_number': '9988776655',
                         'tpay': '900'
             }
            
           

          ];
      
$scope.addName = function() {
    if ($scope.date && $scope.type) {
      $scope.userdetails.push({
                        'tdate':$scope.date,
                         'ttype':$scope.type,
                         'tvehicle_number':$scope.vehicle_number,
                         'ttotal_seat':$scope.total_seat,
                         'ttrans_name':$scope.trans_name,
                         'ttrans_office':$scope.trans_office,
                         'ttrans_address':$scope.trans_address,
                          'ttrans_contact_number':$scope.trans_contact_number,
                          'tdriver_name': $scope.driver_name,
                          'tdriver_contact_number': $scope.driver_contact_number,
                         'tpay': $scope.pay

                      });
      
      $scope.date='';
      $scope.type='';
      $scope.vehicle_number='';
      $scope.total_seat='';
      $scope.trans_name='';
      $scope.trans_office='';
      $scope.trans_address='';
      $scope.trans_contact_number;
      $scope.driver_name='';
      $scope.driver_contact_number='';
      $scope.pay='';
    };
};
  
});

/*-------------------Search Vehicle page javascript----------------------*/
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('editablectrl', function($scope, $filter, $http) {
 $scope.vehicle = {
    id: 1,
    date: '12/11/2013',
    type: 'car',
    seat: 4,
    officename: 'admin',
    officeaddress: 'bihgfef',
    officecontact: 7890345678,
    drivername: 'buwb',
    drivercontact: 9876543210,
    cost: 768,

  }; 

  

  $scope.saveUser = function() {
    // $scope.user already updated!
    return $http.post('/saveUser', $scope.vehicle).error(function(err) {
      if(err.field && err.msg) {
        // err like {field: "name", msg: "Server-side error for this username!"} 
        $scope.editableForm.$setError(err.field, err.msg);
      } else { 
        // unknown error
        $scope.editableForm.$setError('type', 'Unknown error!');
      }
    });
  };
});

// ---------------- mock $http requests --------------------
app.run(function($httpBackend) {
  $httpBackend.whenGET('/groups').respond([
    {id: 1, text: 'user'},
    {id: 2, text: 'customer'},
    {id: 3, text: 'vip'},
    {id: 4, text: 'admin'}
  ]);
    
  $httpBackend.whenPOST(/\/saveUser/).respond(function(method, url, data) {
    data = angular.fromJson(data);
    if(data.type === 'error') {
      return [500, {field: 'type', msg: 'Server-side error for this username!'}]; 
    } else {
      return [200, {status: 'ok'}]; 
    }
  });
});
/*

--------------------------allocate vehicle javascript--------------------------*/


/*------------------------- for car---------------------------*/
app.controller("AllocateVehicleCarYatriDetail", function($scope) {
        $scope.userdetails = [
            {	
            		'tfamily_head': 'yufygf',
            		'ttotal_person': '5',
            		'tshare': 'yes',
            		'tbook': 'book'
             },

             {	
            		'tfamily_head': 'bvvis',
            		'ttotal_person': '2',
            		'tshare': 'yes',
            		'tbook': 'book'
             },

             {	
            		'tfamily_head': 'bcwdhgf',
            		'ttotal_person': '3',
            		'tshare': 'no',
            		'tbook': ' '
             },

             {	
            		'tfamily_head': 'rhwsoh',
            		'ttotal_person': '4',
            		'tshare': 'no',
            		'tbook': ' '
             }
        ];
  
});

app.controller("AllocateVehicleCarDetail", function($scope) {
        $scope.cardetails = [
            {	
            		'tcar_number': 'MP 09 CA 7804',
            		'tseat': '4',
            		'status': 'No'
             },

             {	
            		'tcar_number': 'MP 09 CA 7798',
            		'tseat': '4',
            		'status': 'No'
             },

             {	
            		'tcar_number': 'MP 09 CA 9986',
            		'tseat': '8',
            		'status': 'No'
             },

             {	
            		'tcar_number': 'MP 09 CA 6657',
            		'tseat': '8',
            		'status': 'No'
             }
        ];
  
});

/*------------------------- for Bus---------------------------*/
app.controller("AllocateVehicleBusYatriDetail", function($scope) {
        $scope.userdetails = [
            {	
            		'tfamily_head': 'yufygf',
            		'ttotal_person': '5',
            		
            		'tbook': ' '
             },

             {	
            		'tfamily_head': 'bvvis',
            		'ttotal_person': '2',
            		
            		'tbook': ' '
             },

             {	
            		'tfamily_head': 'bcwdhgf',
            		'ttotal_person': '3',
            		
            		'tbook': ' '
             },

             {	
            		'tfamily_head': 'rhwsoh',
            		'ttotal_person': '4',
            		
            		'tbook': ' '
             }
        ];
  
});

app.controller("AllocateVehicleBusDetail", function($scope) {
        $scope.busdetails = [
            {	
            		'tbus_number': 'MP 09 CA 8735',
            		'tseat': '50',
            		'tstatus': 'No'
             },

             {	
            		'tbus_number': 'MP 09 CA 6378',
            		'tseat': '50',
            		'tstatus': 'No'
             },

             {	
            		'tbus_number': 'MP 09 CA 6729',
            		'tseat': '50',
            		'tstatus': 'No'
             }
        ];
  
});

/*-------------------------------Train Add detail page--------------------------------------
*/

 app.controller("Train_Add_Detail", function($scope) {

        $scope.sortType     = 'tfamily_head'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchhead  = '';     // set the default search/filter term
        
        $scope.traindetails = [
            {           'tfamily_head':'anshita',
                         'tperson_name': 'cgc',
                         'tgender': 'female',
                         'tage': '9',
                         'ttrain_name': 'xyz',
                         'tpnr_number':'a436',
                         'tcoach_number':' 30',
                          'tberth_number':'12',
                          'tcash': '400'
                         
             },

             {           'tfamily_head':'neha',
                         'tperson_name': 'neha jaiswal',
                         'tgender': 'female',
                         'tage': '10',
                         'ttrain_name': '47',
                         'tpnr_number':'afg7',
                         'tcoach_number':' 30',
                          'tberth_number':'15',
                          'tcash': '400'
                         
             }

          ];
      
$scope.addtraindetail = function() {
    if ($scope.pnr_number && $scope.family_head) {
      $scope.traindetails.push({
                         'tfamily_head': $scope.family_head,
                         'tperson_name': $scope.person_name,
                         'tgender': $scope.gender,
                         'tage': $scope.age,
                         'ttrain_name': $scope.train_name,
                         'tpnr_number': $scope.pnr_number,
                         'tcoach_number': $scope.coach_number,
                         'tberth_number': $scope.berth_number,
                          'tcash': $scope.cash

                      });
      
      $scope.family_head='';
      $scope.person_name='';
      $scope.gender='';
      $scope.age='';
      $scope.train_name='';
      $scope.pnr_number='';
      $scope.coach_number='';
      $scope.berth_number= '';
      $scope.cash='';
      };
    };
});




 app.controller("Preference_Search_Detail", function($scope) {
        $scope.sortType     = 'family_head'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchhead  = '';     // set the default search/filter term
        
       
        $scope.preferencedetail = [
          { family_head: 'ffbehf', 
            member_name: 'eufgdcuie', 
            gender: 'female',
            age: 30,
            first_preference: 'AC',
            second_preference: 'Non AC'
          },
           { family_head: 'bfh', 
            member_name: 'vbid', 
            gender: 'female' ,
            age: 30,
            first_preference: 'AC',
            second_preference: 'Non AC'
          },

            { family_head: 'bfh', 
            member_name: 'efb', 
            gender: 'male' ,
            age: 20,
            first_preference: 'AC',
            second_preference: 'Non AC'
          }
        ];

        
        
      });
