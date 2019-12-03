// add solution here
function theBeatlesPlay(musicians,instruments){
  var result=[];
  for(let i=0;i<musicians.length;i++){
    result.push(musicians[i] +" plays "+ instruments[i]);
  };
  return result;
}


function johnLennonFacts(facts){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

let final=[];
let i=0;

while(i<facts.length){
  final.push(facts[i]+ "!!!")
}

  return final;
  
}