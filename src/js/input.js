import { MDCTextField } from "@material/textfield";

const textFields = document.querySelectorAll(".mdc-text-field");
textFields.forEach(textField => new MDCTextField(textField));
