import React from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import ContactForm from "./components/ContactForm/ContactForm";
import { RegistrationFormData } from "./interfaces/registrationInterfaces";
import { ContactFormData } from "./interfaces/contactInterfaces";

const App: React.FC = () => {
  const handleRegistrationSubmit = (data: RegistrationFormData) => {
    console.log("ユーザー登録データ:", data);
    // ユーザー登録処理をここで行います
  };

  const handleContactSubmit = (data: ContactFormData) => {
    console.log("お問い合わせデータ:", data);
    // お問い合わせ処理をここで行います
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>サンプルフォーム</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>ユーザー登録フォーム</h2>
        <RegistrationForm onSubmit={handleRegistrationSubmit} />
      </section>

      <section>
        <h2>お問い合わせフォーム</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </section>
    </div>
  );
};

export default App;
