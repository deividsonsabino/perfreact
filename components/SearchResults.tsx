import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddWichlist: (id: number) => void
}


export function SearchResults({ results, totalPrice, onAddWichlist }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddWichlist={onAddWichlist}
                    />
                )
            })}
        </div>
    )
}