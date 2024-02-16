# Tutorial 3

    **Author** \
    Name: Jinay Shah \
    Banner ID: B00928737 \
    Email ID: jn851778@dal.ca \
    Date Created: 13 Feb 2024 \
    Last Modification Date: 15 Feb 2024

## Links

- Tutorial 3  Application deployed on Netlify URL: [https://jinay-shah-tutorial-3.netlify.app/] (https://jinay-shah-tutorial-3.netlify.app/)

- Tutorial 3  Application code on GitLab URL : [https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial3?ref_type=heads](https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial3?ref_type=heads)

## Testing

For the testing of the assignment, I started the webapp in my local machine then when everything was working fine, I tested it on the browser while deploying it on Netlify.

## Deployment

1. First of all, I Cloned my `CSCI 5709 Tutorials` repository to my local machine.
2. Then, I created a new project with the following command in [React](https://react.dev) using `npx create-react-app tutorial3` command.
4. Afterwards, I pushed my tutorial3 project to my GitHub account repository.
5. I deployed my app on [Netlify](https://www.netlify.com).
7. I created a `README.md` file and pushed it to the gitlab repository.

## Built With

* [React](https://react.dev) - The web framework used
* [Netlify](https://app.netlify.com/) - Hosting platform used

## Sources Used

I used the below sources for implementing the code for my profile registration and profile page in Tutorial-3.


### 1. ProfileRegistration.js

*Lines 1-134*

```
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ProfileRegistration.css';

const ProfileRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!nameRegex.test(formData.firstName)) {
      errors.firstName = 'Invalid first name (only letters allowed)';
    }

    if (!nameRegex.test(formData.lastName)) {
      errors.lastName = 'Invalid last name (only letters allowed)';
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!passwordRegex.test(formData.password)) {
      errors.password = 'Invalid password format (alphanumeric and special characters, minimum 8 characters)';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/profile');
    }
  };

  return (
    <div className="form-container">
      <h1 className="header">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {errors.email && <p className="error-message">{errors.email}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {errors.password && <p className="error-message">{errors.password}</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProfileRegistration;

```

The code above was created by adapting the code from [freeCodeCamp](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/) as shown below:

The code above was created by adapting the code from [stackoverflow](https://stackoverflow.com/questions/41348459/regex-in-react-email-validation) as shown below:

```
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
```

```
import React, { Component } from 'react';
import { Link } from 'react-router';
// Our custom input component, which uses label, id and tabIndex properties
var MyInput = React.createClass({
  render: function() {

    // Get the error message by calling a function, passed to this
    // component through getError property
    var errorMessage = this.props.getError(this.props.id);

    return (
        <fieldset className={"form-fieldset ui-input first " + (errorMessage ?    "erroneous" : "")}>
            <input type="text" name={this.props.id} id={this.props.id} tabIndex={this.props.tabIndex} />
            <label htmlFor={this.props.id}>
              <span data-text={this.props.label}>{this.props.label}</span>
            </label>
            <span className="error">{errorMessage ? errorMessage : null}</span>
          </fieldset>
    )
  }
});

// Form
var SendForm = React.createClass ({
  getError: function (fieldName) {
    return this.state[fieldName+"Error"];
  },
  setError: function (fieldName, error) {
    var update = {};
    update[fieldName+"Error"] = error;
    this.setState(update);
  },
  getInitialState: function() {
    return {
      isMailSent: false,
      errorMessage: null,
    };
  },
  componentDidMount: function () {
    // This will be called right when the form element is displayed
    $('form').parsley()
  },
  validateForm: function(){
    var hasErrors = false;

    if ($('#company').val().length < 1){
      this.setError("company", "Please enter your company name");
      hasErrors = true;
    } else this.setError("company", null)

    if ($('#industry').val().length < 1){
      this.setError("industry", "Please enter the industry");
      hasErrors = true;
    } else this.setError("industry", null)

    if ($('#firstName').val().length < 1){
      this.setError("firstName", "Please enter your first name");
      hasErrors = true;
    } else this.setError("firstName", null)

    if ($('#lastName').val().length < 1) {
      this.setError("lastName", "Please enter your last name");
      hasErrors = true;
    } else this.setError("lastName", null)

    if ($('#email').val() == '') {
      this.setError("email", "Please enter your email address");
      hasErrors = true;
    } else this.setError("email", null)

    if ($('#email').val() !== /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/) {
      this.setError("email", "Please enter a valid email address");
      hasErrors = true;
    } else this.setError("email", null)


    if ($('#phone').val().length < 1) {
      this.setError("phone", "Please enter your phone number");
      hasErrors = true;
    } else this.setError("phone", null)

    return !hasErrors;
  },
  handleSubmit: function (e) {
    e.preventDefault();

    // Check if data is valid
    if (!this.validateForm()) {
      //return if not valid
      return;
    }

    // Get the form.
    var form = $('form');

    // Serialize the form data.
    var formData = $(form).serialize();

    var self = this;
    console.log(formData)
    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: 'email-handler.php',
      data: formData
    }).done(function(response) {

      // Update the state, notifying that mail was sent
      // This value will be used in the form when rendering
      self.setState({isMailSent: true})

      // Hide the form
      $('.formCont').hide();
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      self.setState({errorMessage : "Something went wrong. Please try again."});
    });
  },
 render: function(){
   return (
     <div className="companyForm">

       <h2 className="header compFormHead">Form</h2>

       { this.state.isMailSent ?
           <div className="success">Thank you for submission. Someone will be in contact with you shortly.</div>
           : null }

       <div className="container formCont">
         <form method="post" acceptCharset="utf-8" autoComplete="off" onSubmit={this.handleSubmit}>

         <MyInput id="company" label="Company" tabIndex="1" getError={this.getError}/>
         <MyInput id="industry" label="Industry" tabIndex="2" getError={this.getError}/>

         <div className="two-column">
           <MyInput id="firstName" label="First Name" tabIndex="3" getError={this.getError}/>
           <MyInput id="lastName" label="Last Name" tabIndex="4" getError={this.getError}/>
         </div>
         <div className="two-column">
           <MyInput id="email" type="email" label="Email" tabIndex="5" getError={this.getError}/>
           <MyInput id="phone" label="Phone" tabIndex="6" getError={this.getError}/>
         </div>

         {this.state.errorMessage ? <div className="fail">{this.state.errorMessage}</div> : null}

         <div className="form">
           <input type="submit" name="submit" className="btn btn-primary" value="APPLY" tabIndex="7" />
         </div>

         </form>
       </div>

     </div>
   );
 }
});

export default SendForm;

```


- The code was implemented by me for creating the registration form  for my tutorial3 in CSCI-5709. I was going through the internet for how to create form in react framework and applying form validation on it. Then, I found this two site where form was created in react with validation. So i took reference of [freeCodeCamp](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/) & [stackoverflow](https://stackoverflow.com/questions/41348459/regex-in-react-email-validation). 

 
- The given [freeCodeCamp](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/)'s & [stackoverflow](https://stackoverflow.com/questions/41348459/regex-in-react-email-validation)'s code was used as a reference to learn how to create form and apply specific validation.


### References

[1]	Y. Chavan, “How to Create Forms in React using react-hook-form,” freecodecamp.org, 27-Oct-2022. [Online]. Available: https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/. [Accessed: 13-Feb-2024].


[2]	“Regex in React email validation,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/41348459/regex-in-react-email-validation. [Accessed: 13-Feb-2024].

