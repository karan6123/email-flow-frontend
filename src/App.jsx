import { useState } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    delay: "60000",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/schedule-email", form);
      alert("✅ Email scheduled!");
    } catch (err) {
      alert("❌ Error scheduling email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Schedule Email</h2>
        <input type="email" name="to" placeholder="Recipient" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" required className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="body" placeholder="Message" required className="w-full p-2 border rounded h-28" onChange={handleChange}></textarea>
        <select name="delay" className="w-full p-2 border rounded" onChange={handleChange} value={form.delay}>
          <option value="60000">1 minute</option>
          <option value="300000">5 minutes</option>
          <option value="900000">15 minutes</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Schedule Email</button>
      </form>
    </div>
  );
}
