import  * as Yup from 'yup'


export const SignUpSchema = Yup.object({
    firstname : Yup.string().required("Please Enter Your Firstname.."),
    lastname : Yup.string().required("Please Enter Your LastName.."),
    email : Yup.string().email().required("Please Enter Your EmailAddress"),
    phonenumber : Yup.string().required("Please Enter Your Phone Number"),
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


export const AddParkSchema = Yup.object({
    title : Yup.string().required("Please enter a park title....."),
    description : Yup.string().required("please enter a park descpition..."),
    startingTime : Yup.string().required("please enter a park starting time..."),
    endingTime : Yup.string().required("please enter a park ending time..."),
    selectedCity : Yup.string().required("please enter city..."),
    selectedCountry : Yup.string().required("please enter Country..."),
    cost : Yup.string().required("please enter cost..."),
    capicity : Yup.string().required("please enter capicity..."),
    imges : Yup.mixed().required("Images required..."),
    images: Yup.array()
    .min(8, 'Please upload at least 8 images.')
    .required('Please upload at least 8 images.'),
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