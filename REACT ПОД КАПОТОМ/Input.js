//# Контролируемый input
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  //* или
  const [data, setData] = useState({ username: '', password: '' });

  const handleSubmit = evt => {
    evt.preventDefault();

    const userData = {
      username: userName,
      password: password,
    };

    console.log(userData);
  };

  //* или
  const handleInputChange = (text, name) => {
    setData({ ...data, [name]: text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={userName}
          //* или
          value2={data.username}
          onChange={evt => {
            setUserName(evt.target.value);
          }}
          //* или
          onChange2={evt => {
            handleInputChange(evt.target.value, 'username');
            setData({ ...data, username: evt.target.value });
          }}
          //* или
          onChange3={evt => {
            handleInputChange(evt.target.value, 'username');
          }}
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          //* или
          value2={data.password}
          onChange={evt => {
            setPassword(evt.target.value);
          }}
          //* или
          onChange2={evt => {
            setData({ ...data, password: evt.target.value });
          }}
          //* или
          onChange3={evt => {
            handleInputChange(evt.target.value, 'password');
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
