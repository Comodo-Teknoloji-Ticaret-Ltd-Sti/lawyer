import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
function ServicesSection() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            title: "Ticaret Hukuku",
            description: "Şirket kuruluşu, ortaklık anlaşmaları, ticari sözleşmeler ve ticari uyuşmazlıklar",
            icon: "💼"
        },
        {
            title: "İş Hukuku",
            description: "İş sözleşmeleri, işçi hakları, işten çıkarma davaları ve iş kazası tazminatları",
            icon: "👥"
        },
        {
            title: "Gayrimenkul Hukuku",
            description: "Tapu işlemleri, kira sözleşmeleri, emlak alım-satımı ve gayrimenkul uyuşmazlıkları",
            icon: "🏢"
        },
        {
            title: "Aile Hukuku",
            description: "Boşanma davaları, velayet, nafaka, miras ve aile içi uyuşmazlıklar",
            icon: "👨‍👩‍👧‍👦"
        },
        {
            title: "Ceza Hukuku",
            description: "Ceza davaları, suç mağduriyeti, savunma hizmetleri ve adli süreç takibi",
            icon: "⚖️"
        },
        {
            title: "İcra ve İflas Hukuku",
            description: "Alacak takibi, icra takibi, iflas işlemleri ve borç yapılandırma",
            icon: "📋"
        }
    ];

    return (
        <section id="hizmetler" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4 text-slate-800">Hizmet Alanlarımız</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Geniş hizmet yelpazemizle tüm hukuki ihtiyaçlarınıza profesyonel çözümler sunuyoruz
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-4 sm:p-6 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                        >
                            <div className="text-center mb-4">
                                <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>
                                <h4 className="text-lg sm:text-xl font-bold mb-3 text-slate-800">{service.title}</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => setActiveService(activeService === index ? null : index)}
                                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span className="text-sm">Detayları Gör</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform ${activeService === index ? 'rotate-180' : ''}`} />
                                </button>

                                <button
                                    onClick={() => window.open('https://wa.me/905059982093?text=Merhaba, ' + service.title + ' hakkında bilgi almak istiyorum.', '_blank')}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    <span className="text-sm">WhatsApp</span>
                                    <span className="text-lg"><FaWhatsapp /></span>
                                </button>
                            </div>

                            {activeService === index && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="bg-amber-50 p-3 rounded-lg">
                                        <h5 className="font-semibold text-slate-800 mb-2 text-sm">Bu Alanda Sunduğumuz Hizmetler:</h5>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>• Ücretsiz ön değerlendirme</li>
                                            <li>• Detaylı hukuki danışmanlık</li>
                                            <li>• Dava süreci yönetimi</li>
                                            <li>• 7/24 destek hattı</li>
                                        </ul>
                                        <div className="mt-3 pt-2 border-t border-amber-200">
                                            <p className="text-xs text-amber-700 font-medium">
                                                📞 Hemen arayın ve ücretsiz ön görüşme alın!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ServicesSection;