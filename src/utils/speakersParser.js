export function speakersParser(action){
    return (fetchedSpeaker) => {
        const data = fetchedSpeaker?.data?.[action].items

        if(!data) {
            return null;
        }

        return data.map(item => ({
            name: item?.name,
            img: item?.img
        }))
    }
}