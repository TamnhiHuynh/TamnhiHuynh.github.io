alert("It's your first day on the job, type in either A or B to make the decisions that will get you to work safely on time.")

let first_choice = prompt("You just woke up. Do you... A: Use your time wisely to get ready OR B: Grab whatever and run out the door? Remember please type in A or B!")
let choicea = "A"
let choiceb = "B"

if(first_choice == choicea){
    alert("Good Choice! You are currently on time with no problems.")
    let first_choicea = prompt("It's time to drive to work. Do you... A: Speed to get to work faster OR B: Drive safely and abide all traffic laws? Remember please type in A or B!")
    if(first_choicea == choiceb){
        alert("Great! You arrive at work with no issues or casualties!")
        let first_choiceaa = prompt("You walk into the workplace and realize that your forgot to eat breakfast! Do you... A: Just skip breakfast and run to the office OR B: Grab breakfast at a bakery near the workplace?")
        if(first_choiceaa == choiceb){
            alert("You've made it to work safely! Sure you were a little late but while you were at the bakery, you grabbed coffee for everyone at work so they ignored your tardiness. YOU WIN!")
        } else {
            alert("You don't have enough energy in your body since you missed a meal and ended up fainting walking up the stairs to work. GAME OVER (Don't skip meals! Breakfast is important to fuel you at the beginning of the day and make you energized for work!)")
        }
    } else {
        alert("BANG! You died in a car crash! GAME OVER (abide traffic laws they're there for a reason y'know.)")
    }
} else {
    alert("Oh no! You forgot your ID badge at home but you didn't notice. Hope that doesn't cause any problems.")
    let first_choiceb = prompt("It's time to drive to work. Do you... A: Take the highway that is the shorter way OR B: Take the regular route that's longer but you know it's safe?")
    if(first_choiceb == choiceb){
        alert("You made it safely to work, it made you late but you got there in one piece.")
        let first_choicebb = prompt("You're already late so you want to get in the workplace ASAP. Do you... A: Run straight into the office OR B: Call a coworker and walk in with them?")
        if(first_choicebb == choiceb){
            alert("You've made it to work safely! Your coworker friend confirmed that you work there and was able to help you get a temporary ID. Also, since you forgot breakfast, the coworker had brought breakfast from the nearby bakery and gave you some to eat, which prevented fainting from exhaustion. The coworker made an excuse that the two of you were late because you wanted to get breakfast for everyone so nobody wrote you both as late. YOU WIN!")
        } else {
            alert("Uh oh... you don't have your ID. You end up getting kicked out. GAME OVER (Rushing is the enemy of efficiency and double checking doesn't hurt!)")
        }
    } else {
        alert("Guess what? IT'S RUSH HOUR! You forgot about it and ended up stuck in traffic and got into a car accident because of how hectic the roads were. GAME OVER (The safe route is always the best options. Less time is wasted worrying about safety y'know?)")
    }
}

alert("Thanks for playing and hope you had fun!")
