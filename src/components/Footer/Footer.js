import React, { useState } from "react";
import "./footer.css";
import { IoGlobe } from "react-icons/io5";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
const Footer = ({
  className,
  children,
  mainFooter,
  signUpFooter,
  socialLink,
  footerItems,
  ...props
}) => {
  const { t: translate } = useTranslation();
  const [lang, setLang] = useState("");

  function handleChangeLanguage(lang) {
    if (lang.target.value){ 
      setLang(lang.target.value);
    i18n.changeLanguage(lang.target.value);
  }
  }

  return (
    <footer
      className={`footer-container ${className ? className : ""}  ${
        !signUpFooter ? "mdmin-3:border-none mdmin-3:border-t-0 " : ""
      }`}
    >
      <div
        className={`${
          !signUpFooter ? "max-w-5xl-1" : ""
        } mx-auto h-full w-11/12 flex flex-col`}
        {...props}
      >
        {mainFooter || signUpFooter ? (
          <div className={`${signUpFooter ? "max-w-5xl-1" : ""}`}>
            {socialLink ? (
              <div className="mb-5 flex">
                <AiFillFacebook className="text-4xl mr-4 cursor-pointer" />
                <AiFillInstagram className="text-4xl mr-4 cursor-pointer" />
                <AiOutlineTwitter className="text-4xl mr-4 cursor-pointer" />
                <AiFillYoutube className="text-4xl mr-4 cursor-pointer" />
              </div>
            ) : (
              <div className="mb-8 text-base">
                {translate("login.footer.footer-top.call")}
                <span className="hover:underline cursor-pointer ">
                  0850-390-7444
                </span>{" "}
                {translate("login.footer.footer-top.call2") === "null"
                  ? null
                  : translate("login.footer.footer-top.call2")}
              </div>
            )}
            <ul className="h-full flex flex-wrap text-f13">
              {footerItems
                ? footerItems.map((item, i) => (
                    <li
                      key={i}
                      className="min-w-m100 w-1/4 smm2:w-1/2 mdm-3:w-1/3 pr-3 mb-4 hover:underline cursor-pointer "
                    >
                      {item}
                    </li>
                  ))
                : null}
            </ul>
            <div
              className={`mb-5 text-sm bg-black local-select rounded-sm relative ${
                !signUpFooter ? "border-nx-gray-700" : ""
              } border border-solid ${
                signUpFooter
                  ? "text-nx-gray-700 text-base border-nx-gray-250"
                  : ""
              }`}
            >
              <select
                onChange={handleChangeLanguage}
                value={lang ? lang : i18n.language}
                className={`${
                  signUpFooter ? "bg-white" : ""
                } py-4 pl-12 w-32 bg-black`}
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
              <IoGlobe
                className={`${
                  signUpFooter ? "text-nx-gray-700" : ""
                } absolute left-3 text-lg top-t30 text-nx-gray-300`}
              />
            </div>
          </div>
        ) : null}
        {children ? children : null}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerItems: PropTypes.array.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Footer;
