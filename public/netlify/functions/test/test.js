import GoTrue from 'gotrue-js';

auth = new GoTrue({
  APIUrl: 'https://ivry.tk/.netlify/identity',
  audience: '',
  setCookie: true,
});

auth.signup(email, password);