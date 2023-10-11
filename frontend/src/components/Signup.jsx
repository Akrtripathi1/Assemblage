import { useFormik, validateYupSchema } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Minimum 4 characters req.').required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {

  // intialize the formik

  const navigate = useNavigate();

  const addLinkEntry = async (userid) => {
    const res = await fetch("http://localhost:5000/link/add", {
      method: "POST",
      body: JSON.stringify({
        user: userid,
        createdAt: new Date()
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);
  }

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    onSubmit: async (values, { setSubmitting }) => {

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have signed up successfully",
        })
        const data = await res.json();
        await addLinkEntry(data._id);
        navigate("/login");
        setSubmitting(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Something went wrong",
        });
      }

    },
    validationSchema: SignupSchema,
  });
  return (
    <div className='bg-dark d-flex justify-content-center p-2 font-family-Poppins vh-100'>
      <div className='card  col-md-4 mx-auto p-1  bg-light'>
        <img className='w-25 d-block m-auto' src="download.webp " alt="" />
        <h3 className='text-center text-bold mb-2'>Sign Up</h3>
        <form onSubmit={signupForm.handleSubmit} action="">
          <label className='mt-2 py-1' > Full Name</label>
          <span style={{ fontSize: "0.7em", color: "red", marginLeft: 20 }} >{signupForm.errors.name}</span>
          <input className='form-control p-1 ' placeholder='Full name' type="text"
            name='name'
            onChange={signupForm.handleChange}
            value={signupForm.values.name} />
          <label className='py-1 mt-2' > E-mail Id</label>
          <span style={{ fontSize: "0.7em", color: "red", marginLeft: 20 }} >{signupForm.errors.name}</span>
          <input 
          className='form-control p-1' 
          type="email" name='email' 
          onChange={signupForm.handleChange} 
          value={signupForm.values.email} 
          placeholder='Akr@gamil.com' 
          required />
          <label className='py-1 mt-2' > Password</label>
          <input 
          className='form-control p-1'
           type="password" name='password' 
           onChange={signupForm.handleChange} 
           value={signupForm.values.password} 
           placeholder='Minimum 8 charcters' 
           required />
          <label className='py-1 mt-2' > Re-Enter-Password</label>
          <input 
          className='form-control p-1' 
          type="password" 
          name='repassword' 
          onChange={signupForm.handleChange} 
          value={signupForm.values.repassword} 
          placeholder='Minimum 8 charcters' 
          required 
          />

          <button disabled={signupForm.isSubmitting} className='btn btn-dark text-center mt-2 p-2 mb-2 form-control' type='submit'>
            {
              signupForm.isSubmitting ? (<> <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span class="visually-hidden" role="status">Loading...</span></>) : 'submit'
            }
          </button>

        </form>
      </div>
    </div>

  )
}

export default Signup