import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const DeleteStudent = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch single student
  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/students/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSingleData();
  }, [id]);

  // Handle delete
  const handleDeleteData = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this student?")) {
        await axios.delete(`http://localhost:3005/students/${id}`);
        alert("Student deleted successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!student) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Delete Student Data
        </h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">First Name:</span> {student.firstName}
          </p>
          <p>
            <span className="font-semibold">Last Name:</span> {student.lastName}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {student.age}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {student.phone}
          </p>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Cancel
          </button>

          <button
            onClick={handleDeleteData}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
