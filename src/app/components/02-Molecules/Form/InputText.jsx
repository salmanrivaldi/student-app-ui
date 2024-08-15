import React, { Fragment } from "react";
import Label from "../../01-Atoms/Form/Label";
import InputText from "../../01-Atoms/Form/InputText";

export default function InputTextLabel({ label, name, id, placeholder, type }) {
  return (
    <Fragment>
      <Label text={label} />
      <InputText
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </Fragment>
  );
}
