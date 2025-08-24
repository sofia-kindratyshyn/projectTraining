// RegisterRHF.tsx
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { FormField } from "./FormField";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterFieldForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("submit", data);
      await new Promise((r) => setTimeout(r, 800));
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="w-full min-w-[384px]">
      <CardHeader>
        <CardTitle>Register your account</CardTitle>
        <CardDescription>
          Enter info below to register to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign in</Button>
        </CardAction>
      </CardHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3.5"
      >
        <CardContent>
          <div className="flex flex-col gap-4">
            <FormField label="Name" error={errors.name?.message}>
              <Input
                id="name"
                {...register("name", { required: "Введіть ім'я" })}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={[
                  "border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                  errors.name ? "border-red-500" : "border-gray-300",
                ].join(" ")}
              />
            </FormField>

            <FormField label="Email" error={errors.email?.message}>
              <Input
                id="email"
                {...register("email", {
                  required: "Введіть email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Невірний формат email",
                  },
                })}
                placeholder="m@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={[
                  "border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                  errors.email ? "border-red-500" : "border-gray-300",
                ].join(" ")}
              />
            </FormField>

            <FormField label="Password" error={errors.password?.message}>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Введіть пароль",
                  minLength: { value: 6, message: "Мінімум 6 символів" },
                })}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={[
                  "border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
                  errors.password ? "border-red-500" : "border-gray-300",
                ].join(" ")}
              />
            </FormField>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
          <Button variant="outline" className="w-full" type="button">
            Register with Google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
