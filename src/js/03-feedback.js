import throttle from "lodash.throttle";

const ourForm = document.querySelector('.feedback-form')
const inputEmail = document.querySelector("input");
const inputMsg = document.querySelector("textarea");
const button = document.querySelector("button");
// console.log(ourForm);
// console.log(inputEmail);
// console.log(inputMsg);
const oldData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (oldData != null) {
      console.log("old data from Storage:", oldData);
      inputEmail.value = oldData.email;
      inputMsg.value = oldData.message;
    }
   

const currentData = function(event) {
  
       const outputData = {
        email: inputEmail.value,
        message: inputMsg.value,
    };
          
    console.log(outputData);
   if (outputData.email !== "" && outputData.message !== "") {
    localStorage.setItem("feedback-form-state", JSON.stringify(outputData));
   }
    
    
};

ourForm.addEventListener("input", throttle(currentData,500));
ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const saveEmail = form.elements.email;
  const saveMessage = form.elements.message;
  if (saveEmail === "" || saveMessage === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${saveEmail.value}, Message: ${saveMessage.value}`);
  form.reset();
}

