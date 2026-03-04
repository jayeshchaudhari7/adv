import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919725487887";
const MESSAGE = "Hi Advertza! I'm interested in your digital marketing services. Can you help me?";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16"
  >
    <svg viewBox="0 0 32 32" className="h-8 w-8 md:h-9 md:w-9" fill="currentColor">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.328-2.012C9.94 31.07 12.876 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.013-3.184 2.28-.856.18-1.974.324-5.74-1.234-4.818-1.992-7.92-6.876-8.162-7.194-.232-.318-1.952-2.6-1.952-4.96s1.234-3.518 1.672-3.998c.39-.428 1.028-.624 1.638-.624.198 0 .376.01.536.018.438.02.658.046.948.734.362.858 1.246 3.038 1.354 3.26.11.222.184.48.036.77-.138.298-.208.484-.416.742-.208.258-.438.576-.624.774-.208.228-.426.476-.182.934.244.458 1.084 1.786 2.328 2.894 1.598 1.422 2.944 1.864 3.362 2.07.418.208.662.174.906-.106.252-.288 1.074-1.252 1.362-1.684.28-.428.566-.358.952-.214.39.138 2.466 1.164 2.888 1.376.422.212.702.318.806.49.102.174.102.996-.288 2.096z"/>
    </svg>
  </a>
);

export default WhatsAppButton;
