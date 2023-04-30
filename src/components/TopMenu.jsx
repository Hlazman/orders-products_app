import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopMenu = () => {
  const [date, setDate] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatter = new Intl.DateTimeFormat('en-US', options);

  useEffect(() => {
    const socket = io("http://localhost:3001")
    socket.on('activeSessions', setActiveSessions);
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
      <div className="container-fluid shadow-lg p-3">
        <NavLink to="/orders" className="navbar-brand nav-link">
              LOGO
            </NavLink>
        <div className="navbar-nav ms-auto">
          <div className="nav-item me-3">
            <span className="navbar-text me-2">{formatter.format(date)}</span>
          </div>
          <div className="nav-item">
            <span className="badge bg-secondary"> Active Sessions: {activeSessions}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
