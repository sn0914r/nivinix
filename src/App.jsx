import LandingPage from "./pages/LandingPage";
import TestimonialForm from "./pages/TestimonialForm";
import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import TestimonialsPageAdmin from "./Admin/Testimonials";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/testimonial" element={<TestimonialForm />}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      
      <Route path="/admin-dashboard/testimonials" element={<TestimonialsPageAdmin/>}/>
    </Routes>
  )
}

export default App
