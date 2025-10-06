"use client";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-22 right-2 bg-indigo-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Ir arriba"
    >
      <img
        src="/icons/arrowup.svg"  
        alt="Ir arriba"
        className="w-8 h-8"
      />
    </button>
  );
}
