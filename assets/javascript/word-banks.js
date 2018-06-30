var movieBank = ['forrest gump', 'the lion king', 'legally blonde', 'shrek', 'gone with the wind', 'the silence of the lambs', 'full metal jacket', 'the wizard of oz', 'the lord of the rings', 'american pie', 'rocky', 'the breakfast club', 'toy story', 'beauty and the beast', 'star wars', 'harry potter', 'the hunger games', 'titanic', 'saving private ryan', 'top gun', 'anchorman', 'pulp fiction', 'the dark knight', 'pirates of the caribbean', 'james bond', 'mean girls', 'jurassic park', 'the matrix', 'back to the future', 'ferris buellers day off', 'the princess bride', 'the karate kid', 'jaws', 'the godfather', 'a clockwork orange', 'willy wonka and the chocolate factory', 'the sound of music', 'breakfast at tiffanys', 'snow white and the seven dwarves', 'citizen kane', 'training day', 'remember the titans', 'armegeddon', 'scream', 'avatar', 'cast away', 'iron man', 'the shining', 'a nightmare on elm street', 'edward scissorhands', 'the wolf of wall street', 'mad max', 'lethal weapon', 'die hard', 'city slickers', 'tombstone', 'the avengers', 'the shawshank redemption', 'schindlers list', 'west side story', 'et the extra terrestrial', 'raiders of the lost ark', 'braveheart', 'the exorcist', 'theres something about mary', 'casablanca', 'apocalypse now', 'goodfellas', 'taxi driver', 'inception', 'raging bull', 'psycho', 'one flew over the cuckoos nest', 'big story in little china', 'blade runner', 'fight club', 'lawrence of arabia', 'its a wonderful life', 'jurassic world', 'the big lebowski', 'the usual suspects', 'close encounters of the third kind', 'the deer hunter', 'airplane', 'groundhog day', 'monty python and the holy grail', 'ghostbusters', 'the hangover', 'caddyshack', 'dawn of the dead', 'shaun of the dead', 'animal house', 'this is spinal tap', 'blazing saddles', 'dumb and dumber', 'ace ventura pet detective', 'young frankenstein', 'superbad', 'bridesmaids', 'office space', 'old school', 'hot fuzz', 'step brothers', 'meet the parents', 'planes trains and automobiles', 'clueless', 'coyote ugly', 'waynes world', 'napoleon dynamite', 'happy gilmore', 'major league', 'finding nemo', 'mary poppins', 'the incredibles', 'home alone', 'the sound of music', 'the nightmare before christmas', 'how to train your dragon', 'despicable me', 'the little mermaid', 'the sandlot', 'a christmas story', 'the iron giant', 'homeward bound', 'the parent trap', 'who framed roger rabbit', 'the fifth element', 'aladdin', 'love actually', 'lucky number sleven', 'the terminator', 'the prestige', 'van helsing', 'eternal sunshine of the spotless mind', 'minority report', 'planet of the apes', 'donnie darko', 'mission impossible', 'the sixth sense', 'the brave little toaster', 'all dogs go to heaven', 'aristocats', 'up', 'inside out', 'sky captain and the world of tomorrow', 'monsters inc', 'brokeback mountain', 'halloween', 'the texas chainsaw massacre', 'the blair witch project', 'clerks', 'mallrats', 'jay and silent bob strike back', 'the thing', 'teeth', 'sharknado', 'deep blue sea', 'paranormal activity', 'night of the living dead', 'the conjuring', 'the cabin in the woods', 'poltergeist', 'an american werewolf in london'];

