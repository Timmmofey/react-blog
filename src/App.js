import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./notFound";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/create" element={<Create/>}/> 
            <Route path="/blogs/:id" element={<BlogDetails/>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>  
			  </main> 
      </div>
    </Router> 
  );
}

export default App;
