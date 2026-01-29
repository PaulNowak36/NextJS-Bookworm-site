import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import { marked } from "marked";
import Image from "next/image";

const Contact = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container w-full">

        {/* Titre */}
        {markdownify(title, "h1", "h2 mb-8 text-center")}

        {/* 🔥 Contenu Markdown du fichier contact.md */}
        <div
          className="prose max-w-none mb-10"
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        />
      </div>

      {/* <div className="img-cover mb-8 flex items-center justify-center">
        <Image
          src="/images/favicon.png"
          width={100}
          height={100}
          alt={title}
          className="rounded-lg"
        />
      </div> */}

      {/* Formulaire */}
      <div className="container max-w-[700px]">

        <form
          className="contact-form"
          method="POST"
          action={contact_form_action}
        >
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="firstName">
              Prénom
            </label>
            <input
              className="form-input w-full"
              name="firstName"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Nom
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Sujet
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Tapez votre message
            </label>
            <textarea className="form-textarea w-full" rows="7" />
          </div>

          <button className="btn btn-outline-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;