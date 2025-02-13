"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"

// type Form = {

// }


const TicketData = [
    {price:"Free",name:"Regular Access",date:"20/25"},
    {price:"$50",name:"VIP Access",date:"20/25"},
    {price:"$150",name:"VVIP Access",date:"20/25"},
    ,]

const TicketSelection = () => {
    const {register,handleSubmit} =useForm()

  return (
    <div>
        <div>
            <h3>Techember Fest "25</h3>
            <p>Join us for an unforgettable experience
                at [Event Name] secure your spot now.

            </p>
            <div>
                <span>📍 [Event Location]</span>
                <p>March 15, 2025 | 7:00 PM</p>
            </div>
        </div>

       
       <div>
        {TicketData.map((data,i)=>(
            <button key={i}>
                {data?.price}
                {data?.name}
                {data?.date}
            </button>
        ))}
       </div>

       <select {...register("Number", { required: true })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>


        <button>Next</button>
        <button>Cancel</button>
    </div>
  )
}

export default TicketSelection