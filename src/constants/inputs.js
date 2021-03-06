import Validator from "../helpers/Validator";

export const loginInputs = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Your email...",
    value: "",
    isValid: true,
    isRequired: true,
    errorMsg: "Your email is invalid",
    validator: Validator.isEmail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Your password...",
    value: "",
    isRequired: true,
    isValid: true,
    errorMsg: "Your password is invalid",
    minLength: 8,
    validator: Validator.hasLength,
  },
];

export const registerInputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Your first name...",
    value: "",
    isRequired: true,
    isValid: true,
    errorMsg: "First name is required",
    validator: Validator.hasValue,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Your last name...",
    value: "",
    isRequired: true,
    isValid: true,
    errorMsg: "Last name is required",
    validator: Validator.hasValue,
  },
];

export const contactsInputs = [
  {
    id: "contactPhoto",
    label: "Contact Photo",
    type: "file",
    value: "",
    placeholder: "Contact name",
    isValid: true,
    isRequired: false,
    errorMsg: "A contact name is required",
    validExtensions: ["image/jpeg", "image/png"],
    validator: Validator.isFileValid,
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    value: "",
    placeholder: "Contact name",
    isValid: true,
    isRequired: true,
    errorMsg: "A contact name is required",
    validator: Validator.hasValue,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    value: "",
    placeholder: "Contact email",
    isValid: true,
    isRequired: false,
    errorMsg: "Invalid email address",
    validator: Validator.isEmail,
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    value: "",
    placeholder: "Contact phone",
    isValid: true,
    isRequired: false,
    errorMsg: "Invalid phone number",
    validator: Validator.hasValue,
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    value: "",
    placeholder: "Contact address",
    isValid: true,
    isRequired: false,
    errorMsg: "Invalid address",
    validator: Validator.hasValue,
  },
];

export const taskInputs = [
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Task description...",
    value: "",
    isRequired: true,
    isValid: true,
    errorMsg: "A description is required",
    validator: Validator.hasValue,
  },
  {
    id: "time",
    label: "Time",
    type: "time",
    value: "",
    isRequired: false,
    isValid: true,
    errorMsg: "Last name is required",
    validator: Validator.isTimeValid,
  },
  {
    id: "date",
    label: "Date",
    type: "date",
    value: "",
    isRequired: true,
    isValid: true,
    errorMsg: "Last name is required",
    validator: Validator.isDateValid,
  },
];

export const chronometerInputs = [
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Timer description",
    value: "",
    isValid: true,
  },
];

export const transactionInputs = [
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Transaction Description",
    value: "",
    isValid: true,
    isRequired: true,
    errorMsg: "A description is required",
    validator: Validator.hasValue,
  },
  {
    id: "amount",
    label: "Amount",
    type: "number",
    placeholder: "Transaction Amount",
    value: "",
    isValid: true,
    isRequired: true,
    errorMsg: "A positive amount is required",
    validator: Validator.isPositiveNumber,
  },
  {
    id: "type",
    label: "Type",
    type: "radio",
    value: "income",
    options: [
      { value: "income", description: "Income Transaction", checked: true },
      { value: "outcome", description: "Outcome Transaction", checked: false },
    ],
    isValid: true,
    isRequired: true,
    validator: Validator.hasValue,
  },
  {
    id: "transactionDate",
    label: "Date",
    type: "date",
    value: "",
    isValid: true,
    isRequired: true,
    errorMsg: "The date you enter is invalid",
    validator: Validator.isDateBeforeTomorrow,
  },
];
