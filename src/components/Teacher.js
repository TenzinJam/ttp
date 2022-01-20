import React from "react"

export default function Teacher({props}){
  return (
    <ul style={{backgroundColor: 'blue', width:'100px', padding:'5px', marginLeft:'10px'}}>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
    </ul>
  )
}

