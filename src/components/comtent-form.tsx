import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        firstName: yup
            .string()
            .min(3, "Your first name should be at least 3 characters.")
            .max(10, "Your first name cannot be longer than 10 characters.")
            .required("Please enter your first name"),
        age: yup
            .number()
            .min(18, "Your age must be 18 or higher")
            .max(100, "Your age must be 100 or lower")
            .typeError("Your age must be a number"),
    })
    .required();

function ContentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data: { firstName: string; age?: number }) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
            <input {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="submit" />
        </form>
    );
}

export default ContentForm;
