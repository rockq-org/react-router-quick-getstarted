export function login(username, password) {
  return {
    type: 'LOGIN',
    username,
    password
  };
}
