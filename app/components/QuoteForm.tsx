"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [collection, setCollection] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST", // Make sure this is 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, collection, dropOff, date }),
    });

    if (response.ok) {
      alert("Email sent successfully!");
      setEmail("");
      setDate("");
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-5 bg-white shadow-md h-[90%] w-[90%] md:w-[60%] lg:w-[50%] rounded-xl bg-opacity-80 px-5"
    >
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-get-voip)] text-3xl text-sm-blue">
          <span className="text-sm-red">Shift</span>Mate
        </h1>
        <p>Enter your details below to receive a quote.</p>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <input
        type="text"
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
        placeholder="Collection address"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <input
        type="text"
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
        placeholder="Drop-off address"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
      />
      <button
        type="submit"
        className="bg-sm-red text-white font-semibold px-4 py-2 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
}
