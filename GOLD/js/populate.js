if (localStorage.length === 0){
	var pop = confirm("There's nothing here! Would you like to make some test posts?")
	if (pop == true){
		var firstpost = {};
	firstpost.title = "The Walrus and The Carpenter";
	firstpost.type = "Idea";
	firstpost.category = "Art";
	firstpost.date = "03-02-2013";
	firstpost.signi = "1";
	firstpost.content = "The sun was shining on the sea,<br>\nShining with all his might:<br>\nHe did his very best to make<br>\nThe billows smooth and bright--<br>\nAnd this was odd, because it was<br>\nThe middle of the night.<br>\n<br>\nThe moon was shining sulkily,<br>\nBecause she thought the sun<br>\nHad got no business to be there<br>\nAfter the day was done--<br>\n\"It's very rude of him,\" she said,<br>\n\"To come and spoil the fun!\"<br>";
	firstpost.favorite = false;
	firstpost.id = 1;
	localStorage.setItem(firstpost.id , JSON.stringify(firstpost));
	
	var secondpost = {};
	secondpost.title = "The Walrus and The Carpenter, part 2";
	secondpost.type = "Dream";
	secondpost.category = "Books";
	secondpost.date = "03-02-2013";
	secondpost.signi = "2";
	secondpost.content = "The sea was wet as wet could be,<br>\nThe sands were dry as dry.<br>\nYou could not see a cloud, because<br>\nNo cloud was in the sky:<br>\nNo birds were flying overhead--<br>\nThere were no birds to fly.<br>\n\n<p>\n\nThe Walrus and the Carpenter<br>\nWere walking close at hand;<br>\nThey wept like anything to see<br>\nSuch quantities of sand:<br>\n\"If this were only cleared away,\"<br>\nThey said, \"it would be grand!\"<br>\n";
	secondpost.favorite = true;
	secondpost.id = 2;
	localStorage.setItem(secondpost.id , JSON.stringify(secondpost));
	
	var third = {};
	third.title = "Part 3";
	third.type = "Life";
	third.category = "Entertainment";
	third.date = "03-02-2013";
	third.signi = "3";
	third.content = "\"If seven maids with seven mops<br>\nSwept it for half a year.<br>\nDo you suppose,\" the Walrus said,<br>\n\"That they could get it clear?\"<br>\n\"I doubt it,\" said the Carpenter,<br>\nAnd shed a bitter tear.<br>\n\n<p>\n\n\"O Oysters, come and walk with us!\"<br>\nThe Walrus did beseech.<br>\n\"A pleasant walk, a pleasant talk,<br>\nAlong the briny beach:<br>\nWe cannot do with more than four,<br>\nTo give a hand to each.\"<br>\n\n";
	third.favorite = true;
	third.id = 3;
	localStorage.setItem(third.id , JSON.stringify(third));
	
	var four = {};
	four.title = "Part 4";
	four.type = "Poetry";
	four.category = "Gaming";
	four.date = "03-02-2013";
	four.signi = "4";
	four.content = "The eldest Oyster looked at him,<br>\nBut never a word he said:<br>\nThe eldest Oyster winked his eye,<br>\nAnd shook his heavy head--<br>\nMeaning to say he did not choose<br>\nTo leave the oyster-bed.<br>\n\n<p>\n\nBut four young Oysters hurried up,<br>\nAll eager for the treat:<br>\nTheir coats were brushed, their faces washed,<br>\nTheir shoes were clean and neat--<br>\nAnd this was odd, because, you know,<br>\nThey hadn't any feet.<br>\n\nFour other Oysters followed them,<br>\nAnd yet another four;<br>\nAnd thick and fast they came at last,<br>\nAnd more, and more, and more--<br>\nAll hopping through the frothy waves,<br>\nAnd scrambling to the shore.";
	four.favorite = true;
	four.id = 4;
	localStorage.setItem(four.id , JSON.stringify(four));
	
	var five = {};
	five.title = "The last bit.";
	five.type = "Lyrics";
	five.category = "Music";
	five.date = "03-02-2013";
	five.signi = "5";
	five.content = "The Walrus and the Carpenter<br>\nWalked on a mile or so,<br>\nAnd then they rested on a rock<br>\nConveniently low:<br>\nAnd all the little Oysters stood<br>\nAnd waited in a row.<br>\n\n<p>\n\n\"The time has come,\" the Walrus said,<br>\n\"To talk of many things:<br>\nOf shoes--and ships--and sealing-wax--<br>\nOf cabbages--and kings--<br>\nAnd why the sea is boiling hot--<br>\nAnd whether pigs have wings.\"<br>\n\n";
	five.favorite = true;
	five.id = 5;
	localStorage.setItem(five.id , JSON.stringify(five));
	
	var six = {};
	six.title = "Lewis Carrol";
	six.type = "Idea";
	six.category = "Technology";
	six.date = "03-02-2013";
	six.signi = "6";
	six.content = "\“Begin at the beginning,\" the King said, very gravely, \"and go on till you come to the end: then stop.\” ";
	six.favorite = true;
	six.id = 6;
	localStorage.setItem(six.id , JSON.stringify(six));
	
	var seven = {};
	seven.title = "Hello, again!";
	seven.type = "Dream";
	seven.category = "Politics";
	seven.date = "03-02-2013";
	seven.signi = "7";
	seven.content = "Sometimes I've believed as many as six impossible things before breakfast. - Lewis Carrol";
	seven.favorite = true;
	seven.id = 7;
	localStorage.setItem(seven.id , JSON.stringify(seven));
	
	var eight = {};
	eight.title = "Who's to say?";
	eight.type = "Life";
	eight.category = "Science";
	eight.date = "03-02-2013";
	eight.signi = "8";
	eight.content = "The boundaries which divide Life from Death are at best shadowy and vague. Who shall say where the one ends, and where the other begins? - Edgar Allen Poe";
	eight.favorite = true;
	eight.id = 8;
	localStorage.setItem(eight.id , JSON.stringify(eight));
	
	var nine = {};
	nine.title = "Edgar Allen Poe";
	nine.type = "Poetry";
	nine.category = "Religion";
	nine.date = "03-02-2013";
	nine.signi = "9";
	nine.content = "I have no faith in human perfectability. I think that human exertion will have no appreciable effect upon humanity. Man is now only more active - not more happy - nor more wise, than he was 6000 years ago.";
	nine.favorite = true;
	nine.id = 9;
	localStorage.setItem(nine.id , JSON.stringify(nine));
	
	var ten = {};
	ten.title = "Poe";
	ten.type = "Lyrics";
	ten.category = "Entertainment";
	ten.date = "03-02-2013";
	ten.signi = "10";
	ten.content = "Were I called on to define, very briefly, the term Art, I should call it 'the reproduction of what the Senses perceive in Nature through the veil of the soul.' The mere imitation, however accurate, of what is in Nature, entitles no man to the sacred name of 'Artist.'";
	ten.favorite = true;
	ten.id = 10;
	localStorage.setItem(ten.id , JSON.stringify(ten));
	
		var eleven = {};
	eleven.title = "The Walrus and The Carpenter";
	eleven.type = "Idea";
	eleven.category = "Art";
	eleven.date = "03-02-2013";
	eleven.signi = "1";
	eleven.content = "The sun was shining on the sea,<br>\nShining with all his might:<br>\nHe did his very best to make<br>\nThe billows smooth and bright--<br>\nAnd this was odd, because it was<br>\nThe middle of the night.<br>\n<br>\nThe moon was shining sulkily,<br>\nBecause she thought the sun<br>\nHad got no business to be there<br>\nAfter the day was done--<br>\n\"It's very rude of him,\" she said,<br>\n\"To come and spoil the fun!\"<br>";
	eleven.favorite = false;
	eleven.id = 1;
	localStorage.setItem(eleven.id , JSON.stringify(eleven));
	
	var twelve = {};
	twelve.title = "The Walrus and The Carpenter, part 2";
	twelve.type = "Dream";
	twelve.category = "Books";
	twelve.date = "03-02-2013";
	twelve.signi = "2";
	twelve.content = "The sea was wet as wet could be,<br>\nThe sands were dry as dry.<br>\nYou could not see a cloud, because<br>\nNo cloud was in the sky:<br>\nNo birds were flying overhead--<br>\nThere were no birds to fly.<br>\n\n<p>\n\nThe Walrus and the Carpenter<br>\nWere walking close at hand;<br>\nThey wept like anything to see<br>\nSuch quantities of sand:<br>\n\"If this were only cleared away,\"<br>\nThey said, \"it would be grand!\"<br>\n";
	twelve.favorite = true;
	twelve.id = 2;
	localStorage.setItem(twelve.id , JSON.stringify(twelve));
	
	var thirteen = {};
	thirteen.title = "Part 3";
	thirteen.type = "Life";
	thirteen.category = "Entertainment";
	thirteen.date = "03-02-2013";
	thirteen.signi = "3";
	thirteen.content = "\"If seven maids with seven mops<br>\nSwept it for half a year.<br>\nDo you suppose,\" the Walrus said,<br>\n\"That they could get it clear?\"<br>\n\"I doubt it,\" said the Carpenter,<br>\nAnd shed a bitter tear.<br>\n\n<p>\n\n\"O Oysters, come and walk with us!\"<br>\nThe Walrus did beseech.<br>\n\"A pleasant walk, a pleasant talk,<br>\nAlong the briny beach:<br>\nWe cannot do with more than four,<br>\nTo give a hand to each.\"<br>\n\n";
	thirteen.favorite = true;
	thirteen.id = 3;
	localStorage.setItem(thirteen.id , JSON.stringify(thirteen));
	
	var fourteen = {};
	fourteen.title = "Part 4";
	fourteen.type = "Poetry";
	fourteen.category = "Gaming";
	fourteen.date = "03-02-2013";
	fourteen.signi = "4";
	fourteen.content = "The eldest Oyster looked at him,<br>\nBut never a word he said:<br>\nThe eldest Oyster winked his eye,<br>\nAnd shook his heavy head--<br>\nMeaning to say he did not choose<br>\nTo leave the oyster-bed.<br>\n\n<p>\n\nBut four young Oysters hurried up,<br>\nAll eager for the treat:<br>\nTheir coats were brushed, their faces washed,<br>\nTheir shoes were clean and neat--<br>\nAnd this was odd, because, you know,<br>\nThey hadn't any feet.<br>\n\nFour other Oysters followed them,<br>\nAnd yet another four;<br>\nAnd thick and fast they came at last,<br>\nAnd more, and more, and more--<br>\nAll hopping through the frothy waves,<br>\nAnd scrambling to the shore.";
	fourteen.favorite = true;
	fourteen.id = 4;
	localStorage.setItem(fourteen.id , JSON.stringify(fourteen));
	
	var fifteen = {};
	fifteen.title = "The last bit.";
	fifteen.type = "Lyrics";
	fifteen.category = "Music";
	fifteen.date = "03-02-2013";
	fifteen.signi = "5";
	fifteen.content = "The Walrus and the Carpenter<br>\nWalked on a mile or so,<br>\nAnd then they rested on a rock<br>\nConveniently low:<br>\nAnd all the little Oysters stood<br>\nAnd waited in a row.<br>\n\n<p>\n\n\"The time has come,\" the Walrus said,<br>\n\"To talk of many things:<br>\nOf shoes--and ships--and sealing-wax--<br>\nOf cabbages--and kings--<br>\nAnd why the sea is boiling hot--<br>\nAnd whether pigs have wings.\"<br>\n\n";
	fifteen.favorite = true;
	fifteen.id = 5;
	localStorage.setItem(fifteen.id , JSON.stringify(fifteen));
	
	var sixteen = {};
	sixteen.title = "Lewis Carrol";
	sixteen.type = "Idea";
	sixteen.category = "Technology";
	sixteen.date = "03-02-2013";
	sixteen.signi = "6";
	sixteen.content = "\“Begin at the beginning,\" the King said, very gravely, \"and go on till you come to the end: then stop.\” ";
	sixteen.favorite = true;
	sixteen.id = 6;
	localStorage.setItem(sixteen.id , JSON.stringify(sixteen));
	
	var seventeen = {};
	seventeen.title = "Hello, again!";
	seventeen.type = "Dream";
	seventeen.category = "Politics";
	seventeen.date = "03-02-2013";
	seventeen.signi = "7";
	seventeen.content = "Sometimes I've believed as many as six impossible things before breakfast. - Lewis Carrol";
	seventeen.favorite = true;
	seventeen.id = 7;
	localStorage.setItem(seventeen.id , JSON.stringify(seventeen));
	
	var eighteen = {};
	eighteen.title = "Who's to say?";
	eighteen.type = "Life";
	eighteen.category = "Science";
	eighteen.date = "03-02-2013";
	eighteen.signi = "8";
	eighteen.content = "The boundaries which divide Life from Death are at best shadowy and vague. Who shall say where the one ends, and where the other begins? - Edgar Allen Poe";
	eighteen.favorite = true;
	eighteen.id = 8;
	localStorage.setItem(eighteen.id , JSON.stringify(eighteen));
	
	var nineteen = {};
	nineteen.title = "Edgar Allen Poe";
	nineteen.type = "Poetry";
	nineteen.category = "Religion";
	nineteen.date = "03-02-2013";
	nineteen.signi = "9";
	nineteen.content = "I have no faith in human perfectability. I think that human exertion will have no appreciable effect upon humanity. Man is now only more active - not more happy - nor more wise, than he was 6000 years ago.";
	nineteen.favorite = true;
	nineteen.id = 9;
	localStorage.setItem(nineteen.id , JSON.stringify(nineteen));
	
	var twenty = {};
	twenty.title = "Poe";
	twenty.type = "Lyrics";
	twenty.category = "Entertainment";
	twenty.date = "03-02-2013";
	twenty.signi = "10";
	twenty.contwentyt = "Were I called on to define, very briefly, the term Art, I should call it 'the reproduction of what the Senses perceive in Nature through the veil of the soul.' The mere imitation, however accurate, of what is in Nature, entitles no man to the sacred name of 'Artist.'";
	twenty.favorite = true;
	twenty.id = 10;
	localStorage.setItem(twenty.id , JSON.stringify(twenty));
	
	}
}

