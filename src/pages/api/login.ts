// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type AuthRequest = {
  user: string;
  email: string;
  password: string;
  password2: string;
};

type AuthResponse = {
  status: 'Register - online' | 'User Exists';
}

// SEARCH ALL DB
// https://film-pile.onrender.com/content/contentDetails
// {
//   "mediaType": "tv",
//   "id": 550,
//   "detail": "basic"
//   }

// AUTHENTICATION
// https://film-pile.onrender.com/auth/register
// REQ:
//   {
//   "user": "BoopyBoop",
//   "email": "boop@boop.com",
//   "password": "123456",
//   "password2": "123456"
//   }
// RES: {
//   "status": "Register - online"
// }

// UPCOMING FILMS
// https://film-pile.onrender.com/content/upcomingfilms
// REQ:
// none

/**
 * Login API call.
 */
export const handler = (req: AuthRequest, res: AuthResponse) => {
  const { status } = res;
  console.log('status', status)
  res.status(200).json({ name: 'John Doe' });
}
