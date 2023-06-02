import "./register.css"

export default function Register() {
    return (
      <div className="register">
          <div className="registerWrapper">
              <div className="registerLeft">
                  <h3 className="registerLogo">SportSocial</h3>
                  <span className="registerDesc">
                      Spor yaparken arkadaşlarınla sosyalleş.
                  </span>
              </div>
              <div className="registerRight">
                  <div className="registerBox">
                      <input placeholder="Ad" className="registerInput"/>
                      <input placeholder="Soyad" className="registerInput"/>
                      <input placeholder="Email" className="registerInput"/>
                      <input placeholder="Şifre" className="registerInput"/>
                      <input placeholder="Tekrar Şifre" className="registerInput"/>
                      <button className="registerButton">Kayıt Ol</button>
                      <button className="registerRegisterButton">Hesaba Giriş Yap</button>
                  </div>
              </div>
          </div>
      </div>
    );
}