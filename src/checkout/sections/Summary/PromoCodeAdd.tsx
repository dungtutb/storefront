import clsx from "clsx";
import { type FC } from "react";
import { Button } from "@/checkout/components/Button";
import { TextInput } from "@/checkout/components/TextInput";
import { useCheckoutAddPromoCodeMutation } from "@/checkout/graphql";
import { useForm } from "@/checkout/hooks/useForm";
import { FormProvider } from "@/checkout/hooks/useForm/FormProvider";
import { useFormSubmit } from "@/checkout/hooks/useFormSubmit";
import { type Classes } from "@/checkout/lib/globalTypes";

interface PromoCodeFormData {
	promoCode: string;
}

export const PromoCodeAdd: FC<Classes> = ({ className }) => {
	const [, checkoutAddPromoCode] = useCheckoutAddPromoCodeMutation();

	const onSubmit = useFormSubmit<PromoCodeFormData, typeof checkoutAddPromoCode>({
		scope: "checkoutAddPromoCode",
		onSubmit: checkoutAddPromoCode,
		parse: ({ promoCode, languageCode, checkoutId }) => ({
			promoCode,
			checkoutId,
			languageCode,
		}),
		onSuccess: ({ formHelpers: { resetForm } }) => resetForm(),
	});

	const form = useForm<PromoCodeFormData>({
		onSubmit,
		initialValues: { promoCode: "" },
	});
	const {
		values: { promoCode },
	} = form;

	const showApplyButton = promoCode.length > 0;

	return (
		<FormProvider form={form}>
			<div className={clsx("relative my-4", className)}>
				<TextInput required={false} name="promoCode" label="Thêm thẻ quà tặng hoặc mã giảm giá" />
				{showApplyButton && (
					<Button
						className="absolute bottom-2.5 right-3"
						variant="tertiary"
						ariaLabel="apply"
						label="Apply"
						type="submit"
					/>
				)}
			</div>
		</FormProvider>
	);
};
