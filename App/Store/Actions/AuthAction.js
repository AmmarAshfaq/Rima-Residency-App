import actionTypes from '../actionTypes';
import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
export function signUpFunc(SignUpObj, path) {
    console.log(SignUpObj)
    return dispatch => {
        dispatch(signUpRequest());
        firebase.auth().createUserWithEmailAndPassword(SignUpObj.email, SignUpObj.password).
            then(() => {
                // console.log(user)
                let user = firebase.auth().currentUser;
                path.navigate('dashBoard');


                console.log('New User', user);
                user.displayName = SignUpObj.name;
                let obj = {
                    name: user.displayName,
                    uid: user.uid,
                    email: user.email
                }
                // await AsyncStorage.setItem('User', obj);
                firebase.database().ref(`realState/${user.uid}`).set(obj);
                dispatch(signUpSucceed(obj));
            })
            .catch(err => {
                dispatch(signUpError(err.message));
                path.navigate('signUp');
            })
    }
}

export function signinFunc(SignInObj, path) {
    return dispatch => {
        console.log(SignInObj, path)
        dispatch(signInRequest());
        firebase.auth().signInWithEmailAndPassword(SignInObj.email, SignInObj.password)
            .then(() => {
                let user = firebase.auth().currentUser;
                path.navigate('dashBoard');

                let obj = {
                    name: user.displayName,
                    uid: user.uid,
                    email: user.email
                }
                dispatch(signInSucced(obj));
            })
            .catch((err) => {
                dispatch(signInError(err.message));
                path.navigate('signIn');
            })
    }
}
function signInRequest() {
    return {
        type: actionTypes.SIGNIN_PROGRESS
    }
}
function signInSucced(data) {
    return {
        type: actionTypes.SIGNIN_SUCCEED,
        data
    }
}
function signInError(error) {
    return {
        type: actionTypes.SIGNIN_ERROR,
        error
    }
}
export function signInErrorAlert() {
    return {
        type: actionTypes.SIGNIN_ERROR_ALERT
    }
}
function signUpRequest() {
    return {
        type: actionTypes.SIGNUP_PROGRESS
    }
}
function signUpSucceed(data) {
    return {
        type: actionTypes.SIGNUP_SUCCEED,
        data
    }
}
function signUpError(error) {
    return {
        type: actionTypes.SIGNUP_ERROR,
        error
    }
}
export function signUpErrorAlert() {
    return {
        type: actionTypes.SIGNUP_ERROR_ALERT
    }
}


