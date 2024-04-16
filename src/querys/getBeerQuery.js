export const getBeerQuery = `
    query getBeers($name: String!) {
        getBeers(name: $name) {
            img
            name
        }
    }
`
