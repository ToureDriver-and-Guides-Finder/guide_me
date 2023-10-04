class LoginController {
  constructor(usertype) {
    this.usertype = usertype;
  }

  getUserType() {
    if (usertype == "driver") {
      return 1;
    } else if (usertype == "guide") {
      return 2;
    }
    return 0;
  }
}
