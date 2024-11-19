import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, schema, User } from "~/models";
import "./loginForm.style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "./components";
import { UserCard } from "~/components";
import { useLogin } from "~/hooks";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    // defaultValues: {
    //   username: "michaelw",
    //   password: "michaelwpass",
    // },
  });

  const { loading, error, login, userData } = useLogin<User | undefined>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let payload = { ...data, expiresInMins: 30 };
    await login("https://dummyjson.com/auth/login", payload);
    console.log(payload, loading, userData, error, "error");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        aria-label="login form"
        className="form-container"
      >
        <FormInput
          name="username"
          control={control}
          label="Username"
          type="text"
          error={errors.username}
        />
        <FormInput
          name="password"
          control={control}
          label="Password"
          type="password"
          error={errors.password}
        />
        <button
          disabled={loading}
          className="submit-button"
          type="submit"
          aria-label="login"
        >
          Log in
        </button>
      </form>
      {loading && <p>Is loading</p>}
      <UserCard userData={userData} error={error} />
    </>
  );
};
