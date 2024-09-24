import { DeliverySection } from "./DeliverySection";
import { PaymentSection } from "./PaymentSection";
import { Section } from "./Section";
import { useOrder } from "@/checkout/hooks/useOrder";
import { Address } from "@/checkout/components/Address";

export const OrderInfo = () => {
	const {
		order: { deliveryMethod, shippingAddress, billingAddress, userEmail },
	} = useOrder();

	return (
		<section className="mt-8">
			<PaymentSection />
			<DeliverySection deliveryMethod={deliveryMethod} />
			<Section title="Chi tiết liên hệ">
				<p>{userEmail}</p>
			</Section>
			{shippingAddress && (
				<Section title="Địa chỉ giao hàng">
					<Address address={shippingAddress} />
				</Section>
			)}
			{billingAddress && (
				<Section title="Địa chỉ thanh toán">
					<Address address={billingAddress} />
				</Section>
			)}
		</section>
	);
};
