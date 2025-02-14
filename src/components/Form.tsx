"use client"
import {useState} from "react";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import Ready from "./Ready";




const Form = () => {
  const [step,setStep] = useState<number>(0)
  
  const headerTitle = ["Ticket Selection","Attendee Details","Ready"]

  const FormDisplay = ()=>{
    if(step === 0){
      return <TicketSelection />
    }else if(step === 1){
    return <AttendeeDetails/>
  }else if(step === 2){
  return <Ready/>
  }else{
    return <h1>Error</h1>
  }
 }
  return (
    <div className="p-3 sm:max-w-[650px] mx-auto">
       <div className="bg-[#08252B] border p-3 rounded-xl border-[#0E464F]">
          <div>
            <h3 className="text-[24px]">{headerTitle[step]}</h3>
            <span className="text-sm">Step {step + 1}/3 </span>
          </div>
       {/* Progress bar */}

       <div>
         {FormDisplay()}
       </div>
      
     </div>
    </div>
    
  )
}

export default Form