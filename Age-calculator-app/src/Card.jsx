import { useState } from "react";
import DateInput from "./DateInput";
import Divider from "./Divider";
import DateDisplay from "./DateDisplay";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Card() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [date, setDate] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const schema = yup.object().shape({
    day: yup
      .number()
      .typeError("This field is required")
      .positive()
      .integer()
      .min(1)
      .max(31, "Must be a valid day")
      .required("This field is required")
      .test("is-valid-day", "Must be a valid date", function (value) {
        const { month, year } = this.parent;
        const daysInMonth = new Date(year, month, 0).getDate();
        return value <= daysInMonth;
      }),
    month: yup
      .number()
      .typeError("This field is required")
      .positive()
      .integer()
      .min(1)
      .max(12, "Must be a valid month")
      .required("This field is required"),
    year: yup
      .number()
      .typeError("This field is required")
      .positive()
      .integer()
      .min(1)
      .max(new Date().getFullYear(), "Must be in the past")
      .required("This field is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ year, month, day }) => {
    let bDay = new Date(year, month - 1, day);
    let cDay = new Date();
    if (bDay.getTime() > cDay.getTime()) {
      alert("Date must be in the past");
    } else {
      const date = new Date();
      date.setMonth(month - 1);

      // const monthName = date.toLocaleString("en-US", { month: "long" });

      // console.log({ year, month: monthName, day });
      setDate({ day, month: month - 1, year });
      setHasSubmitted(true);
    }
  };
  return (
    <FormProvider {...{ register, errors }}>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DateInput />
          <Divider setHasSubmitted={setHasSubmitted} />
        </form>
        <DateDisplay date={date} hasSubmitted={hasSubmitted} />
      </div>
    </FormProvider>
  );
}
