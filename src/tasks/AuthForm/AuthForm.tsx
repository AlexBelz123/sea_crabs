import React from 'react';
import { Input, Button } from '../../components';
import { isEmail } from '../../utils/validation';
import styles from './authform.module.scss';

const MIN = 8;

interface IInputErrors {
  email: null | string;
  password: null | string;
}

function AuthForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState<IInputErrors>({
    email: null,
    password: null,
  });

  const canSubmit = Object.values(errors).findIndex((el) => el !== null) !== -1;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isEmail(value)) {
      setErrors({
        ...errors,
        [e.target.name]: 'Enter a valid email.',
      });
    } else {
      setErrors({ ...errors, [e.target.name]: null });
    }
    setEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < MIN) {
      setErrors({
        ...errors,
        [e.target.name]: 'Password should be minimun 8 characters',
      });
    } else {
      setErrors({ ...errors, [e.target.name]: null });
    }
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    alert('Form successfully submitted');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        errorMsg={errors.email}
        required
      />
      <Input
        label="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        minLength={MIN}
        errorMsg={errors.password}
        required
      />
      <Button type="submit" disabled={canSubmit}>
        Submit
      </Button>
    </form>
  );
}

export default AuthForm;