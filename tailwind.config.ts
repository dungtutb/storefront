import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import FormPlugin from "@tailwindcss/forms";
import TypographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
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
