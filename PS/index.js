// Create a function that takes two numbers as arguments and returns their sum.

	function a(x,y){

	return x+y
}
// a(3,4)
console.log(a(3,4)) //7


// Write a function that takes an integer minutes and converts it to seconds.

function min(m){
 return m*60 
}
console.log(min(5))

// Create a function that takes a number as an argument, 
// increments the number by +1 and returns the result.

function h(g){
    return ++g

}
console.log(h(6))


// Create a function that takes the age in years and returns the age in days.
// let days=0
function age(j){
    let count=0
    let days=0
    for (i=1;i<=j;i++){

        if(count == 4){
            days += 366
            count=0
        }else{
            days+=365
        }
        count+=1
      
    
    }return days

}
console.log(age(25))

// Create a function that takes voltage and current and returns the calculated power.

function power(i,v){
    return i*v
}
console.log(power(2.5,6))



// Write a function that returns the string "something" joined with a space " " and the given argument a.
function strr(a){
    return ('Hello'+" "+a)
}

console.log(strr('world'))


// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.

function sum(a,b){
    return  a==10 || b==10 || a+b==10 
}
console.log(sum(10,3))

// Create a function that takes two strings as arguments and returns either true or false
//  depending on whether the total number of characters in the first string is equal 
//  to the total number of characters in the second string.

function strings(str1,str2){
    if(str1.length===str2.length){
        return true
    }else{
        return false
    }

}
console.log(strings("harsha","vardhan"))


// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

let greeting=(name1)=>{
    return `good evening ${name1}`
}
console.log(greeting("harsha"))

// Create a function that takes an array of 10 numbers (between 0 and 9) and
//  returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
array=[9,5,0,5,5,3,4,6,4,3]
// def phone(n):
//     res = ""
//     for i in n:
//         if i == 1 :
//             res+= "("
//         if i == 4 :
//             res += ")"
//         if i == 7 :
//             res += "-"
//         res += str(i)
//     return res
// print(phone([1,2,3,4,5,6,7,8,9,0]))

function arr(array1){
    let res=""
for (let i in array1){
    if (i==1){
        res+="("
    }
    if(i==4){
        res+=") "
    }
    if(i==7){
        res+="-"
    }
    res+=i.toString()
}
    
return res
}
console.log(arr(array))



// Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]


let arrofstr = ["a", "ccc", "dddd", "bb"];
function sort(arrofstr){
for (let i = 0; i < arrofstr.length - 1; i++) {
  for (let j = 0; j < arrofstr.length - i - 1; j++) {
    if (arrofstr[j].length > arrofstr[j + 1].length) {
      let temp = arrofstr[j];
      arrofstr[j] = arrofstr[j + 1];
      arrofstr[j + 1] = temp;
    }
  }
}
return  arrofstr
}
console.log(sort(arrofstr));
// console.log(arrofstr);






