import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-3">
                        <Scale className="h-8 w-8 text-amber-400" />
                        <div>
                            <h1 className="text-xl font-bold">DÜNDAR HUKUK</h1>
                            <p className="text-sm text-gray-300">Avukatlık Bürosu</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#anasayfa" className="hover:text-amber-400 transition-colors">Ana Sayfa</a>
                        <a href="#hakkimizda" className="hover:text-amber-400 transition-colors">Hakkımızda</a>
                        <a href="#dundar-ai" className="hover:text-amber-400 transition-colors">Dündar AI</a>
                        <a href="#hizmetler" className="hover:text-amber-400 transition-colors">Hizmetlerimiz</a>
                        <a href="#ekip" className="hover:text-amber-400 transition-colors">Ekibimiz</a>
                        <a href="#iletisim" className="hover:text-amber-400 transition-colors">İletişim</a>
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-2">
                            <a href="#anasayfa" className="hover:text-amber-400 transition-colors py-2">Ana Sayfa</a>
                            <a href="#hakkimizda" className="hover:text-amber-400 transition-colors py-2">Hakkımızda</a>
                            <a href="#dundar-ai" className="hover:text-amber-400 transition-colors py-2">Dündar AI</a>
                            <a href="#hizmetler" className="hover:text-amber-400 transition-colors py-2">Hizmetlerimiz</a>
                            <a href="#ekip" className="hover:text-amber-400 transition-colors py-2">Ekibimiz</a>
                            <a href="#iletisim" className="hover:text-amber-400 transition-colors py-2">İletişim</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
export default Header;