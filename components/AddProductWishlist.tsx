export interface AddProductWishlistProps {
    onAddToWishlist: () => void;
    onRequestClose: () => void;
}

export function AddProductWishlist({
    onAddToWishlist,
    onRequestClose
}: AddProductWishlistProps) {
    return (
        <span>
            Deseja adicionar aos favoritos?
            <button onClick={onAddToWishlist}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}