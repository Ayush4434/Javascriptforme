/* Stack memory and heap memory
All primitive datatypes store inside stack memory and if we assign 
that value to some other variable it will give me a copy where as 
in heap we got reference */

let nam = "Ayush Chauhan"
let petname = nam
petname = "Tidha"
console.log(nam)
console.log(petname)

let obj = {
    username:"Ayush2005",
    pass:"AYush"
}
let obj2 = obj
obj2.username = "Ayush2001"
console.log(obj)
console.log(obj2)

