
(function () {    
    var url = 'https://jsonplaceholder.typicode.com/users';
    getJSON(url,
        function(err, data) {
        if (err !== null) {
            //alert('Something went wrong: ' + err);
        } else {
            var node = document.getElementById("user-details-wrapper");        
            var html = '';

            // To sort array by user's last name
            var sortedArray = data.sort(sortByLastName);
            sortedArray.filter(function(user,index){
                if(user.id%2 === 0) {
                    html += '<div class="user-info"><ul>';
                    html += getUserInfo(user); 
                    html += '</ul><div class="map" id="map' + index + '"></div></div>'; 
                    node.innerHTML = html;

                    // initialize the map
                    initMap(user.address.geo, index);                              
                }
            });
        }
    });

    function getJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };

    function getUserInfo(user) {
        var html = '';
        html += '<ul>';
        for (key in user) {
            html+= "<li>" + key + ": " + (!(user[key] instanceof Object) ? user[key] : '') + "</li>";        
            if(user[key] instanceof Object) {
                html += getUserInfo(user[key]); 
            }
        }
        html += '</ul>';    
        return html;
    }

    function initMap(obj, index) {
        setTimeout(function(){
            var mapObj = new GMaps({
                el: '#map'+ index,
                lat: obj.lat,
                lng: obj.lng,
                zoom: 8
            });
        }, 500);
    }

    function sortByLastName(a, b) {
        var nameA = a.name.split(' ')[a.name.split(' ').length-1].toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.split(' ')[b.name.split(' ').length-1].toUpperCase(); // ignore upper and lowercase
        return (nameA > nameB) ? 1 : (nameA < nameB) ? -1 : 0;      
    }
}());

