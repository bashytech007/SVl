import { SubmitHandler, useForm } from "react-hook-form";
import contactUs from "../assets/contact-us.png";
import Overview from "../components/about/Overview";
import Container from "../components/Container";
import GradientContainer from "../components/GradientContainer";
import Button from "../ui/Button";

type ContactFormInputs = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  subject: string;
  message: string;
  subscribe?: boolean;
  verification: string;
  referral?: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <>
        <GradientContainer>
          <Overview text="Contact Us">
            <img
              className="w-full object-cover md:h-96 h-48"
              src={contactUs}
              alt="contact us"
            />
          </Overview>
        </GradientContainer>
        <div className="mb-10">
          <p className="py-3 md:py-6">
            We’d love to hear from you! Whether you have a question about our
            services, need guidance, or want to schedule a consultation, please
            fill out the form below. Our team is ready to assist you and will
            get back to you shortly.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-lg"
          >
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Please enter full name"
                {...register("name", { required: "Name is required" })}
                className="w-full border rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Please enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                className="w-full border rounded-md p-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone number</label>
              <input
                type="tel"
                placeholder="Type in phone number"
                {...register("phone")}
                className="w-full border rounded-md p-2"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block font-medium mb-1">
                Company/Organization
              </label>
              <input
                type="text"
                placeholder="Please enter company name"
                {...register("company")}
                className="w-full border rounded-md p-2"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium mb-1">Country</label>
              <select
                {...register("country")}
                className="w-full border rounded-md p-2"
              >
                <option value="">Select country</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block font-medium mb-1">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type channel name"
                {...register("subject", { required: "Subject is required" })}
                className="w-full border rounded-md p-2"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Type in your message here..."
                {...register("message", { required: "Message is required" })}
                className="w-full border rounded-md p-2 h-24"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("subscribe")}
                className="mr-2 bg-svl-gradient"
              />
              <span>
                Yes, I’d like to receive updates and offers from SVL Consulting
                Ltd.
              </span>
            </div>

            {/* Privacy Statement */}
            <div className="text-sm text-gray-500">
              <strong>Privacy Statement:</strong> We value your privacy. Your
              information is secure and will never be shared without your
              consent.
            </div>

            {/* Verification */}
            <div>
              <label className="block font-medium mb-1">
                Verification: Help us keep things secure. Please enter any two
                digits before submitting.
              </label>
              <input
                type="number"
                placeholder="e.g. 12"
                {...register("verification", {
                  required: "Verification is required",
                  pattern: {
                    value: /^\d{2}$/,
                    message: "Must be two digits",
                  },
                })}
                className="w-full border rounded-md p-2"
              />
              {errors.verification && (
                <p className="text-red-500 text-sm">
                  {errors.verification.message}
                </p>
              )}
            </div>

            {/* Referral */}
            <div>
              <label className="block font-medium mb-1">
                Where did you hear about us?
              </label>
              <select
                {...register("referral")}
                className="w-full border rounded-md p-2"
              >
                <option value="">Choose channel</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
              </select>
            </div>

            {/* Submit */}
            <Button type="submit" text="Get In Touch" className="text-white" />
          </form>
        </div>
      </>
    </Container>
  );
};

export default ContactUs;
