
const students = [
    {name:"sachin"},
    {name:"patel"}
] 



function EnrollStudent(student){

    return new Promise(function(resolve,reject){

    setTimeout(() => {
        students.push(student);
        console.log("student Enrolled"); 

        let error = false ;
        if(!error){
            resolve()
        }
        else{
            reject()
        }

    }, 2000);
})
}

function getStudent() {
    setTimeout(function(){
        let  str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        console.log("student Get");
        let main = document.getElementById('main')
        main.innerHTML = str
    }, 0);
}
newStudent1 = {name:"Reema"}

EnrollStudent(newStudent1)
.then(getStudent)
.catch(function(){console.log("Sorry Promise Not resolve")})

    //use .then in different way 
    // it can take two callback function as argument 
    //if promise resolve first argument(callback) call 
    //if reject second argument(callback) will call
    
// EnrollStudent(newStudent1).then(
//                           getStudent,
//                           function(){console.log("Sorry Promise Not resolve")})



// ---------------------------------------------


// console.log("start")

// let myPromise = new Promise(function(resolve,reject){
//     let a = "sachin"

//     if(a == "sachin"){
//         resolve()
//     }else{
//         reject()
//     }
// })
// myPromise.then(
//     function(){console.log("it's Resolve")},
//     function(){console.log("it's Reject")}
// )


// console.log("End")