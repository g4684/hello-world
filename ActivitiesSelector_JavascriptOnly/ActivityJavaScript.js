function guide(destination, activity) {
    var dropdown = document.getElementById(destination);
    var checkbxlist = document.getElementById(activity);
    checkbxlist.innerHTML = "";
    if (dropdown.value == "NewZealand") {
        var optionArray = ["City Tours", "Sports", "Cycling", "Museums", "Boating"];
    } else if (dropdown.value == "Maldives") {
        var optionArray = ["Museums", "Sailing", "Beach", "Hiking", "Boating"];
    } else if (dropdown.value == "Venice") {
        var optionArray = ["Museums", "Theatre", "Parks and Recreation", "City Tours"];
    } else if (dropdown.value == "Cancun") {
        var optionArray = ["Parks and Recreation", "Beaches", "Boating", "Snorkeling"];
    }

    for (var option in optionArray) {
        if (optionArray.hasOwnProperty(option)) {
            var pair = optionArray[option];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = pair;
            checkbox.value = pair;
            checkbxlist.appendChild(checkbox);

            var label = document.createElement('label')
            label.htmlFor = pair;
            label.appendChild(document.createTextNode(pair));

            checkbxlist.appendChild(label);
            checkbxlist.appendChild(document.createElement("br"));    
        }
    }
}