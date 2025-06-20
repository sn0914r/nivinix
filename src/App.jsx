import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/common/LandingPage";
import NotFound from "./pages/common/NotFound";
import TestimonialForm from "./pages/common/TestimonialForm";

import AdminDashboard from "./pages/admin/AdminDashboard";
import TestimonialsPageAdmin from "./pages/admin/TestimonialPage";
import MessageDashboardAdmin from "./pages/admin/messages/MessageDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/testimonial" element={<TestimonialForm />}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      
      <Route path="/admin-dashboard/testimonials" element={<TestimonialsPageAdmin/>}/>
      <Route path="/admin-dashboard/messages" element={<MessageDashboardAdmin/>}/>
    </Routes>
  )
}

export default App
