import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSymbologyScanner } from '@use-symbology-scanner/react';
import BarcodeScanner from './(logged-in)/cashier/BarcodeScanner';
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Columns from "react-columns";

function Users() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async()=>{
        try{
            const res =await axios.get('http://localhost:5000/users');
            setUsers(res.data);
        }
        catch(err){
          console.log(err)
        }
    }
    fetchAllUsers()
  })

  // const [barcodeDisplay,setBarDisplay] = useState('No barcode scanned')
  // let barcodeScan = "";
  // useEffect(()=>{

  //   function handleKeyDown(e){
  //     if(e.keycode === 13 && barcodeScan.length>3){
  //       handleScan(barcodeScan)
  //       return
  //     }
  //     if(e.keycode ===16){
  //       return
  //     }

  //     barcodeScan+=e.key
      
  //     setTimeout(()=>{
  //       barcodeScan =""
  //     },300)
  //   }

  //   document.addEventListener('keydown',handleKeyDown)

  //   return function cleanUp(){
  //     document.removeEventListener('keydown',handleKeyDown)
  //   }
  // })
  // const handleScan = (barcodeString)=>{
  //   setBarDisplay(barcodeString);
  // }

  const handleDelete = async (id)=>{
    try {
      await axios.delete('http://localhost:5000/users'+id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  // code for scanning
  const ref = useRef(null)

  const handleSymbol = (symbol, matchedSymbologies) => {
      console.log(`Scanned ${symbol}`)
  }

  useSymbologyScanner(handleSymbol, { target: ref })

    return (
    <div style={{display:'flex'}}>
      {/* <h1></h1> */}
      
      
      <div style={{width:'80%'}}>

      
      <div className="users" >
        {users.map(user=>(
          <div className="user" key={user.id}>
            {user.cover && <img src='user.cover' alt=''/>}
            <h2>{user.userName}</h2>
            <p>{user.role}</p>
            <p>{user.password}</p>
            <p>{user.email}</p>
            <button className="delete" onClick={()=>handleDelete(user.id)}>Delete</button>
            <button className="update"><Link to={`/update/${user.id}`}>Update</Link></button>
            {/* <div>
              {barcodeDisplay}
              </div>
              <div ref={ref}>
            </div> */}
          </div>
        ))}
      </div>
      <div>
        <BarcodeScanner></BarcodeScanner>
      </div>
      <div ref={ref}>
        </div>
        </div>
        <div style={{width:"20%",backgroundColor:'red'}}>
          
            <Card bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >

            </Card>
        </div>
    </div>
  )
}

export default Users