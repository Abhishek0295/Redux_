import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),

  name: Yup.string()
    .min(3, "Full Name must be at least 3 characters long")
    .max(25, "Full Name must be at most 25 characters long")
    .required("Please enter your name"),

  dob: Yup.date()
    .required(),
    // .test("age", "You must be 18 or older", function (birthdate) {
    //   const cutoff = new Date();
    //   cutoff.setFullYear(cutoff.getFullYear() - 18);
    //   return birthdate <= cutoff;
    // }),

  gender: Yup.string().required("A radio option is required"),

  password: Yup.string()
    .min(5, "Password must have at least 5 characters")
    .required("Please enter your password"),
});
