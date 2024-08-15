import React from "react";
import InputText from "../../02-Molecules/Form/InputText";
import Button from "../../01-Atoms/Form/Button";
import AuthWrapper from "../../04-Templates/AuthWrapper";

export default function Index() {
  return (
    <AuthWrapper>
      <h1 className="text-center font-bold text-2xl">Login</h1>
      <div>
        <InputText
          label="Email"
          name="email"
          id="email"
          placeholder="Masukkan Email..."
        />
      </div>
      <div>
        <InputText
          label="password"
          name="password"
          id="password"
          type="password"
          placeholder="Masukkan Password..."
        />
      </div>
      <div>
        <Button text="Login" />
      </div>
    </AuthWrapper>
  );
}
