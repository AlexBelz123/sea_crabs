import React from 'react';
import { Input, Button } from '../../components';
import { isEmail } from '../../utils/validation';
import { sleep } from '../../utils/sleep';
import styles from './authform.module.scss';

const MIN = 8;

interface IInputErrors {
  email: null | string;
  password: null | string;
}

// TODO 1
function AuthForm() {
  // we can extract logic, but it's simple example, so I left it as it is
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<IInputErrors>({
    email: null,
    password: null,
  });

  console.log(email, password);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await sleep(1500); // simulates real request
    setSubmitting(false);
    alert('Form successfully submitted');
    setEmail('');
    setPassword('');
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
      <Button type="submit" disabled={canSubmit || isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}

export default AuthForm;
