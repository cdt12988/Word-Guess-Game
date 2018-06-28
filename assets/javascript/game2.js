var movieBank = ['forrest gump', 'lion king', 'legally blonde', 'shrek', 'gone with the wind', 'the silence of the lambs', 'full metal jacket', 'the wizard of oz', 'the lord of the rings', 'american pie', 'rocky', 'the breakfast club', 'toy story', 'beauty and the beast', 'star wars', 'harry potter', 'the hunger games', 'titanic', 'saving private ryan', 'top gun', 'anchorman', 'pulp fiction', 'the dark knight', 'pirates of the caribbean', 'james bond', 'mean girls', 'jurassic park', 'the matrix', 'back to the future', 'ferris buellers day off', 'the princess bride', 'the karate kid', 'jaws', 'the godfather', 'a clockwork orange', 'willy wonka and the chocolate factory', 'the sound of music', 'breakfast at tiffanys', 'snow white and the seven dwarves', 'citizen kane', 'training day', 'remember the titans', 'armegeddon', 'scream', 'avatar', 'cast away', 'iron man', 'the shining', 'nightmare on elm street', 'edward scissorhands', 'the wolf of wall street', 'mad max', 'lethal weapon', 'die hard', 'city slickers', 'tombstone', 'the avengers', 'the shawshank redemption', 'schindlers list', 'west side story', 'et the extra terrestrial', 'raiders of the lost ark', 'braveheart', 'the exorcist'];

var sportsBank = ['babe ruth', 'dallas cowboys', 'new york yankees', 'los angeles lakers', 'michael jordan', 'wayne gretzky', 'troy aikman', 'dirk nowitzki', 'lebron james', 'tom brady', 'brett favre', 'shaquille oneal', 'muhammad ali', 'tim duncan', 'nolan ryan', 'ted williams', 'jackie robinson', 'chicago bulls', 'new york knicks', 'chicago cubs', 'new england patriots', 'new york giants', 'golden state warriors', 'san antonio spurs', 'lindsey vonn', 'david beckham', 'tiger woods', 'kareem abdul jabbar', 'dale earnhardt jr', 'lionel messi', 'roger federer', 'serena williams', 'cristiano ronaldo', 'michael phelps', 'kobe bryant', 'usain bolt', 'shaun white', 'magic johnson', 'larry bird', 'floyd mayweather', 'oscar de la hoya', 'san fransico giants', 'st louis cardinals', 'manchester united', 'philadelphia flyers', 'new orleans saints', 'new york rangers', 'texas rangers', 'dallas mavericks', 'chicago blackhawks', 'chicago bears', 'philadelphia eagles', 'atlanta braves', 'new york jets', 'mike modano', 'miami heat', 'boston celtics', 'toronto maple leafs', 'fc barcelona', 'philadelphia phillies', 'pittsburgh steelers', 'bosto red sox', 'green bay packers', 'real madrid', 'alexander ovechkin', 'stephen curry', 'kevin durant', 'willie mays', 'hank aaron', 'ty cobb', 'mickey mantle', 'barry sanders', 'emmitt smith', 'jerry rice', 'peyton manning', 'mike tyson', 'bo jackson', 'conor mcgregor']

var wins = 0;
var losses = 0;
var streak = 0;

