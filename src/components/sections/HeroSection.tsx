export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-20">
      <div className="rounded-3xl border border-cyan-200/20 bg-slate-900/70 p-6 text-center shadow-xl backdrop-blur sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Chương 5</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Cơ cấu xã hội- giai cấp và liên minh giai cấp, 
          <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
            tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg">
          
        </p>

        <div className="video-frame mt-8 text-left">
          <video
            controls
            preload="metadata"
            className="h-auto w-full rounded-2xl"
            aria-label="Video thuyết trình liên minh giai cấp"
          >
            <source src="/videos/lien-minh-xa-hoi-hien-dai.mp4" type="video/mp4" />
            Trình duyệt của bạn chưa hỗ trợ phát video.
          </video>
          <p className="mt-3 text-sm text-slate-300">
             
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Nếu không phát được trực tiếp, bạn có thể mở video tại{" "}
            <a className="text-cyan-300 underline hover:text-cyan-200" href="/videos/lien-minh-xa-hoi-hien-dai.mp4" target="_blank" rel="noreferrer">
              liên kết dự phòng
            </a>
            .
          </p>
        </div>

        <div className="mt-6 grid gap-3 text-left text-sm sm:grid-cols-3">
          <a href="#speaker-1" className="rounded-xl border border-white/15 bg-slate-800/60 p-3 hover:border-cyan-300/50">
            <p className="font-semibold text-cyan-100">Mục 1</p>
            <p className="mt-1 text-slate-300">Phân tích tư tưởng gốc của Lenin</p>
          </a>
          <a href="#speaker-2" className="rounded-xl border border-white/15 bg-slate-800/60 p-3 hover:border-cyan-300/50">
            <p className="font-semibold text-cyan-100">Mục 2</p>
            <p className="mt-1 text-slate-300">Đối chiếu cơ cấu xã hội giai cấp ở Việt Nam</p>
          </a>
          <a href="#speaker-3" className="rounded-xl border border-white/15 bg-slate-800/60 p-3 hover:border-cyan-300/50">
            <p className="font-semibold text-cyan-100">Mục 3</p>
            <p className="mt-1 text-slate-300">Nhận định nhóm và vai trò sinh viên</p>
          </a>
        </div>
      </div>
    </section>
  );
}
