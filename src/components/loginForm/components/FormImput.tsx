import { Control, Controller, FieldError } from "react-hook-form";
import { FormData } from "~/models";
import "./formInput.style.css";

interface Props {
  name: keyof FormData;
  control: Control<FormData>;
  label: string;
  type?: string;
  error?: FieldError;
}

export const FormInput = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="input-group" data-test={`${name}-label`}>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      ></Controller>
      {error && (
        <p
          aria-labelledby="error-msg"
          className="error-message"
          data-testid={`${name}-error-msg`}
        >
          <small id="error-msg">{error.message}</small>
        </p>
      )}
    </div>
  );
};
