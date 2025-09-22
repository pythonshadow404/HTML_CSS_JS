
const age = 19;
const hasID = true;

if (age >= 21) {
  console.log("✅ Welcome! You can enter and order drinks");
} else if (age >= 18 && hasID) {
  console.log("✅ You can enter, but no alcohol");
} else if (age >= 18) {
  console.log("❌ Need to see ID first");
} else {
  console.log("❌ Sorry, must be 18 or older");
}