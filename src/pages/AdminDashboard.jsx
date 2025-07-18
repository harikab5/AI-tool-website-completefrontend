/* src/pages/AdminDashboard.jsx */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBarChart2,
  FiShoppingBag,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import {
  BsLightning,
  BsRobot,
  BsGraphUp,
  BsPersonCheck,
  BsPalette,
  BsBriefcase,
} from "react-icons/bs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

/* ------------- Dummy data ------------- */
const quickStats = {
  totalUsers: 12483,
  revenue: 987423,
  activeServices: 6,
  tickets: 12,
};

const recentOrders = [
  {
    id: "#A100",
    user: "Alice",
    service: "Content Generation",
    date: "17 Jul 2025",
    status: "completed",
  },
  {
    id: "#A101",
    user: "Bob",
    service: "Data Analysis",
    date: "16 Jul 2025",
    status: "in-progress",
  },
  {
    id: "#A102",
    user: "Carol",
    service: "Automation",
    date: "16 Jul 2025",
    status: "pending",
  },
];

const serviceCards = [
  { id: 1, title: "Automation & Efficiency", icon: <BsLightning size={28} /> },
  { id: 2, title: "Data Analysis & Insights", icon: <BsGraphUp size={28} /> },
  {
    id: 3,
    title: "Content Generation (Gen-AI)",
    icon: <BsPalette size={28} />,
  },
  { id: 4, title: "Enhanced HCI", icon: <BsRobot size={28} /> },
  {
    id: 5,
    title: "Personalized Experiences",
    icon: <BsPersonCheck size={28} />,
  },
  { id: 6, title: "Industry Specific Apps", icon: <BsBriefcase size={28} /> },
];

/* ------------- main ------------- */
const AdminDashboard = () => {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-[#0c0d0c]" : "bg-gray-100"
      } text-white flex`}
    >
      {/* SIDE RAIL */}
      <SideRail dark={dark} setDark={setDark} />

      {/* SCROLLABLE CONTENT */}
      <main className="flex-1 p-6 md:p-8 space-y-10 overflow-y-auto">
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#e3d271]">Admin Dashboard</h1>
          <button className="text-sm px-4 py-2 rounded-xl border border-[#e3d271]/50 hover:bg-[#e3d271]/20 transition">
            Last login: 12 min ago
          </button>
        </header>

        {/* QUICK STATS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <StatCard label="Total Users" value={quickStats.totalUsers} />
          <StatCard
            label="Revenue (USD)"
            value={`$${quickStats.revenue.toLocaleString()}`}
          />
          <StatCard label="Active Services" value={quickStats.activeServices} />
          <StatCard label="Support Tickets" value={quickStats.tickets} />
        </motion.section>

        {/* SERVICES GRID */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#e3d271]">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </section>

        {/* ORDERS TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#e3d271]">
            Recent Orders
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#1a1a1a]/50 rounded-xl">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4">Order ID</th>
                  <th className="p-4">User</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="p-4">{o.id}</td>
                    <td className="p-4">{o.user}</td>
                    <td className="p-4">{o.service}</td>
                    <td className="p-4">{o.date}</td>
                    <td className="p-4">
                      <StatusBadge status={o.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ANALYTICS CHARTS */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#e3d271]">Analytics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Trend (Line) */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10"
            >
              <Line
                data={lineData}
                options={commonOptions("Revenue Trend (USD)")}
              />
            </motion.div>

            {/* Service Usage (Bar) */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10"
            >
              <Bar data={barData} options={commonOptions("Service Usage")} />
            </motion.div>

            {/* Traffic Sources (Doughnut) */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10"
            >
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </motion.div>
          </div>
        </section>

        {/* ACTIVITY LOG & QUICK ACTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left: full-span on mobile, 2 cols on lg */}
          <div className="lg:col-span-2">
            <ActivityLog />
          </div>

          {/* Right: Chart Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Mini Doughnut */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
              <h4 className="text-sm text-[#e3d271] mb-2">Traffic Sources</h4>
              <div className="h-23">
                <Doughnut data={miniDoughnut} options={miniOpts} />
              </div>
            </div>

            {/* Mini Bar */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
              <h4 className="text-sm text-[#e3d271] mb-2">Weekly Sign-ups</h4>
              <div className="h-23">
                <Bar data={miniBar} options={miniOpts} />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

/* ------------- sub-components ------------- */
const SideRail = ({ dark, setDark }) => (
  <aside className="w-20 bg-[#1a1a1a]/80 flex flex-col items-center py-8 space-y-8 border-r border-white/10">
    {[FiBarChart2, FiUsers, FiShoppingBag, FiActivity, FiSettings].map(
      (Icon, i) => (
        <button
          key={i}
          className="p-3 rounded-xl hover:bg-[#e3d271]/20 transition text-[#e3d271]"
          title={["Analytics", "Users", "Orders", "Logs", "Settings"][i]}
        >
          <Icon size={24} />
        </button>
      )
    )}
    <div className="flex-1" />
    <button
      onClick={() => setDark(!dark)}
      className="p-3 rounded-xl hover:bg-[#e3d271]/20 transition text-[#e3d271]"
      title="Toggle theme"
    >
      {dark ? "☀" : "🌙"}
    </button>
    <button
      className="p-3 rounded-xl hover:bg-red-500/20 transition text-red-500"
      title="Logout"
    >
      <FiLogOut size={24} />
    </button>
  </aside>
);

const StatCard = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
  >
    <p className="text-sm text-[#808080]">{label}</p>
    <p className="text-2xl font-bold text-[#e3d271]">{value}</p>
  </motion.div>
);

const ServiceCard = ({ title, icon }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-[#e3d271] transition cursor-pointer"
  >
    <div className="text-[#e3d271] mb-3">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </motion.div>
);

const StatusBadge = ({ status }) => {
  const colors = {
    completed: "bg-green-500/20 text-green-400",
    "in-progress": "bg-yellow-500/20 text-yellow-400",
    pending: "bg-red-500/20 text-red-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs ${colors[status]}`}>
      {status}
    </span>
  );
};

