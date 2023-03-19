import {object,string} from "yup";

let userSchema = object({
    // firstName: string().required("Bu alan boş bırakılamaz"),
    // lastName: string().required("Bu alan boş bırakılamaz"),
    email: string().email("Geçerli bir email giriniz").required("Bu alan boş bırakılamaz"),
    password: string().required("Bu alan boş bırakılamaz")
   // message:string().min(5,"Minimum 5 karakter giriniz").required("Bu alan boş bırakılamaz")
})

export default userSchema;