Vue.CreateApp({
    data() { // data() is a function that returns an object
        return {
            goals: [], // goals array that will be filled with the entered goals
            enteredValue: '' // enteredValue is the value that the user enters in the input field
        };
    },
    method:{
        addGoal(){
            this.goals.push(this.enteredValue); // push the entered value to the goals array
        }
    }
}).Mount('#app');