import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Shikhar Bhatnagar | Technology Consultant | Senior Full Stack Engineer",
  description:
    "12+ years experience building SaaS, Enterprise, eCommerce and Cloud Applications.",
  keywords: [
    "Full Stack Developer",
    "Laravel",
    "Python",
    "Node.js",
    "React",
    "Vue.js",
    "Next.Js"
  ],
  openGraph: {
    title: "Shikhar Bhatnagar",
    description:
      "Senior Full Stack Engineer & Technology Consultant",
    url: "https://your-domain.com",
    siteName: "Shikhar Bhatnagar Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
