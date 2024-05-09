const Footer = () => {
    return (
      <footer className="bg-custom1 px-4 py-2">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <img src="logoUrvig.png" alt="Logo Urvig" className="h-12 md:h-14 mr-4" />
            <span className="text-white font-bold text-base md:text-lg">&copy; 2024 URVIG <span className="ml-1">S.R.L.</span></span>
          </div>
          <ul className="flex flex-wrap items-center text-sm font-medium text-white/70">
            <li className="mr-4">
              Diseñado por <a href="https://bautistazitelli.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Bautista Zitelli</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  