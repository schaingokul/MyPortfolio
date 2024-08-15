/*please create a functiion model(state, element), 
  to bind state.value to the HTMLInputElement element.*/

  const Input = document.createElement("Input") 
  const state = {value: "Hi"}
  model(state, input)
  console.log(Input.value) //Hi
  state.value = 'dev'
  console.log(Input.value)  //dev
  Input.value = 'engineerchirag'
  input.dispatchEvent(new Event("change"))
  console.log(state.value) // 'engineerchirag

  // problem
  model(state, input);
  function model(state, input){

    input.value = state.value;
    
    Object.defineProperty(state, "value", {
      get(){
        console.log('calling getter')
        return input.value;
      },
      set(newVal){
        if(newVal != input.value){
          input.value = newVal;
        }
        return;
      }
    });
  
  

  input.addEventListener('change', function(e){
    const newValue = e.target.value;
    //update state
    state.value = newValue;
  });
}

  console.log(input.value)// Hi
  state.value = 'dev';
  console.log(input.value) // dev
  input.value = 'engineeringchirag'
  input.dispatchEvent(new Event('change'))
  console.log(state.value) // 'engineeringchirag'