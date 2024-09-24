import Image from "next/image";
import { type Article } from "./PostList";
import { getStrapiMedia } from "./ultis/api-helper";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

// const parser = edjsHTML();

export function PostListItem({ article }: { article: Article }) {
	// const { id, content } = blog;
	// const contentHtml = content ? parser.parse(JSON.parse(content)) : null;
	const imageUrl = getStrapiMedia(article.cover.url);
	const author = article.author;
	const avatarUrl = getStrapiMedia(author.avatar.url);
	return (
		<div className="flex flex-col overflow-hidden rounded-lg border bg-white">
			<div className="flex-1">
				<LinkWithChannel
					href={"/blogs/" + article.slug}
					className="group relative block h-48 overflow-hidden bg-gray-100"
				>
					{imageUrl && (
						<Image
							src={imageUrl}
							width={600}
							height={600}
							alt={""}
							className="h-full w-full object-cover object-center"
						/>
					)}
				</LinkWithChannel>
			</div>
			<div className="flex flex-col p-4 sm:p-6">
				<h2 className="mb-2 text-lg font-semibold text-gray-800">
					<LinkWithChannel
						href={"/blogs/" + article.slug}
						className="transition duration-100 hover:text-customBg-500 active:text-customBg-600"
					>
						{article.title}
					</LinkWithChannel>
				</h2>
				<p className="mb-4 text-gray-500">{article.description}</p>
				<div className="mt-auto flex items-end justify-between">
					<div className="flex items-center gap-2">
						<div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
							{avatarUrl && (
								<Image
									src={avatarUrl}
									width={64}
									height={64}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
							)}
						</div>

						<div>
							<span className="block text-customBg-500">{author.name}</span>
						</div>
					</div>

					<LinkWithChannel href={"/blogs/" + article.slug} className="px-2 py-2 text-sm text-gray-500">
						{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("vi-VN") : ""}
					</LinkWithChannel>
				</div>
			</div>
		</div>
	);
}

// function getFirst100Words(text: string | null | undefined, num_word: number) {
// 	if (!text) {
// 		return ""; // Trả về chuỗi rỗng nếu text là null hoặc undefined
// 	}
// 	return text.slice(0, num_word); // Thêm dấu '...' để báo hiệu có nội dung tiếp theo
// }
