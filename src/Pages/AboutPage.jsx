import { AboutWrapper } from "./AboutPage.style";
import { Layout } from "../Styles/Layouts";
import Title from "../Components/Title/Title";
import ImageSection from "../Components/ImageSection/ImageSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";

import Reviews from "../Components/Reviews/Reviews";

const AboutPage = () => {
  let n1 = Math.random().toString().substring(2, 9);
  let n2 = Math.random().toString().substring(2, 9);
  let n3 = Math.random().toString().substring(2, 9);

  const reviewData = [
    {
      id: { n1 },
      autor: "Gerardo Sanches",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic!",
    },
    {
      id: n2,
      autor: "Gustavo Borrego",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic!",
    },
    {
      id: n3,
      autor: "Lino Jesus",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic!",
    },
  ];
  return (
    <AboutWrapper>
      <Layout>
        <Title title="about me" span="about me" />
        <ImageSection />
        <ServicesSection />

        <Reviews reviews={reviewData} />
      </Layout>
    </AboutWrapper>
  );
};

export default AboutPage;
