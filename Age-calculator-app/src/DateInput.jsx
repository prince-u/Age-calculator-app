import InputField from "./InputField";

export default function DateInput({ inputVal, setInputVal, hasSubmitted }) {
  return (
    <div className="input-fields">
      <InputField
        inputVal={inputVal}
        setInputVal={setInputVal}
        hasSubmitted={hasSubmitted}
        maxCharLength={2}
        name="day"
        placeholder="DD"
      />
      <InputField
        inputVal={inputVal}
        setInputVal={setInputVal}
        hasSubmitted={hasSubmitted}
        maxCharLength={2}
        name="month"
        placeholder="MM"
      />
      <InputField
        inputVal={inputVal}
        setInputVal={setInputVal}
        hasSubmitted={hasSubmitted}
        maxCharLength={4}
        name="year"
        placeholder="YYYY"
      />
    </div>
  );
}
