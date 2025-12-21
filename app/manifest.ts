import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'M.DEV - Tworzenie Stron Internetowych',
        short_name: 'M.DEV',
        description: 'Profesjonalne strony internetowe. Responsywny design, szybka realizacja.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
