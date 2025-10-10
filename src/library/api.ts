import axios from "./axios";

export const handleContactForm = async (data: ContactFormInputs) => {
  console.log(data);

  return await axios.post("/contact", data);
};
