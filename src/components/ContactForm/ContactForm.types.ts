import { ContactFormData } from "../../interfaces/contactInterfaces";

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}
