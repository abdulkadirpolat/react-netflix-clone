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
// import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./home.css";
import Toggle from "../../components/Toggle";

function Home() {
  const history = useHistory();
  const [lang, setLang] = useState("");
  const { t: translate } = useTranslation();
  // const [actived, setActived] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const submitForm = (data) => {
   console.log(data)
 
    if (data ){
     history.push("/signup/registration");
    } 
  };

  function handleChangeLanguage(lang) {
    if (lang.target.value) setLang(lang.target.value);
    i18n.changeLanguage(lang.target.value);
  }

  return (
    <Container className="bg-black">
      <Header className="absolute" >
        <div className="flex items-center h-full mx-m-1 z-30">
          <div
            className={`text-sm bg-black text-white rounded-sm relative 
                 border-nx-gray-300 border border-solid `}
          >
            <select
              onChange={handleChangeLanguage}
              value={lang ? lang : "en"}
              className={`py-2 smm3:py-1  pl-5 w-24 bg-black`}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
            <IoGlobe
              className={`absolute left-1 text-base top-1/4 smm3:top-1/5 text-white`}
            />
          </div>
          <Link className="mr-5" to="/login">
            <Button className="small red ml-7 smm3:ml-2">
              {translate("home.navbar-btn")}
            </Button>
          </Link>
        </div>
      </Header>
      <div className="border-b-8 border-nx-gray-700 home-container text-center">
        <div className="home-body ">
          <div className="px-11 py-16 h-96 text-white">
            <div className="mx-auto h-full max-w-5xl sticky z-10">
              <h1 className="text-5xl  2xlmin-3:text-6xl smm3:text-2xl font-semibold">
                {translate("home.top-story-card.title")}
              </h1>
              <h2 className="text-2xl smm3:text-base my-4">
                {translate("home.top-story-card.subtitle")}
              </h2>
              <div className="pt-3">
                <h3 className="text-xl smm3:text-base">
                  {translate("home.top-story-card.text")}
                </h3>
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="block max-w-2xl mx-auto h-24 mt-4 flex-row lgm:flex"
                >
                  <div className="w-full">
                    <Input
                      placeholder="E-posta adresi"
                      type="email"
                      outline
                      className="border-none w-full rounded-l-none min-h-mh70 mdm-3:min-h-mh40 text-nx-gray-400"
                      onChange={(event, { name, value }) => {
                        setValue(name, value);
                      }}
                      {...register("email")}
                      error={errors.email}
                    />
                  </div>
                  <Button
                    className="text-3xl bg-nx-red hover:bg-nx-red-2 leading-loose min-h-mh70  mdm-3:min-h-mh40  mdm-3:text-base
                   h-h-70 px-8 py-2 cursor-pointer border-l border-nx-gray-700 whitespace-nowrap "
                  >
                    {translate("home.top-story-card.button.label")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {translate("home.story-cards", { returnObjects: true }).map(
        (items, index) => (
          <div
            key={index}
            className="py-16 px-11 border-b-8 border-nx-gray-700 text-white lgmax:text-center lgmax:items-center "
          >
            <Card
              className={`${
                index % 2 === 0
                  ? "lgmax:flex-col"
                  : "lgm:flex-row-reverse lgmax:flex-col"
              }`}
            >
              <div className="w-full lgm:w-1/2">
                <h1 className="text-5xl smm3:text-2xl font-semibold">{items.title}</h1>
                <h2 className="text-3xl smm3:text-lg">{items.text}</h2>
              </div>
              <div className="w-full lgm:w-1/2 h-full lgmax:w-auto">
                <img src={items.image} alt="" />
              </div>
            </Card>
          </div>
        )
      )}

      <div className="py-16 px-11 smm3:px-0 border-b-8 border-nx-gray-700 text-white ">
        <div className="block text-center">
          <h1 className="mb-2 text-5xl  smm3:text-2xl font-bold">
            {translate("home.bottom-story-card.title")}
          </h1>
          <ul className="text-3xl smm3:text-lg max-w-3xl mx-auto my-12">
            {translate("home.bottom-story-card.list-items", {
              returnObjects: true,
            }).map((items, index) => (
             <Toggle items= {items} key= {index} />
            ))}
          </ul>
          <div className="pt-3">
            <h3 className="text-xl">{translate("home.top-story-card.text")}</h3>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="block max-w-2xl mx-auto h-24 mt-4 flex-row lgm:flex"
            >
              <div className="w-full ">
                <Input
                  placeholder="E-posta adresi"
                  type="email"
                  outline
                  className="border-none w-full rounded-l-none min-h-mh70 mdm-3:min-h-mh40 smm3:mx-5 smm3:max-w-sm text-nx-gray-400"
                  onChange={(event, { name, value }) => {
                    setValue(name, value);
                  }}
                  {...register("email") }
                  error={errors.email}
                />
              </div>
              <Button
                className="text-3xl bg-nx-red hover:bg-nx-red-2 leading-loose min-h-mh70 mdm-3:min-h-mh40  mdm-3:text-base
                   h-h-70 px-8 py-2 cursor-pointer border-l border-nx-gray-700 whitespace-nowrap"
              >
                {translate("home.top-story-card.button.label")}
              </Button>
            </form>
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
