"use client";
import { useState } from "react";
import css from "./author.module.css";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaPoll,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function AuthorSidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("dashboard");

  const menus = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "events", label: "Events", icon: <FaCalendarAlt /> },
    { id: "polls", label: "Polls", icon: <FaPoll /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <>
      <div className={css.menuToggle} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${css.sidebar} ${open ? css.open : css.closed}`}>
        <h2 className={css.logo}>Author Panel</h2>

        <ul className={css.menu}>
          {menus.map((item) => (
            <li
              key={item.id}
              className={`${css.menuItem} ${
                active === item.id ? css.active : ""
              }`}
              onClick={() => setActive(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
