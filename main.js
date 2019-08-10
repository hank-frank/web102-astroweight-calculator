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
//To reverse the order just run reverseIt.forEach() instead of planets.forEach, the var arrayInReverse stores the array in reverse order.

planets.forEach(function(element) { 
    var newElement = document.getElementById("planets");
    var option = document.createElement("OPTION");
    var text = document.createTextNode(element[0]);
    option.appendChild(text);
    newElement.insertBefore(option,newElement.lastChild);
    });

  function calculateWeight(weight, planetName) {
      var userWeight = document.getElementById("user-weight").value;
      var planetName = document.getElementById("planets").selectedIndex -1;
      var gravity = planets[planetName][1];
      return (userWeight * gravity).toFixed(2);
    };

  function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value; 
      //JQuery: 
      //  var userWeight = $("#user-weight").val(); 
    var planetName = document.getElementById("planets").value;
      //JQuery:
      // var planetName = $("#planets").val();
      // console.log(planetName);
    var result =  calculateWeight(userWeight, planetName);   
    document.getElementById('output').innerHTML = "If you were on <span style='color: rgb(231, 64, 64);'>" + planetName + "</span>, you would weigh <span style='color: rgb(231, 64, 64);'>" + result + "lbs</span>!"; 
};
