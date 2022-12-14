var arr=[1,2,3,4,6,8];
 for(var i=0;i<arr.length;i++){
     console.log(arr[i])
 }

 var arr=[0,1,2,3,4,6,8];
 for(var i in arr){
     console.log(arr[i])
 }
var arr=[1,2,3,4,6,8,10];
for(var i of arr){
    console.log(i)
}
var arr=[0,1,2,3,4,6,8];
arr.forEach(function(v){
    console.log(v);
})
var obj=[{

"Name": "PRABU M",
"mobile no":"6369312602",                         
},
{
"Mail id":"kaviprabu822@gmail.com",
"adderess":"Mullai villaga,Nimmiyambattu,Vaniyambadi,Tamilnadu-635752"

},
{
     "EDUCATION":"detail",

 "college name":"Sacred Heart College-M.SC",
 "duration":"2017-2019",
 "university":"Thiruvalluvar University",},
{
 "PROJECTS":"detail",
 "Project Name":"Fuzzy linear programing",
 "SKILLS":"Computer proficiency, Leadership experience,Communication skills,Organizational know-how",
 "language":"Tamil,English",
    },

  ]

    console.log(obj)


