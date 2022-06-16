function removeClass(s) {
  let has = false;
  for (let comment of document.getElementsByClassName(s)) {
    comment.classList.remove(s);
    has = true;
  }
  return has;
}

for (elem of document.getElementsByClassName("clickable")) {
  elem.onclick = (e) => {
    let target = e.target.closest('p');
    if (target.classList.contains("selected")) {
      target.classList.remove("selected");
      removeClass("visible");
      return;
    }

    removeClass("selected");
    removeClass("visible-transition");
    target.classList.add("selected");

    let hasVisible = removeClass("visible");

    for (let comment of document.getElementsByClassName("comment")) {
      if (comment.dataset.point === target.dataset.point) {
        comment.classList.add("visible");
        if (!hasVisible) { comment.classList.add("visible-transition"); }
      }
    }
  };
}

for (elem of document.getElementsByClassName("publication")) {
  elem.onclick = (e) => {
    let target = e.target.closest('li');
    if (target.classList.contains("selected")) {
      // target.classList.remove("selected");
      // removeClass("visible-p");
      return;
    }

    removeClass("selected");
    removeClass("visible-transition");
    target.classList.add("selected");

    let hasVisible = removeClass("visible-p");

    for (let comment of document.getElementsByClassName("publicationInfo")) {
      if (comment.dataset.publication === target.dataset.publication) {
        comment.classList.add("visible-p");
        if (!hasVisible) { comment.classList.add("visible-transition"); }
      }
    }
  };
}
