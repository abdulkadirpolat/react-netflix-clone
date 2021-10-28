import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Footer,
  Header,
  Input,
} from "../../components";
import { IoGlobe } from "react-icons/io5";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import "./home.css";

function Home() {
  const [lang, setLang] = useState("");
  const { t: translate } = useTranslation();
  const [actived, setActived] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const history = useHistory();
   const user =  "hello"
  const handleClick = () => {
    if (user=== "hello") history.push("/signup/registration");
  };

  function handleChangeLanguage(lang) {
    if (lang.target.value) setLang(lang.target.value);
    i18n.changeLanguage(lang.target.value);
  }

  return (
    <Container className="bg-black">
      <Header>
        <div className="flex items-center h-full mx-m-1">
          <div
            className={`text-sm bg-black text-white local-select rounded-sm relative 
                 border-nx-gray-300 border border-solid `}
          >
            <select
              onChange={handleChangeLanguage}
              value={lang ? lang : "en"}
              className={`py-2 pl-5 w-24 bg-black`}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
            <IoGlobe
              className={`absolute left-1 text-base top-1/4 text-white`}
            />
          </div>
          <Link to="/login">
            <Button className="small red ml-7">
              {translate("home.navbar-btn")}
            </Button>
          </Link>
        </div>
      </Header>
      <div className="border-b-8 border-nx-gray-700 home-container text-center">
        <div className="home-body ">
          <div className="px-11 py-16 h-96 text-white">
            <div className="mx-auto h-full max-w-5xl sticky z-10">
              <h1 className="text-6xl font-semibold">
                {translate("home.top-story-card.title")}
              </h1>
              <h2 className="text-2xl my-4">
                {translate("home.top-story-card.subtitle")}
              </h2>
              <div className="pt-3">
                <h3 className="text-xl">
                  {translate("home.top-story-card.text")}
                </h3>
                <div className="flex max-w-2xl mx-auto h-24 mt-4">
                  <div className="w-full ">
                    <Input
                      placeholder="E-posta adresi"
                      type="email"
                      outline
                      className="border-none w-full rounded-l-none min-h-mh70   text-nx-gray-400"
                    />
                  </div>
                  <Button
                  onClick={handleClick}
                    className="text-3xl bg-nx-red hover:bg-nx-red-2 leading-loose min-h-mh70
                   h-h-70 px-8 py-2 cursor-pointer border-l border-nx-gray-700 whitespace-nowrap "
                  >
                    {translate("home.top-story-card.button.label")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {translate("home.story-cards", { returnObjects: true }).map(
        (items, index) => (
          <div key={index} className="py-16 px-11 border-b-8 border-nx-gray-700 text-white h-96 ">
            <Card   
              className={`${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              <div className="w-1/2">
                <h1 className="text-5xl font-semibold">{items.title}</h1>
                <h2 className="text-3xl">{items.text}</h2>
              </div>
              <div className="w-1/2 h-full">ed</div>
            </Card>
          </div>
        )
      )}

      <div className="py-16 px-11 border-b-8 border-nx-gray-700 text-white ">
        <div className="block text-center">
          <h1 className="mb-2 text-5xl font-bold"> {translate("home.bottom-story-card.title")}</h1>
          <ul className="text-3xl max-w-3xl mx-auto my-12">
            {translate("home.bottom-story-card.list-items", {
              returnObjects: true,
            }).map((items, index) => (
              <li key={index} className="bg-nx-gray-700 mb-2">
                <button onClick={() => setActived(!actived)} className="border-b border-black w-full p-7 text-left">
                  {items.title}{" "}
                </button>
                <div className={`mt-3 p-7 max-h-3xl ${actived ? "" : "hidden"}`}>{items.text} </div>
              </li>
            ))}
          </ul>
          <div className="pt-3">
                <h3 className="text-xl">
                  {translate("home.top-story-card.text")}
                </h3>
                <div className="flex max-w-2xl mx-auto h-24 mt-4">
                  <div className="w-full ">
                    <Input
                      placeholder="E-posta adresi"
                      type="email"
                      outline
                      className="border-none w-full rounded-l-none min-h-mh70   text-nx-gray-400"
                    />
                  </div>
                  <Button
                  onClick={handleClick}
                    className="text-3xl bg-nx-red hover:bg-nx-red-2 leading-loose min-h-mh70
                   h-h-70 px-8 py-2 cursor-pointer border-l border-nx-gray-700 whitespace-nowrap"
                  >
                    {translate("home.top-story-card.button.label")}
                  </Button>
                </div>
              </div>
        </div>
      </div>
      <Footer
        className="bg-transparent"
        mainFooter
        footerItems={translate("home.footer.footer-links", {
          returnObjects: true,
        })}
      />
    </Container>
  );
}

export default Home;
