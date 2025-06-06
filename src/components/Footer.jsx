import React from 'react';
import { Scale } from 'lucide-react';
function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <Scale className="h-6 w-6 text-amber-400" />
                        <span className="font-semibold text-white">DÜNDAR HUKUK</span>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>&copy; 2025 Dündar Hukuk Bürosu. Tüm hakları saklıdır.</p>
                        <p className="mt-1">Merkez,Yalova</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;