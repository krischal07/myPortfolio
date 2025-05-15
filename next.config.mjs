// /** @type {import('next').NextConfig} */
// const nextConfig = {};



/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/models/[name][ext]',
            },
        });
        return config;
    },
};

export default nextConfig;
//   module.exports = nextConfig;
  