import { graphqlClient } from "./graphqlClient"
import { getBeerQuery } from "../querys/getBeerQuery"
import { createBeerQuery } from "../querys/createBeerQuery"
import { beerParser } from "./beerParser"

export function beerService(config) {

    async function getBeer(beer){
        return await graphqlClient(
            {
                config,
                body:{
                    query: getBeerQuery,
                    variables: beer
                }
            },
            beerParser("getBeers")
        )
    }

    async function createBeer(beer){

        return await graphqlClient(
            {
                config,
                body:{
                    query: createBeerQuery,
                    variables: beer
                }
            },
            beerParser("createBeers")
        )
    }

    return {
        getBeer,
        createBeer,
    }
}