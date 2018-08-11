var database = firebase.database();

var locationsReference = database.ref("/locations");

var locationObject ={};

var locationsCollection;
{/* <div class="col-sm-6 col-md-4 col-lg-3">
<div class="card">
    <img class="card-img-top" src="img/templo.jpg" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title card-description">Barcelona</h5>
        <p class="card-text card-pricing">$32500 euros</p>
    </div>
</div>
</div> */}
    locationsReference.on('value',function(snapshot){
        locationsCollection=snapshot.val();
        /* s */

        getCollectionData();
    })

    function getCollectionData() {
        $("#card-wrapper").empty()
        $.each(locationsCollection, function(key, value) {
            console.log(key + ": " + JSON.stringify(value));
            console.log(value.tittle)
            console.log(value.description)
            console.log(value.price)
            console.log(value.coverUrl)
            $("#card-wrapper").append(`
                    <div class="col-sm-6 col-lg-3">
                        <div class="card">
                            <img class="card-img-top" src="img/templo.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">${value.tittle}</h4>
                                <h5 class="card-description">${value.description}</h5>
                                <p class="card-text card-pricing">${value.price}</p>
                            </div>
                        </div>
                    </div>
                `)
        });
    }

function getLocationData(){
   /*  alert('funcionando') */;
    var locationObject={};

   var locationTitle = $('#location-title').val();
   var locationDescription = $('#location-description').val();
   var locationPrice = $('#location-price').val();
   var locationCoverUrl = $('#location-cover-url').val();

    locationObject.coverUrl = locationCoverUrl;
    locationObject.description = locationDescription;
    locationObject.price = locationPrice;
    locationObject.tittle =locationTitle;


   console.log(locationObject);

   locationsReference.push(locationObject)



}

$('#submit-button').on("click",function(e){
    getLocationData();
})

