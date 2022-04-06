import { List, ListRowRenderer } from "react-virtualized"
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
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div
                key={key}
                style={style}
            >
                <ProductItem
                    key={key}
                    product={results[index]}
                    onAddWichlist={onAddWichlist}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}