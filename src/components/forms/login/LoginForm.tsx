import Form from '../base/Form'

const loginFields = [
  {label: 'username', name: 'email', placeholder: 'you@email.com', type: 'email' },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password' },
]

const onSubmit = (event, values) => {
  console.log('login submit values', values)
}
/**
 * Login Form component.
 */
export const LoginForm = () => <Form fields={loginFields} onSubmit={(e, data) => onSubmit(e, data)} />
