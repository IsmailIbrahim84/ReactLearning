import {useEffect, useState} from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
}


function useRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
const delay = ms => new Promise(res => setTimeout(res, ms));

useEffect(() => {
    async function delayFunction() {
        try {
            await delay(delayTime);

             setRequestStatus(REQUEST_STATUS.SUCCESS);

        }
        catch (e){
           setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }
    delayFunction();
},[delayTime]);
function updateRecord(updatedRecord,doneCallBack){
    const originalSpeakerData = [...data];
    const newSpeakerData = data.map(function (speaker) {
        return speaker.id === updatedRecord.id ? updatedRecord : speaker;
    } );
    async function delayFunc() {
        try {
            setData(newSpeakerData);
            await delay(delayTime);
            if (doneCallBack) {
                doneCallBack();
            }
            setRequestStatus(REQUEST_STATUS.SUCCESS);

        }
        catch (e){
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
            setData(originalSpeakerData);
        }

    }
     delayFunc()
}

function InsertRecord (record, doneCallBack){
    const originalSpeakerData = [...data];
    const newSpeakerData = [record,...data];
    async function delayFunc() {
        try {
            setData(newSpeakerData);
            await delay(delayTime);
            if (doneCallBack) {
                doneCallBack();
            }
            setRequestStatus(REQUEST_STATUS.SUCCESS);

        }
        catch (e){
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
            setData(originalSpeakerData);
        }

    }
}
// function onFavoriteToggle(id) {
//     const previousSpeakerRecord= data.find(function (speaker) {
//             return speaker.id === id;
//         }
//     );
//     console.log(previousSpeakerRecord);
//     const newSpeakerUpdated = {
//         ...previousSpeakerRecord,favorite: !previousSpeakerRecord.favorite
//     };
//     console.log(newSpeakerUpdated);
//
//     const newSpeakerData = data.map(function (speaker) {
//         return speaker.id === id ? newSpeakerUpdated : speaker;
//     } );
//
//     setSpeakerData(newSpeakerData);
// }
return {requestStatus, error, data, updateRecord};
}

export default useRequestDelay;
