import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"


const UpdateOil = () => {
    const [user,setUser] = useState({
      userName: "",
      email:"",
      pass:"",
      role:"",
      tel:"",
      cover:"",
  
    })
    const navigate = useNavigate();
    const handleClick = async (e) => {
      e.preventDefault()
      try {
        await axios.post("http://localhost:5000/addUser",user)
        navigate("/users")
      } catch (error) {
        console.log(error);
      }
      
    }
  
    const handleChange=(e)=>{
      setUser((prev)=>({...prev,[e.target.name]: e.target.value}))
    }
    console.log(user)
  
    return (
      <form className="signup" >
        <h3>Sign Up</h3>
        <label>User Name:</label>
        <input 
          type="text" name="userName"
            onChange={handleChange} 
          // value={email} 
        />
        <label>Email address:</label>
        <input 
          type="email" name="email"
          onChange={handleChange}        // value={email} 
        />
        <label>Password:</label>
        <input 
          type="password" name="pass"
          onChange={handleChange}
          // value={password} 
        />
        <label>Role:</label>
          <select name="role" id="role" onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="cashier">Cashier</option>
          </select>  
  
        <label>Mobile Number</label>
        <input 
          type="text" name="telNo" 
          onChange={handleChange}
          // value={mobileNo} 
        />
        <label>Cover</label>
        <input 
          type="text" name="cover" 
          onChange={handleChange}
          // value={mobileNo} 
        />
  
        <button onClick={handleClick}>Update User</button>
      </form>
    )
  }

export default UpdateOil