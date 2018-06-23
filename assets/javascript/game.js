var movieBank = ['forrest gump', 'lion king', 'legally blonde', 'shrek', 'gone with the wind', 'the silence of the lambs', 'full metal jacket', 'the wizard of oz', 'the lord of the rings', 'american pie', 'rocky', 'the breakfast club', 'toy story', 'beauty and the beast', 'star wars', 'harry potter', 'the hunger games', 'titanic', 'saving private ryan', 'top gun', 'anchorman', 'pulp fiction', 'the dark knight', 'pirates of the caribbean', 'james bond', 'mean girls', 'jurassic park', 'the matrix', 'back to the future', 'ferris buellers day off', 'the princess bride', 'the karate kid', 'jaws', 'the godfather', 'a clockwork orange', 'willy wonka and the chocolate factory', 'the sound of music', 'breakfast at tiffanys', 'snow white and the seven dwarves', 'citizen kane'];

var sportsBank = ['babe ruth', 'dallas cowboys', 'new york yankees', 'los angeles lakers', 'michael jordan', 'wayne gretzky', 'troy aikman', 'dirk nowitzki', 'lebron james', 'tom brady', 'brett favre', 'shaquille oneal', 'muhammad ali', 'tim duncan', 'nolan ryan', 'ted williams', 'jackie robinson', 'chicago bulls', 'new york knicks', 'chicago cubs', 'new england patriots', 'new york giants', 'golden state warriors', 'san antonio spurs', 'lindsey vonn', 'david beckham', 'tiger woods', 'kareem abdul jabbar', 'dale earnhardt jr', 'lionel messi', 'roger federer', 'serena williams', 'cristiano ronaldo', 'michael phelps', 'kobe bryant', 'usain bolt', 'shaun white', 'magic johnson', 'larry bird', 'floyd mayweather', 'oscar de la hoya', 'san fransico giants', 'st louis cardinals', 'manchester united', 'philadelphia flyers', 'new orleans saints', 'new york rangers', 'texas rangers', 'dallas mavericks', 'chicago blackhawks', 'chicago bears', 'philadelphia eagles', 'atlanta braves', 'new york jets', 'mike modano', 'miami heat', 'boston celtics', 'toronto maple leafs', 'fc barcelona', 'philadelphia phillies', 'pittsburgh steelers', 'bosto red sox', 'green bay packers', 'real madrid', 'alexander ovechkin', 'stephen curry', 'kevin durant', 'willie mays', 'hank aaron', 'ty cobb', 'mickey mantle', 'barry sanders', 'emmitt smith', 'jerry rice', 'peyton manning', 'mike tyson', 'bo jackson', 'conor mcgregor']

var word = movieBank[Math.floor(Math.random() * movieBank.length)];

var wordLength = [];

var spaces = 0;
var wins = 0;
var losses = 0;

var wordDisplay = document.getElementById('wordDisplay');

var message = '';

for(var i = 0; i < word.length; i++) {
	if (word[i] === ' ') {
		spaces++;
		wordLength[i] = '\xa0';
	} else {
		wordLength[i] = '_';
	}
}

var remainingLetters = word.length - spaces;
var strikesLeft = 6;
var prevGuesses = []

console.log('word: ' + word);
console.log('word length: ' + wordLength);
console.log('spaces: ' + spaces);
console.log('remaining letters: ' + remainingLetters);

wordDisplay.textContent = wordLength.join(' ');


document.onkeyup = function(event) {
	var userKey = event.key;
	console.log('user key: ' + userKey);
		
	if (/^[a-z]+$/.test(userKey)) {
		
		if(prevGuesses.indexOf(userKey) < 0) {
			prevGuesses.push(userKey);
			console.log('guesses: ' + prevGuesses);
			
			if(word.indexOf(userKey) >= 0) {
				alert('You guessed a letter!');
				for(var i = 0; i < word.length; i++) {
					if(userKey === word[i]) {
						wordLength[i] = userKey.toUpperCase();
						remainingLetters--;
						wordDisplay.textContent = wordLength.join(' ');
						console.log('remaining letters: ' + remainingLetters);
					}
				}
				if(remainingLetters <= 0) {
					wins++;
					alert('YOU WIN!');
					message = 'You Win!';
					console.log('message: ' + message);
					// Reset all variables to start!
				}
			} else {
				alert('Try again!');
				strikesLeft--;
				if(strikesLeft <= 0) {
					losses++;
					alert('YOU LOSE!');
					message = 'Oh no! You\'ve lost!';
					console.log('message: ' + message);
					// Reset all variables to start!
				}
			}
		} else {
			message = 'You\'ve already guessed that letter!';
			console.log('message: ' + message);
		}
		
	} else {
		message = 'Invalid Key: Please type a letter.';
		console.log('message: ' + message);
	}
}