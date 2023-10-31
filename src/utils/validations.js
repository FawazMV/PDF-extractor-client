/**
 * Function to validate form data based on form fields
 * @param {Object} formData - The form data to be validated.
 * @param {Array} formFields - The form fields configuration.
 * @returns {Object} - Object with validation errors.
 */
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
        newErrors[field?.name] = "Password does not match";
      }
    }
  });
  return newErrors;
};
