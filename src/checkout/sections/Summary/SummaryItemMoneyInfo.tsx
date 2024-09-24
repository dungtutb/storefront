import clsx from "clsx";
import React from "react";
import { Money } from "@/checkout/components";
import { type Money as MoneyType } from "@/checkout/graphql";
import { type GrossMoney } from "@/checkout/lib/globalTypes";
import { getFormattedMoney } from "@/checkout/lib/utils/money";

interface SummaryItemMoneyInfoProps {
	unitPrice: GrossMoney;
	undiscountedUnitPrice: MoneyType;
	quantity: number;
}

export const SummaryItemMoneyInfo: React.FC<SummaryItemMoneyInfoProps> = ({
	unitPrice,
	quantity,
	undiscountedUnitPrice,
}) => {
	const multiplePieces = quantity > 1;
	const piecePrice = unitPrice.gross;
	const onSale = undiscountedUnitPrice.amount !== unitPrice.gross.amount;

	return (
		<div className="flex flex-col items-end justify-end">
			<div className="flex flex-row flex-wrap justify-end gap-x-2">
				{onSale && (
					<Money
						ariaLabel="undiscounted price"
						money={{
							currency: undiscountedUnitPrice.currency,
							amount: undiscountedUnitPrice.amount * quantity,
						}}
						className="line-through"
					/>
				)}
				<Money
					ariaLabel="total price"
					money={{
						currency: piecePrice?.currency,
						amount: (piecePrice?.amount || 0) * quantity,
					}}
					className={clsx({
						"!text-text-error": onSale,
					})}
				/>
			</div>

			{multiplePieces && (
				<p aria-label="single piece price" color="secondary" className="text-end text-xs">
					{getFormattedMoney(piecePrice)} mỗi sản phẩm
				</p>
			)}
		</div>
	);
};
