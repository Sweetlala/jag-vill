// submit the information
$(function () {

    $("#search").submit(function (e) {
        e.preventDefault();
        var omrade1 = $("#omrade").val();
        console.log(omrade1);
        // var huvud = $("#huvud").val();
        //console.log(huvud);
        getSkolor(omrade1);
    });
});
//get API
//https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q=Benarpsv%C3%A4gen&facet=adress
function getSkolor( omrade1 ) {
     var url=  `https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q=${omrade1}&facet=adress`;

    console.log(url);
    // get json data

    $.getJSON(url,omrade1, function (response) {
       console.log(response)
        hämtainfo(response);
    });
}
  //hämta info
  function hämtainfo(response) {
    console.log(response.records);
    $.each(response, function (i, result) {

    
      //show the result in table
      //loop through array with for loop
      for (var i = 0; i < result.length; i++) {
        
        table = `
                   <table class="table">
                   <tbody>
                    <tr>
                      <td  class="cen">${response.records[i].fields.objektnamn}</td>
                      <td  class="cen">${response.records[i].fields.kategori}</td>
                      <td  class="cen">${response.records[i].fields.adress}</td>
                      
                  </tbody>
                </table>
                  `;
        $('#example').html(table);
        $('#total').html(`Total anläggningar are:${result.length}`);
        
    }
});


};
