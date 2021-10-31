import React, { useEffect } from "react";
import { Button, Container, Footer, Header } from "../../components";
import { useTranslation } from "react-i18next";
import "./logout.css";
import { Link, useHistory } from "react-router-dom";
function Logout() {
  const { t: translate } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 30000);
  });
  return (
    <Container className="logout-container">
      <Header>
        <div className="flex items-center h-full mx-m-1">
          <Link to="/login">
            <Button className="small red ml-7">
              {translate("home.navbar-btn")}
            </Button>
          </Link>
        </div>
      </Header>
      <div className="max-w-md mx-auto logout-body min-h-screen  -mb-64">
        <div className="bg-white py-8 px-11">
          <h1 className="text-3xl mb-5">
            {translate("logout.logout-container.title")}
          </h1>
          <p className="my-4">{translate("logout.logout-container.text")}</p>
          <p>{translate("logout.logout-container.text2")}</p>
          <Link to="/">
            <Button className="primary my-3 text-lg w-full">
              {translate("logout.logout-container.button")}
            </Button>
          </Link>
        </div>
      </div>
      <Footer
        className="bg-opac-100"
        mainFooter
        footerItems={translate("logout.footer.footer-links", {
          returnObjects: true,
        })}
      />
    </Container>
  );
}

export default Logout;
