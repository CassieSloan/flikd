import Form from '../base/Form';
import { FieldValues } from '../base/FormTypes';

const loginFields = [
  {label: 'username', name: 'email', placeholder: 'you@email.com', type: 'email', validation: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true }, validationMessage: 'Please enter your first name', },
  {label: 'password', name: 'password', placeholder: 'f***y**', type: 'password', validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, required: true }, validationMessage: 'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number' }
]

const onSubmit = (values: FieldValues) => {
  try {
    console.log('login submit values', values)
  } catch(err) {
    console.log('err', err)
  }
  // const config = {
  //   body: JSON.stringify(values),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  // };
  // const response = await fetch(url, config);
  // const json = await response.json()
  // if (response.ok) {
  //   // return json
  //   sendToDataLayer('contact_form_submission');
  //   return navigate('/thank-you');
  // }
}
/**
 * Login Form component.
 */
export const LoginForm = () => <Form onSubmit={onSubmit} className={undefined} fields={loginFields} />
