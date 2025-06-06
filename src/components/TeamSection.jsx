import React from 'react';

function TeamSection() {
    const lawyers = [
        {
            name: "Av. Mustafa Dündar",
            title: "Kurucu Ortak",
            experience: "15 yıl deneyim",
            specialization: "Ticaret ve İş Hukuku",
            image: "👨‍💼"
        },
        {
            name: "Av. Ayşe Demir",
            title: "Ortak Avukat",
            experience: "12 yıl deneyim",
            specialization: "Aile ve Gayrimenkul Hukuku",
            image: "👩‍💼"
        },
        {
            name: "Av. Ali Özkan",
            title: "Kıdemli Avukat",
            experience: "8 yıl deneyim",
            specialization: "Ceza ve İcra Hukuku",
            image: "👨‍⚖️"
        }
    ];

    return (
        <section id="ekip" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4 text-slate-800">Uzman Ekibimiz</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Alanında uzman, deneyimli avukatlarımız ile yanınızdayız
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {lawyers.map((lawyer, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-6xl mb-4">{lawyer.image}</div>
                            <h4 className="text-xl font-semibold mb-2 text-slate-800">{lawyer.name}</h4>
                            <p className="text-amber-600 font-medium mb-2">{lawyer.title}</p>
                            <p className="text-gray-600 text-sm mb-2">{lawyer.experience}</p>
                            <p className="text-gray-700 text-sm">{lawyer.specialization}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TeamSection;