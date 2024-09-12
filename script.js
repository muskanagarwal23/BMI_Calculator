const element = document.querySelector('form')
element.addEventListener('submit',function(event){
    event.preventDefault()

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector(".result");
    
    if(height === '' || height<0 ||isNaN(height))
    {
       result.innerHTML = "Please Provide a valid Height"
    }

    else if(weight === '' || weight<0 ||isNaN(weight))
        {
           result.innerHTML = "Please Provide a valid Weight"
        }

    else{
       const BMI = (weight / (height*height/10000).toFixed(2))
       //result.innerHTML = `<span>${BMI}</span>`

       let message = ""
       let color = ""
       
       if(BMI<=18.5)
        {
            message= "Underweight";
            color="yellow"
        }

        else if(BMI>18.5 && BMI<=25){
          message="Normal"
          color="green"
        }

        else{
            message="OverWeight"
            color="red"
        }

        result.innerHTML = `<span style = "color:${color};">${BMI}<br>${message}</span>`;
    }  
    
  

})