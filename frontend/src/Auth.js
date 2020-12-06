class Auth {
  constructor() {
    this.authenticated = '';
  }

  loginUser = (cb) => {
    this.authenticated = 'user';
    cb();
  }

  loginAdmin = (cb) => {
    this.authenticated = 'admin';
    cb();
  }

  logout = cb => {
    this.authenticated = '';
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
