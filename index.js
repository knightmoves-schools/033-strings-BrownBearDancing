var firstName = 'Mark';
var jobTitle = 'Manager';
var city = 'Des Moines';

let newJobPost = 'Hello ${firstName},
  We have received your application for the position of ${jobTitle} in ${city}.
We will be in touch soon. Please reach out if you have not heard back from someone
within the week.
  
Thank you,
HR person name';

document.getElementByID("result").innerHTML = newJobPost;




