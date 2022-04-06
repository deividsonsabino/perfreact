import { memo, useState } from "react";
import dynamic from "next/dynamic";

import { AddProductToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
    loading: () => <span>Carregando</span>
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddWichlist: (id: number) => void
}

function ProductItemComponent({ product, onAddWichlist }: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingWishlist] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingWishlist(true)}>Adicionar aos favoritos</button>

            {isAddingToWishlist && (
                <AddProductToWishlist
                    onAddToWishlist={() => onAddWichlist(product.id)}
                    onRequestClose={() => setIsAddingWishlist(false)}
                />
            )}

        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})