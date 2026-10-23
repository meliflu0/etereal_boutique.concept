import { createFileRoute } from "@tanstack/react-router";
import {
  About, Benefits, Categories, CollectionIntro, Contact, EditorialBanner, Favorites, Featured, Hero, Newsletter, Reviews, StyleEditorial,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETEREAL BOUTIQUE — Moda femenina sencilla, con un toque etéreo" },
      { name: "description", content: "Prendas versátiles y accesorios delicados para crear outfits que se sientan como tú. Boutique conceptual de moda femenina." },
      { property: "og:title", content: "ETEREAL BOUTIQUE — Moda femenina sencilla" },
      { property: "og:description", content: "Piezas sencillas para sentirte tú, todos los días." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Benefits />
      <CollectionIntro />
      <Categories />
      <Featured />
      <Favorites />
      <EditorialBanner />
      <About />
      <StyleEditorial />
      <Reviews />
      <Newsletter />
      <Contact />
    </>
  );
}
