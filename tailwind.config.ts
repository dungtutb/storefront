import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import FormPlugin from "@tailwindcss/forms";
import TypographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				customBg: {
					50: '#bebec3',  // Màu sáng nhất
					100: '#b0b0c0',
					200: '#9998be',
					300: '#8281bf',
					400: '#7371c1',
					500: '#5f5dc0',
					600: '#4948c3',	 
					700: '#3230c2',  // Màu chính
					800: '#1e1cc3',
					900: '#0e0cc5',  // Màu đậm nhất
					950: '#0300c5',  // Màu đậm nhất
				}
			  },
		//   fontFamily: {
		// 	sans: ['var(--font-geist-sans)']
		//   },
		  keyframes: {
			// fadeIn: {
			//   from: { opacity: 0 },
			//   to: { opacity: 1 }
			// },
			marquee: {
			  '0%': { transform: 'translateX(0%)' },
			  '100%': { transform: 'translateX(-100%)' }
			},
			// blink: {
			//   '0%': { opacity: 0.2 },
			//   '20%': { opacity: 1 },
			//   '100% ': { opacity: 0.2 }
			// }
		  },
		  animation: {
			// fadeIn: 'fadeIn .3s ease-in-out',
			carousel: 'marquee 20s linear infinite',
			// blink: 'blink 1.4s both infinite'
		  }
		}
	  },
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
};

export default config;
