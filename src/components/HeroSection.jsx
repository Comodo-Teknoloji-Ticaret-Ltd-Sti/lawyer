import React from 'react';
import adam1 from '../assets/images/adam1.png';
import mahkeme from '../assets/images/mahkeme.jpg';

function HeroSection() {
    return (
        <section id="anasayfa" className="relative min-h-screen">
            {/* Arka plan resmi */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${mahkeme})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.4)'
                }}
            />

            <div className="relative z-10 container mx-auto px-4 h-full py-20">
                <div className="flex items-center justify-between h-full">
                    {/* Sol taraftaki avukat görseli */}
                    <div className="w-1/4">
                        <img
                            src={adam1}
                            alt="Avukat"
                            className="h-[200px] md:h-[400px] object-contain transform -scale-x-100"
                        />
                    </div>

                    {/* Orta kısım - Metin içeriği */}
                    <div className="flex-1 max-w-2xl mx-auto text-center">
                        <h2 className="text-5xl font-bold mb-6 leading-tight text-white">
                            Hukuki Haklarınızı
                            <span className="text-amber-400"> Koruyoruz</span>
                        </h2>
                        <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                            15+ yıllık deneyimimizle, tüm hukuki süreçlerinizde yanınızdayız.
                            Adalet arayışınızda güvenilir çözüm ortağınız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.open('https://wa.me/905059982093?text=Merhaba, ücretsiz danışmanlık almak istiyorum.', '_blank')}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                            >
                                Ücretsiz Danışmanlık
                            </button>
                            <button
                                onClick={() => document.getElementById('hizmetler').scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
                            >
                                Hizmetlerimizi Keşfedin
                            </button>
                        </div>
                    </div>

                    {/* Sağ taraftaki avukat görseli */}
                    <div className="w-1/4">
                        <img
                            src={adam1}
                            alt="Avukat"
                            className="h-[200px] md:h-[400px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;