import React, { useState } from "react";
import {
  BillboardAnimation,
  Container,
  Footer,
  Navbar,
  Row,
} from "../../components/index";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { BiCaretDown } from "react-icons/bi";
import { FaSearch, FaBell } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import requests from "../../requests";
import { useTranslation } from "react-i18next";

function Browse() {
  // eslint-disable-next-line no-unused-vars
  const [inLoading, setInLoading] = useState(false);
  const [active, setActive] = useState(false);
  const { t: translate } = useTranslation();
  const handleAccountDropDown = () => {
    // setActive(true);
   
      setActive(true);
    
  };
  const handleAccountDropUp = () => {
    // setActive(false);
  
      setActive(false);
    
  };

  return inLoading ? (
    <Loading />
  ) : (
    <Container className="bg-nx-gray-900">
      <Navbar>
        <div className="w-full h-full flex flex-row items-center">
          <Link to="/" className="lgm:h-h-25 h-5 w-32 flex cursor-pointer mr-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
            />
          </Link>
          <ul className="w-full flex">
            {translate("browse.navbar.left-links", { returnObjects: true }).map(
              (links, index) => (
                <li
                  key={index}
                  className={` ${
                    index === 0
                      ? `${
                          index === 1
                            ? "cursor-default font-semibold text-white"
                            : ""
                        } "items-center ml-5 cursor-pointer mdmin-1:hidden flex text-white font-semibold"`
                      : "ml-5 cursor-pointer  mdmin-1:flex hidden text-white font-semibold"
                  }`}
                >
                  {links}
                  {index === 0 ? <BiCaretDown className="ml-1" /> : null}
                </li>
              )
            )}
          </ul>
          <div className="flex h-full items-center text-white">
            <FaSearch className="text-xl mr-5 cursor-pointer"></FaSearch>
            <div className="mr-5 cursor-pointer">Çocuk</div>
            <FaBell className="text-2xl mr-5 cursor-pointer"></FaBell>
            <div className="account-menu relative cursor-pointer">
              <div
                onMouseEnter={handleAccountDropDown}
                onMouseLeave={handleAccountDropUp}
                onClick={() => setActive(!active)}
                className="flex items-center"
              >
                <div className="relative flex  w-8 h-8  ">
                  <img
                    className=" w-full rounded"
                    src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZePc06g6rt5BYoO3sH6QA1VjxT3XxM3MZjMUeyI5na3MfBIRS1yD85nNlcQ0iWE6CPg8g87DS9G1CtBU2xLQVA.png?r=ee6"
                    alt=""
                  />
                  <IoMdArrowDropup
                    onMouseEnter={handleAccountDropDown}
                    onMouseLeave={handleAccountDropUp}
                    className={`text-nx-gray-200 text-3xl -bottom-7 ${
                      active ? "absolute" : "hidden"
                    }`}
                  />
                </div>
                <IoMdArrowDropdown
                  className={`text-2xl ml-1.5 ${
                    active
                      ? "transform rotate-180 duration-300 ease-out"
                      : "transform duration-300 ease-out"
                  }`}
                />
              </div>
              <div
                onMouseEnter={handleAccountDropDown}
                onMouseLeave={handleAccountDropUp}
                className={`flex flex-col border border-solid border-white border-opacity-30  ${
                  active
                    ? "absolute w-44 bg-opac-100 right-0 top-14 min-w-full transform duration-150 ease-out"
                    : "hidden"
                }`}
              >
                <ul className="h-auto px-0 pt-3 pb-1 w-full">
                  <li className="py-1 px-3 hover:underline leading-8 flex">
                    <img
                      className="mr-3"
                      src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                      alt=""
                    />
                    Koray
                  </li>
                  <li className="py-1 px-3 hover:underline leading-8 flex">
                    <img
                      className="mr-3"
                      src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABf9uIfUy3k75jnjPf-M5wZdrjcXMLe04_P5az0_eAPb3dECf_y_hunxCmOg5febcU6DyIEc1L18SK7t1vmE6s5o.png?r=fcd"
                      alt=""
                    />
                    Kids
                  </li>
                  <li className="py-1 px-3 hover:underline leading-8">
                    Profil Yönetimi
                  </li>
                </ul>
                <ul className="h-auto px-0 py-3 w-full border-t border-solid border-white border-opacity-30 ">
                  {translate("browse.navbar.account-card.account", {
                    returnObjects: true,
                  }).map((links, index) => (
                    <li
                      key={index}
                      className="py-1 px-3 hover:underline leading-4"
                    >
                      {links}
                    </li>
                  ))}
                  <Link
                    className="py-1 px-3 hover:underline leading-4"
                    to="/logout"
                  >
                    {translate("browse.navbar.account-card.account2")}
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      <BillboardAnimation className="min-h-h2" />
      <div>
        <Row
          title="Netflix Orjinals"
          fetchUrl={requests.netflixOriginalsFetch}
        />
        <Row title="Treding Now" fetchUrl={requests.trendingFetch} />
        <Row title="Netflix Orjinals" fetchUrl={requests.topRatedFetch} />
        <Row title="Comedies" fetchUrl={requests.comedyMovieFetch} />
        <Row title="Action Movies" fetchUrl={requests.actionMovieFetch} />
        <Row title="Horror Movies" fetchUrl={requests.horrorMovieFetch} />
        <Row title="Netflix Orjinals" fetchUrl={requests.romanceMovieFetch} />
      </div>
      <Footer
        className="bg-transparent"
        mainFooter
        footerItems={translate("browse.footer.footer-links", {
          returnObjects: true,
        })}
      />
    </Container>
  );
}

export default Browse;
