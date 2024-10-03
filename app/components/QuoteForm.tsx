"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [email, setEmail] = useState("");
  const [collection, setCollection] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [date, setDate] = useState("");
  const [multipleDrop, setMultipleDrop] = useState(false);
  const [vanSize, setVanSize] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST", // Make sure this is 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        collection,
        dropOff,
        date,
        multipleDrop,
        vanSize,
      }),
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
      className="flex flex-col justify-center items-center gap-5 bg-white shadow-md h-[95%] w-[90%] md:w-[60%] lg:w-[50%] rounded-xl bg-opacity-80 px-5"
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
        onChange={(_e) => setEmail(_e.target.value)}
        placeholder="Email Address"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <input
        type="text"
        value={collection}
        onChange={(_e) => setCollection(_e.target.value)}
        placeholder="Collection postcode"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <input
        type="text"
        value={dropOff}
        onChange={(_e) => setDropOff(_e.target.value)}
        placeholder="Drop-off postcode"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
        required
      />
      <select
        value={vanSize}
        onChange={(_e) => setVanSize(_e.target.value)}
        id=""
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
      >
        <option value="">Select a van size</option>
        <option value="Small Van">
          Small Van L x W x H - 1.7m x 1.49m x 1.2m
        </option>
        <option value="Medium Van">
          Medium Van L x W x H - 2.4m x 1.7m x 1.4m
        </option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(_e) => setDate(_e.target.value)}
        placeholder="Date"
        className="p-2 rounded-xl border-2 border-sm-blue w-3/4"
      />
      <span className="flex gap-2">
        <p>Multiple Drop Offs?</p>
        <input onChange={() => setMultipleDrop(true)} type="checkbox" />
      </span>

      <button
        type="submit"
        className="bg-sm-red text-white font-semibold px-4 py-2 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
}
