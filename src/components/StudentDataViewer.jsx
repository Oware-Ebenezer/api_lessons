import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const StudentDataViewer = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newStudent, setNewStudent] = useState({
    name: "",
    city: "",
    email: "",
  });
  const [search, setSearch] = useState("");

  const fetchStudents = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudents = () => {
    if (!newStudent.name || !newStudent.city || !newStudent.email) {
      toast.error("All fields required");
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents([data, ...students]);
        setNewStudent({ name: "", email: "", city: "" });
      });
    toast.success("Student added");
  };

  const deleteStudent = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter((student) => student.id !== id));
      toast.success("Student removed");
    });
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-green-500">
        Fetching students data....
      </p>
    );
  const searchFilter = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-amber-50 py-10 flex flex-col items-center"
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-8">
        Student Data Viewer
      </h1>
      <div className="bg-white p-6 rounded-xl shadow w-10/12 md:w-3/4 flex flex-col md:flex-row flex-wrap gap-4 mb-8">
        <input
          type="text"
          value={newStudent.name}
          placeholder="Full name"
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="border border-gray-400 px-4 py-2 rounded-md flex-1"
        />
        <input
          type="email"
          value={newStudent.email}
          placeholder="Email"
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
          className="border border-gray-400 px-4 py-2 rounded-md flex-1"
        />
        <input
          type="text"
          value={newStudent.city}
          placeholder="City"
          onChange={(e) =>
            setNewStudent({ ...newStudent, city: e.target.value })
          }
          className="border border-gray-400 px-4 py-2 rounded-md flex-1"
        />
        <button
          onClick={addStudents}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      {/* SERACH FILTER */}
      <div className="bg-white p-6 rounded-xl shadow w-11/12 md:w-3/4 flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Name"
          className="border border-gray-400 px-4 py-2 rounded-md flex-1"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Search
        </button>
      </div>

      {/* HANDLING CRUD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 md:w-3/4">
        {searchFilter.length > 0 ? (
          searchFilter.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl p-5 shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-1">
                {student.name}
              </h2>
              <p className="text-gray-700">{student.email}</p>
              <p className="text-gray-600 text-sm">
                {student.address?.city || student.city}
              </p>
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-100 px-2 py-1 rounded-xl mt-3 text-red-600 hover:text-red-800 text-sm font-semibold"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No students found.</p>
        )}
      </div>
      <button
        onClick={fetchStudents}
        className="mt-8 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
      >
        Reload All
      </button>
    </div>
  );
};

export default StudentDataViewer;
