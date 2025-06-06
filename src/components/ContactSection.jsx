import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
function ContactSection() {
    const contactInfo = [
        { icon: Phone, text: '+90 216 555 12 34' },
        { icon: Mail, text: 'info@dundarhukuk.com' },
        { icon: MapPin, text: 'Merkez, Yalova, Türkiye' },
        { icon: Clock, text: 'Pazartesi - Cuma: 09:00 - 18:00' }
    ];

    return (
        <section id="iletisim" className="py-16 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">İletişim</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Hukuki danışmanlık ihtiyaçlarınız için bizimle iletişime geçin
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl font-semibold mb-6">İletişim Bilgileri</h4>
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <info.icon className="h-5 w-5 text-amber-400" />
                                    <span>{info.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Bize Ulaşın</h4>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Adınız Soyadınız"
                                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 focus:border-amber-400 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="E-posta Adresiniz"
                                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 focus:border-amber-400 focus:outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Telefon Numaranız"
                                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 focus:border-amber-400 focus:outline-none"
                            />
                            <textarea
                                placeholder="Mesajınız"
                                rows="4"
                                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 focus:border-amber-400 focus:outline-none"
                            ></textarea>
                            <button
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
                                onClick={() => alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.')}
                            >
                                Mesaj Gönder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactSection;