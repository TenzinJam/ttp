import './App.css';
import Teachers from "./components/Teachers"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TeacherForm from './components/TeacherForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/teacherForm" element={<TeacherForm/>}></Route>
        </Routes>
      </BrowserRouter>
      <h1>Welcome to Demo</h1>
    </div>

  );
}

export default App;
