import { Filters } from './../';

export function Header({ changeFilters }) {
    return (
        <>
            <h1>Shopping Cart</h1>
            <Filters onChange={changeFilters} />
        </>
    );
}
