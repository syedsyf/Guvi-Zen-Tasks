

async function getIpDetails(){
    const ipAddress = document.getElementById("ipaddress").value
    const respons = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=c9b3b0223baf43e79c4e99377af695bd&ip=${ipAddress.trim()}`)
    const data = await respons.json();
    if(data.message){
        document.getElementById('details').innerHTML = `<h3 class="text-center">Sorry We are Unable to find the data,Please check the Entered IP Address</h3>`
    }else{
        document.getElementById('details').innerHTML =`
        <div class="data">
        <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col" colspan="2">IP Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your Ip</td>
                <td>${data.ip}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>${data.latitude}</td>
              </tr>
              <tr>
                <td>Lontitude</td>
                <td>${data.longitude}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>${data.country_name}</td>
              </tr>
              <tr>
                <td>Region</td>
                <td>${data.state_prov}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>${data.city}</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>${data.organization}</td>
              </tr>
              <tr>
                <td>ISP</td>
                <td>${data.isp}</td>
              </tr>
            </tbody>
        </table>
    </div>
        `
    }
    
}