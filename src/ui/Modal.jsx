function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl leading-none cursor-pointer font-bold text-slate-500 hover:text-slate-800"
          aria-label="Close"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
