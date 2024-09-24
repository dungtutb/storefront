import { Carousel } from "../../Carousel";
import { getStrapiMedia } from "../ultis/api-helper";
import { type FileItem } from "@/app/[channel]/(main)/blogs/[slug]/page";
interface SlidShowProps {
	files: FileItem[];
}

export function ImageSlider({ data }: { data: SlidShowProps }) {
	const images = data.files.map((img: FileItem) => {
		return getStrapiMedia(img.url);
	});
	return (
		<section className="mb-6 md:mb-8">
			<Carousel images={images} />
		</section>
	);
}
