import Image from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type PageListItemFragment } from "@/gql/graphql";

// const parser = edjsHTML();

export function BlogElement({ blog }: { blog: PageListItemFragment }) {
	// const { id, content } = blog;
	// const contentHtml = content ? parser.parse(JSON.parse(content)) : null;

	return (
		<div className="flex flex-col overflow-hidden rounded-lg border bg-white">
				<LinkWithChannel
					href={"/pages/" + blog.slug}
					className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
				>
					<Image
						src={"/default.jpg"}
						width={600}
						height={600}
						alt={""}
						className="h-full w-full object-cover object-center"
					/>
				</LinkWithChannel>
			<div className="flex-1"></div>
			<div className="flex flex-col p-4 sm:p-6">
				<h2 className="mb-2 text-lg font-semibold text-gray-800">
					<LinkWithChannel
						href={"/pages/" + blog.slug}
						className="transition duration-100 hover:text-customBg-500 active:text-customBg-600"
					>
						{blog.title}
					</LinkWithChannel>
				</h2>

				{/* {contentHtml && (
						<div className="mb-2 text-sm text-gray-500 md:text-base">
							<div
								key={id}
								dangerouslySetInnerHTML={{ __html: xss(getFirst100Words(contentHtml[0], NumberWordFirst)) }}
							/>
						</div>
					)} */}

				<div className="mt-auto flex items-end justify-between">
					<div className="flex items-center gap-2">
						<div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
							<Image
								src={"/default.jpg"}
								width={64}
								height={64}
								alt={""}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<div>
							<span className="block text-customBg-500">Admin</span>
						</div>
					</div>

					<LinkWithChannel href={"/pages/" + blog.slug} className="px-2 py-2 text-sm text-gray-500">
						{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString("vi-VN") : ""}
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
