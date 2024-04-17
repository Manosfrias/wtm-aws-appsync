export const createSpeakerQuery = `
    mutation createSpeaker($img: String!, $name: String!) {
        createSpeaker(input: {img: $img, name: $name}) {
            name
            img
        }
    }
`