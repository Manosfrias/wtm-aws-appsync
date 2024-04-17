export const getSpeakerQuery = `
    query getSpeaker($name: String!) {
        getSpeaker(name: $name) {
            img
            name
        }
    }
`
