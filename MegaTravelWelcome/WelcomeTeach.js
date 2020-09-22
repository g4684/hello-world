function Greeting() {

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ft = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
     });

    if (hours <= 11 && minutes <= 59) {
        var type = "Good Morning";
    }
    else if (hours >= 12 && hours <= 17) {
        if (hours == 17 && minutes >= 1) {
            var type = "Good Evening";
        }
        else {
           var type = "Good Afternoon";
        }        
    }
    else if (hours > 17 && hours <= 23) {
        var type = "Good Evening";
    }
  
        // This is for the image
    if (hours >= 6 && hours <= 18)  {
        if (hours == 18 && minutes >= 1) {
            var imgtext = "moon_30x30.png";
        }
        else {
            var imgtext = "sun_30x30.png";
         }  
    }
    else if (hours > 18 || hours <=5) {
          var imgtext = "moon_30x30.png";
    }
    
    return (
 
        // React.createElement("h3", {id: "Welcome"}, type, "! The time is: ", React.createElement("p", {id: "WelcomeTime"}), ft, "  ", React.createElement("img", {src: imgtext })));
        React.createElement("h3", {id: "Welcome"}, type, "!  ", React.createElement("p", {id: "WelcomeTime"}), ft, "  ", React.createElement("img", {src: imgtext })));
}


function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(Greeting, null)), 
    document.getElementById("WelcomeBar"));
}
setInterval(Tick, 1000); 
