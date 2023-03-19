// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FieldValues } from '../components/forms/base/FormTypes';

type RegisterProps = {values: FieldValues, handleFail: (json: unknown) => void}
/**
 * Register user function.
 */
export const registerUser = async ({handleFail, values}: RegisterProps) => {

  const loginUrl = `${process.env.NEXT_PUBLIC_REGISTER_URL}`;

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
      Router.push(`/profile?auth=${json.accessToken}`)
    } else {
      handleFail(json)
    }
  }
}
