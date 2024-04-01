import  * as Yup from 'yup'


export const SignUpSchema = Yup.object({
    firstname : Yup.string().required("Please Enter Your Firstname.."),
    lastname : Yup.string().required("Please Enter Your LastName.."),
    email : Yup.string().email().required("Please Enter Your EmailAddress"),
    phonenumber : Yup.string().min(11).required("Please Enter Your Phone Number"),
    password : Yup.string().min(6).max(20).required("Create Your password"),
    Confirm_Password:  Yup.string().required().oneOf([Yup.ref("password"), null , "password must match"]),

})


export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email..."),
    password : Yup.string().required("Please Enter Your Password")
})

export const subscriptionSchema = Yup.object({
    email : Yup.string().email().required("Please enter your email")
})




export const datesreachSchema = Yup.object({
    starttime : Yup.string().required("please enter a park starting time..."),
    endtime : Yup.string().required("please enter a park ending time..."),
    date : Yup.string().required("please enter a date..."),
})

export const parkbookingSchema = Yup.object({
    startTime : Yup.string().required("please enter a park starting time..."),
    endTime : Yup.string().required("please enter a park ending time..."),
    date : Yup.string().required("please enter a date..."),
    totalPeoples : Yup.string().required("please enter a totalPeoples..."),
    advancePayment : Yup.string().required("please enter a advancePayment...")
})

export const updatebookingSchema = Yup.object({
    startTime : Yup.string().required("please enter a park starting time..."),
    endTime : Yup.string().required("please enter a park ending time..."),
    date : Yup.string().required("please enter a date..."),
})
export const updateFormSchema = Yup.object({
    firstname : Yup.string().required("Please Enter Your Firstname.."),
    lastname : Yup.string().required("Please Enter Your LastName.."),
    phonenumber : Yup.string().required("Please Enter Your Phone Number"),
})