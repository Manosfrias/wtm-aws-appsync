import { graphqlClient } from "./graphqlClient"
import { getSpeakerQuery } from "../querys/getSpeakerQuery"
import {  createSpeakerQuery } from "../querys/createSpeakerQuery"
import { speakerParser } from "./speakerParser"
import { listSpeakersQuery } from "../querys/listSpeakersQuery"
import { speakersParser } from "./speakersParser"

export function speakerService(config) {

    async function getSpeaker(speaker){
        return await graphqlClient(
            {
                config,
                body:{
                    query: getSpeakerQuery,
                    variables: speaker
                }
            },
            speakerParser("getSpeaker")
        )
    }

    async function createSpeaker(speaker){

        return await graphqlClient(
            {
                config,
                body:{
                    query: createSpeakerQuery,
                    variables: speaker
                }
            },
            speakerParser("createSpeaker")
        )
    }

    async function listSpeakers(){

        return await graphqlClient(
            {
                config,
                body:{
                    query: listSpeakersQuery,
                }
            },
            speakersParser("listSpeakers")
        )
    }

    return {
        getSpeaker,
        createSpeaker,
        listSpeakers
    }
}