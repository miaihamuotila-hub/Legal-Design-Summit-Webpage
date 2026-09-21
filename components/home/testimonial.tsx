import { testimonial } from "@/lib/content/home";

export function Testimonial() {
  return (
    <section className="bg-[#9C0760] text-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        <p className="h-brand text-[10px] text-[#FCBDE3] mb-5 tracking-widest">
          From the community
        </p>
        <blockquote className="font-bold text-[26px] md:text-[36px] leading-[1.25] max-w-3xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="text-[13px] text-[#FCBDE3] mt-5">{testimonial.attribution}</p>
      </div>
    </section>
  );
}
