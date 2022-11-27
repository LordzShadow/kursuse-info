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

var events = document.getElementById("events");

for (child of events.children) {
  console.log(child.id);
  if (eventTimes[child.id] < new Date()) {
    child.style.display = "none";
  } else {
    console.log(eventTimes[child.id]);
  }
}
