export const SignupFormFields = [
  {
    label: "Email Address",
    placeholder: "leroy@jenkins.com",
    name: "email",
    type: "email",
    error: {
      required: "Email address is required",
      type: {
        message: "Email address is not valid",
      },
    },
  },
  {
    label: "Password",
    placeholder: "******",
    name: "password",
    type: "password",
    error: {
      required: "Password is required",
      length: {
        length: 4,
        message: "Password needs a minimum of 4 characters",
      },
    },
  },
  {
    label: "Confirm password",
    placeholder: "Confirm your password",
    name: "confirm_password",
    type: "text",
    error: {
      required: "Please confirm your password",
    },
  },
];

// Define initial form data for the signup form
export const SignupFormData = {
  email: "",
  password: "",
  confirm_password: "",
};

// Define form fields for the login form
export const LoginFormFields = [
  {
    label: "Email Address",
    placeholder: "leroy@jenkins.com",
    name: "email",
    type: "text",
    error: {
      required: "Email address is required",
    },
  },
  {
    label: "Password",
    placeholder: "******",
    name: "password",
    type: "password",
    error: {
      required: "Password is required",
    },
  },
];

// Define initial form data for the login form
export const LoginFormData = {
  email: "",
  password: "",
};
