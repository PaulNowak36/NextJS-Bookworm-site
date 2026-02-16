import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

// Composants React utilisables dans le Markdown
import BackButton from "./shortcodes/BackButton";
import SousMenuButton from "./shortcodes/sousMenuButton";
import MenuButton2 from "./shortcodes/menuButton2";

const components = {
  BackButton,
  SousMenuButton,
  MenuButton2,
};

const Contact = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container w-full">

        {/* Titre */}
        {markdownify(title, "h1", "h2 mb-8 text-center")}

        {/* Bouton retour placé dans le layout */}
        {/* <div className="mb-6">
          <BackButton href="/" label="Retour" />
        </div> */}

        {/* Contenu MDX */}
        <div className="prose max-w-none mb-10">
          <MDXRemote source={content} components={components} />
        </div>
      </div>

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
            <input className="form-input w-full" name="firstName" type="text" required />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Nom
            </label>
            <input className="form-input w-full" name="name" type="text" required />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input className="form-input w-full" name="email" type="email" required />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Sujet
            </label>
            <input className="form-input w-full" name="subject" type="text" required />
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