

fetchData = function() {
var name, age, gender, img, medications, notes;
var i = 0;
img = localStorage.getItem('image');
$.getJSON("/users",function(obj){
  $.each(obj,function(){
    name = obj[i].name;
    age = obj[i].age;
    gender = obj[i].gender;
       var img = localStorage.getItem('image');
    medications = obj[i].medications;
    notes = obj[i].notes;
    $('#table_details').append(`<tr><td>${name}</td>
                                <td>${age}</td>
                                <td>${gender}</td>
                                <td><img src=${img} style="width:30px; height:50px"></td>
                                <td>${medications}</td>
                                <td>${notes}</td></tr>`);
    i = i + 1;
  });
});
};

$(function(){
$("#save_vitals").click(function() {
    var medications = $('#Medics').val();
    var notes = $('#Notes').val();
    var name = localStorage.getItem('Name');
    var age = localStorage.getItem('Age');
    var gender = localStorage.getItem('Gender');
  var order={
    name: name,
    gender: gender,
    age: age,
    medications:medications,
    notes:notes
  };

});
fetchData();
});
