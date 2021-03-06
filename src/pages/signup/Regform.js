import React, { useState } from "react";
import { Header, Container, Footer, Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { IoWarning } from "react-icons/io5";
const auth = getAuth();

function Regform() {
  const [errorCode, setErrorCode] = useState(null);
  const { t: translate } = useTranslation();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const submitForm = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          history.push("/login");
        }
      })
      .catch((error) => {
        setErrorCode(error.code);
      });
  };

  return (
    <Container className="bg-white">
      <Header singUpHeader />
      <div className="w-full pb-24">
        <div className="max-w-screen-lg mx-auto mt-0 mb-4 py-8 pr-5 pl-15">
          <div className="max-w-md mx-auto ">
            {errorCode ? (
              <div className="mb-4 px-5 py-6 text-white bg-yellow-500 rounded-sm leading-4 flex ">
                <div className="leading-4">
                  <IoWarning className="text-3xl ml-1" />
                </div>
                <div className="pl-3">
                  <b>
                    {translate(
                      "signup.regform.reg-container.input.errors.auth/email-already-in-use"
                    )}
                  </b>
                  <Link className="underline" to="/login">
                    {translate(
                      "signup.regform.reg-container.input.errors.sign into that account"
                    )}
                  </Link>
                  {translate(
                    "signup.regform.reg-container.input.errors.auth/email-already-in-use2"
                  )}
                </div>
              </div>
            ) : null}
            <span className="text-f13">
              {translate("signup.regform.reg-container.step")}
            </span>
            <div className="text-2xl font-semibold pb-3">
              {translate("signup.regform.reg-container.title")}
            </div>
            <div className="mb-2">
              {translate("signup.regform.reg-container.text")}
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
              <Input
                height="60px"
                className="rounded-smm "
                type="email"
                placeholder={translate(
                  "signup.regform.reg-container.input.placeholder.email"
                )}
                outline
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                {...register("email", { required: true })}
                error={errors.email}
              />
              <Input
                height="60px"
                className="rounded-smm "
                type="password"
                placeholder={translate(
                  "signup.regform.reg-container.input.placeholder.password"
                )}
                outline
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
              <Input
                signup
                type="checkbox"
                label={translate("signup.regform.reg-container.input.checkbox")}
                id="emailPreference"
                className="w-7 h-7 ml-1"
              />
              <Button className="mt-6 mb-3 red w-full">
                {translate("signup.regform.reg-container.button")}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer
        footerItems={translate("login.footer.footer-links", {
          returnObjects: true,
        })}
        mainFooter
        signUpFooter
        className="footer-container-singup mb-0"
      />
    </Container>
  );
}

export default Regform;
