// Add your code here
function submitData(userName, userEmail){
   return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {'Content-Type':'application/json',
         "Accept": "application/json"},
        body: JSON.stringify({
            name: userName, email: userEmail
        })})
        
        .then(res => res.json())
        .then(json => {
        json.id.append
        const id = json.id;
        const newElement = document.createElement('div');
        newElement.setAttribute('id', id.toString());
        document.body.appendChild(newElement);})
        .catch(error => {
            console.log(error);
            const errorElement = document.createElement('div');
            errorElement.textContent = "An error occurred: " + error;
            document.body.appendChild(errorElement);
          });
      }

