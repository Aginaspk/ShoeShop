// import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setIsLoginOpen } from "../features/others/navbarSlice";
// import { User2, UserPlus2 } from "lucide-react";
// import { setSelectLog } from "../features/Loging/loginSlice";
// import { addUser } from "../features/Loging/loginSlice";
// import { loginUser, registerUser } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const userInitialState = {

//   name: '',
//   email: '',
//   password: ''

// }
// const loginInitialState = {
//   email: '',
//   password: ''
// }


// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate()
//   const [newUserInput, setNewUserInput] = useState(userInitialState)
//   const [loginInput, setIsLoginInput] = useState(loginInitialState)
//   const { isLoginOpen } = useSelector(state => state.navbar)
//   const { selectLog } = useSelector(state => state.log)
//   useEffect(() => {
//     dispatch(setSelectLog('login'))
//   }, [])


//   const getNewUserData = (e) => {
//     setNewUserInput({
//       ...newUserInput,
//       [e.target.name]: e.target.value

//     })

//   }
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(registerUser(newUserInput)).unwrap();
//       toast.success("signup successfully")
//       dispatch(setSelectLog('sign'))
//     } catch (error) {
//       toast.success(error)
//     }

//   }

//   const getLoginInput = (e) => {
//     setIsLoginInput({
//       ...loginInput,
//       [e.target.name]: e.target.value
//     })

//   }

//   // const validate = (values) => {
//   //   const errors = {};
//   //   if (!values.email) {
//   //     errors.email = "Email is required";
//   //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//   //     errors.email = "Invalid email address";
//   //   }
//   //   if (!values.password) {
//   //     errors.password = "Password is required";
//   //   }
//   //   return errors;
//   // };


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await dispatch(loginUser(loginInput)).unwrap();
//       toast.success("login successfully")
//       dispatch(setIsLoginOpen(!isLoginOpen))
//     } catch (error) {
//       toast.success(error);
//     }
//   }

//   function onCloseModal() {
//     dispatch(setIsLoginOpen(!isLoginOpen))
//   }



//   return (
//     <>
//       {isLoginOpen && (
//         <dialog open id="my_modal_2" className="modal">
//           <div className="modal-box bg-gray-100">

//             {selectLog === 'login' ?
//               <div class=" bg-white text-gray-900 flex justify-center">
//                 <div class="lg:w-full xl:w-full">

//                   <div class="mt-12 flex flex-col items-center">

//                     <h1 class="text-2xl xl:text-3xl font-extrabold">
//                       Log in
//                     </h1>
//                     <div class="w-full flex-1 mt-8">
//                       <div class="flex flex-col items-center">
//                         <button
//                           class="w-full max-w-xs font-bold shadow-sm rounded-sm py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
//                           <div class="bg-white p-2 rounded-full">
//                             <svg class="w-4" viewBox="0 0 533.5 544.3">
//                               <path
//                                 d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
//                                 fill="#4285f4" />
//                               <path
//                                 d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
//                                 fill="#34a853" />
//                               <path
//                                 d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
//                                 fill="#fbbc04" />
//                               <path
//                                 d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
//                                 fill="#ea4335" />
//                             </svg>
//                           </div>
//                           <span class="ml-4 hidden xl:block">
//                             Continue with Google
//                           </span>
//                         </button>


//                       </div>

//                       <div class="xl:my-10 my-8 border-b text-center">
//                         <div
//                           class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                           Or Log in with e-mail
//                         </div>
//                       </div>

//                       <div class="mx-auto max-w-xs">
//                         <form action="" onSubmit={handleLogin}>
//                           <input
//                             name="email"
//                             onChange={getLoginInput}
//                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                             type="email" placeholder="Email" />
//                           <input
//                             name="password"
//                             onChange={getLoginInput}
//                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
//                             type="password" placeholder="Password" />
//                           <button
//                             type="submit"
//                             class="mt-5 tracking-wide font-semibold bg-[#CF4616] rounded-sm text-gray-100 w-full py-4  hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

//                             <User2 />
//                             <span class="ml-3">
//                               Log in
//                             </span>
//                           </button>
//                         </form>


//                         <p className="text-sm underline text-center p-3 text-gray-600 tracking-wide font-medium" onClick={() => dispatch(setSelectLog('sign'))}>Not a User?</p>


//                         <p class="mt-6 text-xs text-gray-600 text-center">
//                           I agree to abide by templatana's
//                           <a href="#" class="border-b border-gray-500 border-dotted">
//                             Terms of Service
//                           </a>
//                           and its
//                           <a href="#" class="border-b border-gray-500 border-dotted">
//                             Privacy Policy
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//               :

//               // register


//               <div class=" bg-white text-gray-900 flex justify-center">
//                 <div class="lg:w-full xl:w-full">

//                   <div class="mt-12 flex flex-col items-center">

