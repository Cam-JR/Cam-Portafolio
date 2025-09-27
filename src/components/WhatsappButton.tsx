export default function WhatsappButton() {
  return (
    <a
      href="https://wa.link/4m0n1m"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
    >
      <img
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}
