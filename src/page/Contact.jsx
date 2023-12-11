import Footer from "../partial/Footer";
import Header from "../partial/Header";

const Contact = () => {
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(email, message);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleContactSubmit}>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>

        <input type="submit" />
      </form>
      <Footer />
    </>
  );
};

export default Contact;
