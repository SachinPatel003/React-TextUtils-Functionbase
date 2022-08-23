// GET request 
//base on Promise

url = "https://reqres.in/api/users?page=2"

fetch(url)
.then((res)=>{
    // return res.text()  //if you need data in simple text
    return res.json() //if you need (parse) data in Object
})
.then((data)=>{
    console.log(data); 
})

// POST Request 

url = "https://reqres.in/api/users?page=2"
data1 = {"name": "morpheus","job": "leader"}
params = {
    method: 'post',
    // body: data1    // if your data1 is already in string
    body: JSON.stringify(data1), //if you data1 is not a string but object then use this because body need data in string form
    headers: {
        'Content-Type':'application/json' //Content type is change as per data
    }
}

fetch(url, params)
.then((res)=>{
    // return res.text(); //if you need data in simple text
    return res.json(); //if you need (parse) data in Object
})
.then((data)=>{
    console.log(data);
    
})

