let firstName = 'Mark';
let jobTitle = 'Manager';
let city = 'Des Moines';

let newJobPost = 'Hello ${firstName},
  We have received your application for the position of ${jobTitle} in ${city}.
We will be in touch soon. Please reach out if you have not heard back from someone
within the week.
  
Sincerely,
HR person name';

document.getElementByID("result").innerHTML = newJobPost;





