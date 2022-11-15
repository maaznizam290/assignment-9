import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged } from 'firebase/auth'
import { getDatabase, onValue, push, ref, set } from "firebase/database";


const auth = getAuth(app)
const dataBase = getDatabase(app)

function handleSignup(obj) {
    let { userName, email, password,number } = obj;

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                // User Registered
                let user = userCredentials.user
                console.log(user);
                let reference = ref(dataBase, `user/${user.uid}`);
                obj.id = user.uid
                set(reference, obj)
                    .then(() => {
                        resolve("user is registered")
                    }).catch((error) => {
                        reject(error)
                    })
            })
            .catch((error) => {
                reject(error.message)
            })
    });
};

function handleLogIn(obj) {
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                let user = userCredentials.user

                let reference = ref(dataBase, `user/${user.uid}`)
                onValue(reference, (data) => {
                    let status = data.exists()
                    console.log(status)
                    if (status) {
                        resolve(data.val())
                        // console.log(data.val())
                    }
                    else {
                        reject("User not Found")
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                reject(errorMessage);
            })

    })
}

function manageUser() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid);
            }
            else {
                reject("user nhi hai");
            }
        })
    });
}


function pushData(obj, node, id) {
    let postListRef;
    return new Promise((resolve, reject) => {

        if (id) {
            postListRef = ref(dataBase, `${node}/${id}`)
        }
        else {
            let addRef = ref(dataBase, node)
            obj.id = push(addRef).key;
            postListRef = ref(dataBase, `${node}/${obj.id}`)
        }
        set(postListRef, obj)
            .then((res) => {
                resolve(`Data send to this node ${node}/${obj.id} successfully.`)
            })
            .catch((err) => {
                reject("Failed to end data")
            }) 
    });
}

function getData(node, userId) {
    let dbReference = ref(dataBase, `${node}/${userId ? userId : ""}`);
    return new Promise((resolve, reject) => {
        onValue(dbReference, (data) => {
            if (data.exists()) {
                let userData = data.val()
                if (userId) {
                    resolve(userData)
                }
                else {
                    let dataArr = Object.values(userData)
                    resolve(dataArr)
                }
            }
            else {
                reject('Data not found')
            }
        }, {
            onlyOnce: false
        });
    });
}

function deleteData(node, listId) {
    if (!listId) {
        let dbReference = ref(dataBase, `${node}`)
        return new Promise((resolve, reject) => {
            set(dbReference, null)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }
    else {
        let dbReference = ref(dataBase, `${node}/${""}`)
        return new Promise((resolve, reject) => {
            set(dbReference, null)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        });

    }
}
let Signout = () => {
    return new Promise((resolve, reject) => { 
      signOut(auth)
        .then(() => {
          resolve("user loggedout");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  





export { handleSignup, handleLogIn, manageUser, Signout,pushData, getData, deleteData };