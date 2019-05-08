import actionTypes from '../actionTypes';
import firebase from 'react-native-firebase';


///////////////////////////// service /////////////////////////////////
export function serviceAction(obj) {
    console.log(obj, 'service')

    return dispatch => {
        dispatch(serviceRequest());
        // firebase.database().ref(`realState${obj.user}`)
        let addId = firebase
            .database()
            .ref(`realState/${obj.user}`).child('userServices')
            .push().key;
        // console.log(addId)
        let updates = {};
        let addUser = {
            time: firebase.database.ServerValue.TIMESTAMP,
            serviceData: obj

        }
        updates[
            `realState/${obj.user}/userServices/${addId}`
        ] = addUser;
        firebase
            .database()
            .ref()
            .update(updates);
        dispatch(serviceSuccess())
    }
}




function serviceRequest() {
    return {
        type: actionTypes.SERVICE_PROGRESS
    }
}
function serviceSuccess() {
    return {
        type: actionTypes.SERVICE_SUCCESS,
    }
}
function serviceError(error) {
    return {
        type: actionTypes.SERVICE_ERROR,
        error
    }
}
export function serviceErrorAlert() {
    return {
        type: actionTypes.SERVICE_ERROR_ALERT
    }
}
















///////////////////////////// service /////////////////////////////////


/////////////////////////////////// Contact ////////////////////////////////////

export function contactAction(obj) {
    console.log(obj, 'contact')

    return dispatch => {
        dispatch(contactRequest());
        let addId = firebase.database().ref('realState/contactMessage').push().key;
        let updates = {};
        let addUserComment = {
            time: firebase.database.ServerValue.TIMESTAMP,
            contactMessageData: obj

        }
        updates[
            `realState/contactMessage/${addId}`
        ] = addUserComment;
        firebase
            .database()
            .ref()
            .update(updates);
    }
}




function contactRequest() {
    return {
        type: actionTypes.CONTACT_PROGRESS
    }
}
function contactSuccess() {
    return {
        type: actionTypes.CONTACT_SUCCESS,
    }
}
function contactError(error) {
    return {
        type: actionTypes.CONTACT_ERROR,
        error
    }
}
export function contactErrorAlert() {
    return {
        type: actionTypes.CONTACT_ERROR_LIST
    }
}



/////////////////////////////////////////////////contat////////////////