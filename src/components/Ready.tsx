import Image from "next/image"

const Ready = () => {
  return (
    <div>
      <div>
        <h2>Your Ticket is Booked!</h2>

        <p>You can download or Check your email for a copy</p>

        <div>
          <div>
              <div>
                <h2>Techember Fest ”25</h2>
                <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>

                {/* <Image/> */}
              </div>

              {/* user info */}
              <div>

              </div>
          </div>

            {/* Barcode */}
          <div>

          </div>

          <button>Dowload Ticket</button>
          <button>Book Another Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Ready