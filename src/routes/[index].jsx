import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function ({}) {
  return (
    <Layout
      title="Homepage"
      description="The Ease of JSX with the power of SSR"
    >
      <Navbar />
      <Hero />
      <Accordion />
      <Modal />
      <Timeline />
      <Footer />
    </Layout>
  );
}
