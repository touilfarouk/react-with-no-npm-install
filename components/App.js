 const { BrowserRouter , Route, Routes } = ReactRouterDOM;
 import Layout from "./pages/Layout";
 import Home from "./pages/Home";
 import Blogs from "./pages/Blogs";
 import Contact from "./pages/Contact";
 import NoPage from "./pages/NoPage";
const App =()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default  App;
