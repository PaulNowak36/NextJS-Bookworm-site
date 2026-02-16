import { getSinglePage } from "@lib/contentParser";
import ContactLayout from "@layouts/Contact";

export default async function ContactPage() {
  const pages = await getSinglePage("content");
  const contact = pages.find((p) => p.slug === "contact");

  if (!contact) {
    return <div>Page contact introuvable</div>;
  }

  return <ContactLayout data={contact} />;
}