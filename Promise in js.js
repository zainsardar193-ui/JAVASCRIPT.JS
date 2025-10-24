// A Promise is a special JavaScript object that represents the eventual result of an asynchronous operation.
// In simple words —

// A Promise says “I’ll give you a result later — either success ✅ or failure ❌.”

//  basic syntex

let promise = new Promise(function(resolve, reject) {
  // do some async work
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong!");
  }
});

// e.g 
const myPromise = new Promise((resolve, reject) => {
  let internet = true;

  setTimeout(() => {
    if (internet) {
      resolve("Connected to internet!");
    } else {
      reject("No internet connection!");
    }
  }, 2000); // simulate delay
});

// using .then() and .catch()
myPromise
  .then((message) => {
    console.log("✅ Success:", message);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });
