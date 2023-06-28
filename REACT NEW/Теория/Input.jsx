//# Контролируемый input
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const userData = {
      username: userName,
      password: password,
    };

    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={userName}
          name="username"
          onChange={evt => {
            setUserName(evt.target.value);
          }}
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={evt => {
            setPassword(evt.target.value);
          }}
        />
      </label>
      <button type="submit"></button>
    </form>
  );
}

//# Неконтролируемый input (обычно не используют)
function Login() {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.username.value);
    console.log(evt.target.password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="username" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit"></button>
    </form>
  );
}
