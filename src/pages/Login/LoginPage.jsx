import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="bigLogin">
      <div className="smallLogin">
        <div className="Header1">Merhaba ,</div>
        <div className="Header2">
          Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!
        </div>
        <div className="LoginContainer">
          <div className="GS">Giriş Yap</div>
          <div className="LoginContent">
            <div className="deneme12">
              <div>E-Posta</div>
              <input className="inputStyle" type="email"></input>
            </div>
            <div className="deneme12">
              <div>Şifre</div>
              <input className="inputStyle" type="password"></input>
            </div>
            <div className="see">Şifremi Unuttum</div>
            <button className="Buttoncss">Giriş yap</button>
            <div className="LoginType">
              <div className="LoginFacebook">
                <div className="gg-facebook "></div>
                <div>
                  <div className="ff1">Facebook</div>
                  <div className="ff2">ile giriş yap</div>
                </div>
              </div>
              <div className="LoginFacebook">
                <div className="gg-google"></div>
                <div>
                  <div className="ff1">Google</div>
                  <div className="ff2">ile giriş yap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
