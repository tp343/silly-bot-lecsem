var v = require('voca');

// Answers queries about (i) rain, sun or (ii) football
function answerQuery(query) {
  var query_lower = v.lowerCase(query);
  if (v.includes(query_lower, "rain") && v.includes(query_lower, "sun")) { 
    return "I do not care too much about weather, I'm locked inside a data center."; 
  }
  if (v.includes(query_lower, "tea")) { 
    return "I would love some tea, but they have not created one for silicon-based life forms yet."; 
  }
  if (!v.includes(query_lower, "football")) { 
    return "Sorry Dave, I cannot do that.";
  }
  return "Football is the ballet of the masses.";
}

// Responds to a message in the 'message' element by 
// appending bot's response to the 'conversation' element
function handleSayClick() {
  var messageElement = document.getElementById('message');
  var message = messageElement.value.toLowerCase();
  var conversationElement = document.getElementById('conversation');
  var answer = answerQuery(message);
  conversationElement.innerHTML += "<p><em>" + message + "</em></p>";
  conversationElement.innerHTML += "<p>" + answer + "</p>";
}

// If we are running in a browser, add onclick handler 
// (if we are running tests, this will not do anything)
if (typeof document != "undefined") {
  document.getElementById("sayit").onclick = handleSayClick;
}

// Export the two functions that we need to access from test files!
module.exports = { 
  answerQuery: answerQuery, 
}
