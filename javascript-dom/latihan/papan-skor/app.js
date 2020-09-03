let dataTeam = {};

function reset() {
  location.reload();
}

/**
 * ambil team dari input
 */
function getTeam() {
  let teamAName = document.querySelector("#team-a-name").value;
  let teamASkor = document.querySelector("#team-a-skor").value;
  let teamBName = document.querySelector("#team-b-name").value;
  let teamBSkor = document.querySelector("#team-b-skor").value;
  dataTeam.teamAName = teamAName;
  dataTeam.teamASkor = teamASkor;
  dataTeam.teamBName = teamBName;
  dataTeam.teamBSkor = teamBSkor;

  // validasi
  let formIsValid = validasiInput();
  if (formIsValid == false) {
    alert("Nama Team dan Skor Tidak boleh kosong");
    return;
  }

  // set value ke text html
  document.querySelector("#team-a-name-text").innerHTML = dataTeam.teamAName;
  document.querySelector("#team-b-name-text").innerHTML = dataTeam.teamBName;
  document.querySelector("#team-a-skor-text").innerHTML = dataTeam.teamASkor;
  document.querySelector("#team-b-skor-text").innerHTML = dataTeam.teamBSkor;
}

function cekHasil() {
  // validasi
  let formIsValid = validasiInput();
  if (formIsValid == false) {
    alert("Nama Team dan Skor Belum diisi");
    return;
  }
  console.log(dataTeam);
  // simpan hasil kedalam html
  let templateText = "";
  if (dataTeam.teamASkor > dataTeam.teamBSkor) {
    templateText = `${dataTeam.teamAName} Menang`;
  } else if (dataTeam.teamASkor < dataTeam.teamBSkor) {
    templateText = `${dataTeam.teamBName} Menang`;
  } else {
    templateText = "Pertandingan Seri";
  }
  document.querySelector(".hasil-text").innerHTML = templateText;
  document.querySelector(
    ".keterangan-text"
  ).innerHTML = `${dataTeam.teamAName}:${dataTeam.teamASkor} - ${dataTeam.teamBName}:${dataTeam.teamBSkor}`;
}

/**
 *
 */
function validasiInput() {
  // cek object dataTeam sudah diisi
  if (!Object.entries(dataTeam).length) {
    return false;
  }

  // validasi inputan kosong
  let formIsValid = true;
  Object.entries(dataTeam).forEach((element) => {
    const item = element[1];
    if (item == null || item == "") {
      formIsValid = false;
    }
  });

  return formIsValid;
}
