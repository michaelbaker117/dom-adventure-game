/**
 * DOM Adventure Game
 */
const sceneDiv = document.querySelector('#scene');
console.log(sceneDiv);

//original code i started with
/*Start Scene
sceneDiv.textContent = 'You wake up in a dimly lit room. There are doors to the left and right. Which door do you pick?';

const button1 = document.querySelector('.btn1');
console.log(button1);
button1.textContent = 'Left';

const button2 = document.querySelector('.btn2');
console.log(button2);
button2.textContent = 'Right';


const button3 = document.querySelector('.btn3');
console.log(button3);
button3.textContent = '';

//Bear Room
button1.addEventListener('click', () => {
  sceneDiv.textContent = "There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?";
  button1.textContent = 'Taunt';
  button2.textContent = 'Take honey';
  button3.textContent = 'Do nothing';
});

/*Pit Trap Room
button2.addEventListener('click', () => {
  sceneDiv.textContent = "The door swings open to utter darkness. You step through, but your foot can't find the floor It's a big pit. And you're falling AAAAAAAAHHHHHHHHHhhhhhhhhhhhh..... Sorry, you picked the wrong door and fell to your death. Good try. Play Again?";
  button1.textContent = '';
  button2.textContent = '';
  button3.textContent = 'Restart';
});

/*Restart
button3.addEventListener('click', () => {
  sceneDiv.textContent = 'You wake up in a dimly lit room. There are doors to the left and right. Which door do you pick?';
  button1.textContent = 'Left';
  button2.textContent = 'Right';
  button3.textContent = '';
})*/


// The player starts here
const start = function() {
  // What does this scene look like?
  sceneDiv.textContent = "You awake in a dimly lit room. There are doors to your left and right. Which door do you pick?";
  console.log(sceneDiv);
  // player choices
  const button1 = document.querySelector('.btn1');
  console.log(button1);
  button1.addEventListener('click', () => {
    button1.textContent = 'left';
  });

  const button2 = document.querySelector('.btn2');
  console.log(button2);
  button2.addEventListener('click', () => {
    button2.textContent = 'right';
  });

  // Create branches for each choice
  if (button1) {
    return bearRoom();
} else if (button2) {
    return pitTrap();
  }
};

//pit trap scene
const pitTrap = function() {
  // What does the scene look like?
  sceneDiv.textContent = "The door swings open to utter darkness. You step through, but your foot can't find the floor. It's a big pit. And you're falling. AAAAAAAAHHHHHHHHHhhhhhhhhhhhh.....";
  //restart button
  const button1 = document.querySelector('.btn1')
  console.log(button1);
  button1.addEventListener('click', () => {
    button1.textContent = 'restart';
  });
  if (button1) {
    // Stop this scene and send them to the start
    return start();
  }
};

// Bear scene
const bearRoom = function() {
  // What does the scene look like?
  sceneDiv.textContent = "There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?";

  // Create a boolean variable to track where the bear
  let bearMoved = false;

  //player choices
  while (true) {
    // Ask for input
    const button1 = document.querySelector('.btn1');
    console.log(button1);
    button1.addEventListener('click', () => {
      button1.textContext = 'take honey';
    });
    const button2 = document.querySelector('.btn2');
    console.log(button2);
    button.addEvenetListener('click', () => {
      button2.textContent = 'taunt bear';
    });
    const button3 = document.querySelector('.btn3')
      console.log(button3);
      button.addEventListener('click', () => {
        button3.textContent = 'do nothing';
      });
    // Create branches for each choice
    if (button1) {
      // Stop this scene and send them to the death scene
      return death();
    } else if (button2) {
      if (!bearMoved) {
        // First time taunting the bear
        sceneDiv.textConetnt = "The bear moved, you can go through the door now";
        const button1 = document.qeurySelector('.btn1');
        console.log(button1);
        button.addEventListener('click', () => {
          button1.textContext = 'open door';
        });
        bearMoved = true;
      } else if (button3) {
        return death();
      }
    } else if (bearMoved && button2) {
      // Stop this scene and send them to the empty room
      return emptyRoom();
    }
  }
};

// After moving the bear, choose another door before the gold room
const emptyRoom = function() {
  // Empy room with 1 door on the left and right
  sceneDiv.textContent = "You have entered the empty room! Choose the correct door to the gold room. Beware of the dragon, if you choose incorrectly! Left door or right door?";

  // Choose the left or right door
  const button1 = document.querySelector('.btn1');
  console.log(button1);
  button1.addEventListener('click', () => {
    button1.textContent = 'right';
  });

  const button2 = document.qeurySelector('.btn2');
  console.log(button2);
  button2.addEventListener('click', () => {
    button2.textContent = 'left';
  });
    if(button1) {
      return goldRoom();
    } else if (button2) {
      return bossRoom();
    }
};

// You chose the Boss room, now fight the boss
const bossRoom = function() {
 // You see a big mean dragon in the middle of the room
  sceneDiv.textContent = "You have entered the boss room. Good luck Adventurer! Choose a weapon to defeat the dragon? Sword and shield, bow and arrow, or magic staff?";

  // choose a weapon to defeat the dragon
  const weapon1 = document.qeurySelector('.btn1');
  console.log(weapon1);
  weapon1.addEventListener('click', () => {
    weapon1.textContent = "sword and shield";
  });

  const weapon2 = document.querySelector('.btn2');
  console.log(weapon2);
  weapon2.addEventListener('click',() => {
    weapon2.textContent = "bow and arrow";
  });

  const weapon3 = document.querySelector('click', () => {
    console.log(weapon3);
    weapon3.addEventListener('click', () => {
      weapon3.textContent = "magic staff";
    });

  //weapon buttons
    if (weapon1) {
      return escapeRoom();
    } else if (weapon2) {
      return death();
    } else if (weapon3) {
      return emptyRoom();
    }
};

// After defeating the dragon you escape
const escapeRoom = function() {
  sceneDiv.textContent = "Congratulations! You have defeated the dragon and have escaped the dungeon! You Win 50 pieces of gold!";
  //restart
};

// The final scene, the player has almost won!
const goldRoom = function() {
  // What does the scene look like?
  sceneDiv.textContent = "Hurray! You Win!!! This room has a big pile of gold. How much gold do you take?";

  // Ask for user input, then convert the answer to a number value
  const choice = Number(document.createElement('input'));

  // Choice couldn't be converted to a number, so they typed a bad answer
  if (Number.isNaN(choice)) {
    // Stop this scene and send them to the death scene
    return death();
  }

  // Choice was over 100, which is far too greedy
  if (choice > 100) {
    // Stop this scene and send them to the death scene
    sceneDiv.textContent = "You took too much and couldn't carry it, unable to escape!";
    return death();
  }
};

// If the player dies, show this scene
const death = function() {
  // Print their cause of death, and then a final message
  //sceneDiv.textContent = "Game Over! Good try. Play Again?";
  //restart
};

// Start The Game!
start();