//                     <h1 class="text-2xl xl:text-3xl font-extrabold">
//                       Sign in
//                     </h1>
//                     <div class="w-full flex-1 mt-8">
//                       <div class="flex flex-col items-center">
//                         <button
//                           class="w-full max-w-xs font-bold shadow-sm rounded-sm py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
//                           <div class="bg-white p-2 rounded-full">
//                             <svg class="w-4" viewBox="0 0 533.5 544.3">
//                               <path
//                                 d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
//                                 fill="#4285f4" />
//                               <path
//                                 d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
//                                 fill="#34a853" />
//                               <path
//                                 d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
//                                 fill="#fbbc04" />
//                               <path
//                                 d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
//                                 fill="#ea4335" />
//                             </svg>
//                           </div>
//                           <span class="ml-4 hidden xl:block">
//                             Continue with Google
//                           </span>
//                         </button>


//                       </div>

//                       <div class=" my-4 border-b text-center">
//                         <div
//                           class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                           Or Sign up with e-mail
//                         </div>
//                       </div>

//                       <div class="mx-auto max-w-xs">
//                         <form action="" onSubmit={handleRegister}>
//                           <input
//                             required
//                             value={newUserInput.name}
//                             name="name"
//                             onChange={getNewUserData}
//                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
//                             type="text" placeholder="Username" />

//                           <input
//                             required
//                             value={newUserInput.email}
//                             name="email"
//                             onChange={getNewUserData}
//                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
//                             type="email" placeholder="Email" />
//                           <input
//                             required
//                             value={newUserInput.password}
//                             name="password"
//                             onChange={getNewUserData}
//                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
//                             type="password" placeholder="Password" />
//                           <button
//                             type="submit"
//                             class="mt-5 tracking-wide font-semibold bg-[#CF4616] rounded-sm text-gray-100 w-full py-4  hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

//                             <UserPlus2 />
//                             <span class="ml-3">
//                               Sign up
//                             </span>
//                           </button>


//                           <p className="text-sm underline text-center p-3 text-gray-600 tracking-wide font-medium" onClick={() => dispatch(setSelectLog('login'))}>Already User?</p>


//                           <p class="mt-6 text-xs text-gray-600 text-center">
//                             I agree to abide by templatana's
//                             <a href="#" class="border-b border-gray-500 border-dotted">
//                               Terms of Service
//                             </a>
//                             and its
//                             <a href="#" class="border-b border-gray-500 border-dotted">
//                               Privacy Policy
//                             </a>
//                           </p>
//                         </form>
//                       </div>

//                     </div>

//                   </div>
//                 </div>

//               </div>
//             }



//           </div>
//           <form method="dialog" className="modal-backdrop bg-black/50" onSubmit={onCloseModal}>
//             <button type="submit">Close</button>
//           </form>
//         </dialog>
//       )}

//     </>
//   );
// }

// export default Login




