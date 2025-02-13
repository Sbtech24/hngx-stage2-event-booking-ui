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
        <div className="p-3">
            <div className="bg-[radial-gradient(circle,_#07373f,_#0a0c1133)] border border-[#07373F] rounded-lg p-4">
                <h3 className="text-[24px]">Techember Fest "25</h3>
                <p className="text-[14px]">Join us for an unforgettable experience
                    at [Event Name] secure your spot now.
                </p>
                <div>
                    <span className="text-sm">📍 [Event Location]</span>
                    <p className="text-sm">March 15, 2025 | 7:00 PM</p>
                </div>
            </div>
        </div>
       
       <div className="flex flex-col justify-center mx-auto">
       <p className="text-sm">Select Ticket Type:</p>

        {TicketData.map((data,i)=>(
            <>
            <div className="border border-[#197686] my-2 p-2">
                <button className="flex flex-col" key={i}>
                   <span>{data?.price}</span>
                   <span>{data?.name}</span>
                   <span>{data?.date}</span>
                </button>
            </div>
            </>
        ))}
       </div>

       <select className="w-full" {...register("Number", { required: true })}>
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