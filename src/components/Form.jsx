import React, { useState } from "react";
import Transition from "../components/Transition";

function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Transition>
      <section className="py-20 flex items-center">
        <div className="max-w-xl mx-auto px-6 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 animate-fadeIn"
          >
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="رسالتك"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-400 text-xl hover:text-blue-400 hover:before:bg-white overflow-hidden border-2 border-blue-400  btn-anmi text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </Transition>
  );
}

export default Form;
