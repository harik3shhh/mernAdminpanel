import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./Layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";

const App = () =>{
  return <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/services" element={ <Services />}/>

        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>

        <Route path="/logout" element={ <Logout />}/>
        <Route path="*" element={ <Error />}/>


        {/* Nested root for Admin navigation */}
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<AdminUsers />} />
        <Route path="contacts" element={<AdminContacts />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  </>
};

export default App;