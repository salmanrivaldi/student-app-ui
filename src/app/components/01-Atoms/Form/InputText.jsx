import React from "react";

export default function InputText({ name, id, placeholder, type }) {
  return (
    <input
      className="border w-full rounded p-1 text-sm"
      type={type ?? "text"}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