/* --------------  NEW FULL-WIDTH ACTIVITY LOG  -------------- */
const ActivityLog = () => {
  /* tiny random spark-line data */
  const sparkData = {
    labels: [...Array(8)].map((_, i) => `${i}h`),
    datasets: [
      {
        label: "Events",
        data: [3, 5, 2, 6, 4, 7, 5, 8],
        borderColor: "#e3d271",
        backgroundColor: "rgba(227, 210, 113, 0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const sparkOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const logs = [
    { icon: "🆕", text: "New user “David” signed up", time: "12:34 PM" },
    { icon: "📊", text: "Monthly report generated", time: "11:05 AM" },
    { icon: "🤖", text: "Gen-AI service updated to v2.3", time: "09:21 AM" },
    { icon: "💬", text: "Ticket #T101 resolved", time: "08:57 AM" },
    { icon: "☁", text: "Model deployment finished", time: "08:12 AM" },
    { icon: "🛒", text: "Order #A103 placed by “Eva”", time: "07:45 AM" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-lg font-bold text-[#e3d271]">Activity Log</h3>
        <div className="h-16 w-32 mt-4 md:mt-0">
          <Line data={sparkData} options={sparkOptions} />
        </div>
      </div>

      {/* timeline */}
      <div className="relative space-y-4">
        {/* vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-[#e3d271]/30" />
        {logs.map((l, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#e3d271]/50 flex-center">
              {l.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm">{l.text}</p>
              <p className="text-xs text-[#808080]">{l.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AdminDashboard;

/* 3️⃣  dummy data & helper */
const commonOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: "#808080" } },
    title: { display: true, text: title, color: "#e3d271", font: { size: 14 } },
  },
  scales: {
    x: { ticks: { color: "#808080" }, grid: { color: "#ffffff10" } },
    y: { ticks: { color: "#808080" }, grid: { color: "#ffffff10" } },
  },
});

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: "#e3d271",
      backgroundColor: "rgba(227, 210, 113, 0.2)",
      tension: 0.3,
    },
  ],
};

const barData = {
  labels: serviceCards.map((s) => s.title.split(" ")[0]),
  datasets: [
    {
      label: "Requests",
      data: [432, 321, 287, 198, 176, 254],
      backgroundColor: "#e3d271",
    },
  ],
};

const doughnutData = {
  labels: ["Direct", "Organic", "Referral", "Social"],
  datasets: [
    {
      data: [35, 30, 20, 15],
      backgroundColor: ["#e3d271", "#ffffff80", "#808080", "#ffffff40"],
      borderWidth: 0,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom", labels: { color: "#808080" } },
    title: {
      display: true,
      text: "Traffic Sources",
      color: "#e3d271",
      font: { size: 14 },
    },
  },
};

/* mini-chart data */
const miniDoughnut = {
  labels: ["Direct", "Organic", "Referral"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: ["#e3d271", "#ffffff66", "#808080"],
      borderWidth: 0,
    },
  ],
};

const miniBar = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sign-ups",
      data: [12, 19, 8, 15, 22, 18, 25],
      backgroundColor: "#e3d271",
      borderRadius: 4,
    },
  ],
};

const miniOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
};