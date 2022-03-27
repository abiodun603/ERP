import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Label, FormField, PasswordType } from "../../styles/formcomponent.style";

export const TextField = React.forwardRef(
  function TextField ({ label, type, name, defaultValue, onChange, className, errors, placeholder }, ref){
    return (
      <FormField className={className}>
        <Label htmlFor={name}>{label}</Label>
        {type === "textarea" && (
          <textarea
            name={name}
            id={name}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}

          />
        )}
        {[
          "name",
          "email",
          "text",
          "number",
          "tel",
          "date",
          "password",
          "file",
        ].includes(type) && (
          <input
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            placeholder={placeholder}
            className={className}
            style={{marginTop: 8}}
          />
        )}
      </FormField>
    );
  }
);

export const PasswordField = React.forwardRef(
  function PasswordField ({ name, label, required, defaultValue, onChange, error, disabled, placeholder }, ref){
    const [show, setShow] = useState(false);

    return (
      <FormField isDisable={disabled}>
        <Label htmlFor={name}>{label}</Label>
        <PasswordType isDisable={disabled} style={{marginTop: 8}}>
          <input
            disabled={disabled}
            type={show ? "text" : "password"}
            name={name}
            id={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
          />
          {/* <span className="p_visible" onClick={() => setShow(!show)}>
            {!show ? <FiEye /> : <FiEyeOff />}
          </span> */}
        </PasswordType>
      </FormField>
    );
  }
);

// export const PhoneField = forwardRef(
//   ({ name, label, control, required, defaultValue, onChange, error }, ref) => {
//     return (
//       <FormField>
//         <Label htmlFor={name}>{label}</Label>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { onChange } }) => (
//             <PhoneInput defaultCountry="NG" onChange={onChange} ref={ref} />
//           )}
//         />
//       </FormField>
//     );
//   }
// );


