import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Footer, Button } from "../../components";
import { useTranslation } from "react-i18next"

function Registration() {
  const {t: translate } = useTranslation()
  return (
    <Container className="bg-white flex flex-col min-h-full">
      <Header singUpHeader />
      <div className="w-full pb-24">
        <div className="max-w-screen-lg mx-auto mt-0 mb-4 py-8 pr-5 pl-15">
          <div className=" w-full mx-0 mt-24 mb-5">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              className="bg-no-repeat h-16 mx-auto"
              alt=""
            />
          </div>
          <div className="max-w-xs mx-auto text-center">
            <span className="text-f13">{translate("signup.registration.reg-container.step")}</span>
            <div className="text-2xl font-semibold pb-3">
            {translate("signup.registration.reg-container.title")}
            </div>
            <div>
            {translate("signup.registration.reg-container.text")}
            </div>
            <Link to="/signup/regform">
              <Button className="mt-6 mb-3 red w-full">{translate("signup.registration.reg-container.button")}</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer
      footerItems={translate("login.footer.footer-links", {returnObjects: true})}
        mainFooter
        signUpFooter
        className="footer-container-singup mb-0"
      />
    </Container>
  );
}

export default Registration;
