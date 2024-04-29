const OilDetails = ({oil})=>{
    const handleClick = async()=>{
        const respose = await fetch('api/oils/' + oil._id ,{
            method:'DELETE'
        })
        const json = await respose.json()
        if(respose.ok){
            console.log('deleted successfully')
        }
     }
    
    return(
        
        <div className="oil-details">
            <h4>{oil.title}</h4>
            <p><strong>Price: </strong>{oil.price}</p>
            <p>{oil.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>

    )
}

export default OilDetails