/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },{
                protocol: 'https',
                hostname: 'https://raw.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
