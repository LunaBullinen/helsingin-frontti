function haeElokuva(){

  haeData();

}

async function haeData(){
  const leffa = document.getElementById("elokuva").value;
  const leffa_vuosi = document.getElementById("vuosi").value;

  const hakurimpsu = 'http://www.omdbapi.com/?t=' + leffa + '&y=' + leffa_vuosi + '&apikey=a95f3723';

  const vastaus = await fetch(hakurimpsu);
  const data = await vastaus.json();

  document.getElementById("elokuvan_nimi").innerHTML = data.Title;

  var poster = document.getElementById("elokuvan_juliste");
  poster.src = data.Poster;
}
