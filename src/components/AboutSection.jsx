import React from 'react';
import { Award, Clock, Users, FileText } from 'lucide-react';
function AboutSection() {
    const stats = [
        { number: '500+', label: 'Başarılı Dava' },
        { number: '15+', label: 'Yıl Deneyim' },
        { number: '98%', label: 'Müvekkil Memnuniyeti' }
    ];

    const features = [
        { icon: Award, text: 'Deneyimli ve uzman kadro' },
        { icon: Clock, text: '7/24 hızlı çözüm' },
        { icon: Users, text: 'Kişiselleştirilmiş hizmet' },
        { icon: FileText, text: 'Şeffaf süreç yönetimi' }
    ];

    return (
        <section id="hakkimizda" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-slate-800">Hakkımızda</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            2008 yılından bu yana hukuk alanında faaliyet gösteren büromuz,
                            müvekkillerimizin hukuki ihtiyaçlarını en üst seviyede karşılamak
                            için çalışmaktadır. Deneyimli avukat kadromuz ile bireysel ve
                            kurumsal müvekkillerimize kapsamlı hukuki hizmet sunmaktayız.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h4 className="text-xl font-semibold mb-4 text-slate-800">Neden Bizi Seçmelisiniz?</h4>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <feature.icon className="h-5 w-5 text-amber-500" />
                                    <span className="text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;