import { fireEvent, render, screen } from "@testing-library/react";
import { mockError, mockUser } from "../__mock__";
import { LoginForm } from "~/components";

describe("Login Form ", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  afterEach(() => {});

  test("should render log in form", () => {
    expect(true).toBe(false);
  });

  test("shouldn't render userCard", () => {
    expect(true).toBe(false);
  });

  test("should render inputs erros when empty and user press submit btn", () => {
    expect(true).toBe(false);
  });

  test("should render input error when password invalid", async () => {
    expect(true).toBe(false);
  });

  test("should render inputs required error message", async () => {
    expect(true).toBe(false);
  });
  test("should call once useLogin hook", async () => {
    expect(true).toBe(false);
  });

  test("should render the loader", () => {
    expect(true).toBe(false);
  });

  test("should render userCard", () => {
    expect(true).toBe(false);
  });

  test("should render error message when error", () => {
    expect(true).toBe(false);
  });
});
