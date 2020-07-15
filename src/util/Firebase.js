const firebase = require('firebase');
require('firebase/firestore');

export  class Firebase
{

    constructor()
    {

        this.config ={       
            apiKey: "AIzaSyByZ3te_BQ3Ug7mm7PSwMX2tuSwU7DrhkM",
            authDomain: "whtasapp-clo.firebaseapp.com",
            databaseURL: "https://whtasapp-clo.firebaseio.com",
            projectId: "whtasapp-clo",
            storageBucket: "whtasapp-clo.appspot.com",
            messagingSenderId: "370157911177",
            appId: "1:370157911177:web:70f6ec015a8a8a87a4da58",
            measurementId: "G-SGCENLGDZ3"
        };

        this.init();

    }

    init()
    {
        if (!window._initializedFirebase)
        {
            // Initialize Firebase
            firebase.initializeApp(this.config);
            firebase.analytics();

            firebase.firestore().settings({});
            
            window._initializedFirebase = true;
        }

    }

    static db()
    {

        return firebase.firestore();

    }

    static hd()
    {

        return firebase.storage();
        
    }

    initAuth()
    {

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result =>{

                let token = result.credential.accessToken;

                let user = result.user;

                s({
                    user, 
                    token
                });

            }).catch(err=>{

                f(err);
                
            });

        });
    }

}