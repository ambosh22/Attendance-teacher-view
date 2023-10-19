import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faUserGraduate, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

const data = [
  { name: "Jan", web1: 100, web2: 90, web3:50 },
  { name: "Feb", web1: 95, web2: 70, web3:100 },
  { name: "Mar", web1: 80, web2: 100 ,web3:87},
  { name: "Apr", web1: 78, web2: 90 ,web3:77},
  { name: "May", web1: 89, web2: 97 ,web3:67},
];

function Dashboard() {
  const numberOfStudents = 15;
  const numberOfRisk = 3;

  const containerStyle = {
    display: "flex",
    marginLeft: "90px",
    marginRight: "auto",
    width: "800px",
    textAlign: "left",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
    background: "#F5F5F5",
  };

  const leftBoxStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #ccc",
    paddingRight: "20px",
  };
  const middleBoxStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #ccc",
    paddingRight: "20px",
    marginLeft:"12px",
  };

  const rightBoxStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "10px",
    color: "#007BFF",
  };

  const headingStyle = {
    color: "#007BFF",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const numberStyle = {
    color: "#007BFF",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const notificationStyle = {
    backgroundColor: "#FF5733",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    marginLeft: "90px",
    width: "800px",
    marginTop: "10px",
  };

  const scheduleStyle = {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    marginLeft: "90px",
    width: "800px",
  };

  const schedule = [
    {
      day: "Monday",
      startTime: "7:30 AM",
      endTime: "5:00 PM",
    },
    {
      day: "Friday",
      startTime: "7:30 AM",
      endTime: "5:00 PM",
    },
  ];

  return (
    <div>
      <h1 className="b-10" style={{ fontWeight: "bold", marginLeft: "90px", fontSize: "50px" }}>
        DASHBOARD
      </h1>
      <div style={containerStyle}>
        <div style={leftBoxStyle}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div>
            <h2 style={headingStyle}>Number of Students</h2>
            <p style={numberStyle}>{numberOfStudents}</p>
          </div>
        </div><div style={middleBoxStyle}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faIdBadge} />
          </div>
          <div>
            <h2 style={headingStyle}>Student of Risk</h2>
            <p style={numberStyle}>{numberOfRisk}</p>
          </div>
        </div>
        

        <div style={rightBoxStyle}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={ faCubes } />
          </div>
          <div>
            <h2 style={headingStyle}>Section Handle</h2>
            <p style={numberStyle}>3</p>
          </div>
        </div>
        
      </div>
      <div className="schooltheme shadow-md mt-4" style={{ marginLeft: "90px",width: "450px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div className="box-wrapper">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 className="b-10" style={{ fontWeight: "bold", marginLeft: "20px", fontSize: "30px", color: "#333" }}>
                Attendance For this Yr
              </h1>
              <LineChart width={400} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="web1" stroke="#8884d8" />
                <Line type="monotone" dataKey="web2" stroke="#82ca9d" />
                <Line type="monotone" dataKey="web3" stroke="#d7b7a9" />
              </LineChart>
            </div>
            <div style={{ fontWeight: "bold", marginLeft: "100px", fontSize: "30px", color: "#333" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>Webdev1 90%</p>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>Webdev2 78%</p>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "#333" }}>Webdev3 89%</p>
            </div>
          </div>
        </div>
      </div>
      <div style={notificationStyle}>
        <strong>Important:</strong> You have a new notification!
      </div>
      <div style={scheduleStyle}>
        <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "5px" }} />
        <strong>Schedule:</strong>
        {schedule.map((item, index) => (
          <p key={index}>
            {item.day}: {item.startTime} - {item.endTime}
          </p>
        ))}
      </div>

      
    </div>
  );
}

export default Dashboard;
