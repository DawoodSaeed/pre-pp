import { useState, type SyntheticEvent } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;

    console.log(target, {
      email,
      password,
    });
  };

  return (
    <form onSubmit={formSubmission}>
      <input
        type="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
        className="block mt-2 min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
      />

      <input
        type="password"
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
        className="block mt-2 min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
      />

      <button type="submit" className="bg-green-500">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
