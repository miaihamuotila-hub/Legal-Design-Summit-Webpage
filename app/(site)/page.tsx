import { Hero } from "@/components/home/hero";
import { ProblemStatement } from "@/components/home/problem-statement";
import { NextEdition } from "@/components/home/next-edition";
import { Stats } from "@/components/home/stats";
import { FourWaysIn } from "@/components/home/four-ways-in";
import { Testimonial } from "@/components/home/testimonial";
import { ContentTeasers } from "@/components/home/content-teasers";
import { Partners } from "@/components/home/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <NextEdition />
      <Stats />
      <FourWaysIn />
      <Testimonial />
      <ContentTeasers />
      <Partners />
    </>
  );
}
