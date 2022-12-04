// Autor: Kustav

// js Date kuud algavad 0-st ehk 0 - jaanuar
eventTimes = {
  km3kt: new Date(2022, 11, 8),
  mmp2kt: new Date(2022, 11, 12),
  sess: new Date(2023, 0, 3),
  kevad23regamine: new Date(2022, 11, 15),
  vaheaeg: new Date(2022, 11, 19),
  "24dets": new Date(2022, 11, 24),
  sügis22lõpp: new Date(2023, 0, 29),
};

// Sorteeri sündmused ning peida juba möödunud
var events = document.getElementById("events");
sort(events);

for (child of events.children) {
  if (eventTimes[child.id] < new Date()) {
    child.style.display = "none";
  }
}

// Kood võetud https://www.geeksforgeeks.org/how-to-sort-an-html-list-using-javascript/
// Veidi muudetud, et töötaks meie olukorras.
// Sorteeri htmli elemendid kuupäeva jörgi.
function sort(events) {
  var stop, i, run, children;
  run = true;

  while (run) {
    run = false;
    children = events.children;

    for (i = 0; i < children.length - 1; i++) {
      stop = false;
      if (eventTimes[children[i].id] > eventTimes[children[i + 1].id]) {
        stop = true;
        break;
      }
    }

    if (stop) {
      children[i].parentNode.insertBefore(children[i + 1], children[i]);

      run = true;
    }
  }
}
