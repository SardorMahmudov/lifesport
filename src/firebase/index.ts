import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCFSGxxYBQWmvdCTXFMmRqb8HdKBm4l5oc',
	authDomain: 'lifesport-fd797.firebaseapp.com',
	projectId: 'lifesport-fd797',
	storageBucket: 'lifesport-fd797.appspot.com',
	messagingSenderId: '71991836618',
	appId: '1:71991836618:web:bb82d13ce98f329522d933',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
