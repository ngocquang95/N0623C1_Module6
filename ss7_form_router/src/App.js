import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SignupForm from "./components/SignupForm";
import StudentList from "./features/student/StudentList";
import StudentCreation from "./features/student/StudentCreation";
import StudentEdition from "./features/student/StudentEdition";
import Pagination from "./components/Pagination";

function Repositories({ repositories }) {
  // if (repositories.length === 0) {
  //   return (
  //     <div className="alert alert-warning" role="alert">
  //       No results.
  //     </div>
  //   );
  // }
  // TODO Format with https://getbootstrap.com/docs/5.1/components/card/
  //   https://getbootstrap.com/docs/5.1/components/list-group/
  return (
    <div>
      {repositories.map((repository) => (
        <div className="repository-entry">
          <h4>{repository.firstName}</h4>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/student/create" element={<StudentCreation />} />
          <Route path="/student/edit/:id" element={<StudentEdition />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Pagination perPage={2}>
    //   {(repositories) => <Repositories repositories={repositories} />}
    // </Pagination>
  );
}

export default App;
