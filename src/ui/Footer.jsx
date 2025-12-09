function Footer() {
  return (
    <footer className="bg-[#0c1929] text-[#d8e5f5] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto flex items-center justify-center py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base md:text-lg text-center">
          Created by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1XijpGxKiB-b8J7E9TJ_WawZ9blHZzRZv/view?usp=drive_link"
            className="font-semibold  underline-offset-4 decoration-slate-300 hover:decoration-white hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Abdelrahman Khaled
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
