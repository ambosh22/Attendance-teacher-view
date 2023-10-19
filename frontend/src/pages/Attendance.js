import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function StudentForm({ isOpen, onClose, onSubmit, initialValues }) {
  const [values, setValues] = useState(initialValues || { name: "", studentNumber: "", contactNumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    onClose();
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 20px",
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content" style={formStyle}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Name:
            <input type="text" name="name" value={values.name} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Student Number:
            <input type="text" name="studentNumber" value={values.studentNumber} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Contact Number:
            <input type="text" name="contactNumber" value={values.contactNumber} onChange={handleChange} required style={inputStyle} />
          </label>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

function Attendance() {
  const [date, setDate] = useState(new Date());
  const [selectedTable, setSelectedTable] = useState(null); 
  const [tableData, setTableData] = useState({
    Webdev1: [
      { name: "John Doe", studentNumber: "001", contactNumber: "123-456-7890", attendance: "" },
      { name: "Jane Smith", studentNumber: "002", contactNumber: "987-654-3210", attendance: "" },
      { name: "Alice Johnson", studentNumber: "003", contactNumber: "555-123-4567", attendance: "" },
      { name: "Bob Johnson", studentNumber: "004", contactNumber: "555-987-6543", attendance: "" },
      { name: "Eve Davis", studentNumber: "005", contactNumber: "111-222-3333", attendance: "" },
    ],
    Webdev2: [
      { name: "John ", studentNumber: "006", contactNumber: "123-456-7890", attendance: "" },
      { name: "Jane ", studentNumber: "007", contactNumber: "987-654-3210", attendance: "" },
      { name: "Alice", studentNumber: "008", contactNumber: "555-123-4567", attendance: "" },
      { name: "Bob ", studentNumber: "009", contactNumber: "555-987-6543", attendance: "" },
      { name: "Eve ", studentNumber: "010", contactNumber: "111-222-3333", attendance: "" },
    ],
    Webdev3: [
      { name: "Doe", studentNumber: "011", contactNumber: "123-456-7890", attendance: "" },
      { name: "Smith", studentNumber: "012", contactNumber: "987-654-3210", attendance: "" },
      { name: "Johnson", studentNumber: "013", contactNumber: "555-123-4567", attendance: "" },
      { name: "Johny", studentNumber: "014", contactNumber: "555-987-6543", attendance: "" },
      { name: "Davis", studentNumber: "015", contactNumber: "111-222-3333", attendance: "" },
    ],
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editStudentData, setEditStudentData] = useState(null);
   const [attendanceStatus, setAttendanceStatus] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [clickedCell, setClickedCell] = useState(null);

    useEffect(() => {
      const dateString = date.toDateString();
      const storedData = localStorage.getItem(dateString);
    
      if (storedData) {
        const storedAttendance = JSON.parse(storedData);
    
        const updatedTableData = { ...tableData };
        for (const tableName in updatedTableData) {
          updatedTableData[tableName] = updatedTableData[tableName].map((student) => ({
            ...student,
            attendance: storedAttendance[tableName]?.[student.studentNumber] || "", // Load from local storage
          }));
        }
    
        setTableData(updatedTableData);
    
        // Update the studentSelectedStatus state
        const selectedStatus = {};
        for (const tableName in storedAttendance) {
          for (const studentNumber in storedAttendance[tableName]) {
            selectedStatus[studentNumber] = storedAttendance[tableName][studentNumber];
          }
        }
        setStudentSelectedStatus(selectedStatus);
      }
    }, [date]);
    const handleDateChange = (newDate) => {
      setDate(newDate);
    };

  
    const handleToggleStudentAttendance = (tableName, studentNumber, status) => {
      // Update attendance for the student and save in local storage
      const dateString = date.toDateString();
      const updatedTableData = { ...tableData };
    
      const studentIndex = updatedTableData[tableName].findIndex((student) => student.studentNumber === studentNumber);
    
      if (studentIndex !== -1) {
        const updatedStudent = updatedTableData[tableName][studentIndex];
        updatedStudent.attendance = status;
    
        // Update the individual status for the student
        const updatedStudentSelectedStatus = { ...studentSelectedStatus };
        updatedStudentSelectedStatus[studentNumber] = status;
        setStudentSelectedStatus(updatedStudentSelectedStatus);
    
        // Save the updated student data in local storage
        const storedData = localStorage.getItem(dateString) || "{}";
        const storedAttendance = JSON.parse(storedData);
        storedAttendance[tableName] = storedAttendance[tableName] || {};
        storedAttendance[tableName][studentNumber] = status;
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
    
        // Reset the clickedCell state to hide the expanded buttons
        setClickedCell(null);
    
        // Update the table data
        updatedTableData[tableName][studentIndex] = updatedStudent;
        setTableData(updatedTableData);
      }
    };
  const handleToggleAttendanceFilter = (status) => {
    setAttendanceStatus(status);
  };
  const handleOpenForm = () => {
    setIsFormOpen(true);
    setEditStudentData(null);
  };
  const [studentSelectedStatus, setStudentSelectedStatus] = useState({});

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmitForm = (studentData) => {
    if (editStudentData) {
      const { tableName, studentNumber } = editStudentData;
      const updatedTableData = { ...tableData };
      const studentIndex = updatedTableData[tableName].findIndex((student) => student.studentNumber === studentNumber);

      if (studentIndex !== -1) {
        updatedTableData[tableName][studentIndex] = { ...studentData, studentNumber };
        setTableData(updatedTableData);
        setIsFormOpen(false);

        const dateString = date.toDateString();
        const storedData = localStorage.getItem(dateString) || "{}";
        const storedAttendance = JSON.parse(storedData);
        storedAttendance[tableName] = storedAttendance[tableName] || {};
        storedAttendance[tableName][studentNumber] = studentData.attendance;
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
      }
    } else {
      if (selectedTable) {
        const updatedTableData = { ...tableData };
        updatedTableData[selectedTable].push(studentData);
        setTableData(updatedTableData);
        setIsFormOpen(false);

        const dateString = date.toDateString();
        const storedData = localStorage.getItem(dateString) || "{}";
        const storedAttendance = JSON.parse(storedData);
        storedAttendance[selectedTable] = storedAttendance[selectedTable] || {};
        storedAttendance[selectedTable][studentData.studentNumber] = studentData.attendance;
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
      }
    }
  };


  const containerStyle = {
    marginLeft: "90px",
    width: "800px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "30px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    marginBottom: "30px",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
  };

  const presentButtonStyle = {
    ...buttonStyle,
    backgroundColor: "green",
  };

  const absentButtonStyle = {
    ...buttonStyle,
    backgroundColor: "red",
  };

  const tableButtonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    margin: "5px",
  };

  const openTableModal = (table) => {
    setSelectedTable(table);
    setClickedCell(null); // Clear the clicked cell, so only the three buttons are visible
  };
  const closeTableModal = () => {
    setClickedCell(null); // Clear the clicked cell
    setSelectedTable(null);
  };
  const absenceData = {
    Webdev1: [
      { date: '2023-10-01', absent: true },
      { date: '2023-10-02', absent: false },
      // ... (Webdev1 absence data)
    ],
    Webdev2: [
      { date: '2023-10-01', absent: false },
      { date: '2023-10-02', absent: true },
      // ... (Webdev2 absence data)
    ],
    Webdev3: [
      { date: '2023-10-01', absent: true },
      { date: '2023-10-02', absent: false },
      // ... (Webdev3 absence data)
    ],
  };
  
  const totalDays = 30; 


 
  const calculateAbsentPercentage = (section) => {
    const sectionData = tableData[section];
    const totalDays = sectionData.length;

    if (totalDays === 0) {
      return "0.00%";
    }

    const absentCount = sectionData.filter((student) => student.attendance === "Absent").length;
    const absentPercentage = (absentCount / totalDays) * 100;
    return absentPercentage.toFixed(2) + "%";
  };
  
  return (
    <div style={containerStyle}>
      <h1 className="b-10" style={{ fontWeight: "bold", fontSize: "50px" }}>
        ATTENDANCE
      </h1>
      <div
        style={{
          backgroundColor: "#ffffcc", // Yellow background color
          border: "2px solid #ffcc00", // Yellow border color
          borderRadius: "10px", // Rounded corners
          padding: "20px",  
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)", // Drop shadow
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    {((item, index) => (
    <li key={index} style={{ marginBottom: '8px' }}>
      <span style={{ fontWeight: 'bold' }}>{item.time} -</span> {item.event}
    </li>
        ))}
      </ul>
     
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Absences for the day - Webdev1: {calculateAbsentPercentage('Webdev1')}
      </p>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Absences for the day - Webdev2: {calculateAbsentPercentage('Webdev2')}
      </p>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Absences for the day - Webdev3: {calculateAbsentPercentage('Webdev3')}
      </p>

        
      </div>

      <div>
        <h2>Attendance for {date.toDateString()}:</h2>
        {selectedTable && (
          <>
            <button onClick={closeTableModal} style={tableButtonStyle}>
              Close
            </button>

            <h1 className="b-10" style={{ fontWeight: "bold", fontSize: "20px" }}>
              {selectedTable}
            </h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Student Name</th>
                  <th style={thStyle}>Student Number</th>
                  <th style={thStyle}>Contact Number</th>
                  <th style={thStyle}>Attendance</th>
                </tr>
              </thead>
              <tbody>
                {tableData[selectedTable].map((student, index) => (
                  <tr key={student.studentNumber}>
                    <td style={tdStyle}>{student.name}</td>
                    <td style={tdStyle}>{student.studentNumber}</td>
                    <td style={tdStyle}>{student.contactNumber}</td>
                    <td style={tdStyle}>
                      {clickedCell === student.studentNumber ? (
                        <div>
                          <button
                            onClick={() => handleToggleStudentAttendance(selectedTable, student.studentNumber, "Present")}
                            style={presentButtonStyle}
                          >
                            Present
                          </button>
                          <button
                            onClick={() => handleToggleStudentAttendance(selectedTable, student.studentNumber, "Absent")}
                            style={absentButtonStyle}
                          >
                            Absent
                          </button>
                          <button
                            onClick={() => handleToggleStudentAttendance(selectedTable, student.studentNumber, "Skip")}
                            style={buttonStyle}
                          >
                            Skip
                          </button>
                          <button
                            onClick={() => handleToggleStudentAttendance(selectedTable, student.studentNumber, "Excuse")}
                            style={buttonStyle}
                          >
                            Excuse
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setClickedCell(student.studentNumber)}
                          style={buttonStyle}
                        >
                          {studentSelectedStatus[student.studentNumber] || "Select"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {!selectedTable && (
         <div>
         <button onClick={() => openTableModal("Webdev1")} style={tableButtonStyle}>
           Webdev1
         </button>
         <button onClick={() => openTableModal("Webdev2")} style={tableButtonStyle}>
           Webdev2
         </button>
         <button onClick={() => openTableModal("Webdev3")} style={tableButtonStyle}>
           Webdev3
         </button>
       </div>
        )}

      
      </div>

    </div>
  );
}

export default Attendance;


