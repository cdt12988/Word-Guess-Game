// Set game variables and arrays
var wins = 0;
var losses = 0;
var streak = 0;
var game = false;

var spaces = 0;
var numLetters = 0;
var strikesLeft = 6;
var remainingLetters = 0;
var message = '';
var catText = '';
var verb = '';
var prevGuesses = []
var wordLength = [];
var word = [];

// Set DOM capture variables
var letters = document.getElementsByClassName('letters');
var category = document.getElementById('category');

var messDisplay = document.getElementById('messDisplay');
var wordDisplay = document.getElementById('wordDisplay');
var catDisplay = document.getElementById('catDisplay');	
var winsDisplay = document.getElementById('winsDisplay');
var lossesDisplay = document.getElementById('lossesDisplay');
var streakDisplay = document.getElementById('streakDisplay');

// Set keyboard event listeners
document.onkeyup = function(event) {
	if(game) {
		letterGuessed(event.key);
	} else {
		play();
	}
}

// Set buttons event listeners	
for(var i =0; i < letters.length; i++) {
	letters[i].addEventListener('click', function(event) {
		var target = event.target;
		var targetId = target.id;
		if(game) {
			letterGuessed(targetId);
		} else {
			play();
		}
	});
}

function displayMessage(msg) {
	messDisplay.textContent = msg;
}

function resetButtons() {
	for (var i = 0; i < letters.length; i++) {
		letters[i].className = 'letters';
	}
}

function play() {

	// Checks if a current game exists already
	if(!game) {
	
	// Resets initial game variables	
		game = true;
		wordLength = [];
		prevGuesses = [];
		verb = '';
		spaces = 0;
		numLetters = 0;
		strikesLeft = 6;
		
	// Assigns the category to the selected category
		if(category.selectedIndex == 0) {
			var randomIndex = Math.floor(Math.random()*randomBank.length);		
			wordBank = randomBank[randomIndex];
			catText = randomCat[randomIndex];
		} else if(category.selectedIndex == 1) {
			wordBank = sportsBank;
			catText = 'Sports';
		} else if(category.selectedIndex == 2) {
			wordBank = countriesBank;
			catText = 'Countries';
		} else if(category.selectedIndex == 3) {
			wordBank = statesBank;
			catText = 'States';
		} else if(category.selectedIndex == 4) {
			wordBank = presidentsBank;
			catText = 'US Presidents';
		} else if(category.selectedIndex == 5) {
			wordBank = animalBank;
			catText = 'Animals';
		} else if(category.selectedIndex == 6) {
			wordBank = musicBank;
			catText = 'Music';
		} else if(category.selectedIndex == 7) {
			wordBank = movieBank;
			catText = 'Movies';
		} else {
			wordBank = comicsBank;
			catText = 'Comic Books';
		}
		
	// Assigns the word to a random word within the category
		word = wordBank[Math.floor(Math.random() * wordBank.length)];
		
	// Assings the individual letters of the word into an array of underscores and spaces
		for(var i = 0; i < word.length; i++) {
			if (word[i] === ' ') {
				spaces++;
				wordLength[i] = '\x20\x20';
			} else {
				wordLength[i] = '_';
			}
		}
		
	// Assigns the win-condition (letters left to be guessed) to the length of the word minus any spaces
		remainingLetters = word.length - spaces;
		
	/*
		console.log('word: ' + word);
		console.log('word length: ' + wordLength);
		console.log('spaces: ' + spaces);
		console.log('remaining letters: ' + remainingLetters);
	*/
	
	// Displays the current word (in underscores) and category in the game	
		wordDisplay.textContent = wordLength.join('\xa0');
		catDisplay.textContent = catText;
	
	// Resets the visual stylings for the stickman drawing and buttons, and changes the initial game message	
		drawStickman();
		clearStickman();
		resetButtons();
		displayMessage('Let\'s get started! Guess a letter!');
	
	// Confirms starting a new game if a current one exists -- if yes, then performs game loss actions
	} else {
		var restart = confirm('Starting a new game will cause you to lose your current one.  Would you like to start a new one anyway?');
		if(restart) {
			losses++;
			streak = 0;
			game = false;
			winsDisplay.textContent = wins;
			lossesDisplay.textContent = losses;
			streakDisplay.textContent = streak;
			play();
		}
	}
}

