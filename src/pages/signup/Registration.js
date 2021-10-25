import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Footer, Button } from "../../components";

function Registration() {
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
            <span className="text-f13">ADIM 1 / 2</span>
            <div className="text-2xl font-semibold pb-3">
              Hesabınızın kurulumunu tamamlayın
            </div>
            <div>
              Netflix sizin için kişiselleştirilir. İstediğiniz zaman,
              istediğiniz cihazda izlemek için bir parola oluşturun.
            </div>
            <Link to="/signup/regform">
              <Button>İleri</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer
        mainFooter
        signUpFooter
        className="footer-container-singup mb-0"
      />
    </Container>
  );
}

export default Registration;
