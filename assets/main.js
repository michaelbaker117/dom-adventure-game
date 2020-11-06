/**
 * DOM Adventure Game
 */

// Scene Container
let game = document.querySelector('#game');
//Build Scene
let scene = document.createElement('ul');
let eventList;

// Player input container
let player = document.querySelector('#player');
// Build Player Input
let label = document.createElement('label');
let input = document.createElement('input');

// Title Screen
let startScreen = document.createElement('h1');
startScreen.textContent = 'Dom Adventure Game';
const begin = document.querySelector('#start');



// Display Title Screen
game.appendChild(startScreen);



// Game over Scene; Player dies, show this Scene
const death = function(cause) {

    let sceneEvent = document.createElement('li');
    sceneEvent.textContent = cause + "\n Game Over, Try Again!";
    scene.appendChild(sceneEvent);
  };

  // Mountain scene
  const mountains = function(){
    // Reset scene and form
    game.removeChild(scene);
    player.removeChild(label);

    scene = document.createElement('ul');

    // Add empty ul
    game.appendChild(scene);

    // Build Scene
    // Store scene text in an array 'event List'
    eventList = ["You arrive at the mountains.", "You went there knowing this was a dead end and went anyways. Your energy has now been entirely exhausted."];

    // Loop through each array item
    // Put each item in an li
    // Put li in 'scene' ul
    for (let event of eventList) {
      let sceneEvent = document.createElement('li');
      sceneEvent.textContent = event;
      scene.appendChild(sceneEvent);
    }

    return death("In your attempt to go back the way you came, you collapse from exhaustion. While you sleep, a hungry wolf spots you and...well you can figure out the rest.")
  }

  /*

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

  */

  /// Forest scene
  const forest = function() {
     // Reset scene and form
     game.removeChild(scene);
     player.removeChild(label);

     scene = document.createElement('ul');

     // Add empty ul
     game.appendChild(scene);

     // Build Scene
     // Store scene text in an array 'event List'

      // Build Scene
      // Store scene text in an array 'event List'
      eventList = ["You enter the forest and find yourself face to face with a monster holding a club." ,"You thrust your sword into the mosters heart killing it instantly!", "You continue to a ruined stone building.", "Curious, you enter.", "You see two doors, one of the left, one on the right."];

      for (let event of eventList) {
        let sceneEvent = document.createElement('li');
        sceneEvent.textContent = event;

        scene.appendChild(sceneEvent);
      };

      /*
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

    }
    */

    // If not armed, death scene
    //else {
      console.log("The monster (being evil and all) attacks you.\n");
      return death("The monster being twice as big and as strong as you are, kills you because you have no way to defend yourself. If only you had a sword...");

  };



  // Cave Scene
  const cave = function() {
     // Reset scene and form
     game.removeChild(scene);
     player.removeChild(label);

     scene = document.createElement('ul');

     // Add empty ul
     game.appendChild(scene);

     // Build Scene
     // Store scene text in an array 'event List'

      // Build Scene
      // Store scene text in an array 'event List'
          //Meet the old man
      eventList = ["You arrive at the cave.", "Inside the cave sits an old man", "The old man holds out a sword toward you", "\"It's dangerous to go alone, take this!\" says the old man"];

      for (let event of eventList) {
        let sceneEvent = document.createElement('li');
        sceneEvent.textContent = event;

        scene.appendChild(sceneEvent);
      };
      console.log("\nNot trusting this strange old man you decide to leave.\n");
      return death ("After leaving the old man you get attacked by a monster. And you don't survive");
    };

  /*  // loop til answered
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

  }; */

  // Starting Scene
  const start = function() {
    // Add empty ul
    document.body.removeChild(begin);
    game.appendChild(scene);

    // Build Form
    player.appendChild(label);
    label.setAttribute('id', 'player-input');
    label.textContent = 'Where do you go? \(Press \'return\' to confirm answer\)';
    label.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'answer');
    input.setAttribute('name', 'answer');


    // Describe Scene
    // Store scene text in an array 'event List'
    eventList = ["You wake up in a green field.", "There are mountains surrounding you to the East and South.", "There is a cave opening to the North and an opening to a forest to the West"];

    // Loop through each array item
    // Put each item in an li
    // Put li in 'scene' ul
    for (let event of eventList) {
      let sceneEvent = document.createElement('li');
      sceneEvent.textContent = event;

      scene.appendChild(sceneEvent);
    }

    const sendInput = (event) => {
      event.preventDefault();

      let choice = input.value;

      // If cave/north answer, cave scene function
      if (choice == "cave" || choice == "north") {
        return cave();
        console.log('cave');
      }
      // If forest answer, forest scene (with death)
      else if (choice == "forest" || choice == "west") {
        return forest();
        console.log('forest');
      }
      // If south or east, mountain scene
      else if (choice == "east" || choice == "south" || choice == "mountains") {
        return mountains();
      }
      // If no answer or not understandable
      else {
        let sceneEvent = document.createElement('li');
        scene.appendChild(sceneEvent);
        sceneEvent.textContent = 'I don\'t understand!'
        input.value='';
        input.focus();
      }
    }
    player.addEventListener('submit', sendInput);

  };

//};

  // Start Game
  begin.addEventListener('click', function() {
    game.removeChild(startScreen);
    return start();
})
