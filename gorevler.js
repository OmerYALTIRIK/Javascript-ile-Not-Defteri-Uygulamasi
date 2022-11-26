/* TAMAMLANMIŞ GÖREVLER */
function tamamlanmis() {
  var listItems = document.getElementsByTagName("li");
  //console.log(listItems);

  for (var x = 0; x < listItems.length; x++) {
    //console.log(listItems[x]);
    listItems[x].addEventListener("click", function () {
      this.classList.toggle("tamamlanmis");
    });
  }
}
tamamlanmis();
/* TAMAMLANMIŞ GÖREVLER */

/* SİLİNEN GÖREVLER */
function silinenGorevler() {
  var silButonlari = document.getElementsByTagName("span");
  //console.log(silButonlari);

  for (var i = 0; i < silButonlari.length; i++) {
    //console.log(silButonlari[x]);
    silButonlari[i].addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
}
silinenGorevler();
/* SİLİNEN GÖREVLER */

/* İNPUTTA ENTER'A BASINCA YENİ GÖREV EKLEME */
var gorev = document.getElementsByTagName("input")[0];
//console.log(gorev);
gorev.addEventListener("keypress", function (e) {
  //console.log(e.keyCode);
  if (e.keyCode === 13) {
    //alert("Enter'a basıldı");
    var yeniNot = document.createElement("li");
    yeniNot.innerHTML = gorev.value;
    var yeniSpan = document.createElement("span");
    var yeniIcon = document.createElement("i");
    yeniIcon.setAttribute("class", "fas fa-trash-alt");
    yeniSpan.insertBefore(yeniIcon, yeniSpan.firstChild);
    yeniNot.insertBefore(yeniSpan, yeniNot.firstChild);
    var gorevler = document.getElementsByTagName("ul")[0];
    gorevler.insertBefore(yeniNot, gorevler.lastChild);
    silinenGorevler();
    tamamlanmis();
    gorev.value = "";
  }
});

/* İNPUTTA ENTER'A BASINCA YENİ GÖREV EKLEME */
