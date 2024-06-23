import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Profile = React.lazy(() => import("pages/Profile"));
const Searchresults = React.lazy(() => import("pages/Searchresults"));
const Search = React.lazy(() => import("pages/Search"));
const TeamLibrary = React.lazy(() => import("pages/TeamLibrary"));
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teamlibrary" element={<TeamLibrary />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchresults" element={<Searchresults />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
