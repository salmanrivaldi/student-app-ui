import React from "react";

export default function Label({ text, addClass }) {
  return (
    <label
      className={`text-sm ${addClass}`}
      htmlFor="email"
    >
      {text}
    </label>
  );
}
