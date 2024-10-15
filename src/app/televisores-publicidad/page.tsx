export default function TelevisoresPublicidadPage() {
  return (
    <main className="grow w-full fixed top-0 left-0 z-[999999]">
      <section className="w-screen h-screen relative bg-[rgb(23,23,23)]">
        <video
          playsInline
          autoPlay
          muted
          loop
          controls={false}
          className="absolute top-0 left-0 size-full object-contain pointer-events-none select-none"
        >
          <source src="/assets/video_desafio_verano.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </section>
    </main>
  );
}