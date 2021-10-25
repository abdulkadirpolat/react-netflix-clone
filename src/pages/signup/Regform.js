import React, { useState } from "react";
import { Header, Container, Footer, Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function Regform() {
  const [user, setUser] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const history = useHistory();
  console.log(user);
  const handleClick = () => {
    if (user) history.push("/login");
  };

  const submitForm = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredential) => {
        const user = userCredential.user;
        setUser(user);
      }
    );
  };

  return (
    <Container className="bg-white">
      <Header singUpHeader />
      <div className="w-full pb-24">
        <div className="max-w-screen-lg mx-auto mt-0 mb-4 py-8 pr-5 pl-15">
          <div className="max-w-md mx-auto ">
            <span className="text-f13">ADIM 2 / 2</span>
            <div className="text-2xl font-semibold pb-3">
              Üyeliğinizi başlatmak için bir parola oluşturun
            </div>
            <div className="mb-2">
              Sadece birkaç adım daha kaldı, sonra bitiyor! Biz de formaliteyi
              hiç sevmiyoruz.
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
              <Input
                type="email"
                placeholder="E-posta"
                outline
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                {...register("email", { required: true })}
                error={errors.email}
              />
              <Input
                type="password"
                placeholder="Bir parola ekleyin"
                outline
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
              <Input
                signup
                type="checkbox"
                label="Netflix özel teklifleri e‑posta ile gönderilmesin."
                id="emailPreference"
                className="w-7 h-7 ml-1"
              />
              <Button onClick={handleClick}>Hesap oluştur</Button>
            </form>
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

export default Regform;
