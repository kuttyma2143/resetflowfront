import React,{useState} from 'react'
import icon from '../images/icon.png'
import { useNavigate, useParams } from 'react-router-dom'

import './App.css'
import AxiosService from '../comman/ApiService.jsx';
import { toast } from 'react-toastify';



function Resetpassword() {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [password,setPassword] = useState("")
  const [OTP,SetOTP] =useState("")

  const{randomString,expirationTimestamp}=useParams();
    let navigate = useNavigate()

    const resetpassword = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            let res = await AxiosService.post(`/user//reset-password`,{
              OTP,  
              password
            })

            if(res.status==200)
            {
                toast.success("password updated")
                navigate('/signin')
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error("Invalid token or token has expired. Please request a new reset link.");
              } else {
                console.log(error);
              }

        }
        finally{
          setLoading(false)
        }

    }

  return (


    <>
    {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
    <div className="login" style={{height:"530px",paddingTop:"50px"} }>
      <div className="avatar" style={{width:"100px", height:"100px"}}>
        <img src={icon} />
      </div>
        <h2>Reset Password</h2>
        <h3>Enter your new password</h3>

        <form className="login-form">
         

        <div className="textbox">
          <input
              type={showPassword ? 'CODE' : 'OTP'} // Here is the change
              placeholder="OTP" onChange={(e)=>SetOTP(e.target.value)}
            />
             <span style={{ paddingBottom: '0px' }} className="material-symbols-outlined">
              {' '}
              lock{' '}
            </span>
            </div>
          <div className="textbox">
            <input
              type={showPassword ? 'text' : 'password'} // Here is the change
              placeholder="New Password" onChange={(e)=>setPassword(e.target.value)}
            />
            <span style={{ paddingBottom: '60px' }} className="material-symbols-outlined">
              {' '}
              lock{' '}
            </span>
            
            <div style={{display:'flex'}}>
            <input style={{width:"15px",}}
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              
            /> 
            
            <span style={{paddingTop:'60px', paddingLeft:'10px',color:'#157ae1' }}>
              Show Password
            </span>
            
</div>

            

            
          </div>

          <button type="submit" onClick={resetpassword}>Set Password</button>

          
        </form>
      </div>
    </>
  )
}

export default Resetpassword