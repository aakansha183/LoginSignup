import * as yup from 'yup';

export const validationSchema = yup.object().shape({
 
  password: yup.string() .min(6, 'Password must be at least 6 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one numeric')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[\W_]/, 'Password must contain at least one special character')
  .required('Password is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  
});
