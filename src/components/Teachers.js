import React from "react"
import {useState, useEffect } from "react"
import Axios from "axios"
import Teacher from "./Teacher"

export default function Teachers(){

  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    async function fectchData(){
      const allTeachers = await Axios.get(`http://localhost:8080/api/teachers`)
      console.log("this", allTeachers)
      setTeachers(allTeachers.data)
    }
    fectchData()
  },[]);

  return (
    <div>
      {
        teachers && teachers.map(teacher => <Teacher key={teacher.id} props={teacher}/>)
      }
    </div>

  )
}
