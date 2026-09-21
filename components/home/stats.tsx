import { stats2025 } from "@/lib/content/home";

export function Stats() {
  return (
    <section className="bg-[#288F85] text-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-10">
        <p className="h-brand text-[10px] text-[#AEEAE4] mb-6 tracking-widest">
          2025 edition, in numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats2025.map((s) => (
            <div key={s.label}>
              <div className="font-bold text-[32px] md:text-[40px] leading-none">
                {s.value}
              </div>
              <div className="h-brand text-[10px] text-[#AEEAE4] mt-2 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
