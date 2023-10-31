export const SignupFormFields = [
  {
    label: "Email Address",
    placeholder: "leroy@jenkins.com",
    name: "email",
    type: "email",
    error: {
      required: "email id is required",
      type: {
        message: "email id is not valid",
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
        message: "Password need minimum 4 letters",
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

export const LoginFormFields = [
  {
    label: "Email Address",
    placeholder: "leroy@jenkins.com",
    name: "email",
    type: "text",
    error: {
      required: "email address is required",
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

export const SignupFormData = {
  email: "",
  password: "",
  confirm_password: "",
};

export const LoginFormData = {
  email: "",
  password: "",
};

export const FormValidate = (formData, formFields) => {
  const newErrors = {};
  formFields.map((field) => {
    if (!formData[field?.name]) newErrors[field?.name] = field.error?.required;
    else if (field?.error?.length) {
      if (formData[field?.name].length < field?.error?.length?.length) {
        newErrors[field?.name] = field.error.length.message;
      }
    } else if (field?.name === "email") {
      !/\S+@\S+\.\S+/.test(formData[field.name])
        ? (newErrors[field?.name] = "Email address is invalid")
        : "";
    } else if (field?.name === "confirm_password") {
      if (formData.password !== formData.confirm_password) {
        newErrors[field?.name] = "Password is not match";
      }
    }
  });
  return newErrors;
};