var sportsBank = ['babe ruth', 'dallas cowboys', 'new york yankees', 'los angeles lakers', 'michael jordan', 'wayne gretzky', 'troy aikman', 'dirk nowitzki', 'lebron james', 'tom brady', 'brett favre', 'shaquille oneal', 'muhammad ali', 'tim duncan', 'nolan ryan', 'ted williams', 'jackie robinson', 'chicago bulls', 'new york knicks', 'chicago cubs', 'new england patriots', 'new york giants', 'golden state warriors', 'san antonio spurs', 'lindsey vonn', 'david beckham', 'tiger woods', 'kareem abdul jabbar', 'dale earnhardt jr', 'lionel messi', 'roger federer', 'serena williams', 'cristiano ronaldo', 'michael phelps', 'kobe bryant', 'usain bolt', 'shaun white', 'magic johnson', 'larry bird', 'floyd mayweather', 'oscar de la hoya', 'san fransico giants', 'st louis cardinals', 'manchester united', 'philadelphia flyers', 'new orleans saints', 'new york rangers', 'texas rangers', 'dallas mavericks', 'chicago blackhawks', 'chicago bears', 'philadelphia eagles', 'atlanta braves', 'new york jets', 'mike modano', 'miami heat', 'boston celtics', 'toronto maple leafs', 'fc barcelona', 'philadelphia phillies', 'pittsburgh steelers', 'bosto red sox', 'green bay packers', 'real madrid', 'alexander ovechkin', 'stephen curry', 'kevin durant', 'willie mays', 'hank aaron', 'ty cobb', 'mickey mantle', 'barry sanders', 'emmitt smith', 'jerry rice', 'peyton manning', 'mike tyson', 'bo jackson', 'conor mcgregor'];

var countriesBank = ['afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'anguilla', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria', 'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bermuda', 'bhutan', 'bolivia', 'bosnia and herzegovina', 'brazil', 'brunei darussalam', 'bulgaria', 'burkina faso', 'burma', 'burundi', 'cambodia', 'cameroon', 'canada', 'cape verde', 'cayman islands', 'central african republic', 'chad', 'chile', 'china', 'colombia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czech republic', 'democratic republic of the congo', 'denmark', 'djibouti', 'dominica', 'dominican republic', 'ecuador', 'egypt', 'el salvador', 'equatorial guinea', 'eritrea', 'estonia', 'ethiopia', 'fiji', 'finland', 'france', 'french guiana', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'great britain', 'greece', 'grenada', 'guadeloupe', 'guatemala', 'guinea', 'guinea bissau', 'guyana', 'haiti', 'honduras', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'martinique', 'mauritania', 'mauritius', 'mayotte', 'mexico', 'moldova', 'monaco', 'mongolia', 'montenegro', 'montserrat', 'morocco', 'mozambique', 'namibia', 'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'north korea', 'norway', 'oman', 'pacific islands', 'pakistan', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'puerto rico', 'qatar', 'reunion', 'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'grenadines', 'samoa', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'south africa', 'south korea', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'tajikistan', 'tanzania', 'thailand', 'timor leste', 'togo', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'turks and caicos islands', 'uganda', 'ukraine', 'united arab emirates', 'united states of america', 'uruguay', 'uzbekistan', 'venezuela', 'vietnam', 'virgin islands', 'yemen', 'zambia', 'zimbabwe'];

var statesBank = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

var presidentsBank = ['george washington', 'john adams', 'thomas jefferson', 'james madison', 'james monroe', 'john quincy adams', 'andrew jackson', 'martin van buren', 'william harrison', 'john tyler', 'james polk', 'zachary taylor', 'millard fillmore', 'franklin pierce', 'james buchanan', 'abraham lincoln', 'andrew johnson', 'ulysses s grant', 'rutherford hayes', 'james garfield', 'chester arthur', 'grover cleveland', 'benjamin harrison', 'william mckinley', 'theodore roosevelt', 'william taft', 'woodrow wilson', 'warren harding', 'calvin coolidge', 'herbert hoover', 'franklin d roosevelt', 'harry s truman', 'dwight d eisenhower', 'john f kennedy', 'lyndon b johnson', 'richard nixon', 'gerald ford', 'james carter', 'ronald reagan', 'george h w bush', 'william clinton', 'george w bush', 'barack obama', 'donald trump'];

