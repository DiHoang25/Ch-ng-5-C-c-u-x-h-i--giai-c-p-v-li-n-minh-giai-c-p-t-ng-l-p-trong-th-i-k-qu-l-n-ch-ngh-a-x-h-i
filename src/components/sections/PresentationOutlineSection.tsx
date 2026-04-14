"use client";

import { motion } from "framer-motion";
import { speakerSegments } from "../../data/presentation-outline";

export function PresentationOutlineSection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4 sm:px-6" id="phan-thuyet-trinh">
      <div className="rounded-3xl border border-cyan-200/20 bg-slate-900/65 p-6 shadow-xl backdrop-blur sm:p-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80"></p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">
          Nội dung trình bày chi tiết cho 3 mục chính
        </h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-slate-200">
          
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">Mục lục trình bày</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {speakerSegments.map((segment, index) => (
              <a
                key={segment.id}
                href={`#${segment.id}`}
                className="rounded-xl border border-white/10 bg-slate-800/60 p-3 hover:border-cyan-300/50"
              >
                <p className="text-sm font-semibold text-cyan-100">Mục {index + 1}</p>
                <p className="mt-1 text-sm text-slate-300">{segment.focus}</p>
              </a>
            ))}
          </div>
        </div>

          <div className="mt-6 space-y-4">
            {speakerSegments.map((segment, index) => (
              <motion.article
                key={segment.id}
                id={segment.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                      Mục {index + 1} - {segment.duration}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{segment.focus}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{segment.lead}</p>
                <div className="mt-4 grid gap-3">
                  {segment.points.map((point) => (
                    <div key={point.title} className="rounded-xl border border-white/10 bg-slate-800/60 p-3">
                      <p className="font-semibold text-slate-100">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{point.body}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
      </div>
    </section>
  );
}
