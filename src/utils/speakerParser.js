export function speakerParser(action){
    return (fetchedSpeaker) => {
        const data = fetchedSpeaker?.data?.[action]

        if(!data) {
            return null;
        }

        return {
            name: data?.name,
            img: data?.img
        }
    }
}