import { useEffect,useState } from "react"
//components
import OilDetails from '../components/OilDetails'
import OilForm from "../components/OilForm"
import Sidebar from "../components/Sidebar"
import { Newoil } from "../components/OilForm"

const Home = ()=>{
    const [changes,setChanges] = useState("");
    const[oils, setOils] = useState(null)
    useEffect(()=>{
        const fetchOils =async ()=>{
            const response = await fetch('/api/oils')
            const json = await response.json();
        if(response.ok){
            setOils(json)   
        }
    }
    fetchOils();
    console.log(changes)
    
},[changes])    


    return(
        <div className="container">
            {/* <div className="oils">
                {oils && oils.map((oil)=>(
                   <OilDetails key={oil._id} oil={oil}></OilDetails>
                ))}
            </div>
            <OilForm setChanges={setChanges}/> */}

            
        </div>
    )
}

export default Home