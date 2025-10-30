import Nav from "./Nav"
import { object, string } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BiLoaderCircle } from "react-icons/bi";

const CreateStudent = () => {

   const [loading, setLoading] = useState(false);
   let navigate = useNavigate();
 
  // validate the form using yup

  const studentSchemaValidation = object({
  firstName: string().required("Firstname is required"),
  lastName: string().required("Lastname is required"),
  age: string().required("Age is required"),
  phone: string() .required("Phone number is required").matches(
  /^234\d{10}$/, "Phone number must start with 234 and be 13 digits total"),
});
  const {
    register, handleSubmit,  formState: { errors },} = useForm({
    resolver: yupResolver(studentSchemaValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
    },
  });

  // use axios to post to endpoint
  const onSubmit = async (data) => {
    try {
      //
      setLoading(true);
      const saveResponse = await axios.post("http://localhost:3005/students", {
        id: uuidv4(),
        ...data,
      });
      if (saveResponse.status === 201) {
        setLoading(false);
        console.log("Record saved successfully");
          navigate("/");
      } 
    } catch (err) {
      console.log("There is error ", err);
    } finally {
      setLoading(false);
    }
  };


  return (
       <div className="flex flex-col justify-center items-center space-y-6">
      <Nav />
      {loading && (
        <div className="flex flex-row">
          <BiLoaderCircle className="text-4xl text-blue-600" />
          <BiLoaderCircle className="text-4xl text-blue-600" />
          <BiLoaderCircle className="text-4xl text-blue-600" />
        </div>
      )}
      {!loading && (
         // create a form within react hooks form
        <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-bold text-center text-gray-900">
                Create a new student
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
                  {errors.lastName && (
                    <span className="text-red-500">
                    {errors.lastName.message}
                    </span>
                  )}
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
                      type="number"
                      {...register("age")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                   {errors.age && (
                    <span className="text-red-500">
                    {errors.age.message}
                    </span>
                  )}
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
                      type="number"
                      {...register("phone")}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                   {errors.phone && (
                    <span className="text-red-500">
                    {errors.phone.message}

                    </span>
                  )}
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
              type="onSubmit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  )
};

export default CreateStudent;