// Ques => Find the minimum number of planes required to reach the desination

const unitsOfFuelArray = [1, 6, 3, 4, 5, 0, 0, 0, 6];
const n = unitsOfFuelArray.length;

let minimumSteps = new Array(n).fill(-1);
minimumSteps[n - 1] = 0;

// Checking from last how many steps required to react the point.
for (let i = n - 1; i >= 0; i--) {
  if (unitsOfFuelArray[i] > 0) {
    let min = Number.MAX_VALUE;
    // Maximum places a plane can go with provided fuel unit. Ex. if 3rd plane has 3 units, it can go to 4th, 5th or 6th. It also checks that the sum should not exceeds the length of array.
    for (
      let j = 1;
      j <= unitsOfFuelArray[i] && i + j < minimumSteps.length;
      j++
    ) {
        // if minimumStep[i + j] == -1 means there is no step from there to go till last airport. So we are not checking them.
      if (minimumSteps[i + j] != -1) {
        console.log(min, i+j);
      }
    }
    // 1 added at last to count the current step as well
    if (min != Number.MAX_VALUE) {
      minimumSteps[i] = min + 1;
    }
  }
}

// If there are no steps minimumSteps[0] will return -1
console.log(`Minimum Number of Planes Required are : ${minimumSteps[0]}`);
