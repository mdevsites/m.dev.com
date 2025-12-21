import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'M.DEV - Nowoczesne Strony Internetowe'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background Gradients */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(192, 132, 252, 0.2)', // Purple
                        filter: 'blur(120px)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'rgba(236, 72, 153, 0.15)', // Pink
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(to right, #C084FC, #EC4899)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '96px',
                                fontWeight: 900,
                                letterSpacing: '-0.05em',
                            }}
                        >
                            M
                        </div>
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: '#EC4899',
                                marginLeft: '8px',
                                boxShadow: '0 0 20px #EC4899',
                            }}
                        />
                        <div
                            style={{
                                color: 'white',
                                fontSize: '96px',
                                fontWeight: 800,
                                marginLeft: '4px',
                                letterSpacing: '-0.05em',
                            }}
                        >
                            dev
                        </div>
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            color: '#e5e5e5',
                            fontSize: '48px',
                            fontWeight: 600,
                            textAlign: 'center',
                            marginBottom: '12px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Tworzę strony internetowe
                    </div>

                    {/* Sub-tagline */}
                    <div
                        style={{
                            color: '#a3a3a3',
                            fontSize: '32px',
                            fontWeight: 400,
                            textAlign: 'center',
                        }}
                    >
                        Szybkie • Piękne • Skuteczne
                    </div>
                </div>

                {/* Decorative Element / Border */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: '8px',
                        background: 'linear-gradient(to right, #C084FC, #EC4899)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
