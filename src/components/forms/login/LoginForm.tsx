import Form from '../base/Form';
import { FieldValues } from '../base/FormTypes';

const loginFields = [
  {label: 'username', name: 'user', placeholder: 'a cool username', type: 'text', validation: { required: true }, validationMessage: 'Please enter a username', },
  {label: 'email', name: 'email', placeholder: 'you@email.com', type: 'email', validation: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true }, validationMessage: 'Please enter your first name', },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' },
  {label: 'confirm password', name: 'passwordTwo', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' }
]

const onSubmit = async (values: FieldValues) => {
  const baseUrl = 'https://film-pile.onrender.com';
  const registerEndpoint = '/auth/register';
  const registerUrl = `${baseUrl}${registerEndpoint}`;

  const config = {
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '7d65e1e4cd60328f',
    },
    method: 'POST',
  };

  try {
    console.log('try submit these values:', values)
    const response = await fetch(registerUrl, config);
    console.log('response', response)
    const json = await response.json()
    console.log('json', json)
    if (response.ok) {
      // return json
      console.log('json', json)
      console.log('finished')
    }
  } catch(err) {
    console.log('err', err)
  }

}

// URL: https://film-pile.onrender.com
// Api key must be sent as as header as per below.
// x-api-key: 7d65e1e4cd60328f

// Current Endpoints:

// AUTH:
// 	Register:
// 		POST   /auth/register
// 		JSON Example:
// 		{
//   user: “don”, (string greater than 2 chars)
//   email:”don@key.kong”,
//   password:”Soupy123”,
//   PasswordTwo:”Soupy123”
//  }

// Login:
// 		POST   /auth/login
// 		JSON Example:
// 		{
//   user: “don”, (string greater than 2 chars)
//   password:”Soupy123”,
//  }

/**
 * Login Form component.
 */
export const LoginForm = () => <Form onSubmit={onSubmit} className={undefined} fields={loginFields} />
