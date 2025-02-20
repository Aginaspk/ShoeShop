import { CloudHail, User2 } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { adminLogin } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({
        email: "",
        password: "",
    })

    const getAdminInput = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(adminLogin(admin)).unwrap();
            console.log(admin);
            
            navigate('/admin',{ replace: true })
            toast.success("login successfully")
        } catch (error) {
            toast.success("login failed", error)
        }
    }
    return (
        <dialog open id="my_modal_2" className="modal">
            <div className="modal-box bg-gray-100">
                <div class=" bg-white text-gray-900 flex justify-center">
                    <div class="lg:w-full xl:w-full">

                        <div class="mt-12 flex flex-col items-center">

                            <h1 class="text-2xl xl:text-3xl font-extrabold">
                                Log in
                            </h1>
                            <div class="w-full flex-1 mt-5">

                                <div class="xl:mb-10 my-8 border-b text-center">
                                    <div
                                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Log in with e-mail
                                    </div>
                                </div>

                                <div class="mx-auto max-w-xs">
                                    <form action="" onSubmit={handleAdminLogin} >
                                        <input
                                            name="email"
                                            onChange={getAdminInput}
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email" placeholder="Email" />
                                        <input
                                            name="password"
                                            onChange={getAdminInput}
                                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password" placeholder="Password" />
                                        <button
                                            type="submit"
                                            class="mt-5 tracking-wide font-semibold bg-[#CF4616] rounded-sm text-gray-100 w-full py-4  hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                            <User2 />
                                            <span class="ml-3">
                                                Log in
                                            </span>
                                        </button>
                                    </form>


                                    <p className="text-sm underline text-center p-3 text-gray-600 tracking-wide font-medium">Only Admin Can Access</p>


                                    <p class="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by templatana's
                                        <a href="#" class="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" class="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </dialog>
    )
}

export default AdminLogin