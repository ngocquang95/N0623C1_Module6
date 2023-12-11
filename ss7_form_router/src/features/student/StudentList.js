import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDeletion from "../../components/ModalDeletion";
import Swal from "sweetalert2";
import Pagination from "../../components/Pagination";

function StudentList() {
  const [triggerReleadList, setTriggerReleadList] = useState(true);

  const handleDelete = (student) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        async function deleteData() {
          try {
            await axios.delete(`http://localhost:3001/students/${student.id}`);
            // delete thành công => setState
            setTriggerReleadList(!triggerReleadList);
          } catch (error) {
            console.error(error);
          }
        }
        deleteData();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    // delete theo id student
    // alert(studentDeletion.id)
  };

  return (
    // <Pagination perPage={2}>
    // {(repositories) => <Repositories repositories={repositories} />}
    // </Pagination>
    <Pagination perPage={1} url="http://localhost:3001/students">
      {(students) => (
        <>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-primary" to="/student/create">
              Add
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={`/student/edit/${student.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(student)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <ModalDeletion
        title="Xóa học sinh"
        targetName={` ${studentDeletion.lastName} ${studentDeletion.firstName}`}
        onClick={handleDelete}
      /> */}
        </>
      )}
    </Pagination>
  );
}

export default StudentList;
