import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Speaker from '../Speaker/Speaker';
import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar';

import requestReducer, { REQUEST_STATUS } from '../../reducers/request';
import {GET_ALL_SUCCESS, PUT_SUCCESS, PUT_FAILURE, GET_ALL_FAILURE} from '../../actions/request';

import withRequest from '../HOCs/withRequest';

const Speakers = () => {
    function toggleSpeakerFavorite(speakerRec) {
      return {
        ...speakerRec,
        isFavorite: !speakerRec.isFavorite,
      };
    }

    async function onFavoriteToggleHandler(speakerRec) {
      const toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
      const speakerIndex = speakers.map((speaker) => speaker.id).indexOf(speakerRec.id);

      try {
        await axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, toggledSpeakerRec);
        dispatch({
          type: PUT_SUCCESS,
          record: toggledSpeakerRec,
        });
      } catch (e) {
        dispatch({
          type: PUT_FAILURE,
          error: e,
        })
      }
     }

    const [searchQuery, setSearchQuery] = useState("");

    
    const [{ records: speakers, status, error }, dispatch] = useReducer(requestReducer, {
      status: REQUEST_STATUS.LOADING,
      records: [],
      error: null
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:4000/speakers");
          dispatch({
            records: response.data,
            type: GET_ALL_SUCCESS
          });
        } catch (e) {
          dispatch({
            type: GET_ALL_FAILURE,
            error: e,
          })
        }
      }
      fetchData();
    }, []);

    const success = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADING;
    const hasErrored = status === REQUEST_STATUS.ERROR;

    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery}
              setSearchQuery={setSearchQuery} />
            {isLoading && <div>Loading...</div>}
            {hasErrored && (
              <div>
                Loading error... Is the json-server running? try "npm run json-server" 
                at terminal prompt
                <br />
                <b>ERROR: {error.message}</b>
              </div>
            )}
            {success && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                  {speakers
                    .filter((rec) => {
                      const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
                      return searchQuery.length === 0 ? true :targetString.includes(searchQuery.toLowerCase());
                    })
                    .map((speaker) => (
                      <Speaker key={speaker.id} {...speaker}
                              onFavoriteToggle={() => onFavoriteToggleHandler(speaker)} />
                    ))}
              </div>)}
        </div>
    )
};

export default withRequest()(Speakers);