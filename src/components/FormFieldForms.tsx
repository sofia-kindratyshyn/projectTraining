import LoginFieldForm from "./LoginFieldForm";
import RegisterFieldForm from "./RegisterFieldForm";

export default function FormFieldForms() {
  return (
    <>
      <ul className="flex gap-12">
        <li>
          <LoginFieldForm />
        </li>
        <li>
          <RegisterFieldForm />
        </li>
      </ul>
    </>
  );
}
