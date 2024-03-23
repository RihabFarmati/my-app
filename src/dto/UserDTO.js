
class UserDTO {
    
    constructor(firstName, username, password, roleName) {
      this.firstName = firstName;
      this.username = username;
      this.password = password;
      this.roleName = roleName;
    }
  
    getUser() {
      return {
        firstName: this.firstName,
        username: this.username,
        password: this.password
      };
    }
  }
  
  export default UserDTO;