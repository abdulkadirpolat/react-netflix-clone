import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Footer, Input, Header, Container } from "../../components";
import { useForm } from "react-hook-form";
import "./login.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function Login() {
  const [googlePrivacy, setGooglePrivacy] = useState(false);
  const [user, setUser] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const { t: translate } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const submitForm = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorCode(errorCode);
        // console.log("errorMessage", errorMessage);
      });
  };

  if (user) return <Redirect to="/browse" />;
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
                {errorCode ? (
                  <div className="mb-4 px-5 py-2.5 text-white bg-nx-yellow rounded leading-4">
                    Bu e‑posta adresi ile bağlantılı bir hesap bulamadık. Lütfen
                    yeniden deneyin ya da{" "}
                    <Link className="underline" to="/">
                      yeni bir hesap oluşturun.
                    </Link>
                  </div>
                ) : null}
                <form onSubmit={handleSubmit(submitForm)}>
                  <Input
                    type="email"
                    className="text-white"
                    placeholder={translate("input.placeholders.email")}
                    onChange={(event, { name, value }) => {
                      setValue(name, value);
                    }}
                    {...register("email", { required: true })}
                    error={errors.email}
                  />
                  <Input
                    type="password"
                    className="text-white"
                    placeholder={translate("input.placeholders.password")}
                    onChange={(event, { name, value }) => {
                      setValue(name, value);
                    }}
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
      <Footer mainFooter />
    </Container>
  );
}

export default Login;
