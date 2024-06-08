import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar';
 
function Adminrouting() {
    // let auth = {'role': Cookies.get('Role')}
 
    let auth = { 'role': "Admin" }
    return (
 
 
        auth.role == "Admin" ?
            <>
                <AdminNavbar />
                <section ><Outlet /></section>
            </> :
            <Navigate to="/" />
    )
}
export default Adminrouting;