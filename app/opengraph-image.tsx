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
                    background: '#030014', // Deep rich dark blue/black
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Gradient Orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '20%',
                        width: '800px',
                        height: '800px',
                        background: 'rgba(168, 85, 247, 0.4)', // Purple
                        filter: 'blur(180px)',
                        opacity: 0.6,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '20%',
                        width: '800px',
                        height: '800px',
                        background: 'rgba(236, 72, 153, 0.4)', // Pink
                        filter: 'blur(180px)',
                        opacity: 0.5,
                        transform: 'translate(50%, 50%)',
                    }}
                />

                {/* Glass Card Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        width: '85%',
                        height: '75%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '32px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                        // Backdrop filter support in Satori is limited, using transparency/overlay instead
                    }}
                >
                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                        <div
                            style={{
                                color: '#fff',
                                fontSize: '110px',
                                fontWeight: 900,
                                letterSpacing: '-5px',
                                lineHeight: 1,
                            }}
                        >
                            M
                        </div>
                        <div
                            style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                backgroundColor: '#EC4899',
                                marginLeft: '8px',
                                boxShadow: '0 0 25px rgba(236, 72, 153, 0.8)',
                            }}
                        />
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(to right, #e2e8f0, #ffffff)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '110px',
                                fontWeight: 800,
                                marginLeft: '4px',
                                letterSpacing: '-4px',
                                lineHeight: 1,
                            }}
                        >
                            dev
                        </div>
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Decorative Line Left */}
                        <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)', marginRight: '24px' }} />

                        <div
                            style={{
                                color: '#cbd5e1',
                                fontSize: '36px',
                                fontWeight: 500,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                            }}
                        >
                            Nowoczesne Strony WWW
                        </div>

                        {/* Decorative Line Right */}
                        <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)', marginLeft: '24px' }} />
                    </div>

                </div>

                {/* URL Badge */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '50px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        padding: '12px 28px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            color: '#fff',
                            fontSize: '20px',
                            fontWeight: 600,
                            letterSpacing: '1px',
                        }}
                    >
                        mdevsites.pl
                    </div>
                </div>

            </div>
        ),
        {
            ...size,
        }
    )
}
