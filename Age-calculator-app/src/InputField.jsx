import { useFormContext } from "react-hook-form";
import { useRef } from "react";
export default function InputField({ name, placeholder, maxCharLength }) {
  const errorRef = useRef();
  const { register, errors } = useFormContext();
  if (errorRef.current !== undefined) {
    if (errors[name]?.message) {
      errorRef.current.classList.add("error");
    } else {
      errorRef.current.classList.remove("error");
    }
  }
  function handleChange(e) {
    if (e.target.value.length > maxCharLength) {
      e.target.value = e.target.value.slice(0, maxCharLength);
    }
    if (errors[name]?.message) {
      errorRef.current.classList.add("error");
    } else {
      errorRef.current.classList.remove("error");
    }
  }
  return (
    <label ref={errorRef}>
      <p className="date">{name.toUpperCase()}</p>
      <input
        className="input"
        onInput={(e) => handleChange(e)}
        {...register(name)}
        type="number"
        placeholder={placeholder}
      />
      <p className="error-text">{errors[name]?.message}</p>
    </label>
  );
}
