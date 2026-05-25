// src/App.js

import React, { useState } from "react";
import "./App.css";

import {
  LayoutDashboard,
  FolderKanban,
  ShoppingBag,
  User,
  Bell,
  Search,
  Sun,
  Moon,
  Settings,
  ChevronDown,
  Star,
  Menu,
  X,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { month: "Jan", users: 12000, last: 5000 },
  { month: "Feb", users: 8000, last: 14000 },
  { month: "Mar", users: 15000, last: 21000 },
  { month: "Apr", users: 24000, last: 7000 },
  { month: "May", users: 29000, last: 15000 },
  { month: "Jun", users: 18000, last: 25000 },
  { month: "Jul", users: 24000, last: 31000 },
];

const barData = [
  { name: "Linux", value: 18000 },
  { name: "Mac", value: 31000 },
  { name: "iOS", value: 22000 },
  { name: "Windows", value: 35000 },
  { name: "Android", value: 14000 },
  { name: "Other", value: 26000 },
];

const pieData = [
  { name: "United States", value: 52 },
  { name: "Canada", value: 23 },
  { name: "Mexico", value: 14 },
  { name: "Other", value: 11 },
];

const COLORS = ["#9b8cff", "#79b8ff", "#65d6ad", "#d4d4d8"];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={theme}>
      <div className="dashboard">
        {/* MOBILE OVERLAY */}
        {openSidebar && (
          <div
            className="overlay"
            onClick={() => setOpenSidebar(false)}
          ></div>
        )}

        {/* SIDEBAR */}
        <aside className={`sidebar ${openSidebar ? "showSidebar" : ""}`}>
          <div className="logo">
            <div className="logoCircle">B</div>
            <h2>ByeWind</h2>

            <button
              className="closeBtn"
              onClick={() => setOpenSidebar(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="section">
            <p className="sectionTitle">Favorites</p>

            <div className="navItem active">
              <LayoutDashboard size={18} />
              Overview
            </div>

            <div className="navItem">
              <FolderKanban size={18} />
              Projects
            </div>
          </div>

          <div className="section">
            <p className="sectionTitle">Dashboards</p>

            <div className="navItem">
              <ShoppingBag size={18} />
              eCommerce
            </div>

            <div className="navItem">
              <FolderKanban size={18} />
              Projects
            </div>
          </div>

          <div className="section">
            <p className="sectionTitle">Pages</p>

            <div className="navItem">
              <User size={18} />
              User Profile
            </div>

            <div className="navItem">
              <Star size={18} />
              Campaigns
            </div>

            <div className="navItem">
              <Settings size={18} />
              Account
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="main">
          {/* TOPBAR */}
          <div className="topbar">
            <div className="topLeft">
              <button
                className="menuBtn"
                onClick={() => setOpenSidebar(true)}
              >
                <Menu size={22} />
              </button>

              <LayoutDashboard size={18} />
              <Star size={18} />

              <div className="divider"></div>

              <h1>Dashboards / Default</h1>
            </div>

            <div className="topRight">
              <div className="search">
                <Search size={16} />
                <input type="text" placeholder="Search" />
              </div>

              <div
                className="iconBtn"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                {theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </div>

              <div className="iconBtn">
                <Bell size={18} />
              </div>
            </div>
          </div>

          {/* HEADER */}
          <div className="overviewHeader">
            <h2>Overview</h2>

            <div className="today">
              Today <ChevronDown size={16} />
            </div>
          </div>

          {/* STATS */}
          <div className="statsGrid">
            {[
              {
                title: "Views",
                value: "7,265",
                percent: "+11.01%",
              },
              {
                title: "Visits",
                value: "3,671",
                percent: "-0.03%",
              },
              {
                title: "New Users",
                value: "256",
                percent: "+15.03%",
              },
              {
                title: "Active Users",
                value: "2,318",
                percent: "+6.08%",
              },
            ].map((item, i) => (
              <div className="statCard" key={i}>
                <h4>{item.title}</h4>

                <div className="statRow">
                  <h1>{item.value}</h1>
                  <span>{item.percent}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="contentGrid">
            {/* LINE CHART */}
            <div className="card">
              <div className="cardTitle">
                <h3>Total Users</h3>

                <div className="chartLegend">
                  <span>This year</span>
                  <span>Last year</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={340}>
                <LineChart data={lineData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    opacity={0.08}
                  />

                  <XAxis dataKey="month" stroke="#8b8b95" />
                  <YAxis stroke="#8b8b95" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#9b8cff"
                    strokeWidth={3}
                    dot={false}
                  />

                  <Line
                    type="monotone"
                    dataKey="last"
                    stroke="#79b8ff"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* WEBSITE TRAFFIC */}
            <div className="card">
              <div className="cardTitle">
                <h3>Traffic by Website</h3>
              </div>

              {[
                ["Google", 70],
                ["YouTube", 55],
                ["Instagram", 40],
                ["Pinterest", 65],
                ["Facebook", 30],
                ["Twitter", 25],
              ].map((item, i) => (
                <div className="websiteItem" key={i}>
                  <p>{item[0]}</p>

                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${item[1]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="bottomGrid">
            {/* BAR CHART */}
            <div className="card">
              <div className="cardTitle">
                <h3>Traffic by Device</h3>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    opacity={0.08}
                  />

                  <XAxis dataKey="name" stroke="#8b8b95" />
                  <YAxis stroke="#8b8b95" />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    radius={[10, 10, 0, 0]}
                    fill="#79b8ff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* PIE CHART */}
            <div className="card">
              <div className="cardTitle">
                <h3>Traffic by Location</h3>
              </div>

              <div className="locationWrapper">
                <ResponsiveContainer width="50%" height={260}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="locationList">
                  {pieData.map((item, i) => (
                    <div className="locationItem" key={i}>
                      <div
                        className="locationDot"
                        style={{ background: COLORS[i] }}
                      ></div>

                      <p>{item.name}</p>

                      <strong>{item.value}%</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT PANEL */}
        <aside className="rightPanel">
          <div className="panelBlock">
            <h3>Notifications</h3>

            {[
              "You fixed a bug.",
              "New user registered.",
              "Released a new version.",
              "Submitted a bug.",
            ].map((item, i) => (
              <div className="notify" key={i}>
                <div className="notifyDot"></div>

                <div className="notifyText">
                  <h4>{item}</h4>
                  <p>59 minutes ago</p>
                </div>
              </div>
            ))}
          </div>

          <div className="panelBlock">
            <h3>Contacts</h3>

            {[
              "Natali Craig",
              "Drew Cano",
              "Andi Lane",
              "Koray Okumus",
              "Kate Morrison",
            ].map((name, i) => (
              <div className="contact" key={i}>
                <div className="avatar">
                  {name.charAt(0)}
                </div>

                <p>{name}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}