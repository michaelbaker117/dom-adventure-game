/**
 * DOM Adventure Game
 */

let game = document.querySelector('#game');
let player = document.querySelector('#player');
let textAnswer = document.createElement('input');
textAnswer.setAttribute('type', 'text')

console.log(textAnswer);

let startScreen = document.createElement('h1');
startScreen.textContent = 'Dom Adventure Game';

const Start = document.querySelector('#start');
let scene = document.createElement('p');


game.appendChild(startScreen);




Start.addEventListener('click', function() {
    game.removeChild(startScreen);
    scene.textContent = "You wake up in a green field."
    game.appendChild(scene);
})



/*
// Game over Scene; Player dies, show this Scene
const death = function(cause) {
    console.log(cause);
    console.log("\nGame Over. Try again!")
  };
  
  // Mountain scene
  const mountains = function(){
    console.log("You arrive at the mountains.");
    console.log("You went there knowing this was a dead end and went anyways. Your energy has now been entirely exhausted.");
    return death("In your attempt to go back the way you came, you collapse from exhaustion. While you sleep, a hungry wolf spots you and...well you can figure out the rest.")
  }
  
  // Is the player armed
  let isArmed = false;
  
  // Retire with pride in your adventure
  const pride = function() {
    console.log("\nDeciding that riches were not worth the risk of death, you decide to leave the ruins.");
    console.log("You return to the field you first found youself in and decide to build youself a small house.");
    console.log("It's nothing much, but its enough for you.");
    console.log("You retire here where you live out the rest of your days happily and modestly. Your adventuring days are over");
    console.log("\nThe Relaxed Ending");
  };
  
  // Retire a wealthy man
  const wealth = function () {
    console.log("\nAfter defeating the dungeon beast, you return to the field you first found yourself in.");
    console.log("Using your now immense wealth, you buy the materials to build yourself a mighty castle.");
    console.log("You name yourself king of the land.")
    let choice = prompt("\nWhat shall you call this new kingdom?");
  
    console.log(`\nYou live out yor life in luxury as the new king of ${choice}`);
  
    console.log("\nThe King of Kings Ending");
  }
  
  
  //Attempt Riddle
  const riddle = function () {
    console.log("\nWanting nothing more than to become rich, you accept the challenge of the dungeon beast.");
    console.log("\"Good choice,\" says the beast.");
    console.log("\"Your riddle is \'What has to be broken before you can use it?\'\"");
  
    let guess = 0
  
    // Loop to count guesses
    while (guess < 3) {
      let choice = prompt("\nWhat is your guess?")
      // correct answer "an egg"
      if (choice == "an egg") {
        console.log("\n\"well done. That is correct. As promised, the riches are yours\"");
        return wealth();
      } else {
  
        guess += 1
  
        if (guess == 1) {
        console.log("\n\"Wrong! 2 attempts remaining...\"");
        } else if (guess == 2) {
        console.log("\n\"Wrong again! Last chance...\"");
        } 
        // if wrong 3 times, beast kills you, game over
        else if (guess == 3) {
        console.log("\n\"Oopsie...guess thats game over\"");
        return death("\nThe dungeon beast lunges at you. You don't even get a chance to process your defeat before the release of death kicks in.");
        };
        
        };
  
      };
  
    };
  
  // Money Scene
  const moneyRoom = function() {
    console.log("\nYou enter the door on the right to find yourself in a room full of many riches.");
    console.log("A dungeon beast sits at a throne at the back of the room");
    console.log("\"I will give you 3 chances to guess my riddle. Guess correct, these riches are yours. Guess wrong...\" he motions to represent slashing a throat");
  
    // loop til answered
    let hasAnswered = false;
    while (hasAnswered == false) {
    
    let choice = prompt("\nDo you accept this challenge, or do you leave and give up?")
  
    // Give up
    if (choice == "give up" || choice == "leave") {
      return pride();
    } else if (choice == "accept") {
      return riddle();
    } else {
      console.log("I don't understand")
    };
  
    };
  
  
  };
  
  /// Forest scene
  const forest = function() {
    
    // moster attack
    console.log("\nYou enter the forest and find yourself face to face with a monster holding a club.");
  
    // If armed, kill monster
    if (isArmed == true) {
      console.log("You thrust your sword into the mosters heart killing it instantly!");
      console.log("You continue to a ruined stone building.");
      console.log("Curious, you enter.")
      console.log("You see two doors, one of the left, one on the right.");
  
      // loop til answered
      let hasAnswered = false;
      while (hasAnswered == false) {
  
      let choice = prompt("\nWhich door do you choose?");
  
      // Choose left; die
      if (choice == "left" || choice == "left door") {
        console.log("You enter the door on the left into a dark room.");
        console.log("You hear a voice laugh.");
        console.log("\"You chose wrong.\" the voice laughs");
        return death("The room is suddenly engulfed in flames. Within seconds, you are nothing but ash.");
      //choose right, money
      } else if (choice == "right"|| choice == "right door") {
        return moneyRoom();
      } else {
        console.log("I don't understand")
      };
  
      };
    }
    // If not armed, death scene
    else {
      console.log("The monster (being evil and all) attacks you.\n");
      return death("The monster being twice as big and as strong as you are, kills you because you have no way to defend yourself. If only you had a sword...");
    }
  };
  
  // Cave Scene
  const cave = function() {
  
    //Meet the old man
    console.log("You arrive at the cave.");
    console.log("Inside the cave sits an old man");
    console.log("The old man holds out a sword toward you");
    console.log("\"It's dangerous to go alone, take this!\" says the old man");
  
    // loop til answered
    let hasAnswered = false;
    while (hasAnswered == false) {
    
    let choice = prompt("\nDo you take the sword?");
  
    // Do you take the sword?
    if (choice == "yes") {
      isArmed = true;
      console.log("\nYou take the sword, now you can fight bad guys! Heck yeah!\n");  
      break;
    } else if (choice == "no") {
        console.log("\nNot trusting this strange old man you decide to leave.\n");  
        break;
    } else {
      console.log("I don't understand.");
    };
  
    }
  
    // loop til second prompt answered
    let hasAnswered2 = false
    // Head to the forest now?
    while (hasAnswered2 == false) {
    let nextChoice = prompt("\nDo you head back to the forest?");
  
    // If yes, run forest function
    if (nextChoice == "yes") {
      return forest();
    // if no, game over
    } else if (nextChoice == "no") {
      console.log("\n Oh? Ok then I guess...")
      return death("You just decided to sit down and call it quits for the rest of your life until your peaceful death in your older years. So um...I guess you kinda win???");
      break;
    } else {
      console.log("I don't understand")
    }
  
  };
  
  };
  
  // Starting Scene 
  const start = function() {
    // Describe Scene
    console.log("You wake up in a green field.");
    console.log("There are mountains surrounding you to the East and South.");
    console.log("There is a cave opening to the North and an opening to a forest to the West\n");
  
    // loop til prompt answered
    let hasAnswered = false;
    while (hasAnswered == false) {
  
    // Ask what to do next
    // Prompt use to give an answer
    let choice = prompt("\nWhere do you go?");
  
      // If cave/north answer, cave scene function
      if (choice == "cave" || choice == "north") {
        return cave();
      }
      // If forest answer, forest scene (with death)
      else if (choice == "forest" || choice == "west") {
        return forest();
      }
      // If south or east, mountain scene
      else if (choice == "east" || choice == "south" || choice == "mountains") {
        return mountains();
      }
      // If no answer or not understandable
      else {
        console.log("\nI don't understand!\n");
      }
  
    }
  
  };
  
  // Start Game
  start();

  */