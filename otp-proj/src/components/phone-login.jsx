import { useState } from "react"
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //phone validation
        const regrex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regrex.test(phoneNumber)) {
            alert("Invalid phone number");
            return;
        }
        setShowOtp(true);
    }

    const onOtpSubmit = (otp) => {
        console.log(`Login Successful ${otp}`)
    }

    return (
        <div>
            {!showOtp? <form onSubmit={handlePhoneSubmit}>
                <input type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter phone number"
                />
                <button type="submit">Submit</button>
            </form> : <div>
                    <p> Enter otp sent to {phoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                </div>}
        </div>
    )
}

export default PhoneOtpForm