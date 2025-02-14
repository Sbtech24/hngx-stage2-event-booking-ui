import Image from "next/image"
import Ticket from "../../public/ticket.png"

const Ready = () => {
  return (
    <div>
      <div>
        <h2>Your Ticket is Booked!</h2>

        <p>You can download or Check your email for a copy</p>

       
      </div>

      <div >
        
      </div>

      <div>
        <button className="btn-1">Download Ticket</button>
        <button className="btn-2">Book Another Ticket</button>
      </div>
    </div>
  )
}

export default Ready