var v = require('voca');

// Answers a given query
function answerQuery(query) {
  var query_lower = v.lowerCase(query);
  if (v.includes(query_lower, "rain") || v.includes(query_lower, "sun"))
    { return "I do not care too much about weather"; }
  if (!v.includes(query_lower, "football"))
      { return "Sorry Dave, I cannot do that." }
  return "Football is the ballet of the masses."
}

// Handles a say click
function HandleSayClick()
{
  var el = document.getElementById('message');
  var ml = el.value.toLowerCase();
  var cv = document.getElementById('conversation');
  var an = answerQuery(ml)
           conversation.innerHTML += "<p>" + ml + "</p>";
           conversation.innerHTML += "<p>" + an + "</p>";
}

// If we are running in a browser, add onclick handler 
// (if we are running tests, this will not do anything)
if (typeof document != "undefined") {
  document.getElementById("sayit").onclick = HandleSayClick;
}

// Export the two functions that we need to access from test files!
module.exports = { 
  answerQuery: answerQuery, 
  isPermitted: isPermitted
}