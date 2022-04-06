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
    onAddWichList: (id: number) => void
}


export function SearchResults({ results, totalPrice, onAddWichList }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddWichList={onAddWichList}
                    />
                )
            })}
        </div>
    )
}