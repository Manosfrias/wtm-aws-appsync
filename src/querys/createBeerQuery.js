export const createBeerQuery = `
    mutation createBeers($img: String!, $name: String!) {
        createBeers(input: {img: $img, name: $name}) {
            name
            img
        }
    }
`