import { useForm } from "./hooks";
export const HookForm = () => {
  const { username, email, password, onChange, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-5">Form with Custom Hook</h1>
        <div className="container">
          <form action="">
            <input
              type="text"
              className="form-control my-4"
              name="username"
              placeholder="Username"
              onChange={onChange}
              value={username}
            />
            <input
              type="email"
              className="form-control my-4"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
            />
            <input
              type="password"
              className="form-control my-4"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </form>
          <div className="row justify-content-center">
            <button className="btn btn-warning w-50" onClick={onReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
