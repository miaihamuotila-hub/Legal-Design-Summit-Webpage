import { problemStatement, problemStatementClose } from "@/lib/content/home";

export function ProblemStatement() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {problemStatement.map((line) => (
            <p
              key={line.text}
              className="font-bold text-[28px] md:text-[40px] leading-[1.15] text-[#1a1a1a]"
            >
              {line.text}{" "}
              <span className="text-[#9C0760]">{line.answer}</span>
            </p>
          ))}
          <p className="font-bold text-[28px] md:text-[40px] leading-[1.15] text-[#1a1a1a] mt-2">
            {problemStatementClose}
          </p>
        </div>
      </div>
    </section>
  );
}