import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoginOpen } from "../features/others/navbarSlice";
import { User2, UserPlus2 } from "lucide-react";
import { setSelectLog } from "../features/Loging/loginSlice";
import { loginUser, registerUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const userInitialState = {
  name: '',
  email: '',
  password: ''
};

const loginInitialState = {
  email: '',
  password: ''
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUserInput, setNewUserInput] = useState(userInitialState);
  const [loginInput, setIsLoginInput] = useState(loginInitialState);
  const [newUserErrors, setNewUserErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  const { isLoginOpen } = useSelector(state => state.navbar);
  const { selectLog } = useSelector(state => state.log);

  useEffect(() => {
    dispatch(setSelectLog('login'));
  }, []);

  const validateNewUser = () => {
    const errors = {};
    if (!newUserInput.name) errors.name = "Name is required";
    if (!newUserInput.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newUserInput.email)) {
      errors.email = "Invalid email address";
    }
    if (!newUserInput.password) {
      errors.password = "Password is required";
    } else if (newUserInput.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    setNewUserErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateLogin = () => {
    const errors = {};
    if (!loginInput.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginInput.email)) {
      errors.email = "Invalid email address";
    }
    if (!loginInput.password) {
      errors.password = "Password is required";
    }
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getNewUserData = (e) => {
    setNewUserInput({
      ...newUserInput,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateNewUser()) return;

    try {
      const response = await dispatch(registerUser(newUserInput)).unwrap();
      toast.success("Signup successfully");
      dispatch(setSelectLog('sign'));
    } catch (error) {
      toast.error(error);
    }
  };

  const getLoginInput = (e) => {
    setIsLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const user = await dispatch(loginUser(loginInput)).unwrap();
      toast.success("Login successfully");
      dispatch(setIsLoginOpen(!isLoginOpen));
    } catch (error) {
      toast.error(error);
    }
  };

  function onCloseModal() {
    dispatch(setIsLoginOpen(!isLoginOpen));
  }

  return (
    <>
      {isLoginOpen && (
        <dialog open id="my_modal_2" className="modal">
          <div className="modal-box bg-gray-100">
            {selectLog === 'login' ? (
              <div className="bg-white text-gray-900 flex justify-center">
                <div className="lg:w-full xl:w-full">
                  <div className="mt-12 flex flex-col items-center">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Log in</h1>
                    <div className="w-full flex-1 mt-8">
                      <div className="flex flex-col items-center">
                        <button className="w-full max-w-xs font-bold shadow-sm rounded-sm py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                          <div className="bg-white p-2 rounded-full">
                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                              <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                              <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                              <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                              <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                            </svg>
                          </div>
                          <span className="ml-4 hidden xl:block">Continue with Google</span>
                        </button>
                      </div>

                      <div className="xl:my-10 my-8 border-b text-center">
                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                          Or Log in with e-mail
                        </div>
                      </div>

                      <div className="mx-auto max-w-xs">
                        <form onSubmit={handleLogin}>
                          <input
                            name="email"
                            onChange={getLoginInput}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Email"
                          />
                          {loginErrors.email && <p className="text-red-500 text-sm mt-1">{loginErrors.email}</p>}
                          <input
                            name="password"
                            onChange={getLoginInput}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password"
                            placeholder="Password"
                          />
                          {loginErrors.password && <p className="text-red-500 text-sm mt-1">{loginErrors.password}</p>}
                          <button
                            type="submit"
                            className="mt-5 tracking-wide font-semibold bg-[#CF4616] rounded-sm text-gray-100 w-full py-4 hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          >
                            <User2 />
                            <span className="ml-3">Log in</span>
                          </button>
                        </form>

                        <p className="text-sm underline text-center p-3 text-gray-600 tracking-wide font-medium" onClick={() => dispatch(setSelectLog('sign'))}>
                          Not a User?
                        </p>

                        <p className="mt-6 text-xs text-gray-600 text-center">
                          I agree to abide by templatana's
                          <a href="#" className="border-b border-gray-500 border-dotted">
                            Terms of Service
                          </a>
                          and its
                          <a href="#" className="border-b border-gray-500 border-dotted">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white text-gray-900 flex justify-center">
                <div className="lg:w-full xl:w-full">
                  <div className="mt-12 flex flex-col items-center">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
                    <div className="w-full flex-1 mt-8">
                      <div className="flex flex-col items-center">
                        <button className="w-full max-w-xs font-bold shadow-sm rounded-sm py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                          <div className="bg-white p-2 rounded-full">
                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                              <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                              <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                              <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                              <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                            </svg>
                          </div>
                          <span className="ml-4 hidden xl:block">Continue with Google</span>
                        </button>
                      </div>

                      <div className="my-4 border-b text-center">
                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                          Or Sign up with e-mail
                        </div>
                      </div>

                      <div className="mx-auto max-w-xs">
                        <form onSubmit={handleRegister}>
                          <input
                            required
                            value={newUserInput.name}
                            name="name"
                            onChange={getNewUserData}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                            type="text"
                            placeholder="Username"
                          />
                          {newUserErrors.name && <p className="text-red-500 text-sm mt-1">{newUserErrors.name}</p>}
                          <input
                            required
                            value={newUserInput.email}
                            name="email"
                            onChange={getNewUserData}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                            type="email"
                            placeholder="Email"
                          />
                          {newUserErrors.email && <p className="text-red-500 text-sm mt-1">{newUserErrors.email}</p>}
                          <input
                            required
                            value={newUserInput.password}
                            name="password"
                            onChange={getNewUserData}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                            type="password"
                            placeholder="Password"
                          />
                          {newUserErrors.password && <p className="text-red-500 text-sm mt-1">{newUserErrors.password}</p>}
                          <button
                            type="submit"
                            className="mt-5 tracking-wide font-semibold bg-[#CF4616] rounded-sm text-gray-100 w-full py-4 hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          >
                            <UserPlus2 />
                            <span className="ml-3">Sign up</span>
                          </button>

                          <p className="text-sm underline text-center p-3 text-gray-600 tracking-wide font-medium" onClick={() => dispatch(setSelectLog('login'))}>
                            Already User?
                          </p>

                          <p className="mt-6 text-xs text-gray-600 text-center">
                            I agree to abide by templatana's
                            <a href="#" className="border-b border-gray-500 border-dotted">
                              Terms of Service
                            </a>
                            and its
                            <a href="#" className="border-b border-gray-500 border-dotted">
                              Privacy Policy
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <form method="dialog" className="modal-backdrop bg-black/50" onSubmit={onCloseModal}>
            <button type="submit">Close</button>
          </form>
        </dialog>
      )}
    </>
  );
}

export default Login;