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