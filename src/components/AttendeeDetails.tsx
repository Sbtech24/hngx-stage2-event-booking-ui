"use client"
import { useForm } from "react-hook-form"
import { useState } from "react"

const AttendeeDetails = () => {
    const {register,handleSubmit} = useForm()
    const [data,setData]  =useState("")
  return (
    <div>
        <form action="">
        <div>
            <label htmlFor="upload-img"></label>
            <input type="file" title="upload-img" name="" id="" accept="image/*" />
        </div>

            <div>
                <label htmlFor="name">Enter your name</label>
                <input {...register("name")} type="text" name="name" title="name" id="" />

                <label htmlFor="email">Enter your name</label>
                <input {...register("email")} type="email" name="email" title="email" id="" />

                <label htmlFor="About">About the project </label>
                <textarea {...register("about")} placeholder="textarea"/>

            </div>



        </form>
        <button>Get My free Ticket</button>
        <button>Back</button>
    </div>
  )
}

export default AttendeeDetails