var animalBank = ['aardvark', 'anteater', 'antelope', 'armadillo', 'alligator', 'anaconda', 'angelfish', 'african wild dog', 'buffalo', 'bison', 'baboon', 'bald eagle', 'badger', 'black bear', 'brown bear', 'bearded dragon', 'bee', 'beaver', 'beetle', 'blue whale', 'boa constrictor', 'bull', 'bullfrog', 'buzzard', 'butterfly', 'camel', 'capybara', 'cardinal', 'caribou', 'caterpillar', 'catfish', 'centipede', 'chameleon', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'bonobo', 'chipmunk', 'cicada', 'clam', 'clownfish', 'king cobra', 'cockatoo', 'cockroach', 'copperhead', 'cougar', 'cow', 'coyote', 'crab', 'crane', 'cricket', 'crayfish', 'crocodile', 'crow', 'cuttlefish', 'deer', 'dingo', 'dog', 'cat', 'dolphin', 'donkey', 'dove', 'dragonfly', 'duck', 'elephant', 'egret', 'falcon', 'fennec fox', 'ferret', 'finch', 'flamingo', 'flea', 'flying fish', 'flying squirrel', 'garter snake', 'gazelle', 'gecko', 'gerbil', 'giant panda', 'red panda', 'giant tortoise', 'tortoise', 'box turtle', 'snapping turtle', 'gibbon', 'giraffe', 'goat', 'goose', 'gopher', 'gorilla', 'grasshopper', 'green iguana', 'grizzly bear', 'polar bear', 'groundhog', 'guinea pig', 'hamster', 'red hawk', 'hedgehog', 'hermit crab', 'heron', 'hippopotamus', 'hornet', 'horse', 'hummingbird', 'hyena', 'impala', 'jackal', 'jaguar', 'jellyfish', 'kangaroo', 'koala bear', 'kodiak bear', 'komodo dragon', 'kookaburra', 'ladybug', 'leech', 'lemming', 'lemur', 'leopard', 'lion', 'lionfish', 'llama', 'lobster', 'macaw', 'mallard', 'black mamba', 'manatee', 'manta ray', 'praying mantis', 'meadowlark', 'meerkat', 'millipede', 'minnow', 'mockingbird', 'mongoose', 'monitor lizard', 'monkey', 'moose', 'moray eel', 'mosquito', 'moth', 'mountain goat', 'mountain lion', 'mouse', 'muskox', 'muskrat', 'narwhal', 'ocelot', 'octopus', 'blue ring octopus', 'opossum', 'orangutan', 'killer whale', 'oriole', 'ostrich', 'otter', 'barn owl', 'oyster', 'vampire bat', 'panther', 'parakeet', 'parrot', 'peacock', 'bull shark', 'tiger shark', 'great white shark', 'whale shark', 'humpback whale', 'pelican', 'penguin', 'pheasant', 'boar', 'pigeon', 'piranha', 'platypus', 'poison dart frog', 'pony', 'porcupine', 'porpoise', 'prairie dog', 'puffer fish', 'python', 'quail', 'rabbit', 'raccoon', 'rattlesnake', 'raven', 'reindeer', 'rhinoceros', 'roadrunner', 'marlin', 'swordfish', 'nurse shark', 'robin', 'sailfish', 'salamander', 'salmon', 'sawfish', 'scorpion', 'sea anemone', 'sea cucumber', 'sea gull', 'sea lion', 'sea otter', 'sea horse', 'seal', 'sheep', 'shrimp', 'skunk', 'sloth', 'snail', 'snow leopard', 'sparrow', 'black widow', 'wolf spider', 'brown recluse', 'giant squid', 'squirrel', 'starfish', 'starling', 'stonefish', 'sturgeon', 'sun bear', 'swallow', 'tarantula', 'tasmanian devil', 'termite', 'tiger', 'toucan', 'turkey', 'turtle', 'urchin', 'vulture', 'wallaby', 'walrus', 'warthog', 'water buffalo', 'weasel', 'gray wolf', 'wolverine', 'wombat', 'woodchuck', 'woodpecker', 'earthworm', 'yellowjacket', 'zebra'];

