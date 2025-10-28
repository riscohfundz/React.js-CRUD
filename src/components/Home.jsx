import { BiLoaderCircle } from "react-icons/bi"; 
import { useState, useEffect } from "react"
import axios from "axios";
import Nav from './Nav'
import { Link } from "react-router";

const Home = () => {
    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getAllStudentData =  async () =>{
            try {
              setLoading(true);
                const response = await axios.get('http://localhost:3005/students')
                response && response.status === 200;
                setStudentData(response.data);
            } catch (error) {
                console.log(error);
                
            } finally{
              console.log("Totally executed!");
              setLoading(false);
            }
        } 
        getAllStudentData();
    }, []);

  return (
   <div className="space-y-8">
      <Nav/>
    <main className="flex flex-col h-full justify-center items-center">
      {loading && (
          <div className="flex justify-center items-center gap-2 animate-spin text-blue-600 text-4xl">
            <BiLoaderCircle />
            <BiLoaderCircle />
            <BiLoaderCircle />
          </div>
      )}

    {!loading && studentData && (
      <div className="table-auto overflow-x-auto">
      <h1 className="text-3xl font-bold text-center">Student's Data</h1>
     <table className="min-w-full divide-y">
       <thead className="bg-gray-50">
       <tr className="px-10 py-4 text-left tracking-wider font-medium">
        <th className="px-10 py-4 text-left tracking-wider font-medium">ID</th>
        <th className="px-10 py-4 text-left tracking-wider font-medium">Firstname</th>
        <th className="px-10 py-4 text-left tracking-wider font-medium">Lastname</th>
        <th className="px-10 py-4 text-left tracking-wider font-medium">Phone</th>
        <th className="px-10 py-4 text-left tracking-wider font-medium">Age</th>
        <th className="px-10 py-4 text-left tracking-wider font-medium">Action</th>
       </tr>
     </thead>
    <tbody>
        {studentData.map((student, index) => {
            const {id, firstName, lastName, phone, age } = student;
             return(
                    <tr key={index} className="odd:bg-gray-300 even:bg-white">
                        <td className="px-10 py-4 text-left">{id}</td>
                        <td className="px-10 py-4 text-left">{firstName}</td>
                        <td className="px-10 py-4 text-left">{lastName}</td>
                        <td className="px-10 py-4 text-left">{phone}</td>
                        <td className="px-10 py-4 text-left">{age}</td>
                        <td>
                          <Link to={`/read-student/${id}`}>
                           <span>👁️</span> 
                           </Link>
                          <Link to={`/update-student/${id}`}>
                           <span>✒️</span>
                           </Link>
                           <span>❌</span> 
                        </td>
                    </tr>
            )
        })
      }
   </tbody>
</table>
</div>)}
</main>
</div>
  )
}

export default Home;