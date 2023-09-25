import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("xasib69941@fandsend.com");
  const [password, setPassword] = useState("pass1234");

  const { login, isLogingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          // This makes this form better for password managers
          autoComplete='username'
          disabled={isLogingIn}
          value={email}
          type='email'
          id='email'
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
          disabled={isLogingIn}
          value={password}
          type='password'
          id='password'
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large' disabled={isLogingIn}>
          {isLogingIn ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
