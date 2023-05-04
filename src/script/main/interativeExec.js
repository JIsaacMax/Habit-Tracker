function type2Elm(type) {
  if (type == "Check") {
    return `<input onchange='checkedHabit(this)' type='checkbox'>`;
  } else if (type == "Quantidade") {
    return `<input onchange='upQTHabit' type='number' min='1'>`;
  } else if (type == "Tempo") {
    return `<input onchange='upTMHabit' type='time'>`;
  } else if (type == "Porcentagem") {
    return `<input onchange='' type='number' min='1' max='100'>%`;
  }
}

function checkedHabit(elm) {
  if (elm.checked) {
    elm.parentElement.parentElement.style.textDecoration = "line-through";
    scoreUpdate(elm.parentElement.parentElement.children[3].innerText, '+');
} else {
    elm.parentElement.parentElement.style.textDecoration = "none";
    scoreUpdate(elm.parentElement.parentElement.children[3].innerText, '-');
  }
}

function imp2PTS(imp, type) {
  if (type == "Check") {
    return imp * 10;
  } else if (type == "Quantidade") {
    return imp * 5;
  } else if (type == "Tempo") {
    return imp * 3;
  } else if (type == "Porcentagem") {
    return imp * 2;
  }
}

function scoreUpdate(pts, sinal) {
  let score = document.getElementById("emmet-pts");
  if (sinal == "-") {
    score.innerText = parseInt(parseInt(score.innerText) - parseInt(pts));
  } else {
    score.innerText = parseInt(parseInt(score.innerText) + parseInt(pts));
  }
}
