var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 

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
        };   // end of this.state

        this.handleChange = this.handleChange.bind(this);
        this.resetFormFields = this.resetFormFields.bind(this);
        this.validate = this.validate.bind(this);
        this.reportErrors = this.reportErrors.bind(this);         
    }    // end of constructor()

    validate(form){
        var email = form.email.value;
        var errors = [];
         
        if (!ck_email.test(email)) {
          errors[errors.length] = "You must enter a valid email address.";
        }

        if (errors.length > 0) {                    
            reportErrors(errors);
            return false;
        }
            return true;
    }

    reportErrors(errors){
         var msg = "Please Enter Valid Data...\n";
         for (var i = 0; i<errors.length; i++) {
         var numError = i + 1;
          msg += "\n" + numError + ". " + errors[i];
        }
         alert(msg);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        // type === "checkbox" ?
        //     this.setState({ [name]: checked }) : this.setState({ [name]: value });
        if (type === "checkbox") {
            this.setState({ [name]: checked });
        //     this.setState({
        //     cityTours: {required: false}, 
        //     sports: {required: false},
        //     cycling: {required: false},
        //     museums: {required: false},
        //     boating: {required: false},
        //     sailing: {required: false},
        //     beach: {required: false},
        //     hiking: {required: false},
        //     theatre: {required: false},
        //     parksRec: {required: false},
        //     snorkeling: {required: false}
        // });
        } else {
            this.setState({ [name]: value });
        }
    }    // end of handleChange function


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
        });
    }    // end of resertFormFields function

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
                return React.createElement("p", null, "");
        }    // end if switch statement
    }    // end of activityList function

    render() {
        return (
            React.createElement("div", null,
                React.createElement("form", {
                    name: 'form',
                    method: 'post', 
                    action: 'confirm.php',
                    onSubmit: this.validate,
                    // onSubmit: 'return validate(this)',
                    // onSubmit: this.handleSubmit,
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
                )    // end of form tag
            )    // end of div tag
        ));    // end of return
    }    // end of render
}     // end of ReservationFrom Class Component

ReactDOM.render(
    // React.createElement("form", {id: 'ContactForm', method: 'post', action:''},
    React.createElement("div", {},
        React.createElement('h3', null, "Please complete our Contact Form below!"),
        React.createElement("p", {id: "required"}, "* Required"),
        React.createElement("br", null),
        React.createElement(ReservationForm, null),
        React.createElement("br", null),
    ),    // end of div tag
    document.getElementById('reservation')
);    // end of render