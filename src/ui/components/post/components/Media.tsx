import Image from "next/image";
import { getStrapiMedia } from "../ultis/api-helper";
import { type FileItem } from "@/app/[channel]/(main)/blogs/[slug]/page";

interface MediaProps {
	id: number;
	file: FileItem
}

export function Media({ data }: { data: MediaProps }) {
	const imgUrl = getStrapiMedia(data.file.url);
	return (
		<div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
			<Image
				src={imgUrl || ""}
				alt={data.file.alternativeText || "none provided"}
				className="h-full w-full overflow-hidden rounded-lg object-cover"
				width={400}
				height={400}
			/>
		</div>
	);
}
