//Functions:
// storyWordCountStatement fx =======================================(Q3)
let storyWordCountStatement = () => console.log(
  `There are ${storyWordCount.length} words in this story.`);
  //storyWordCountStatement fx =======================================

//totalCount fx ====================================================(Q4)
let repeatWordCountStatement = () => {
	console.log(`really count = ${reallyCount}
very count = ${veryCount}
basically count = ${basicallyCount}`);
};
//totalCount fx =====================================================

//totalCount fx ===================================================(Q5)
let sentenceCountStatement = () => {
  console.log(`There are ${sentenceCount} in this story.`);
}

//totalCount fx =====================================================

let story =
	'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];


console.log("=======================================");
console.log("============= Question 3 ================");

//Refactored code to use .include() instead of OR (||) and
// let betterWords = storyWords.filter(word => word != 'extremely' && word != 'actually' && word != 'literally')

let betterWords = storyWords.filter(word=> !unnecessaryWords.includes(word));


console.log (`There are ${betterWords.length} words in this story.`);

console.log (betterWords);

let storyWordCount = story.split(" ");

  console.log(`There are ${storyWordCount.length} words in this story.`);

storyWords = story.split(" ");
console.log(storyWords);

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

console.log("=======================================");
console.log("============= Question 4 ================");

let reallyCount = 0;
let basicallyCount = 0;
let veryCount = 0;


for (word of storyWords) {
  if (word === 'really'){
    reallyCount+= 1;
  }
  else if (word === 'very'){
    veryCount+= 1;
  }
   else if (word === 'basically'){
    basicallyCount += 1;
  }
}

console.log(`really count = ${reallyCount}
very count = ${veryCount}
basicallyCount = ${basicallyCount}`)



console.log("=======================================");
console.log("============= Question 5 ================");


let sentenceCount = 0;

for (word of story) {
  if (word[word.length -1] === '.' || word[word.length -1] === '!') {
    sentenceCount++;
  }
}
console.log(sentenceCount);


console.log("=======================================");
console.log("=== Question 6 with variable ==========");


console.log(storyWords.length);
console.log(sentenceCount);
console.log(`really count = ${reallyCount}`);
console.log(`really count = ${veryCount}`);
console.log(`really count = ${basicallyCount}`);


console.log("=================================================");
console.log("====== Question 6 with function call ============");
console.log(storyWordCountStatement());
console.log(repeatWordCountStatement());
console.log(sentenceCountStatement());

console.log("=======================================");
console.log("============= Question 7 ==============");

console.log(typeof (betterWords))

let betterWordsString = betterWords.join(' ');
console.log(typeof betterWords);
console.log(betterWordsString
)

console.log("=======================================");
console.log("============= Question 8 ==============");