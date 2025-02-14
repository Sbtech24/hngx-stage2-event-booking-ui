"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Road_Rage } from "next/font/google"

// type Form = {

// }
const roadRage = Road_Rage({
  weight:"400",
  subsets: ["latin"],
});



const TicketData = [
    {price:"Free",name:"Regular Access",date:"20/25"},
    {price:"$50",name:"VIP Access",date:"20/25"},
    {price:"$150",name:"VVIP Access",date:"20/25"},
    ,]

const TicketSelection = () => {
    const {register,handleSubmit} =useForm()

    

  return (
    <div className="p-3">
        <div className="p-3">
            <div className="bg-[radial-gradient(circle,_#07373f,_#0a0c1133)] border border-[#07373F] text-center rounded-lg p-4">
                <h3 className={`text-[48px] md:text-[62px] ${roadRage.className}`}>Techember Fest "25</h3>
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
       <div className="bg-[#052228] border border-[#07373F] p-2">
            <div className="mx-auto sm:flex justify-between p-3 ">
                {TicketData.map((data,i)=>(
                    <>
                    <div className="border-2 border-[#197686] p-2 w-[158px] mx-auto rounded-lg my-2" key={i}>
                        <button className="flex flex-col" key={i}>
                        <span className="font-semibold text-[22px]">{data?.price}</span>
                        <span className="text-sm text-[#FAFAFA]">{data?.name}</span>
                        <span className="text-[12px] text-[#D9D9D9]">{data?.date}</span>
                        </button>
                    </div>
                    </>
                ))}
            </div>
        </div>
       </div>
        <div className="bg-none">
            <select className="w-full bg-transparent appearance-none my-2" {...register("Number", { required: true })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
      


        <div className="flex flex-col gap-2 md:flex-row-reverse">
            <button className="btn-1">Next</button>
            <button className="btn-2">Cancel</button>
        </div>
        
    </div>
  )
}

export default TicketSelection