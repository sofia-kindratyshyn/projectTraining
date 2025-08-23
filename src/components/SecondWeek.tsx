import { NavLink, Route, Routes } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Register } from "./Register";
import { Login } from "./Login";

function SecondWeek() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-6">
      <Button>Click me</Button>

      <Input className="max-w-xs" placeholder="Type something…" />

      <nav className="flex flex-col items-center p-6">
        <ul className="flex gap-4 text-2xl">
          <li>
            <Button asChild>
              <NavLink to="/second-week/register">Register</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild>
              <NavLink to="/second-week/login">Login</NavLink>
            </Button>
          </li>
        </ul>
      </nav>

      <div className="w-full max-w-sm">
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default SecondWeek;
