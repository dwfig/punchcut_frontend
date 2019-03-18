import React from "react";
// form here somewhere
const LoginPage = () => {
  return(
    <div>
    <form>
      <label>email:
        <input type="text" name="email" />
      </label>
      <label>password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="login" />
    </form>
    </div>
  )
}

export default LoginPage
