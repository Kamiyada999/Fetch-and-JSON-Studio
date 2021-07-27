window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(funtion (response), {
    response,json().then(function(json) {
        let counter = document.getElementById("counter");
        let count = 0;
        const container = document.getElementById("container");
        for (let i = 0 ; i < json.lenth; i++) {
            count = count + 1;
            container.innerHTML = `
    <div class="astronaut">
        <div class="bio">
            <h3>${json[0].firstName} ${json[i].lastName}</h3>
            <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
            </ul>
        </div>
        <img class="avatar" src="${json[i].picture}">
    </div>
    `;
        counter.innerHTML = count;
      }  
    }),
  });
});