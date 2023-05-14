import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, doc, collection, getDocs, addDoc, updateDoc, deleteField  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA2oovMmRHq5A5eGGCvklnybmDZYXlecqc",
    authDomain: "test-77b7a.firebaseapp.com",
    projectId: "test-77b7a",
    storageBucket: "test-77b7a.appspot.com",
    messagingSenderId: "1044121425119",
    appId: "1:1044121425119:web:d538a0fe94c9c2f008856a",
    measurementId: "G-159ECYNWSZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let addData = async (Todo) => {
    try {
        const docRef = await addDoc(collection(db, "Todo"), Todo);
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const btn = document.getElementById("btn")

btn.addEventListener("click", btnFunction)

var input = document.getElementById("inp")

function btnFunction(e){
    e.preventDefault();
    let list = {
        Todo: input.value
    }
    addData(list)
    readData();
}

var td = document.querySelector(".todo")

let readData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "Todo"));
            td.innerHTML += `
                <input type="checkbox" id="job" name="job" value="job">
                <label for="job" class = "todo">${input.value}</label>
                <button type = "button" class = "btn2">Remove</button><br>
            `
            // console.log(`${doc.data().Todo}`);
        var btn2 = document.querySelectorAll(".btn2")
        console.log(btn2);

        btn2.forEach(function(btn3) {
            btn3.addEventListener("click", remove)
        })

        function remove(){
            const Ref = doc(db, 'Todo', 'Todo');

            // Remove the 'capital' field from the document
            updateDoc(Ref, {
                Todo: deleteField()
            });
        }
    } catch (error) {
        console.log(error);
    }
}

let readData2 = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "Todo"));

        querySnapshot.forEach((doc) => {
            td.innerHTML += `
                <input type="checkbox" id="job" name="job" value="job">
                <label for="job" class = "todo">${doc.data().Todo}</label>
                <button type = "button" class = "btn2">Remove</button><br>
            `
            // console.log(`${doc.data().Todo}`);
        });
        var btn2 = document.querySelectorAll(".btn2")
        console.log(btn2);

        btn2.forEach(function(btn3) {
            btn3.addEventListener("click", remove)
        })

        function remove(){
            querySnapshot.forEach((doc) => {;
                updateDoc(doc, {
                    Todo: deleteField()
                });
            });
        }
    } catch (error) {
        console.log(error);
    }
}
readData2()
// const todo = collection(db, "Todo")
// console.log(todo);