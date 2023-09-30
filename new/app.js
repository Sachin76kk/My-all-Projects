// let random = Math.floor(Math.random() * 100) + 1;
// let user = prompt("Enter the no ?");
// user=Number.parseInt(user);
// let chance=0;

// while(true){
//     if(random === user){
//         chance++;
//         alert("congratulations u win!");
//         break;
//     }else if(user < random){
//         user=prompt("Your guess was too small think bigger");
//     }else{
//         user=prompt("Your guess was too bigger think smaller");
//     }
// }
// console.log(chance);

// let max=prompt("Enter your Number");

let random=Math.floor(Math.random()*100)+1;

let guess=prompt("Guess the Number");

let score=0;

let chance=0;
while(true){
    if(guess == "quit"){
        console.log("Quitting app");
        break;
    }
    if(random == guess){
        chance++;
        alert("Congrats! u Won.",random,"is the random no");
        console.log("congrats",random,"is the random no");
        break;
    }else if(guess < random){
        chance++;
        guess=prompt("hint: your no is too small ! please try again");
    }else{
        chance++;
        guess=prompt("hint: your no is too large! please try again!");
    }   
}     
// console.log("you got ",chance,"chances");
console.log("your score was",(100-chance));