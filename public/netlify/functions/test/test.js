auth = new GoTrue({
  APIUrl: 'https://ivry.tk/.netlify/identity',
  audience: '',
  setCookie: true,
});

const user = auth.currentUser();
