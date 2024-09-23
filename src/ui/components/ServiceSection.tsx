"use client";

import Image from "next/image";
import Link from "next/link";

export const ServiceSection = () => {
	return (
		<div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:gap-8	">
			<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
					<Image
						src={"/banquyen.png"}
						width={128}
						height={128}
						alt={""}
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">Phần mềm bản quyền</h3>
					<p className="text-sm text-gray-500 lg:text-base">100% từ nhà phát triển</p>
				</div>
			</div>

			<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
					<Image
						src={"/baohanh.png"}
						width={128}
						height={128}
						alt={""}
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">Chính sách bảo hành</h3>
					<p className="text-sm text-gray-500 lg:text-base">theo từng sản phẩm</p>
				</div>
			</div>

			<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
					<Image
						src={"/sanpham.png"}
						width={128}
						height={128}
						alt={""}
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">Thêm mới sản phẩm</h3>
					<p className="text-sm text-gray-500 lg:text-base">Hỗ trợ nâng tài khoản liên hệ zalo</p>
				</div>
			</div>

			<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
					<Image
						src={"/hoivienvip.png"}
						width={128}
						height={128}
						alt={""}
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">Hội viên VIP</h3>
					<p className="text-sm text-gray-500 lg:text-base">
						Trở thành hội viên VIP{" "}
						<Link href="https://zalo.me/0348822238" target="_blank">
							{" "}
							TẠI ĐÂY{" "}
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