var musicBank = ['california girls', 'katy perry', 'just the way you are', 'bruno mars', 'rolling in the deep', 'adele', 'someone like you', 'poker face', 'lady gaga', 'call me maybe', 'carly rae jepsen', 'starships', 'nicki minaj', 'gangnam style', 'radioactive', 'imagine dragons', 'ho hey', 'the lumineers', 'thrift shop', 'macklemore', 'drops of jupiter', 'train', 'party in the usa', 'wrecking ball', 'miley cyrus', 'blurred lines', 'robin thicke', 'best song ever', 'one direction', 'iggy azalea', 'shake it off', 'taylor swift', 'all about that bass', 'meghan trainor', 'baby got back', 'sir mixalot', 'selena gomez', 'despacito', 'justin bieber', 'boom boom pow', 'the black eyed peas', 'right round', 'jason mraz', 'umbrella', 'rihanna', 'kanye west', 'sexyback', 'justin timberlake', 'candy shop', 'feel good inc', 'gorillaz', 'britney spears', 'baby one more time', 'christina aguilera', 'genie in a bottle', 'backstreet boys', 'i want it that way', 'destinys child', 'say my name', 'spice girls', 'wannabe', 'vanilla ice', 'ice ice baby', 'snoop dogg', 'gin and juice', 'tupac shakur', 'naughty by nature', 'hip hop hooray', 'sugarhill gang', 'jump on it', 'kiss from a rose', 'gangstas paradise', 'slim shady', 'eminem', 'my name is', 'the real slim shady', 'country grammar', 'outkast', 'hey ya', 'garth brooks', 'friends in low places', 'george strait', 'all my exs live in texas', 'alan jackson', 'its five oclock somewhere', 'alabama', 'if youre gonna play in texas', 'hank williams jr', 'a country boy can survive', 'toby keith', 'beer for my horses', 'tim mcgraw', 'blake shelton', 'robert earl keen', 'the road goes on forever', 'cotton eye joe', 'the cha cha slide', 'cupid shuffle', 'village people', 'ymca', 'michael jackson', 'billie jean', 'thriller', 'rascal flatts', 'life is a highway', 'eastbound and down', 'merle haggard', 'the devil went down to georgia', 'dixie chicks', 'wide open spaces', 'madonna', 'like a virgin', 'the white stripes', 'sound of silence', 'mumford and sons', 'little lion man', 'blue october', 'all the small things', 'bowling for soup', 'i believe in a thing called love', 'old crow medicine show', 'wagon wheel', 'red hot chili peppers', 'californication', 'by the way', 'under the bridge', 'sublime', 'what i got', 'santeria', 'pearl jam', 'yellow ledbetter', 'collective soul', 'soundgarden', 'black hole sun', 'green day', 'basket case', 'when i come around', 'nirvana', 'smells like teen spirit', 'david bowie', 'the man who sold the world', 'stone temple pilots', 'interstate love song', 'alice in chains', 'radiohead', 'no doubt', 'dont speak', 'beastie boys', 'brass monkey', 'third eye blind', 'semi charmed life', 'alanis morissette', 'you oughta know', 'the offspring', 'self esteem', 'come out and play', 'counting crows', 'weezer', 'say it aint so', 'beverly hills', 'oasis', 'wonderwall', 'goo goo dolls', 'metallica', 'enter sandman', 'master of puppets', 'queen', 'bohemian rhapsody', 'under pressure', 'journey', 'dont stop believing', 'back in black', 'thunderstruck', 'duran duran', 'hungry like the wolf', 'motley crue', 'bon jovi', 'you give love a bad name', 'with or without you', 'phil collins', 'guns n roses', 'sweet child o mine', 'paradise city', 'every rose has its thorns', 'def leppard', 'pour some sugar on me', 'twisted sister', 'cheap trick', 'i want you to want me', 'tears for fears', 'van halen', 'runnin with the devil', 'lynyrd skynyrd', 'tuesdays gone', 'sweet home alabama', 'eagles', 'hotel california', 'steve miller band', 'dave matthews band', 'the joker', 'creedence clearwater revival', 'have you ever seen the rain', 'bad moon rising', 'elton john', 'tiny dancer', 'rocket man', 'carry on my wayward son', 'space oddity', 'jimmy buffett', 'margaritaville', 'kenny rogers', 'the gambler', 'house of the rising sun', 'black sabbath', 'crazy train', 'detroit rock city', 'the beatles', 'come together', 'yellow submarine', 'the rolling stones', 'paint it black', 'satisfaction', 'led zeppelin', 'stairway to heaven', 'the who', 'pinball wizard', 'brown eyed girl', 'johnny cash', 'ring of fire', 'i walk the line', 'nsync', 'bye bye bye', 'aerosmith', 'smashing pumpkins', 'bullet with butterfly wings', 'cage the elephant', 'aint no rest for the wicked', 'barracuda', 'my chemical romance', 'black parade', 'coldplay', 'jason mraz', 'billy joel'];

