import { useState, type ChangeEvent, type FormEvent } from "react";

type Errors = {
  email?: string;
  password?: string;
};

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (values: { email: string; password: string }): Errors => {
    const errs: Errors = {};
    if (!values.email.trim()) errs.email = "Введіть email";
    if (!values.password.trim()) errs.password = "Введіть пароль";
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate({ email, password });
    setErrors(newErrors);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password)
      setErrors((prev) => ({ ...prev, password: undefined }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-[370px] mx-auto p-6 bg-white shadow-md rounded-lg"
      noValidate
    >
      <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        autoComplete="email"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
        className={[
          "border rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
          errors.email ? "border-red-500" : "border-gray-300",
        ].join(" ")}
      />
      {errors.email && (
        <p id="email-error" className="text-red-500 text-sm mb-3">
          {errors.email}
        </p>
      )}

      <label
        htmlFor="password"
        className="mb-1 text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        aria-invalid={Boolean(errors.password)}
        aria-describedby={errors.password ? "password-error" : undefined}
        className={[
          "border rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
          errors.password ? "border-red-500" : "border-gray-300",
        ].join(" ")}
      />
      {errors.password && (
        <p id="password-error" className="text-red-500 text-sm mb-3">
          {errors.password}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Увійти
      </button>
    </form>
  );
}
