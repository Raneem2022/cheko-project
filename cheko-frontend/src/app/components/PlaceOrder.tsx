'use client';
import { useState, useEffect } from 'react';
import { MenuItem } from "@/app/components/MenuItemCard";

interface PlaceOrderProps {
    card: MenuItem[];
}

function PlaceOrder({ card }: PlaceOrderProps) {
    const [subtotalPrice, setSubtotalPrice] = useState(0);
    const [tax, seTax] = useState(0);

    useEffect(() => {
        CardPriceTotal();
    }, [card]);

    const CardPriceTotal = () => {
        const cardTotal = card.reduce((total, item) => total + item.price, 0);
        countTaxValue(cardTotal);
    };

    const countTaxValue = (cardTotal: number) => {
        const taxRate = 1 / 1.15;
        const priceBeforeTax = cardTotal * taxRate;
        const taxAmount = cardTotal - priceBeforeTax;
        seTax(taxAmount);
        setSubtotalPrice(priceBeforeTax);
    };

    return (
        <div className='w-[274px] h-[274px] bg-black rounded-xl flex flex-col justify-center items-center divide-y-2 divide-dashed gap-5'>
            <div className="w-[228px] pb-5">
                <div className="flex justify-between">
                    <h3 className="mt-2 text-sm text-[#757575]">Subtotal</h3>
                    <h3 className="mt-2 text-sm text-[#757575]">{subtotalPrice.toFixed(2)} SR</h3>
                </div>
                <div className="flex justify-between">
                    <h3 className="mt-2 text-sm text-[#757575]">Tax</h3>
                    <h3 className="mt-2 text-sm text-[#757575]">{tax.toFixed(2)} SR</h3>
                </div>
            </div>
            <div className="w-[228px] flex flex-col items-center gap-3 pt-2">
                <div className="flex justify-between w-full">
                    <h3 className="text-sm text-white">Total</h3>
                    <h3 className="text-sm text-white">{(tax + subtotalPrice).toFixed(2)} SR</h3>
                </div>
                <button className="w-full h-[41px] bg-[#F4CBDF] rounded-xl flex items-center justify-center">
                    <h3 className="text-sm text-black">Place Order</h3>
                </button>
            </div>
        </div>
    );
}

export default PlaceOrder;
