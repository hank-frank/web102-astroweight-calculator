// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

var reverseIt = planets.reverse();  
//To reverse the order just run arrayInReverse.forEach() instead of planets.forEach, the var arrayInReverse stores the array in reverse order. 
planets.forEach(function(element) { 
        var newElement = document.getElementById("planets");
        var option = document.createElement("OPTION");
        var text = document.createTextNode(element[0]);
        option.appendChild(text);
       newElement.insertBefore(option,newElement.lastChild);
// console.log(option); 
    });

    function calculateWeight(weight, planetName) {
        var userWeight = document.getElementById("user-weight").value;
        var planetName = document.getElementById("planets").selectedIndex -1;
        var gravity = planets[planetName][1];
        return userWeight * gravity;
    };

  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.   
        // Vanilla JS: 
        var userWeight = document.getElementById("user-weight").value; 
        //JQuery: 
        //  var userWeight = $("#user-weight").val(); 
// console.log(userWeight);

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
        //Vanilla JS:
    var planetName = document.getElementById("planets").value;
        //JQuery:
        // var planetName = $("#planets").val();
// console.log(planetName);
 


// 5. Create a variable called result and assign the value of the new calculated weight.
    var result =  calculateWeight(userWeight, planetName);   
// console.log(result);
  
  // 6. Write code to display the message shown in the screenshot.
  document.getElementById('output').innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!"; 
}
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  //DONE in HTML


  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first. DONE
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)