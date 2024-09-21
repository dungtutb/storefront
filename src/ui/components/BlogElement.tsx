import edjsHTML from "editorjs-html";
import xss from "xss";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type PageListItemFragment } from "@/gql/graphql";
import { NumberWordFirst } from "@/app/config";

const parser = edjsHTML();

export function BlogElement({ blog }: { blog: PageListItemFragment }) {
	const { id, content } = blog;
	const contentHtml = content ? parser.parse(JSON.parse(content)) : null;

	return (
		<div className="flex flex-col overflow-hidden rounded-lg border bg-white">
			<LinkWithChannel
				href={"/pages/" + blog.slug}
				className="hover:text-customBg-500 active:text-customBg-600 transition duration-100"
			>
				<div className="flex flex-1 flex-col p-4 sm:p-6">
					<h2 className="mb-2 text-lg font-semibold text-gray-800">
						<span className="hover:text-customBg-500 active:text-customBg-600 transition duration-100">
							{blog.title}
						</span>
					</h2>

					{contentHtml && (
						<div className="mb-2 text-sm text-gray-500 md:text-base">
							<div
								key={id}
								dangerouslySetInnerHTML={{ __html: xss(getFirst100Words(contentHtml[0], NumberWordFirst)) }}
							/>
						</div>
					)}
					{}

					<div className="mt-auto flex items-end justify-between">
						<div></div>
						<span className="text-sm text-gray-400">
							{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ""}
						</span>
					</div>
				</div>
			</LinkWithChannel>
		</div>
	);
}

function getFirst100Words(text: string | null | undefined, num_word: number) {
	if (!text) {
		return ""; // Trả về chuỗi rỗng nếu text là null hoặc undefined
	}
	return text.slice(0, num_word); // Thêm dấu '...' để báo hiệu có nội dung tiếp theo
}
