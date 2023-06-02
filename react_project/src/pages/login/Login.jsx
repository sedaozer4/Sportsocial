import "./login.css"

export default function Login() {
    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">SportSocial</h3>
                  <span className="loginDesc">
                      Spor yaparken arkadaşlarınla sosyalleş.
                  </span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder="Email" className="loginInput"/>
                      <input placeholder="Şifre" className="loginInput"/>
                      <button className="loginButton">Giriş Yap</button>
                      <span className="loginForgot">Şifreni Mi Unuttum</span>
                      <button className="loginRegisterButton">Kayıt Ol</button>
                  </div>
              </div>
          </div>
      </div>
    );
}