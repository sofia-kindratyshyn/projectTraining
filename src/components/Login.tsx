import { Dialog } from "@radix-ui/react-dialog";
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
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Label } from "./ui/label";

type Errors = {
  email?: string;
  password?: string;
};

export function Login() {
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

  return (
    <Card className="w-full min-w-[384px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col">
          <Label className="mb-1.5" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className={[
              "border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
              errors.email ? "border-red-500" : "border-gray-300",
            ].join(" ")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Forgot your password?</DialogTitle>
                  <DialogDescription>
                    Enter your email and we’ll send you a reset code.
                  </DialogDescription>
                  <Input placeholder="Email" />
                  <Button className="bg-gray-700">Send code</Button>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <Label className="mb-1.5" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className={[
              "border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
              errors.password ? "border-red-500" : "border-gray-300",
            ].join(" ")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          )}
        </CardContent>

        <CardFooter className="flex-col gap-2 mt-3.5">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full" type="button">
            Login with Google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
