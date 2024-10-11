import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { IoCloudDoneOutline } from "react-icons/io5";

import { PrimaryBtn } from "../../styles/products/single-product";
import { MessageSendtContainer, WrongMessage } from "../../styles/contact/form";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = yup
    .object({
        firstName: yup
            .string()
            .min(3, "Your first name should be at least 3 characters.")
            .max(10, "Your first name cannot be longer than 10 characters.")
            .required("Please enter your first name"),
        email: yup
            .string()
            .matches(emailRegex, "Please enter a valid email address")
            .required("Please enter your email address"),
        subject: yup
            .string()
            .required("Please enter a subject")
            .min(3, "Subject should be at least 3 characters."),
        message: yup
            .string()
            .required("Please enter a message")
            .min(3, "Message should be at least 3 characters."),
    })
    .required();

function ContentForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit(data: { firstName: string; age?: number }) {
        console.log(data);
        setIsSubmitted(true);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fullName">
                    <h2>Full Name</h2>
                </label>
                <input {...register("firstName")} id="fullName" />
                <WrongMessage>{errors.firstName?.message}</WrongMessage>
            </div>
            <div>
                {" "}
                <label htmlFor="email">
                    <h2>Email</h2>
                </label>
                <input {...register("email")} id="email" />
                <WrongMessage>{errors.email?.message}</WrongMessage>
            </div>
            <div>
                <label htmlFor="subject">
                    {" "}
                    <h2>Subject</h2>
                </label>
                <input {...register("subject")} id="subject" />
                <WrongMessage>{errors.subject?.message}</WrongMessage>
            </div>
            <div>
                <label htmlFor="message">
                    {" "}
                    <h2>Message</h2>
                </label>
                <textarea {...register("message")} id="message" />
                <WrongMessage>{errors.message?.message}</WrongMessage>
            </div>
            <PrimaryBtn type="submit">Checkout</PrimaryBtn>

            {isSubmitSuccessful && isSubmitted && (
                <MessageSendtContainer>
                    <IoCloudDoneOutline />
                    <p>Your message has been successfully sent!</p>
                </MessageSendtContainer>
            )}
        </form>
    );
}

export default ContentForm;
