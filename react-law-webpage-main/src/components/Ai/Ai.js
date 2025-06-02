import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function AI() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // API anahtarını buraya girin
    const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

    const handleSubmit = async () => {
        if (!input.trim()) {
            setError('Lütfen bir soru yazın.');
            return;
        }

        setLoading(true);
        setResponse('');
        setError('');

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: input
                        }]
                    }]
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error?.message || 'API çağrısında hata oluştu');
            }

            const data = await res.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                setResponse(data.candidates[0].content.parts[0].text);
                setInput('');
            } else {
                throw new Error('Geçersiz API yanıtı');
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div style={{
            marginTop: '50px',
            width: '100%',
            maxWidth: '1024px',
            margin: '80px auto 0 auto',
            padding: '0 16px'
        }}>
            {/* Input Area */}
            <div style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '24px'
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Hakkımızda sormak istedikleriniz."
                    style={{
                        flex: 1,
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        ...(loading && { opacity: 0.6 })
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                    }}
                    disabled={loading}
                />
                <button
                    onClick={handleSubmit}
                    disabled={loading || !input.trim()}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: loading || !input.trim() ? '#9ca3af' : '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'background-color 0.2s ease',
                        minWidth: '120px',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        if (!loading && input.trim()) {
                            e.target.style.backgroundColor = '#1d4ed8';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!loading && input.trim()) {
                            e.target.style.backgroundColor = '#2563eb';
                        }
                    }}
                >
                    {loading ? (
                        <>
                            <Loader2 style={{ width: '16px', height: '16px' }} className="animate-spin" />
                            Bekliyor...
                        </>
                    ) : (
                        <>
                            <Send style={{ width: '16px', height: '16px' }} />
                            Gönder
                        </>
                    )}
                </button>
            </div>

            {/* Error */}
            {error && (
                <div style={{
                    marginBottom: '16px',
                    padding: '12px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#b91c1c',
                    borderRadius: '8px'
                }}>
                    {error}
                </div>
            )}

            {/* Response */}
            {response && (
                <div style={{
                    marginBottom: '16px',
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                }}>
                    <h4 style={{
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '8px'
                    }}>
                        AI Yanıtı:
                    </h4>
                    <div style={{
                        color: '#374151',
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.6'
                    }}>
                        {response}
                    </div>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                }}>
                    <Loader2 style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '8px',
                        color: '#2563eb'
                    }} className="animate-spin" />
                    <span style={{ color: '#6b7280' }}> Yazıyor</span>
                </div>
            )}
        </div>
    );
}