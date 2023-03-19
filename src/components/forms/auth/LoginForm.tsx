// eslint-disable-next-line import/no-named-as-default
import { FC, useState } from 'react';
import { login } from '../../../apiHelpers/login';
import { Heading4 } from '../../../design/fonts/typography';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import Form from '../base/Form';
import { FieldValues } from '../base/FormTypes';

const loginFields = [
  {label: 'user', name: 'user', placeholder: 'a cool username', type: 'text', validation: { required: true }, validationMessage: 'Please enter a username', },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' },
]

/**
 * Login Form component.
 */
export const LoginForm: FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FieldValues) => {
    setLoading(true)
    const handleFail = (json: unknown) => console.log('failed:', json)
    login({handleFail, values});
    setLoading(false)

  }
  return (
    <>
      <Heading4>Login</Heading4>
      <Form onSubmit={onSubmit} className={undefined} fields={loginFields} />
      {loading && <LoadingSpinner />}

    </>
  )
}