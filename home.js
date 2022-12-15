window.onload = function(){
    // get the modal
    let modal = document.getElementById("myModal");
    // get all the readings
    let readings = document.getElementsByClassName("link");
    // get modal reading response 
    let readingResponse = document.getElementsByClassName("modal-content")[0];
    // get reading response contents
    responses = document.querySelectorAll(".reading");
    
    for (let i = 0; i < readings.length; i++) {
        let reading = readings[i];
        // only look at the ones with p tag (i.e. those are the readings)
        if (reading.tagName == "P"){
            // attach click listener for each reading
            reading.onclick = function(event){
                modal.style.display = "block";
                responseIdx = parseInt(reading.innerHTML.split("#")[1])-1;
                readingResponse.innerHTML = responses[responseIdx].innerHTML;
            }
        }
    }

    // get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // when the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // when the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}