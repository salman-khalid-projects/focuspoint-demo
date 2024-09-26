"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-2.5"
      onSubmit={() => {
        window.open(
          `https://api.whatsapp.com/send?phone=+97337320462&text=Hello, My name is ${name} %0A ${message}`,
          "_blank"
        );
        setName("");
        setMessage("");
      }}
    >
      {/* 652749 */}
      <label htmlFor="nameInput" className="text-lg text-secondary">
        Your name:
      </label>
      <input
        type="text"
        id="nameInput"
        maxLength={20}
        placeholder="Name"
        required
        className="outline-none bg-background-1 border border-secondary rounded-md text-secondary focus:border-main p-4"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="messageInput" className="text-lg text-secondary">
        Your message:
      </label>
      <textarea
        id="messageInput"
        className="outline-none leading-normal bg-background-1 border border-secondary focus:border-main rounded-md text-secondary p-4"
        maxLength={100}
        placeholder="Message"
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="submit"
        value="Send message"
        className="bg-main text-secondary border-none rounded-md p-2.5 cursor-pointer"
      />
    </form>
  );
}
