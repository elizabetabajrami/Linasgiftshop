function saveData() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var address = document.getElementById("address").value;
  var creditcard = document.getElementById("creditcard").value;
  var pcs = document.getElementById("pcs").value;

  var customerData = {
    emri: firstname,
    mbiemri: lastname,
    email: email,
    numri: phonenumber,
    adresa: address,
    karta: creditcard,
    cope: pcs,
  };
  var clients=JSON.parse(localStorage.getItem("firstname"));
    if(clients==null)
    {
        var blankstudents=[];
        localStorage.setItem("firstname",JSON.stringify(blankstudents));

        clients=JSON.parse(localStorage.getItem("firstname"));

        clients.push(customerData);
        localStorage.setItem("firstname",JSON.stringify(clients)); 
    }
    else
    {
      clients.push(customerData);
        localStorage.setItem("firstname",JSON.stringify(clients)); 
    }
   

    alert("Te dhenat u ruajten me sukses");
    
}



var clients=JSON.parse(localStorage.getItem("firstname"));
debugger;

var html = "<table border='1|1'><tr><th>emri</th><th>mbiemri</th><th>email</th><th>numri</th><th>adresa</th><th>karta</th><th>cope</th></tr>";
for (var i = 0; i < clients.length; i++)
 {
    html+="<tr>";
    html+="<td>"+clients[i].emri+"</td>";
    html+="<td>"+clients[i].mbiemri+"</td>";
    html+="<td>"+clients[i].email+"</td>";
    html+="<td>"+clients[i].numri+"</td>";
    html+="<td>"+clients[i].adresa+"</td>";
    html+="<td>"+clients[i].karta+"</td>";
    html+="<td>"+clients[i].cope+"</td>";
    
    html+="</tr>";

}
html+="</table>";
console.log(html);
document.getElementById("buttonData").innerHTML = html;
