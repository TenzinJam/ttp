import { useState } from "react"
import Axios from "axios"
export default function TeacherForm(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  async function submitHandler(e){
    e.preventDefault()
    await Axios.post(`http://localhost:8080/api/teachers`, {firstName, lastName})
  }


  return (
    <div>
      <h1>Add a teacher to the Registry</h1>
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={() =>setFirstName(e.target.value)}/>
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={() => setLastName(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
