import axios from "axios";
import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { Link, useParams } from "react-router";

const ReadStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSingleData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3005/students/${id}`);
        if (response.status === 200) {
          setStudent(response.data);
        }
      } catch (error) {
        console.log("Error fetching student:", error.message);
      } finally {
        console.log("I'm exhausted mah brr!");
        setLoading(false);
      }
    };
    getSingleData();
  }, [id]);

  // fallback placeholder avatar
  const placeholder =
    "https://ui-avatars.com/api/?name=" +
    encodeURIComponent(student?.name || "User");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center gap-2 animate-spin text-blue-600 text-4xl">
            <BiLoaderCircle />
            <BiLoaderCircle />
            <BiLoaderCircle />
          </div>
        ) : (
          <>
            {/* Student Image */}
            <img
              src={student?.image || placeholder}
              alt="Student"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              onError={(e) => (e.currentTarget.src = placeholder)}
            />

            {/* Student Info */}
            <div className="mt-4 text-sm text-gray-600">
              <p>
                <span className="font-medium">Firstname:</span>{" "}
                {student?.firstName || "Not provided"}
              </p>
              <p>
                <span className="font-medium">Lastname:</span>{" "}
                {student?.lastName || "N/A"}
              </p>
              <p>
                <span className="font-medium">Age:</span>{" "}
                {student?.age || "N/A"}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {student?.phone || "N/A"}
              </p>
            </div>

            {/* Back Button */}
            <Link to="/">
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                Back 🔙
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ReadStudent;
