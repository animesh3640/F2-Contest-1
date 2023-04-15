/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    console.log()
    console.log("All the employees which have the profession of developer using the map function")
    arr.map(mapCallbackFunc);
    function mapCallbackFunc(element){
        if(element.profession=="developer"){
            console.log(element.id,element.name,element.age,element.profession)
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.log()
    console.log(" All the employees which have the profession of developer using the for each function.")
    arr.forEach(foreachCallbackFunction);
    function foreachCallbackFunction(e){
        if(e.profession=="developer"){
            console.log(e.id,e.name,e.age,e.profession)
        }
    }
  }
  
  function addData() {
    //Write your code here, just console.log
    console.log();
    console.log("After adding new object the Array is")
    newObj={
        id:4,
        name:"susan",
        age:"20",
        profession:"intern"
    }
    arr.push(newObj)
    for(let i in arr){
        console.log(arr[i])
    }
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    console.log();
    console.log("After removing the object where the profession is admin.")
    let filtered_arr = arr.filter(function (val) {
        if (val.profession !== "admin") {
          return val;
        }
      });
      for(let i in filtered_arr){
        console.log(filtered_arr[i])
    }
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    console.log();
    console.log("After Concatinate another Array the Array is ")
    let arr2 = [
        { id: 5, name: "Animesh", age: "30", profession: "FSD-Developer" },
        { id: 6, name: "Gaurav", age: "28", profession: "Tester" },
        { id: 7, name: "Pranjal", age: "21", profession: "Developer" },
      ];
    
      let concatArray = arr.concat(arr2);

      for(let i in concatArray){
        console.log(concatArray[i])
    }
  }