function play() {
	
	var category = document.getElementById('category');
	var catText = '';
	
	if(category.selectedIndex == 0) {
		wordBank = movieBank;
		catText = 'Movies';
	} else {
		wordBank = sportsBank;
		catText = 'Sports';
	}
	
	var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	var wordLength = [];
	
	var spaces = 0;
	var numLetters = 0;
	var verb = '';
	var game = true;
	var strikesLeft = 6;
	var prevGuesses = []
	
	var wordDisplay = document.getElementById('wordDisplay');
	var catDisplay = document.getElementById('catDisplay');
	var messDisplay = document.getElementById('messDisplay');
	var guessDisplay = document.getElementById('guessDisplay');
	var winsDisplay = document.getElementById('winsDisplay');
	var lossesDisplay = document.getElementById('lossesDisplay');
	var streakDisplay = document.getElementById('streakDisplay');
	var letters = document.getElementsByClassName('letters');
	
	function displayMessage(msg) {
		messDisplay.textContent = msg;
	}
	function resetButtons() {
		for (var i = 0; i < letters.length; i++) {
			letters[i].className = 'letters';
		}
	}
	
	var message = '';
	
	for(var i = 0; i < word.length; i++) {
		if (word[i] === ' ') {
			spaces++;
			wordLength[i] = '\x20\x20';
		} else {
			wordLength[i] = '_';
		}
	}
	
	var remainingLetters = word.length - spaces;
	
/*
	console.log('word: ' + word);
	console.log('word length: ' + wordLength);
	console.log('spaces: ' + spaces);
	console.log('remaining letters: ' + remainingLetters);
*/
	
	wordDisplay.textContent = wordLength.join('\xa0');
	catDisplay.textContent = catText;
	
	clearStickman();
	resetButtons();
	displayMessage('Let\'s get started! Guess a letter!');
	
	document.onkeyup = function(event) {
/*
		var userKey = event.key;
		console.log('user key: ' + userKey);
*/
		letterGuessed(event.key);
	}
	
	for(var i =0; i < letters.length; i++) {
		letters[i].addEventListener('click', function(event) {
			var target = event.target;
			var targetId = target.id;
			letterGuessed(targetId);
		});
	}

	function letterGuessed(userKey) {
				
		if (/^[a-z]+$/.test(userKey)) {
			
			if(prevGuesses.indexOf(userKey) < 0) {
				prevGuesses.push(userKey);
	// 			console.log('guesses: ' + prevGuesses);
				guessDisplay.textContent = prevGuesses.join(' ').toUpperCase();
				document.getElementById(userKey).classList.add('guessed');
				
				if(word.indexOf(userKey) >= 0) {
	// 					alert('You guessed a letter!');
					
					for(var i = 0; i < word.length; i++) {
						if(userKey === word[i]) {
							wordLength[i] = userKey.toUpperCase();
							remainingLetters--;
							numLetters++;
							wordDisplay.textContent = wordLength.join('\xa0');
							console.log('remaining letters: ' + remainingLetters);
						}
					}
					if(numLetters > 1) {
						var verb = 'were';
						var plural = '\'s'
					} else {
						var verb = 'was';
						var plural = '';
					}
					displayMessage('Nice! There ' + verb + ' ' + numLetters + ' ' + userKey.toUpperCase() + plural + '!');
					numLetters = 0;
					
					if(remainingLetters <= 0) {
						wins++;
						streak++;
	// 						alert('YOU WIN!');
						message = 'Congrats! You Win!';
						if(strikesLeft == 6) {
							displayMessage('WOW! A Flawless Win! Well done!');
						} else {
							displayMessage('Congrats! You Win!');
						}
						console.log('message: ' + message);
						console.log(wins + losses + streak);
						winsDisplay.textContent = wins;
						lossesDisplay.textContent = losses;
						streakDisplay.textContent = streak;
						game = false;
						// Perform Game-Winning tasks and break out of function?
					}
				} else {
	// 					alert('Try again!');
					displayMessage('Oh no! There weren\'t any ' + userKey.toUpperCase() + '\'s!');
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
					if(strikesLeft <= 0) {
						losses++;
						streak = 0;
	// 						alert('YOU LOSE! Better luck next time!');
						message = 'Oh no! You\'ve lost! Better luck next time!';
						displayMessage('Oh no! You\'ve lost! Better luck next time!');
						console.log('message: ' + message);
						winsDisplay.textContent = wins;
						lossesDisplay.textContent = losses;
						streakDisplay.textContent = streak;
						game = false;
						// Fill in the rest of the letters, game-losing tasks and break out of function?
					}
				}
			} else {
				message = 'You\'ve already guessed ' + userKey.toUpperCase() + '!';
				console.log('message: ' + message);
				displayMessage('You\'ve already guessed ' + userKey.toUpperCase() + '!');
			}
			
		} else {
			message = 'That\'s not a letter! Please type a letter!';
			console.log('message: ' + message);
			displayMessage('That\'s not a letter! Please type a letter!');
		}
	}
	
}



