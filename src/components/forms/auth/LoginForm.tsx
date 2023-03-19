// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FC } from 'react';
import { Heading4 } from '../../../design/fonts/typography';
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
  // const [userExists, setUserExists] = useState(false)
  const onSubmit = async (values: FieldValues) => {
    const loginUrl = `${process.env.NEXT_PUBLIC_LOGIN_URL}`;

    const config = {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
    };

    const response = await fetch(loginUrl, config);
    console.log('response', response)
    const json = await response.json()
    console.log('json', json)
    if (response.ok) {
      console.log('json', json)
      console.log('finished')
      if (json.accessToken) {
        Router.push('/profile')
      }
    }
  }
  return (
    <>
      <Heading4>Login</Heading4>
      {/* {userExists && <span>This user already exists. Please <Link to="/">login</Link> to continue</span>} */}
      <Form onSubmit={onSubmit} className={undefined} fields={loginFields} />
    </>
  )
}
