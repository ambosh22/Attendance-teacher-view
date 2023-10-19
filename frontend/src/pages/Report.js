import React, { useState, useEffect } from "react";


  const reportContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "90px",
    marginRight: "90px",
    padding: "10px",
    width: "850px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    background: "#F5F5F5",
  };

  
  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#007BFF",
  };

  const classSelectionContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    width: "230px",
    background: "#fff",
  };

  const classSelectStyle = {
    textAlign: "left",
    marginTop: "10px",
    width: "150px",
    padding: "8px",
    borderRadius: "5px",
  };

  const sectionLabelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };
  

  const studentTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "center",
  };

  const addButtonStyle = {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const formStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  };
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    
    textAlign: "center", 
    width: "400px",
    fontSize: "16px",
    
  };
  
  const closeModalButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "24px", 
    fontSize: "20px", 
  color: "#888",
    color: "#888",
  };
  
  const modalContentStyle = {
    marginBottom: "20px",
    maxHeight: "300px", // Set the maximum height for scrolling
    overflowY: "auto",   // Add vertical scrollbar when the content overflows
  };
  
  const crudButtonStyle = {
    backgroundColor: "#ffec40", // Light yellow background
    color: "#000000", // Black text color
    border: "1px solid #d9d9d9", // Light gray border
    borderRadius: "10px", // Rounded corners
    padding: "8px 16px",
    cursor: "pointer",
    marginRight: "10px",
    marginTop: "10px",
    fontSize: "14px", // Adjusted button font size
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)", // Shadow
  };
  const crudButtonHoverStyle = {
    backgroundColor: "#ffe066", // Light yellow background on hover
    boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.3)", // Slightly increased shadow on hover
  };
  const crudInputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px", // Adjusted input font size
  };
  const crudOutputStyle = {
    backgroundColor: "#fff", // White background
    border: "2px solid #ffec40", // Yellow border
    borderRadius: "10px", // Rounded corners
    padding: "10px",
    fontSize: "16px", // Font size for the output
    marginBottom: "20px",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)", // Shadow
  };
  function Report() {
    
    const [studentsData, setStudentsData] = useState({
      WebDev1: [
        {
          name: "John Doe",
          studentNumber: "001",
          contactNumber: "123-456-7890",
          subjects: ["ITE 1", "ITE 2", "ITE 3"],
          absences: 5,  
        },  {
          name: "Jane Smith",
          studentNumber: "002",
          contactNumber: "987-654-3210",
          subjects: ["ITE 3", "ITE 2"],
          absences: 6,
        },  {
          name: "Alice Johnson",
          studentNumber: "003",
          contactNumber: "555-123-4567",
          subjects: ["ITE 1"],
          absences: 5,
        },  {
          name: "Eve Davis",
          studentNumber: "005",
          contactNumber: "111-222-3333",
          subjects: ["ITE 1", "ITE 2"],
          absences: 7,
        },  {
          name: "Bob Johnson",
          studentNumber:   "004",
          contactNumber: "555-987-6543",
          subjects: ["ITE 3"],
          absences: 8,
        },
      ],    
      WebDev2: [
        {
          name: "John",
          studentNumber: "006",
          contactNumber: "123-456-7890",
          subjects: ["ITE 1", "ITE 2", "ITE 3"],
          absences: 5,  
        },  {
          name: "Jane",
          studentNumber: "007",
          contactNumber: "987-654-3210",
          subjects: ["ITE 3", "ITE 2"],
          absences: 6,
        },  {
          name: "Alice",
          studentNumber: "008",
          contactNumber: "555-123-4567",
          subjects: ["ITE 1"],
          absences: 5,
        },  {
          name: "Eve",
          studentNumber: "010",
          contactNumber: "111-222-3333",
          subjects: ["ITE 1", "ITE 2"],
          absences: 7,
        },  {
          name: "Bob",
          studentNumber: "009",
          contactNumber: "555-987-6543",
          subjects: ["ITE 3"],
          absences: 8,
        },
      ],
      WebDev3: [
        {
          name: "Doe",
          studentNumber: "011",
          contactNumber: "123-456-7890",
          subjects: ["ITE 1", "ITE 2", "ITE 3"],
          absences: 5,  
        },  {
          name: "Smith",
          studentNumber: "012",
          contactNumber: "987-654-3210",
          subjects: ["ITE 3", "ITE 2"],
          absences: 6,
        },  {
          name: "Johnson",
          studentNumber: "013",
          contactNumber: "555-123-4567",
          subjects: ["ITE 1"],
          absences: 5,
        },  {
          name: "Johny",
          studentNumber: "014",
          contactNumber: "555-987-6543",
          subjects: ["ITE 1", "ITE 2"],
          absences: 7,
        },  {
          name: "Davis",
          studentNumber: "015",
          contactNumber: "111-222-3333",
          subjects: ["ITE 3"],
          absences: 8,
        },
      ],
    });

    const [selectedClass, setSelectedClass] = useState("WebDev1");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [newStudent, setNewStudent] = useState({
      name: "",
      studentNumber: "",
      contactNumber: "",
      subjects: [],
      absences: 0,
    });
    const loadTextPostsFromLocalStorage = () => {
      const savedTextPosts = localStorage.getItem("textPosts");
      if (savedTextPosts) {
        setTextPosts(JSON.parse(savedTextPosts));
      }
    };
    const saveTextPostsToLocalStorage = () => {
      localStorage.setItem("textPosts", JSON.stringify(textPosts));
    };
    

    const openModal = (student) => {
      setSelectedStudent(student);
      setIsCreating(false);
      setIsModalOpen(true);
    };
    const applyButtonHover = (event) => {
      event.currentTarget.style.backgroundColor = crudButtonHoverStyle.backgroundColor;
      event.currentTarget.style.boxShadow = crudButtonHoverStyle.boxShadow;
    };
    
    // Reset styles when not hovering
    const resetButtonStyles = (event) => {
      event.currentTarget.style.backgroundColor = crudButtonStyle.backgroundColor;
      event.currentTarget.style.boxShadow = crudButtonStyle.boxShadow;
    };
    const closeModal = () => {
      setSelectedStudent(null);
      setIsModalOpen(false);
    };

   
    const saveStudent = () => {
      if (isCreating) {
        // Create a new student
        setStudentsData((prevData) => ({
          ...prevData,
          [selectedClass]: [...prevData[selectedClass], newStudent],
        }));
      } else {
        // Update an existing student
        setStudentsData((prevData) => ({
          ...prevData,
          [selectedClass]: prevData[selectedClass].map((student) =>
            student.studentNumber === selectedStudent.studentNumber
              ? newStudent
              : student
          ),
        }));
      }
      setIsModalOpen(false);
    };
    const [textPosts, setTextPosts] = useState([]);
    const [postText, setPostText] = useState("");
    const [selectedTextPostIndex, setSelectedTextPostIndex] = useState(-1);
  
    useEffect(() => {
      // Load text posts from local storage when the component mounts
      loadTextPostsFromLocalStorage();
    }, []); 
  
    useEffect(() => {
      // Save text posts to local storage whenever they change
      saveTextPostsToLocalStorage();
    }, [textPosts]);
  
    // Functions to add, edit, and delete text posts
    const addTextPost = () => {
      if (postText) {
        setTextPosts((prevPosts) => [...prevPosts, postText]);
        setPostText("");
        saveTextPostsToLocalStorage(); // Save text posts after adding
      }
    };
    const editOrSaveTextPost = () => {
      if (selectedTextPostIndex !== -1) {
        // Save edited text post
        const updatedPosts = [...textPosts];
        updatedPosts[selectedTextPostIndex] = postText;
        setTextPosts(updatedPosts);
        setSelectedTextPostIndex(-1); // Clear selected index after saving
        setPostText("");
        saveTextPostsToLocalStorage(); // Save text posts after editing
      } else {
        // Add new text post
        addTextPost();
      }
    };
    const editTextPost = (index) => {
      setSelectedTextPostIndex(index);
      setPostText(textPosts[index]);
    };
  
    const deleteTextPost = (index) => {
      const updatedPosts = [...textPosts];
      updatedPosts.splice(index, 1);
      setTextPosts(updatedPosts);
      setSelectedTextPostIndex(-1); // Clear selected index after deleting
      saveTextPostsToLocalStorage(); // Save text posts after deleting
    };
  

    return (
      <div style={reportContainerStyle}>
        <h2 style={headerStyle}>Teacher's Student Report</h2>
        <div style={classSelectionContainerStyle}>
          <div style={sectionLabelStyle}>Section:</div>
          <div style={classSelectStyle}>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {Object.keys(studentsData).map((section) => (
                <option key={section} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table style={studentTableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>ID</th>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Contact Number</th>
              <th style={thTdStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData[selectedClass].map((student) => (
              <tr key={student.studentNumber}>
                <td style={thTdStyle}>{student.studentNumber}</td>
                <td style={thTdStyle}>{student.name}</td>
                <td style={thTdStyle}>{student.contactNumber}</td>
                <td style={thTdStyle}>
                  <button
                    style={addButtonStyle}
                    onClick={() => openModal(student)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (selectedStudent || isCreating) && (
        <div className="modal">
          <div className="modal-content" style={modalStyle}>
            <span className="close" style={closeModalButtonStyle} onClick={closeModal}>
              &times;
            </span>
            <h2>Student Details</h2>
            {isCreating ? (
              <div style={modalContentStyle}>
                <p>Create a New Student</p>
                <input
                  type="text"
                  placeholder="Name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  style={crudInputStyle}
        />
        {/* Add input fields for other student properties */}
        <button onClick={saveStudent} style={crudButtonStyle}>
          Save
        </button>
      </div>
    ) : (
      <div style={modalContentStyle}>
         <p>
          Name: <strong>{selectedStudent.name}</strong>
        </p>
        <p>
          ID: <strong>{selectedStudent.studentNumber}</strong>
        </p>
       
        <p>
          Subjects: <strong>{selectedStudent.subjects.join(", ")}</strong>
        </p>
        <p>
          Absences This Month: <strong>{selectedStudent.absences}</strong>
        </p>
        <h2 style={{ marginTop: "10px" }}>
                <b>STUDENT REPORT</b>
          </h2>
                <input
                  type="text"
                  placeholder="Enter your text post"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  style={crudInputStyle}
                />
               <button
                             onClick={editOrSaveTextPost}
                       style={crudButtonStyle}
                          onMouseEnter={applyButtonHover}
              onMouseLeave={resetButtonStyles}
                    > 
                  {selectedTextPostIndex !== -1 ? "Save" : "Add"}
                </button>
                <div style={crudOutputStyle}>
                  <ul>
                  {textPosts.map((text, index) => (
      <li
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
          padding: "10px",
          backgroundColor: "#f2f2f2", // Light gray background
          borderRadius: "10px", // Rounded corners
          border: "1px solid #ccc", // Light gray border
          boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)", // Shadow
          fontSize: "16px", // Font size for the output
          position: "relative",
        }}
      > <span>{text}</span>
                   
        <div>
          <button
            onClick={() => editTextPost(index)}
            style={crudButtonStyle}
            onMouseEnter={applyButtonHover}
            onMouseLeave={resetButtonStyles}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTextPost(index)}
            style={crudButtonStyle}
            onMouseEnter={applyButtonHover}
            onMouseLeave={resetButtonStyles}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
             
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;