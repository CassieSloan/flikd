import { Form } from '../base/Form'
import { FormField } from '../base/FormTypes'

const loginFields: FormField[] = [
  {label: 'username', name: 'email', placeholder: 'you@email.com', type: 'email' },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password' },
]

const onSubmit = (values) => {
  console.log('values', values)
}
/**
 * Login Form component.
 */
export const LoginForm = () => <Form fields={loginFields} onSubmit={onSubmit} />
