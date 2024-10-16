import { VietQR } from "./vietqr";

export const VietQRMethod = () => {
	const vietQR = new VietQR({
		clientID: "test",
		apiKey: "test",
	});

    // console.log(price);

	const link = vietQR.genQuickLink({
		bank: "970432",
		// accountName: "TRAN THI KIM THOA",
		accountNumber: "0348822238",
		// amount: price.toString(),
		// memo: "thoatranshop thanh",
		template: "compact",
		media: "jpg",
	});

	return (
		<div className="gap-y-8">
			{link ? <img src={link} alt={""} className="h-80 w-full object-contain object-center" /> : <></>}
		</div>
	);
};
