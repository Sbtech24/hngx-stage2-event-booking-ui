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
      return <TicketSelection/>
    }else if(step === 1){
    return <AttendeeDetails/>
  }else if(step === 2){
  return <Ready/>
  }
 }
  return (
    <div className="p-3 bg-red-600">
       <div className="bg-[#08252B]">
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