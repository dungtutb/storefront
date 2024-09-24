import { SignInFormContainer, type SignInFormContainerProps } from "../Contact/SignInFormContainer";
import { Checkbox } from "@/checkout/components/Checkbox";
import { PasswordInput } from "@/checkout/components/PasswordInput";
import { TextInput } from "@/checkout/components/TextInput";
import { FormProvider } from "@/checkout/hooks/useForm/FormProvider";
import { useGuestUserForm } from "@/checkout/sections/GuestUser/useGuestUserForm";

type GuestUserProps = Pick<SignInFormContainerProps, "onSectionChange"> & {
	onEmailChange: (email: string) => void;
	email: string;
};

export const GuestUser: React.FC<GuestUserProps> = ({
	onSectionChange,
	onEmailChange,
	email: initialEmail,
}) => {
	const form = useGuestUserForm({ initialEmail });
	const { handleChange } = form;
	const { createAccount } = form.values;

	return (
		<SignInFormContainer
			title="Chi tiết liên hệ"
			redirectSubtitle="Bạn đã có tài khoản chưa?"
			redirectButtonLabel="Đăng nhập"
			onSectionChange={onSectionChange}
		>
			<FormProvider form={form}>
				<div className="grid grid-cols-1 gap-3">
					<TextInput
						required
						name="email"
						label="Email"
						onChange={(event) => {
							handleChange(event);
							onEmailChange(event.currentTarget.value);
						}}
					/>
					<Checkbox
						name="createAccount"
						label="Tôi muốn tạo tài khoản"
						data-testid={"createAccountCheckbox"}
					/>
					{createAccount && (
						<div className="mt-2">
							<PasswordInput name="password" label="Mật khẩu (tối thiểu 8 ký tự)" required />
						</div>
					)}
				</div>
			</FormProvider>
		</SignInFormContainer>
	);
};
