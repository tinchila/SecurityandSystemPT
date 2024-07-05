"use client";

import React, { useState } from "react";
import Image from "next/image";
import { socialLinks } from "@/constants";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone must be a number";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.phone &&
      !errors.message
    ) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setFormErrors({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col gap-3">
          <div className="w-26 h-26 rounded flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/contact.png"} alt="icon" width={85} height={85} />
          </div>
          <h2 className="text-grey-700">Id love to hear from you.</h2>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
            fuga enim animi
          </p>
        </div>
      </section>
      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-grey-600">You can Email Me Here</p>
              <h6 className="text-grey-700">email@email.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Give Me a Call on</p>
              <h6 className="text-grey-700">+123456789</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Location</p>
              <h6 className="text-grey-700">Lorem Street</h6>
            </div>
          </div>
          <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
            My Social Profiles
          </h6>
          <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded transition-transform transform hover:scale-110 duration-300"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>
        <div className="box w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && (
                <p className="text-red-500">{formErrors.firstName}</p>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <p className="text-red-500">{formErrors.phone}</p>
              )}
            </div>
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[200px]"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
            <button type="submit" className="btn btn-primary">
              Send
            </button>
            {isSubmitted && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
