"use client";
import { PostSection } from "@/ui/components/PostSection";

export default function Page() {
	const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT);
	return (
		<>
			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<PostSection loadMore={true} limit={limit} />
				</div>
			</div>
		</>
	);
}
