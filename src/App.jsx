import "./App.css";
import Counter from "./componets/Counter/Counter";
import Person from "./componets/Person/Person";
import StudentInfo from "./componets/StudentInfo/Studentsinfo";

function App() {

  return (
    <>
      <h1>Vite + React</h1>
    <Counter></Counter>

     {/*  <div className="mb-6">
        <StudentInfo name="Asif" age="24" isMale={true}></StudentInfo>
      </div>
      <div className="mb-6">
        <StudentInfo name="simu" age="20" isMale={false}></StudentInfo>
      </div>
      <div className="mb-6">
        <StudentInfo name="Sazib" age="26" isMale={true}></StudentInfo>
      </div>
      <Person></Person> */}
    </>
  );
}


export default App;