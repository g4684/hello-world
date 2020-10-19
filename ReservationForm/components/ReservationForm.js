class ReservationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            destination: "",
            cityTours: false,
            sports: false,
            cycling: false,
            museums: false,
            boating: false,
            sailing: false,
            beach: false,
            hiking: false,
            theatre: false,
            parksRec: false,
            snorkeling: false,
            firstname: "",
            lastname: "",
            userEmail: "",
            userPhone: "",
            adults: "",
            children: "",
            travelDate: "",
            returnDate: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFormFields = this.resetFormFields.bind(this);          
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert('Your form was submitted! \r\n' 
            + "Name = " + this.state.firstname + ' ' + this.state.lastname + '\r\n' 
            + "Email = " + this.state.userEmail + '\r\n'
            + "Phone = " + this.state.userPhone + '\r\n' 
            + "Adults = " + this.state.adults + '\r\n' 
            + "Children = " + this.state.children + '\r\n' 
            + "Travel Date = " + this.state.travelDate + '\r\n'
            + "Return Date = " + this.state.returnDate + '\r\n'
            + "Destination = " + this.state.destination + '\r\n'
            + "City Tours = " + this.state.cityTours + '\r\n'
            + "Sports = " + this.state.sports + '\r\n'
            + "Cycling = " + this.state.cycling + '\r\n'
            + "Museums = " + this.state.museums + '\r\n'
            + "Boating = " + this.state.boating + '\r\n'
            + "Sailing = " + this.state.sailing + '\r\n'
            + "Beach = " + this.state.beach + '\r\n'
            + "Hiking = " + this.state.hiking + '\r\n'
            + "Theatre = " + this.state.theatre + '\r\n'
            + "Parks & Recreation = " + this.state.parksRec + '\r\n'
            + "Snorkeling = " + this.state.snorkeling

             );
        event.preventDefault();
      }

    resetFormFields() {
        this.setState({
            destination: "",
            cityTours: false,
            sports: false,
            cycling: false,
            museums: false,
            boating: false,
            sailing: false,
            beach: false,
            hiking: false,
            theatre: false,
            parksRec: false,
            snorkeling: false,
            firstname: "",
            lastname: "",
            userEmail: "",
            userPhone: "",
            adults: "",
            children: "",
            travelDate: "",
            returnDate: ""
        });
    }

    activityList() {
        switch (this.state.destination) {

            case 'Maldives':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "sailing",
                            onChange: this.handleChange,
                            checked: this.state.sailing
                        }), " Sailing",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "beach",
                            onChange: this.handleChange,
                            checked: this.state.beach
                        }), " Beach",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "hiking",
                            onChange: this.handleChange,
                            checked: this.state.hiking
                        }), " Hiking",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating"));

                break;

            case 'New Zealand':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "cityTours",
                            onChange: this.handleChange,
                            checked: this.state.cityTours
                        }), " City Tours",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "sports",
                            onChange: this.handleChange,
                            checked: this.state.sports
                        }), " Sports",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "cycling",
                            onChange: this.handleChange,
                            checked: this.state.cycling
                        }), " Cycling",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating"));


                break;

            case 'Venice':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "theatre",
                            onChange: this.handleChange,
                            checked: this.state.theatre
                        }), " Theatre",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "parksRec",
                            onChange: this.handleChange,
                            checked: this.state.parksRec
                        }), " Parks and Recreation",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "cityTours",
                            onChange: this.handleChange,
                            checked: this.state.cityTours
                        }), " City Tours"));


                break;

            case 'Cancun':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "parksRec",
                            onChange: this.handleChange,
                            checked: this.state.parksRec
                        }), " Parks and Recreation",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "beach",
                            onChange: this.handleChange,
                            checked: this.state.beach
                        }), " Beaches",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "snorkeling",
                            onChange: this.handleChange,
                            checked: this.state.snorkeling
                        }), " Snorkeling"));

                break;

            default:
                // return React.createElement("p", null, "Choose a destination.");
                return React.createElement("p", null, "");
        }
    }

    render() {
        return (
            // React.createElement("main", null,
            React.createElement("form", {
                id: 'ContactForm',
                // method: 'post', 
                // action:'',
                onSubmit: this.handleSubmit,
                onReset: this.resetFormFields
                },
                // First Name input
                React.createElement("label", null,
                    React.createElement("p", null, "First Name",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "text",
                        name: "firstname",
                        value: this.state.firstname,
                        onChange: this.handleChange,
                        required: true
                    },)),
                React.createElement("br", null),
                React.createElement("br", null),

                // Last Name input
                React.createElement("label", null,
                    React.createElement("p", null, "Last Name",
                     React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "text",
                        name: "lastname",
                        value: this.state.lastname,
                        onChange: this.handleChange,
                        required: true
                },)),                
                React.createElement("br", null),
                React.createElement("br", null),

                // Email input
                React.createElement("label", null,
                    React.createElement("p", null, "Email",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "email",
                        name: "userEmail",
                        value: this.state.userEmail,
                        onChange: this.handleChange,
                        required: true
                 },)),                            
                React.createElement("br", null),
                React.createElement("br", null),

                // Phone Number input
                React.createElement("label", null,
                    React.createElement("p", null, "Phone Number",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "tel",
                        name: "userPhone",
                        placeholder: "123-456-7890",
                        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        value: this.state.userPhone,
                        onChange: this.handleChange,
                        required: true
                 },)),                            
                React.createElement("br", null),
                React.createElement("br", null),

                // How many children and adults traveling
                // Adults
                // React.createElement("p", null, "Number of Adults & Children Traveling:"),
                React.createElement("label", null,
                    React.createElement("p", null, "Number of Adults & Children Traveling:"),               
                    React.createElement("p", null, "# Adults",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "number",
                        name: "adults",
                        value: this.state.adults,
                        onChange: this.handleChange,
                        required: true
                 },)),
                React.createElement("br", null),                  
                // Children
                React.createElement("label", null,
                    React.createElement("p", null, "# Children",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "number",                      
                        name: "children",
                        value: this.state.children,
                        onChange: this.handleChange,
                        required: true
                 },)),                                            
                React.createElement("br", null),
                React.createElement("br", null),

                // Travel Date input
                React.createElement("label", null,
                    React.createElement("p", null, "Departure Date",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "date",
                        name: "travelDate",
                        value: this.state.travelDate,
                        onChange: this.handleChange,
                        required: true
                 },)),                            
                React.createElement("br", null),
                React.createElement("br", null),

                // Return Date input
                React.createElement("label", null,
                    React.createElement("p", null, "Return Date",
                        React.createElement("span", {id: "required"}, "*")),
                    React.createElement("input", {
                        type: "date",
                        name: "returnDate",
                        value: this.state.returnDate,
                        onChange: this.handleChange,
                        required: true
                 },)),                            
                React.createElement("br", null),
                React.createElement("br", null),                

                // Dropdown Menu to Select destination
                React.createElement("label", null,
                    React.createElement("p", null, "Select your Destination and Activities:",
                        React.createElement("span", {id: "required"}, "*")),               
                    React.createElement("select", {
                        value: this.state.destination,
                        name: "destination",
                        onChange: this.handleChange,
                        required: true
                    },

                        React.createElement("option", { value: "" }, "-- Select a destination --"),
                        React.createElement("option", { value: "Maldives" }, "Maldives, South Asia"),
                        React.createElement("option", { value: "New Zealand" }, "New Zealand"),
                        React.createElement("option", { value: "Venice" }, "Venice, Italy"),
                        React.createElement("option", { value: "Cancun" }, "Cancun, Mexico")),

                React.createElement("br", null),

                //Create checkboxes based on destination choice
                this.activityList(),

                React.createElement("br", null),
                React.createElement("br", null),

                React.createElement("input", {
                     type: "submit",
                     value: "Submit Form"
                    }
                ),
                React.createElement("span", null, "    "),
                React.createElement("input", {
                    type: "reset",
                    value: "Clear Form"
                   }
               ),
            )
        ));
    }
}

ReactDOM.render(
    // React.createElement("form", {id: 'ContactForm', method: 'post', action:''},
    React.createElement("div", {},
        React.createElement('h3', null, "Please complete our Contact Form below!"),
        React.createElement("p", {id: "required"}, "* Required"),
        React.createElement("br", null),
        React.createElement(ReservationForm, null),
        React.createElement("br", null),
    ),
    document.getElementById('reservation')
);