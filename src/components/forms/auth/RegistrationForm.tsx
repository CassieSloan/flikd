// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FC, useState } from 'react';
import { Heading4 } from '../../../design/fonts/typography';
import Link from '../../common/Link';
import Form from '../base/Form';
import { FieldValues } from '../base/FormTypes';

const registrationFields = [
  {label: 'username', name: 'user', placeholder: 'a cool username', type: 'text', validation: { required: true }, validationMessage: 'Please enter a username', },
  {label: 'email', name: 'email', placeholder: 'you@email.com', type: 'email', validation: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true }, validationMessage: 'Please enter your first name', },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' },
  {label: 'confirm password', name: 'passwordTwo', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' }
]
/**
 * Registeration Form component.
 */
export const RegistrationForm: FC = () => {
  const [userExists, setUserExists] = useState(false)
  const onSubmit = async (values: FieldValues) => {
    const registerUrl = `${process.env.NEXT_PUBLIC_REGISTER_URL}`;

    const config = {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
    };

    const response = await fetch(registerUrl, config);
    console.log('response', response)
    const json = await response.json()
    console.log('json', json)
    if (response.ok) {
      console.log('json', json)
      console.log('finished')
      if (json.message === 'User Exists - Please Login') {
        setUserExists(true)
      }
      if (json.status === 'success') {
        Router.push('/profile')
      }
    }
  }
  return (
    <>
      <Heading4>Register</Heading4>
      {userExists && <span>This user already exists. Please <Link to="/">login</Link> to continue</span>}
      <Form onSubmit={onSubmit} fields={registrationFields} />
    </>
  )
}
