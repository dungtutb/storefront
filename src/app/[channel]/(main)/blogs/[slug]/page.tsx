import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate, getStrapiMedia } from "@/ui/components/post/ultis/api-helper";
import { fetchAPI } from "@/ui/components/post/ultis/fetch-api";
import { postRenderer } from "@/ui/components/post/ultis/post-renderer";

export interface FileItem {
	url: string;
	alternativeText: string;
}
export interface RichTextBlock {
	__component: "shared.rich-text";
	id: number;
	body: string;
}

export interface QuoteBlock {
	__component: "shared.quote";
	id: number;
	title: string;
	body: string;
	author: string;
}

export interface MediaBlock {
	__component: "shared.media";
	id: number;
	file: FileItem;
}

export interface SliderBlock {
	__component: "shared.slider";
	id: number;
	files: FileItem[];
}

interface Seo {
	metaTitle: string;
	metaDescription: string;
}

// Union type to represent any block
export type Block = RichTextBlock | QuoteBlock | MediaBlock | SliderBlock;

interface Article {
	id: number;
	title: string;
	description: string;
	slug: string;
	cover: {
		url: string;
		alternativeText: string;
	};
	author: {
		name: string;
		avatar: {
			url: string;
		};
	};
	blocks: Block[];
	publishedAt: string;
	seo?: Seo;
}

interface Meta {
	pagination: {
		start: number;
		limit: number;
		total: number;
	};
}

interface APIResponse {
	data: Article[]; // Define the Article interface as per your API response
	meta: Meta; // Meta interface as previously defined
}

// const parser = edjsHTML();

async function getPostBySlug(slug: string) {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
	const path = `/articles`;
	const urlParamsObject = {
		filters: { slug },
		populate: {
			cover: { fields: ["url"] },
			author: { populate: "*" },
			category: { fields: ["name"] },
			blocks: {
				on: {
					"shared.rich-text": {
						populate: "*",
					},
					"shared.media": {
						populate: {
							file: {
								fields: ["url", "alternativeText"],
							},
						},
					},
					"shared.quote": {
						populate: "*",
					},
					"shared.slider": {
						populate: {
							files: {
								fields: ["url", "alternativeText"],
							},
						},
					},
				},
			},
		},
	};
	const options = { headers: { Authorization: `Bearer ${token}` } };
	const response = await fetchAPI<APIResponse>(path, urlParamsObject, options);
	return response.data;
}

async function getMetaData(slug: string) {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
	const path = `/articles`;
	const urlParamsObject = {
		filters: { slug },
		populate: { seo: { populate: "*" } },
	};
	const options = { headers: { Authorization: `Bearer ${token}` } };
	const response = await fetchAPI<Article>(path, urlParamsObject, options);
	return response.seo;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const metadata = await getMetaData(params.slug);

	return {
		title: metadata?.metaTitle,
		description: metadata?.metaDescription,
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const posts = await getPostBySlug(params.slug);

	if (posts.length === 0) {
		notFound();
	}
	const post = posts[0];
	const { title, description, publishedAt, cover, author } = post;
	const imageUrl = getStrapiMedia(cover.url);
	const authorImgUrl = getStrapiMedia(author.avatar.url);

	return (
		<div className="bg-white py-3 md:py-6">
			<div className="mx-auto max-w-screen-lg px-4 md:px-8">
				{imageUrl && (
					<Image
						src={imageUrl}
						alt="article cover image"
						width={400}
						height={400}
						className="h-96 w-full rounded-lg object-cover"
					/>
				)}
				<h1 className="mt-4 text-3xl font-bold text-gray-800 md:text-5xl md:mt-6">{title}</h1>

				<div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center dark:text-gray-400 py-3">
					<div className="flex items-center md:space-x-2">
						{authorImgUrl && (
							<Image
								src={authorImgUrl}
								alt="article cover image"
								width={400}
								height={400}
								className="h-14 w-14 rounded-full border dark:border-gray-700 dark:bg-gray-500"
							/>
						)}
						<p className="text-md text-customBg-800 pl-3">
							{author && author.name} - {formatDate(publishedAt)}
						</p>
					</div>
				</div>

				
				<p className="mb-6 sm:text-lg md:mb-8">{description}</p>
				{post.blocks?.map((section: Block, index: number) => postRenderer(section, index))}
			</div>
		</div>
	);
}
