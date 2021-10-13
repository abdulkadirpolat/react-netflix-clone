import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Footer, Input } from "../../components";
import Header from "../../components/Header/Header";
import { IoGlobe } from "react-icons/io5";
import "./login.css";

function Login() {
  const [googlePrivacy, setGooglePrivacy] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className={"login-container relative"}>
      <Header className="items-center flex z-10">
        <Link to="/" className="ml-14 netflix-logo  h-11 w-44 flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />{" "}
        </Link>{" "}
      </Header>
      <div className="pt-24 text-gray-500 sticky z-10 text-sm">
        <div className="mx-auto max-w-md px-16 pt-16 pb-10 mb-24 flex flex-col form-body-color ">
          <div className="login-form">
            <div className="hybrid-login-form-main">
              <h1 className="mb-7 font-bold text-3xl text-white">Oturum Aç</h1>
              <form>
                <Input
                  type="email"
                  className="text-gray-200 "
                  placeholder="E‑posta veya telefon numarası"
                />
                <Input
                  type="password"
                  className="text-gray-200  "
                  placeholder="Parola"
                />
                <Button>Oturum Aç</Button>

                <Input label="Beni hatırla" type="checkbox" id="rememberMe">
                  {" "}
                  <Link
                    className="hover:underline text-gray-400"
                    to="login-help"
                  >
                    Yardım ister misiniz?{" "}
                  </Link>
                </Input>
              </form>
            </div>
            <div className="hybrid-login-form-other">
              <div className="mt-4">Facebook ile Oturum Aç</div>
              <div className="mt-4 text-base">
                Netflix'e katılmak ister misiniz?
                <Link
                  className="text-white font-medium hover:underline text-base"
                  to="/"
                >
                  {" "}
                  Şimdi kaydolun.
                </Link>
              </div>
              <div className="mt-3 leading-4 text-sm">
                <div className="mb-3 h-12">
                  Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
                  tarafından korunuyor.{" "}
                  {!googlePrivacy && (
                    <button
                      onClick={() => setGooglePrivacy(!googlePrivacy)}
                      className="more-color"
                    >
                      Daha fazlasını öğrenin.
                    </button>
                  )}
                </div>
                {googlePrivacy ? (
                  <div className="h-24">
                    Google reCAPTCHA tarafından toplanan bilgiler Google'ın{" "}
                    <span className="hover:underline cursor-pointer google-link-color">
                      Gizlilik Politikası
                    </span>{" "}
                    ve{" "}
                    <span className="hover:underline cursor-pointer google-link-color">
                      Hizmet Şartları
                    </span>
                    'na tabidir. Bu bilgiler reCAPTCHA hizmetinin sağlanması,
                    sürdürülmesi, geliştirilmesi ve genel hizmet amaçları için
                    kullanılır (Google tarafından kişiselleştirilmiş reklamlar
                    sunmak için kullanılmaz).
                  </div>
                ) : (
                  <div className="h-24"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="flex flex-col justify-between">
        <div className="mb-8 text-base">
          Sorularınız mı var? <span className="hover:underline cursor-pointer ">0850-390-7444</span> numaralı telefonu arayın
        </div>
        <ul className="h-full flex flex-wrap ">
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">SSS</li>
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">Yardım Merkezi</li>
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">Kullanım Koşulları</li>
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">Gizlilik</li>
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">Çerez Tercihleri</li>
          <li className="w-1/4 pr-3 mb-4 hover:underline cursor-pointer ">Kurumsal Bilgiler</li>
        </ul>
        <div className="mb-5 text-sm bg-black local-select rounded-sm relative" >
        <select className=" py-3 pl-12 w-32 bg-black ">
          <option selected value="tr-TR" key="">Türkçe</option>
          <option   value="en-EN" key="">English</option>
        </select>
        <IoGlobe className="absolute left-3 text-lg global-icon"/>
        </div>
      </Footer>
    </div>
  );
}

export default Login;