var comicsBank = ['batman', 'superman', 'spider man', 'spawn', 'deadpool', 'green lantern', 'scott pilgrim', 'daredevil', 'hellboy', 'doctor strange', 'venom', 'lex luthor', 'emma frost', 'swamp thing', 'the tick', 'doctor doom', 'mr fantastic', 'the thing', 'the human torch', 'captain america', 'steve rogers', 'wonder woman', 'the punisher', 'iron man', 'tony stark', 'rorschach', 'the watchmen', 'the hulk', 'the avengers', 'the justice league', 'the x men', 'magneto', 'the joker', 'judge dredd', 'peter parker', 'wolverine', 'professor xavier', 'weapon x', 'john constantine', 'bruce wayne', 'clark kent', 'kal el', 'bruce banner', 'thor', 'robin', 'jean grey', 'storm', 'green arrow', 'oliver queen', 'flash', 'aquaman', 'martian manhunter', 'catwoman', 'hal jordan', 'silver surfer', 'black panther', 'black widow', 'cyclops', 'hawkeye', 'clint barton', 'beast', 'iron fist', 'carol danvers', 'captain marvel', 'ms marvel', 'gambit', 'hawkman', 'barbara gordon', 'howard the duck', 'black canary', 'mystique', 'scarlet witch', 'apocalypse', 'thanos', 'ultron', 'loki', 'elektra', 'poison ivy', 'mr freeze', 'harley quinn', 'domino', 'red skull', 'the mandarin', 'supergirl', 'invisible woman', 'mary jane watson', 'silver sable', 'gwen stacy', 'spider woman', 'cyborg', 'darkseid', 'galactus', 'bane', 'the kingpin', 'deathstroke', 'bullseye', 'doomsday', 'doctor octopus', 'general zod', 'the juggernaut', 'two face', 'carnage', 'deadshot', 'scarecrow', 'ras al ghul', 'weapon x', 'x force', 'hail hydra', 'dormammu', 'fin fang foom', 'shredder', 'leonardo', 'michelangelo', 'raphael', 'donatello', 'master splinter', 'teenage mutant ninja turtles', 'the lizard', 'nick fury', 'captain cold', 'green lantern corps', 'the daily bugle', 'metropolis', 'gotham city', 'star city', 'luke cage', 'suicide squad', 'the sinister six', 'guardians of the galaxy', 'starlord', 'groot', 'rocket raccoon', 'gamora', 'drax the destroyer', 'the winter soldier', 'commissioner gordon', 'alfred', 'lois lane'];

var randomBank = [movieBank, sportsBank, countriesBank, statesBank, presidentsBank, animalBank, musicBank, comicsBank];
var randomCat = ['Movies', 'Sports', 'Countries', 'States', 'US Presidents', 'Animals', 'Music', 'Comic Books'];
