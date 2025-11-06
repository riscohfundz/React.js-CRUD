import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router"


const UpdateStudent = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {
    register, handleSubmit, reset,  formState: { errors },} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
    },
  });
  useEffect(() => {
    const updateSingleData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/students/${id}`);
        reset(response.data);
        
      } catch (error) {
        console.log(error.message);
        
        
      } finally{
        console.log("Updated the Id");
        
      }
      
    }
    updateSingleData();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
       await axios.put(`http://localhost:3005/students/${id}`, data);
        navigate('/');
    } catch (error) {
      console.log(error.message);
      
    }


  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-6">
     <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-bold text-center text-gray-900">
                Update student Data
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Firstname
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      type="text"
                      {...register("firstName")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    LastName
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      type="text"
                      {...register("lastName")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="age"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Age
                  </label>
                  <div className="mt-2">
                    <input
                      id="age"
                      type="text"
                      {...register("age")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      type="text"
                      {...register("phone")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="/">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
    </div>
  )
}

export default UpdateStudent