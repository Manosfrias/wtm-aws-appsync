import { createContext, useContext, useEffect, useState } from "react";
import { speakerService } from "../utils/speakers";
import { API_CONNECTION } from "../config/apiConnection";

const SpeakersContext = createContext();

export const SpeakersProvider = ({ children }) => {
  const { createSpeaker, listSpeakers  } = speakerService(API_CONNECTION);
    const [speakers, setSpeakers] = useState([]);
  
    const addSpeaker = async (newSpeaker) => {
      await createSpeaker(newSpeaker);
      const newSpeakers = await listSpeakers()
      setSpeakers(newSpeakers)
    };

    useEffect(() => {
      const populateSpeakersList = async () => {
        const newSpeakers = await listSpeakers()
        setSpeakers(newSpeakers)
      }
      populateSpeakersList()
      // eslint-disable-next-line 
    }, [])
  
    return (
      <SpeakersContext.Provider value={{ speakers, addSpeaker }}>
        {children}
      </SpeakersContext.Provider>
    );
  };

  export const useSpeakers = () => useContext(SpeakersContext);