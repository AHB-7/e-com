import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryBtn } from "../styles/single-product";
import { useState } from "react";
import { IoCloudDoneOutline } from "react-icons/io5";
import { MessageSendtContainer, WrongMessage } from "../styles/container";

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
            .min(3, "Message should be at least 10 characters."),
    })
    .required();

function ContentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit(data: { firstName: string; age?: number }) {
        console.log(data);
        setIsSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Full Name</h3>
                <input {...register("firstName")} />
                <WrongMessage>{errors.firstName?.message}</WrongMessage>
            </div>
            <div>
                <h3>Email</h3>
                <input {...register("email")} />
                <WrongMessage>{errors.email?.message}</WrongMessage>
            </div>
            <div>
                <h3>Subject</h3>
                <input {...register("subject")} />
                <WrongMessage>{errors.subject?.message}</WrongMessage>
            </div>
            <div>
                <h3>Message</h3>
                <textarea {...register("message")} />
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
