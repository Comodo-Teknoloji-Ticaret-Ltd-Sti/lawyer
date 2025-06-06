import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';
function DundarAI() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const GEMINI_API_KEY = 'AIzaSyBz9N6HEnMiaHPrk3uGqxRLR30FjwXhVGA';

    const askDundarAI = async () => {
        if (!question.trim()) {
            setError('Lütfen bir soru girin.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Sen Dündar Avukatlık Bürosu'nun hukuki danışman asistanısın. Soruya profesyonel ve Türkçe olarak cevap ver: ${question}`
                        }]
                    }]
                })
            });

            if (!apiResponse.ok) {
                throw new Error(`API Hatası: ${apiResponse.status}`);
            }

            const data = await apiResponse.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                setResponse(data.candidates[0].content.parts[0].text);
            } else {
                throw new Error('Yanıt alınamadı.');
            }
        } catch (err) {
            setError(`Hata: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="dundar-ai" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Bot className="h-12 w-12 text-blue-600 mr-3" />
                        <h3 className="text-3xl font-bold text-slate-800">Dündar AI</h3>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Yapay zeka destekli hukuki danışmanımız ile sorularınıza anında yanıt alın.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl p-8">
                        {/* Question Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Sorunuz
                            </label>
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Hukuki sorunuzu buraya yazın..."
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                            />
                        </div>

                        {/* Ask Button */}
                        <button
                            onClick={askDundarAI}
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    <span>Soruluyor...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5" />
                                    <span>Dündar AI'ya Sor</span>
                                </>
                            )}
                        </button>

                        {/* Error Display */}
                        {error && (
                            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-700 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Response Display */}
                        {response && (
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <Bot className="h-5 w-5 mr-2 text-blue-600" />
                                    Dündar AI'nın Yanıtı:
                                </h4>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{response}</p>
                                </div>
                                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <p className="text-yellow-800 text-xs">
                                        ⚠️ <strong>Önemli:</strong> Bu yanıt AI tarafından üretilmiştir ve hukuki tavsiye niteliği taşımaz.
                                        Kesin hukuki görüş için lütfen uzman avukatlarımızla iletişime geçin.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Questions */}
                    <div className="mt-8 text-center">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Örnek Sorular:</h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                "Boşanma davası nasıl açılır?",
                                "İş sözleşmesi feshi hakları nelerdir?",
                                "Gayrimenkul alım satımında dikkat edilecekler?",
                                "Miras hukuku temel kuralları nelerdir?"
                            ].map((exampleQ, index) => (
                                <button
                                    key={index}
                                    onClick={() => setQuestion(exampleQ)}
                                    className="bg-white hover:bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    {exampleQ}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default DundarAI;