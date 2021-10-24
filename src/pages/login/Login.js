import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Footer, Input, Header, Container } from "../../components";
import { IoGlobe } from "react-icons/io5";
import { useForm } from "react-hook-form";
import "./login.css";
import i18n from "../../i18n";
// import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
// const auth = getAuth();

function Login() {
  const [googlePrivacy, setGooglePrivacy] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("");
  // const [login, setLogin] = useState({})
  const { t: translate } = useTranslation();
  console.log(password)
 
 
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  // const errorValidating = {
    //   required: true,
    //   maxLength: 60,
    //   minLength: 4,
    // };
    
    const submitForm = (data) => {
      console.log(data)
      const id = "C" + new Date().getTime();
      login(id, data.email, data.password);
    };
    
    const login = (id, email, password) => {
      if (!email == "" && !password == "") {
        const user = { id, email, password };

//           createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential)=> {
//     console.log(userCredential)
//   })
  
//  signInWithEmailAndPassword(auth, email, password)
//  .then(( userCredential)=> {
//    const user = userCredential.user;
//    console.log(user)
//  })
//  .catch((error)=> {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//  })
        
        setUser(user);
        localStorage.setItem("user_information", JSON.stringify(user));
      }
    };
    
    function handleChangeLanguage(lang) {
      if (lang.target.value) setLang(lang.target.value);
      i18n.changeLanguage(lang.target.value);
    }
    
    // xl-md:text-100 md-sm:text-200  smm:text-300
    // if (user) return <Redirect to="/browse" />;
    return (
      <Container className={"login-container"}>
      <Header />
 
      {/* mdmin-3:pt-24 mdm-2:pt-24 */}
      <div className="login-body text-gray-500 sticky z-10 text-sm mdmin-3:min-h-screen mdmin-3:-mb-64">
        <div className="mdmin-3:px-1/20  px-0 ">
          <div className="  mdmin-3:max-w-md mdmin-3:px-16 px-1/20 mdmin-3:pt-16 mdmin-3:pb-10  mdmin-3:mb-24 flex flex-col mdmin-3:bg-opac-100 bg-black mx-auto rounded-smm  max-w-none">
            <div className="login-form">
              <div className="hybrid-login-form-main mb-12 mdmin-3:mb-0 ">
                <h1 className="mb-7 font-bold text-3xl text-white">
                  {translate("login.title")}
                </h1>
                <form onSubmit={handleSubmit(submitForm)}>
                  <Input
                    type="email"
                    className="text-white"
                    placeholder={translate("input.placeholders.email")}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    {...register("email", { required: true })}
                    error={errors.email}
                  />
                  <Input
                    type="password"
                    className="text-white"
                    placeholder={translate("input.placeholders.password")}
                    onChange={(e) => setPassword(e.target.value.trim())}
                    {...register("password", {
                      required: true,
                      maxLength: 60,
                      minLength: 4,
                    })}
                    error={errors.password}
                  />
                  <Button>{translate("buttons.signIn")}</Button>

                  <Input
                    label={translate("input.label.checkbox")}
                    type="checkbox"
                    id="rememberMe"
                  >
                    {" "}
                    <Link
                      className="hover:underline text-nx-gray-200"
                      to="login-help"
                    >
                      Yardım ister misiniz?{" "}
                    </Link>
                  </Input>
                </form>
              </div>
              <div className="hybrid-login-form-other">
                <div className="mt-4 text-nx-gray-600">
                  Facebook ile Oturum Aç
                </div>
                <div className="mt-4 text-base text-nx-gray-600">
                  Netflix'e katılmak ister misiniz?
                  <Link
                    className="text-white font-medium hover:underline text-base"
                    to="/"
                  >
                    {" "}
                    Şimdi kaydolun.
                  </Link>
                </div>
                <div className="mt-3 leading-4 text-f13 text-nx-gray-400">
                  <div className="mb-3 mdmin-3:h-12">
                    Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
                    tarafından korunuyor.{" "}
                    {!googlePrivacy && (
                      <button
                        onClick={() => setGooglePrivacy(!googlePrivacy)}
                        className="hover:underline text-nx-lkblue"
                      >
                        Daha fazlasını öğrenin.
                      </button>
                    )}
                  </div>
                  {googlePrivacy ? (
                    <div className="h-24">
                      Google reCAPTCHA tarafından toplanan bilgiler Google'ın{" "}
                      <span className="hover:underline cursor-pointer text-nx-glblue">
                        Gizlilik Politikası
                      </span>{" "}
                      ve{" "}
                      <span className="hover:underline cursor-pointer text-nx-glblue">
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
      </div>
      <Footer className="flex flex-col">
        <div className="mb-8 text-base">
          Sorularınız mı var?{" "}
          <span className="hover:underline cursor-pointer ">0850-390-7444</span>{" "}
          numaralı telefonu arayın
        </div>
        <ul className="h-full flex flex-wrap text-f13">
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3 pr-3 mb-4 hover:underline cursor-pointer ">
            SSS
          </li>
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3  pr-3 mb-4 hover:underline cursor-pointer ">
            Yardım Merkezi
          </li>
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3  pr-3 mb-4 hover:underline cursor-pointer ">
            Kullanım Koşulları
          </li>
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3  pr-3 mb-4 hover:underline cursor-pointer ">
            Gizlilik
          </li>
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3  pr-3 mb-4 hover:underline cursor-pointer ">
            Çerez Tercihleri
          </li>
          <li className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3  pr-3 mb-4 hover:underline cursor-pointer ">
            Kurumsal Bilgiler
          </li>
        </ul>
        <div className="mb-5 text-sm bg-black local-select rounded-sm relative border-nx-gray-700 border border-solid">
          <select
            onChange={handleChangeLanguage}
            value={lang ? lang : "en"}
            className=" py-4 pl-12 w-32 bg-black "
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
          <IoGlobe className="absolute left-3 text-lg top-t30 text-nx-gray-300" />
        </div>
      </Footer>
    </Container>
  );
}

export default Login;
