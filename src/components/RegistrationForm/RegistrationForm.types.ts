import { RegistrationFormData } from "../../interfaces/registrationInterfaces";

export interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
}
