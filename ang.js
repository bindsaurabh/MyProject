var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
	$scope.message="Welcome to in Angular JS Tutorials";
});
app.controller('myCtrl2',function($scope){
	 $scope.age="24";
	 $scope.address="Arangi";
});
 app.controller('myCtrl3',function($scope){
	$scope.names = ["10", "20", "30","40", "50", "60"];
});
app.controller('myCtrl4',function($scope){
	 $scope.names = [
        {name:'Gaurav',country:'Norway',img:'img1.jpg'},
        {name:'Prateek',country:'Sweden',img:'img8.jpg'},
        {name:'Pankaj',country:'England',img:'img7.png'},
        {name:'Arun',country:'Norway',img:'img6.png'},
        {name:'Keshav',country:'Denmark',img:'img5.png'},
        {name:'Pawan',country:'Sweden',img:'img4.png'},
        {name:'Priya',country:'Denmark',img:'img3.png'},
        {name:'Ravi',country:'England',img:'img2.png'},
        {name:'Saurabh',country:'India',img:'img1.jpg'}
        ];
    $scope.SearchName="";
	$scope.insertData=function(){
    $scope.country="";
	$scope.img="";
	 for(var i=0;i<$scope.names.length;i++){
		 $scope.check=  angular.equals($scope.SearchName,$scope.names[i].name);
		 if($scope.check){
			$scope.country=$scope.names[i].country;
			$scope.img=$scope.names[i].img;
			 break;
		 }
	 }
	 if(!$scope.check){
		 alert('No Record Found');
	 }
	}
	 $scope.bool=false;
	$scope.myFun=function(){
		$scope.bool=true;
	}
	
});
app.controller('myCtrl5',function($scope){
	 
});
 function myFunction(x) {
	 document.getElementById("clear").value='';	  
}