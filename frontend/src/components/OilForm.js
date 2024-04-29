import { useState } from "react"
// import {useForm} from "react-hook-form"
// export const Newoil = [{}];




const OilForm = ({setChanges})=>{
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('') 
    const [error,setError] = useState(null)    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setChanges()
        const oil = {title,price}
        const response =  await fetch('/api/oils/',{
            method: 'POST',
            body: JSON.stringify(oil),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error) 
        }
        if(response.ok){
            setTitle('')
            setPrice('')
            setError(null)
            console.log('new oil added' ,json)    
        }    
    }

    return(
        <form className="create" onSubmit={(event) => {
            event.preventDefault(); // This prevents the default form submission behavior
            handleSubmit(event); // Assuming handleSubmit is defined elsewhere and handles the submission
            setChanges(true); // This updates the state to indicate changes were made
        }}>
            <h3>Add new oil</h3>
            <label >Oil Titile</label>
            <input 
            type="text"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            />

            <label >Price</label>
            <input 
            type="text"
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
            />

            <button>Add Oil</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default OilForm