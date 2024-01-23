import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('Adding and storing in cart', () => {
    const cart = new Cart();
    cart.add(new Movie(
        2001,
        'Мстители',
        400,
        'The avegers',
        ['imax'],
        137,
        "https:domain.site/products/movies/posters/avengers.jpg",
        12,
        'Avengers Assemble!',
        ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    ));
    expect(cart.items.length).toBe(1);
});