import React, { useState, useEffect } from "react";

function Students() {
  const customMarginStyle = {
    marginLeft: "90px",
    width: "800px",
  };

  const sectionHeaderStyle = {
    fontWeight: "bold",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    width: "231px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    fontSize: "16px",
    padding: "10px 15px", // Increased padding for more prominent buttons
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Slightly raised appearance
    borderRadius: "5px",
    backgroundColor: "#007BFF", // Background color
    color: "white", // Text color
    border: "none", // Remove border
    cursor: "pointer", // Cursor on hover
    margin: "5px", // Add some margin between buttons
  };

  const sections = ["WebDev1", "WebDev2", "WebDev3"];

  const [selectedSection, setSelectedSection] = useState("WebDev1");
  const [newStudent, setNewStudent] = useState({
    name: "",
    id: "",
    contactNumber: "",
  });
  const [editingStudent, setEditingStudent] = useState(null);

  const [students, setStudents] = useState(() => {
    const storedData = localStorage.getItem("studentsData");
    return storedData ? JSON.parse(storedData) : {
      WebDev1: [
        { name: "John Doe", id: "001", contactNumber: "123-456-7890" },
        { name: "Jane Smith", id: "002", contactNumber: "987-654-3210" },
        { name: "Alice Johnson", id: "003", contactNumber: "555-123-4567" },
        { name: "Bob Johnson", id: "004", contactNumber: "555-987-6543" },
        { name: "Eve Davis", id: "005", contactNumber: "111-222-3333" },
      ],
      WebDev2: [
        { name: "Doe", id: "006", contactNumber: "123-456-7890" },
        { name: "Smith", id: "007", contactNumber: "987-654-3210" },
        { name: " Johnson", id: "008", contactNumber: "555-123-4567" },
        { name: " Johnson", id: "009", contactNumber: "555-987-6543" },
        { name: "Davis", id: "010", contactNumber: "111-222-3333" }
      ],
      WebDev3: [
        { name: "John ", id: "011", contactNumber: "123-456-7890" },
        { name: "Jane ", id: "012", contactNumber: "987-654-3210" },
        { name: "Alice ", id: "013", contactNumber: "555-123-4567" },
        { name: "Bob ", id: "014", contactNumber: "555-987-6543" },
        { name: "Eve ", id: "015", contactNumber: "111-222-3333" },
      ],
    };
  });

  useEffect(() => {
    localStorage.setItem("studentsData", JSON.stringify(students));
  }, [students]);

  const handleEdit = (student) => {
    setNewStudent({ ...student });
    setEditingStudent(student);
  };

  const tableContainerStyle = {
    marginLeft: "1px",
    width: "750px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    border: "2px solid #ccc",
    marginBottom: "30px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const thTdStyle = {
    border: "2px solid #ccc",
    padding: "10px",
    textAlign: "left",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
  };

  const handleDelete = (studentId) => {
    setStudents((prevStudents) => {
      const updatedStudents = { ...prevStudents };
      updatedStudents[selectedSection] = updatedStudents[selectedSection].filter(
        (s) => s.id !== studentId
      );
      return updatedStudents;
    });
  };

  const handleAddOrUpdateStudent = () => {
    if (!/^\d+$/.test(newStudent.id) || !/^\d+$/.test(newStudent.contactNumber)) {
      alert("ID Number and Contact Number should contain only numeric characters.");
      return;
    }

    if (editingStudent) {
      setStudents((prevStudents) => {
        const updatedStudents = { ...prevStudents };
        const studentIndex = updatedStudents[selectedSection].findIndex((s) => s.id === editingStudent.id);
        if (studentIndex !== -1) {
          updatedStudents[selectedSection][studentIndex] = { ...newStudent, id: editingStudent.id };
        }
        return updatedStudents;
      });
      setEditingStudent(null);
    } else {
      const nameExists = students[selectedSection].some((s) => s.name === newStudent.name);
      const idExists = students[selectedSection].some((s) => s.id === newStudent.id);

      if (nameExists || idExists) {
        alert("A student with the same name or ID already exists in the table.");
      } else {
        setStudents((prevStudents) => {
          const updatedStudents = { ...prevStudents };
          updatedStudents[selectedSection] = [...updatedStudents[selectedSection], { ...newStudent }];
          return updatedStudents;
        });
      }
    }
    setNewStudent({
      name: "",
      id: "",
      contactNumber: "",
    });
  };

  return (
    <div style={customMarginStyle}>
      <h1 className="mb-10" style={{ fontWeight: "bold", marginLeft: "90px", fontSize: "50px" }}>
        STUDENT SECTION
      </h1>
      <div>
        <h2 style={{ ...sectionHeaderStyle }}>Add Student</h2>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="ID Number"
            value={newStudent.id}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={newStudent.contactNumber}
            onChange={(e) => setNewStudent({ ...newStudent, contactNumber: e.target.value })}
          />
          <button style={buttonStyle} onClick={handleAddOrUpdateStudent}>
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4 p-4">
        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6" style={boxStyle}>
          <div className="flex items-center">
            <p className=" mr-2 text-sm text-gray-600">Section List</p>
            <select onChange={(e) => setSelectedSection(e.target.value)} value={selectedSection}>
              {sections.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
        </article>
      </div>

      <div style={tableContainerStyle}>
        <h2 style={{ ...sectionHeaderStyle, marginTop: "40px" }}>{selectedSection} Section</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle, width: "30%" }}>Name</th>
              <th style={{ ...thTdStyle, width: "20%" }}>ID Number</th>
              <th style={{ ...thTdStyle, width: "30%" }}>Contact Number</th>
              <th style={{ ...thTdStyle, width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students[selectedSection].map((student, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{student.name}</td>
                <td style={thTdStyle}>{student.id}</td>
                <td style={thTdStyle}>{student.contactNumber}</td>
                <td style={thTdStyle}>
                  <button style={buttonStyle} onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                  <button style={buttonStyle} onClick={() => handleEdit(student)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
