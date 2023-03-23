import {object,string} from "yup";

let userSchema = object({
    email: string().email("Geçerli bir email giriniz").required("Bu alan boş bırakılamaz"),
    password: string().min(5,"Minimum 5 karakter giriniz").required("Bu alan boş bırakılamaz"),
})

export default userSchema;