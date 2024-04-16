export function beerParser(action){
    return (fetchedCookie) => {
        const data = fetchedCookie?.data?.[action]

        if(!data) {
            return null;
        }

        return {
            name: data?.name,
            img: data?.img
        }
    }
}