function letterGuessed(userKey) {
	
	// Tests if user input is a letter or not		
	if (/^[a-z]+$/.test(userKey)) {
		
	// Tests if letter has been guessed previously -- if not, adds it to the previous guesses array, and changes the button display styling
		if(prevGuesses.indexOf(userKey) < 0) {
			prevGuesses.push(userKey);
			console.log('guesses: ' + prevGuesses);
			document.getElementById(userKey).classList.add('guessed');
			
	// Tests if the guessed letter is in the word
			if(word.indexOf(userKey) >= 0) {
				
	// Runs through the word array, replaces relavent underscores with the letter guessed, adjusts variables accordingly, and changes the word display in game
				for(var i = 0; i < word.length; i++) {
					if(userKey === word[i]) {
						wordLength[i] = userKey.toUpperCase();
						remainingLetters--;
						numLetters++;
						wordDisplay.textContent = wordLength.join('\xa0');
						console.log('remaining letters: ' + remainingLetters);
					}
				}
	
	// Sets grammatical syntax to singular or plural for message displaying purposes
				if(numLetters > 1) {
					var verb = 'were';
					var plural = '\'s'
				} else {
					var verb = 'was';
					var plural = '';
				}
				
	// Displays message with the number of correctly guessed letters; then resets the counter variable to be used again later
				displayMessage('Nice! There ' + verb + ' ' + numLetters + ' ' + userKey.toUpperCase() + plural + '!');
				numLetters = 0;
	
	// Checks win condition and adjusts variables accordingly			
				if(remainingLetters <= 0) {
					wins++;
					streak++;
					message = 'Congrats! You Win!';
	// Displays a separate game winning message if there were no incorrect guesses during the game
					if(strikesLeft == 6) {
						displayMessage('WOW! A Flawless Win! Well done!');
					} else if(strikesLeft == 1) {
						displayMessage('Whoah, that was a close one! Well done! You win!');
					} else {
						displayMessage('Congrats! You Win!');
					}
	// Updates the scoreboard display and ends the game
					console.log('message: ' + message);
					console.log(wins + losses + streak);
					winsDisplay.textContent = wins;
					lossesDisplay.textContent = losses;
					streakDisplay.textContent = streak;
					game = false;
				}
				
	// If guessed letter is not in the word, change the game message accordingly
			} else {
				displayMessage('Oh no! There weren\'t any ' + userKey.toUpperCase() + '\'s!');
				
	// Draws the appropriate portion of the stick figure to represent the number of guesses left and decrements the lose condition
				if(strikesLeft == 6) {
					drawHead();
				} else if(strikesLeft == 5) {
					drawBody();
				} else if(strikesLeft == 4) {
					drawLeftArm();
				} else if(strikesLeft == 3) {
					drawRightArm();
				} else if(strikesLeft == 2) {
					drawLeftLeg();
				} else {
					drawRightLeg();
				}
				strikesLeft--;
				
	// After decrimenting the lose condition, tests the lose condition and adjusts variables and messages accordingly, and ends the game
				if(strikesLeft <= 0) {
					losses++;
					streak = 0;
					message = 'Oh no! You\'ve lost! Better luck next time!';
					displayMessage('Oh no! You\'ve lost! Better luck next time!');
					console.log('message: ' + message);
					winsDisplay.textContent = wins;
					lossesDisplay.textContent = losses;
					streakDisplay.textContent = streak;
					game = false;
	// Fills in and displays the remaining letters of the word
					for(var i = 0; i < wordLength.length; i++) {
						wordLength[i] = word[i];
						wordDisplay.textContent = wordLength.join('\xa0').toUpperCase();
					}
				}
			}
			
	// If the guessed letter has already been guessed, update the message accordingly
		} else {
			message = 'You\'ve already guessed ' + userKey.toUpperCase() + '!';
			console.log('message: ' + message);
			displayMessage('You\'ve already guessed ' + userKey.toUpperCase() + '!');
		}
	
	// If the user input was not a letter, updates message accordingly	
	} else {
		message = 'That\'s not a letter! Please type a letter!';
		console.log('message: ' + message);
		displayMessage('That\'s not a letter! Please type a letter!');
	}
	console.log('strikes: ' + strikesLeft);
}