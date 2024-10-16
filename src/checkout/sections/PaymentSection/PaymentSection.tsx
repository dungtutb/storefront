import { VietQRMethod } from "./VietQR/VietQRMethod";
import { Divider } from "@/checkout/components/Divider";
import { Title } from "@/checkout/components/Title";

export const PaymentSection = () => {
	return (
		<>
			<Divider />
			<div className="py-4" data-testid="paymentMethods">
				<Title>Phương thức thanh toán</Title>
				<VietQRMethod/>
			</div>
		</>
	);
};
