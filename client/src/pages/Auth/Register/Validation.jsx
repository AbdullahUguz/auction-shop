import {object,string} from "yup";

let userSchema = object({
    email: string().email("Enter a valid email").required("This field cannot be left blank"),
    password: string().min(5,"Please enter at least 5 characters").required("This field cannot be left blank"),
    username: string().required("This field cannot be left blank"),
})

export default userSchema;