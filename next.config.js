const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Add support for subdomains
	async rewrites() {
		return {
			beforeFiles: [
				// if the host is `loglock.extropy.dev`,
				// this rewrite will be applied
				{
					source: "/:path*",
					has: [
						{
							type: "host",
							value: "loglock.extropy.dev"
						}
					],
					destination: "/loglock/:path*"
				}
			]
		}
	}
}

module.exports = withMDX(nextConfig)
