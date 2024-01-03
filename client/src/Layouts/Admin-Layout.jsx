import { NavLink, Outlet } from "react-router-dom"
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa"
import { MdMessage } from "react-icons/md";



export const AdminLayout =()=>{
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                    <li><NavLink to="/admin/contacts"><MdMessage />contacts</NavLink></li>
                    <li><NavLink to="/admin/services"><FaRegListAlt />services</NavLink></li>
                    <li><NavLink to="/"><FaHome />Home`</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>

    <Outlet />
    </>
}
