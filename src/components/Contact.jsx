import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
        name: data.name,
        email: data.email,
        message: data.message

    }
    try{
        await axios.post("https://getform.io/f/akknqppa", userInfo);
        toast.success("Message sent successfully!");
        // Reset form fields after submission
    }catch(error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again later.");
    }
  }
  return (
   <>

        <div 
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-16">
            <h1 className='text-3xl font-bold mb-4' >Contact me</h1>
            <span> Please fill out the form below to get in touch with me.</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                // action="https://getform.io/f/akknqppa"
                // method="POST"
                 className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'> FullName:</label>
                        <input 
                        {...register("name", { required: true })}
                        type="text"
                        id="name" name="name" 
                        placeholder=" Enter Your FullName" 
                        className="shadow rounded-lg appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required 
                        />
                         {errors.name && <span>This field is required</span>}
                    </div>
                     <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'> Email:</label>
                        <input 
                        {...register("email", { required: true })}
                        type="text"
                        id="email" 
                        name="email" 
                        placeholder=" Enter your email address" 
                        className="shadow rounded-lg appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required 
                        />
                         {errors.email && <span>This field is required</span>}
                    </div>
                     <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'> Message</label>
                        <textarea 
                        {...register("message", { required: true })}
                        type="text"
                        id="name" 
                        name="message" 
                        placeholder=" Enter your Query" 
                        className="shadow rounded-lg appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required 
                        />
                         {errors.message && <span>This field is required</span>}
                    </div>
                    <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send </button>
                </form>
            </div>
        </div>   

   </>
  )
} 

export default Contact 