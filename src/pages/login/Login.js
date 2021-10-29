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
        setErrorCode(errorCode)
      });
  };

  if (user) return <Redirect to="/browse" />;
  return (
    <Container className={"login-container"}>
      <Header />

      {/* mdmin-3:pt-24 mdm-2:pt-24 */}
      <div className="login-body text-gray-500 sticky z-10 text-sm mdmin-3:min-h-screen mdmin-3:-mb-64">
        <div className="mdmin-3:px-1/20  px-0 ">
          <div className="mdmin-3:max-w-md mdmin-3:px-16 px-1/20 mdmin-3:pt-16
           mdmin-3:pb-10  mdmin-3:mb-24 flex flex-col mdmin-3:bg-opac-100
            bg-black mx-auto rounded-smm  max-w-none">
            <div className="login-form">
              <div className="hybrid-login-form-main mb-12 mdmin-3:mb-0 ">
                <h1 className="mb-7 font-bold text-3xl text-white">
                  {translate("login.title")}
                </h1>
                {errorCode ? (
                  <div className="mb-4 px-5 py-2.5 text-white bg-nx-yellow rounded leading-4">
                   {errorCode === "auth/wrong-password" ? translate("login.input.errors.auth/wrong-password") : translate("login.input.errors.auth/user-not-found") }
                    <Link className="underline" to="/">
                    {errorCode === "auth/wrong-password" ? translate("login.input.errors.reset password") : translate("login.input.errors.new account") }
                    </Link>
                  </div>
                ) : null}
                <form onSubmit={handleSubmit(submitForm)}>
                  <Input
                    type="email"
                    className="text-white rounded-smm "
                    placeholder={translate("login.input.placeholders.email")}
                    onChange={(event, { name, value }) => {
                      setValue(name, value);
                    }}
                    {...register("email", { required: true })}
                    error={errors.email}
                  />
                  <Input
                    type="password"
                    className="text-white rounded-smm "
                    placeholder={translate("login.input.placeholders.password")}
                    onChange={(event, { name, value }) => {
                      setValue(name, value);
                    }}
                    {...register("password", {
                      required: true,
                      maxLength: 60,
                      minLength: 6,
                    })}
                    error={errors.password}
                  />
                  <Button className="mt-6 mb-3 red w-full">
                    {translate("login.buttons.signIn")}
                  </Button>

                  <Input
                    label={translate("login.input.label.checkbox")}
                    type="checkbox"
                    id="rememberMe"
                  >
                    {" "}
                    <Link
                      className="hover:underline text-nx-gray-200"
                      to="login-help"
                    >
                      {translate("login.login-help")}
                    </Link>
                  </Input>
                </form>
              </div>
              <div className="hybrid-login-form-other">
                <div className="mt-4 text-nx-gray-600">
                  {translate("login.login-form.facebook")}
                </div>
                <div className="mt-4 text-base text-nx-gray-600">
                {translate("login.login-form.login-signup")}
                  <Link
                    className="text-white font-medium hover:underline text-base"
                    to="/"
                  >
                    {" "}
                    {translate("login.login-form.login-signup-now")}
                  </Link>
                </div>
                <div className="mt-3 leading-4 text-f13 text-nx-gray-400">
                  <div className="mb-3 mdmin-3:h-12">
                  {translate("login.login-form.recaptcha")}{" "}
                    {!googlePrivacy && (
                      <button
                        onClick={() => setGooglePrivacy(!googlePrivacy)}
                        className="hover:underline text-nx-lkblue"
                      >
                       {translate("login.login-form.recaptcha-btn")}
                      </button>
                    )}
                  </div>
                  {googlePrivacy ? (
                    <div className="h-24">
                     {translate("login.login-form.recaptcha-text.1")}
                      <span className="hover:underline cursor-pointer text-nx-glblue">
                      {translate("login.login-form.recaptcha-text.2")}
                      </span> 
                      {translate("login.login-form.recaptcha-text.3")}
                      <span className="hover:underline cursor-pointer text-nx-glblue">
                      {translate("login.login-form.recaptcha-text.4")}
                      </span>
                      {translate("login.login-form.recaptcha-text.5")}
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
      <Footer className="bg-opac-100" mainFooter footerItems={translate("login.footer.footer-links", {returnObjects: true})} />
    </Container>
  );
}

export default Login;
