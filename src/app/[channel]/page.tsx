import { type FileItem } from "./(main)/blogs/[slug]/page";
import {
	ProductListByCollectionDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Carousel } from "@/ui/components/Carousel";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import { getStrapiMedia } from "@/ui/components/post/ultis/api-helper";
import { fileSystemAPI } from "@/ui/components/post/ultis/fetch-api";
import { PostSection } from "@/ui/components/PostSection";
import { ProductList } from "@/ui/components/ProductList";
import { ServiceSection } from "@/ui/components/ServiceSection";

export const metadata = {
	title: "Thoa Tran Storefront",
	description: "Storefront platform for global brands.",
};

interface Folder{
	path: string;
	files: FileItem[];
}

async function getImagesByFoldername(folderName: string) {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
	const path = `/folder?path=${folderName}`;
	const options = { headers: { Authorization: `Bearer ${token}` } };
	const response = await fileSystemAPI<Folder>(path, options);
	return response.files;
}

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "best-seller",
			channel: params.channel,
			first: 12,
		},
		revalidate: 60,
	});

	const files = await getImagesByFoldername("banner_running");
	const images = files.map(({url}) => {return getStrapiMedia(url)});

	return (
		<>
			<div className="bg-gray-100">
				<div className="mx-auto max-w-screen-2xl">
					<Header channel={params.channel} />
				</div>
			</div>

			<div className="bg-gray-200 py-2 md:py-4">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
					<div className="h-auto w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm">
						<Carousel images={images} />
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						<span>Top bán chạy</span>
					</h2>
					{data.collection?.products && (
						<ProductList products={data.collection?.products?.edges.map((e) => e.node)} />
					)}
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
					<ServiceSection />
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						<span>Tin tức tổng hợp</span>
					</h2>
					<PostSection loadMore={false} limit={6}/>
				</div>
			</div>

			<Footer channel={params.channel} />
		</>
	);
}
