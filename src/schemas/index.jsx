import * as Yup from 'yup'

export const UserSchema = Yup.object().shape({  
    username: Yup.string().min(2).max(20).required('name is required'),
    email: Yup.string().email('Invalid email').required('email is required'),
    mobile: Yup.number().required('mobile number is required'),
    gender: Yup.string().oneOf(["male","female"]).required(),
    address: Yup.string().required('address is required'),
    password: Yup.string().min(6).required('password is required'),
    confirm_password: Yup.string().min(6).required('confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})