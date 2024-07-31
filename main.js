let notNumber = document.querySelector(".not .num");
let inNumber = document.querySelector(".in .num");
let compNumber = document.querySelector(".completed .num");
let gallary = document.querySelector(".galary");
let board = document.querySelector(".board");
let tagse = [];
let imagese = [];
let progresse = [];
let timee = [];
let urle = [];
let picturee = [];
let j = 0;
let greyPic = document.createElement("div");
greyPic.classList.add("im");
greyPic.style.marginTop = "30px";
greyPic.style.justifyContent = "center";
let greyImg = document.createElement("div");
greyImg.style.boxShadow = "box-shadow: 0 0 10px 0px #777;";
greyImg.style.borderRadius = "10px";
greyImg.style.width = "100%";
greyImg.style.height = "413px";
greyImg.style.backgroundColor = "#eee";

greyPic.appendChild(greyImg);
// .sec .im {
// 	margin-top: 30px;
// 	justify-content: center;
// }

// .sec .im img {
// 	"box-shadow: 0 0 10px 0px #777;"
// 	border-radius: 10px;
// 	width: 100%;
// }
notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
let dragged = "";

let item = document.querySelectorAll(".header .chooses .item");
let outSecDiv = [];
item.forEach(function (ele) {
  ele.onclick = function () {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.remove("active");
    }
    ele.classList.add("active");
  };
});
let choose = document.querySelectorAll(".big-choose .choose1 div");
choose.forEach(function (ele) {
  ele.onclick = function () {
    for (let i = 0; i < choose.length; i++) {
      choose[i].classList.remove("active");
    }
    ele.classList.add("active");
  };
});

let adding = document.querySelectorAll(".adding");
let fully = document.querySelector(".fully");
let out = document.querySelector(".out");

let esc = document.querySelector(".out .titl i");
let addingRed = document.querySelector(".state .not .end .adding");
let addingYellow = document.querySelector(".state .in .end .adding");
let addingGreen = document.querySelector(".state .completed .end .adding");
let submit = document.querySelector(".submit input");
///////////////////////////////////////////////////
let title = document.querySelector(".titl input");
let project = document.querySelector(".project .end input");
let tag = document.querySelector(".tag .end input");
let lik = document.querySelector(".lik .end input");
let photoUrl = document.querySelector(".photo-url .end input");
let assing = document.querySelector(".assign .end input");
let assingEnd = document.querySelector(".assign .end");
let cnt = document.querySelector(".assign .end .cnt");
let cntImgs = document.querySelectorAll(".assign .end .cnt img");
let statu = document.querySelector(".statu");
let circles = document.querySelectorAll(".statu .end .circle");
let outDiv = document.querySelectorAll(".out>div:not(.assign)");
let eachInput = document.querySelectorAll(
  ".out div:not(.submit ,.assign ,.photo-url ,.lik) .end input , .titl input"
);
let dots = document.querySelectorAll(".dots");
let anyChoose1 = "";
let anyChoose2 = "";
let anyChoose3 = "";
let stateNo = document.querySelectorAll(".state .container>div .text");
let anyOut = [];
let removerOut = [];
let warning = document.querySelector(".warning");
let redDiv = document.querySelector(".red");
let yellowDiv = document.querySelector(".yellow");
let greenDiv = document.querySelector(".green");
let colour = "";
let addRed = [];
let addYellow = [];
let addGreen = [];
let title0 = [];
let project0 = [];
let tag0 = [];
let lik0 = [];
let photoUrl0 = [];
let assing0 = [];
let statu0 = [];
let circles0 = [];
let clone = [];
let addArray = [];
let red = [];
let yellow = [];
let green = [];

esc.onclick = function () {
  fully.style.opacity = "0";
  out.style.opacity = "0";
  fully.style.zIndex = "-1";
  out.style.zIndex = "-1";
  for (let i = 1; i < assingEnd.children.length + 500; i++) {
    for (let j = 0; j < assingEnd.children.length; j++) {
      for (let k = 0; k < assingEnd.children.length; k++) {
        assingEnd.children.item(i).remove();
      }
    }
  }
};

addingRed.onclick = () => {
  fully.style.opacity = "0.2";
  out.style.opacity = "1";
  fully.style.zIndex = "3";
  out.style.zIndex = "10";
  colour = "red";
  title.value = "";
  photoUrl.value = "";
  lik.value = "";
  removes();
  input();
};
addingYellow.onclick = () => {
  fully.style.opacity = "0.2";
  out.style.opacity = "1";
  fully.style.zIndex = "3";
  out.style.zIndex = "10";
  colour = "yellow";
  title.value = "";
  photoUrl.value = "";
  lik.value = "";
  removes();
  input();
};
addingGreen.onclick = () => {
  fully.style.opacity = "0.2";
  out.style.opacity = "1";
  fully.style.zIndex = "3";
  out.style.zIndex = "10";
  colour = "green";
  title.value = "";
  photoUrl.value = "";
  lik.value = "";
  removes();
  input();
};

assingEnd.onclick = function () {
  cnt.style.opacity = "1";
  cnt.style.zIndex = "5";
};

fully.onclick = function () {
  cnt.style.opacity = "0";
  cnt.style.zIndex = "-2";
  circles.forEach((ele) => {
    ele.classList.remove("active");
  });
};
dots.forEach((ele) => {
  ele.onclick = function () {
    ele.children.item(1).style.opacity = "1";
    ele.children.item(1).style.zIndex = "2";
  };
});
let edit = document.querySelectorAll(".edit");
edit.forEach((ele) => {
  ele.onclick = function () {
    ele.style.opacity = "0";
    ele.style.zIndex = "-3";
    ele.parentElement.children.item(2).style.opacity = "1";
    ele.parentElement.children.item(2).style.zIndex = "2";
  };
});
let editing = document.querySelectorAll(".editing");
editing.forEach((ele) => {
  ele.onclick = function () {
    ele.parentElement.children.item(1).style.opacity = "0";
    ele.parentElement.children.item(1).style.zIndex = "-1";
  };
});
let anythis = document.querySelectorAll(".header ,.tasks ,.big-choose , .grey");
anythis.forEach((ele) => {
  ele.onclick = function () {
    edit.forEach((ele) => {
      ele.style.zIndex = "-3";
      ele.style.opacity = "0";
    });
    editing.forEach((ele) => {
      ele.style.opacity = "0";
      ele.style.zIndex = "-1";
    });
  };
});
let editingSubmit = document.querySelectorAll(".editing .end input");
let root = document.querySelector(":root");
let colorOne = document.querySelector(".color.one");
let colorTwo = document.querySelector(".color.two");
let colorThree = document.querySelector(".color.three");
colorOne.oninput = function () {
  root.style.setProperty("--not-started", colorOne.value);
};
colorTwo.oninput = function () {
  root.style.setProperty("--in-progress", colorTwo.value);
};
colorThree.oninput = function () {
  root.style.setProperty("--completed", colorThree.value);
};
editingSubmit.forEach((ele) => {
  ele.onclick = function () {
    let start = ele.parentElement.parentElement.children.item(0);
    let textValue =
      ele.parentElement.parentElement.parentElement.parentElement.parentElement.children
        .item(0)
        .children.item(0);
    if (
      !(
        start.children.item(0).value == "" ||
        start.children.item(0).value == " "
      )
    ) {
      textValue.innerHTML = start.children.item(0).value;
    }
    edit.forEach((ele) => {
      ele.style.zIndex = "-3";
      ele.style.opacity = "0";
    });
    editing.forEach((ele) => {
      ele.style.opacity = "0";
      ele.style.zIndex = "-1";
    });
  };
});

outDiv.forEach((ele) => {
  ele.onclick = function () {
    cnt.style.opacity = "0";
    cnt.style.zIndex = "-2";
  };
});
cntImgs.forEach(function (ele) {
  ele.onclick = function () {
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    } else {
      ele.classList.add("active");
    }
    if (ele.classList.contains("active")) {
      assing.remove();
      let clone = ele.cloneNode(true);
      assingEnd.appendChild(clone);
    } else {
      for (let i = 0; i < assingEnd.children.length; i++) {
        if (
          assingEnd.children.item(i + 1).getAttribute("src") ===
          ele.getAttribute("src")
        ) {
          assingEnd.children.item(i + 1).remove();
        }
      }
    }
  };
});

circles.forEach((ele) => {
  ele.onclick = function () {
    for (let i = 0; i < +ele.getAttribute("number"); i++) {
      circles.item(i).classList.add("active");
    }
    if (
      +ele.getAttribute("number") <
      document.querySelectorAll(".circle.active").length
    ) {
      for (
        let j = +ele.getAttribute("number");
        j <
        document.querySelectorAll(".circle.active").length +
          ele.getAttribute("number");
        j++
      ) {
        circles.item(j).classList.remove("active");
      }
    }
  };
});

submit.onclick = function () {
  let cntImgsActive = document.querySelectorAll(".assign .end .cnt img.active");
  eachInput.forEach((ele) => {
    addArray.push(ele);
  });
  let result = addArray.filter((ele) => {
    return ele.value === "";
  });
  if (result.length > 0) {
    warning.style.zIndex = "10";
    warning.style.opacity = "1";
  } else if (cntImgsActive.length <= 0) {
    warning.style.zIndex = "10";
    warning.style.opacity = "1";
  } else if (cntImgsActive.length <= 0) {
    warning.style.zIndex = "10";
    warning.style.opacity = "1";
  } else {
    fully.style.opacity = "0";
    out.style.opacity = "0";
    fully.style.zIndex = "-1";
    out.style.zIndex = "-1";
    title0 = title.value;
    project0 = project.value;
    tag0 = tag.value.split(" ").filter((ele) => {
      return ele !== "";
    });
    lik0 = lik.value.trim();
    photoUrl0 = photoUrl.value.trim();
    circles0 = document.querySelectorAll(".circle.active").length;
    for (let i = 1; i < assingEnd.children.length + 1; i++) {
      assing0.push(assingEnd.children.item(i));
    }
    add();
  }
};
function add() {
  let div = document.createElement("div");
  let space = document.createElement("span");
  space.classList.add("space");
  let sec = document.createElement("div");
  sec.classList.add("sec");
  sec.setAttribute("draggable", "true");
  let tex = document.createElement("div");
  tex.classList.add("tex");
  let info = document.createElement("div");
  info.classList.add("info");
  let tit = document.createElement("h2");
  tit.classList.add("title");
  let inf = document.createElement("div");
  inf.classList.add("inf");
  let dot = document.createElement("div");
  dot.classList.add("dot");
  let elli = document.createElement("i");
  elli.classList.add("fa-regular", "fa-ellipsis");

  let boxe = document.createElement("div");
  boxe.classList.add("boxe");
  let remover = document.createElement("div");
  remover.classList.add("remove");
  let move = document.createElement("div");
  move.classList.add("move");
  let choosee = document.createElement("div");
  choosee.classList.add("choosee");
  let date = document.createElement("div");
  date.classList.add("date");
  let time = document.createElement("div");
  time.classList.add("time");
  let clock = document.createElement("i");
  clock.classList.add("fa-regular", "fa-clock");
  let calendar = document.createElement("div");
  let form = document.createElement("div");
  form.classList.add("form");
  let comments = document.createElement("div");
  comments.classList.add("comments");
  let dots = document.createElement("i");
  dots.classList.add("fa-light", "fa-comment-dots");
  let numb = document.createElement("div");
  let links = document.createElement("div");
  links.classList.add("links");
  let link = document.createElement("i");
  link.classList.add("fa-light", "fa-link");
  let nu = document.createElement("div");
  ///////////////////////////////////////////////////
  let tags = document.createElement("div");
  tags.classList.add("tags");
  let tage = document.createElement("i");
  tage.classList.add("fa-regular", "fa-tag");
  ///////////////////////////////////////////////////
  let images = document.createElement("div");
  images.classList.add("images");
  ///////////////////////////////////////////////////
  let progress = document.createElement("div");
  progress.classList.add("progress");
  let words = document.createElement("div");
  words.classList.add("words");
  let ta = document.createElement("div");
  ta.classList.add("ta");
  let five = document.createElement("div");
  five.classList.add("five");
  let bar = document.createElement("div");
  bar.classList.add("bar");
  let fill = document.createElement("div");
  fill.classList.add("fill");
  ///////////////////////////////////////////////////
  let url = document.createElement("div");
  url.classList.add("url");
  let a = document.createElement("a");
  ///////////////////////////////////////////////////
  let im = document.createElement("div");
  im.classList.add("im");
  let imImg = document.createElement("img");
  sec.appendChild(space);
  tags.appendChild(tage);
  for (let i = 0; i < stateNo.length; i++) {
    let chooseeDiv = document.createElement("div");
    chooseeDiv.classList.add(`no${i + 1}`);
    chooseeDiv.innerHTML = stateNo[i].innerHTML;
    choosee.appendChild(chooseeDiv);
  }
  for (let i = 0; i < tag0.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = tag0[i];
    tags.appendChild(div);
  }
  for (let i = 0; i < assing0.length - 1; i++) {
    let clones = assing0[i];
    images.appendChild(clones);
  }
  if (circles0 > 0) {
    fill.style.borderRadius = "50px";
    fill.style.width = `${circles0 * 20}%`;
  } else if ((circles0 = 0)) {
    fill.style.width = "2%";
    fill.style.borderRadius = "50%";
  }
  a.setAttribute("href", `${lik0}`);
  a.setAttribute("target", "_blank");
  imImg.setAttribute("src", `${photoUrl0}`);
  imImg.setAttribute("alt", "This Url Is Wrong");
  numb.innerHTML = "32";
  nu.innerHTML = "4";
  inf.innerHTML = project0.trim();
  tit.innerHTML = title0.trim();
  calendar.innerHTML = "16 Jun-30 Jun";
  ta.innerHTML = "TaskProgress";
  remover.innerHTML = "Remove";
  move.innerHTML = "Move";
  five.innerHTML = `${document.querySelectorAll(".circle.active").length}/5`;
  a.innerHTML = lik0.trim();
  dot.appendChild(remover);
  dot.appendChild(elli);
  info.appendChild(tit);
  info.appendChild(inf);
  tex.appendChild(info);
  tex.appendChild(dot);
  sec.appendChild(tex);
  sec.appendChild(tags);
  sec.appendChild(images);
  bar.appendChild(fill);
  words.appendChild(ta);
  words.appendChild(five);
  progress.appendChild(words);
  progress.appendChild(bar);
  sec.appendChild(progress);
  if (lik0 != "") {
    url.appendChild(a);
    sec.appendChild(url);
  }
  time.appendChild(clock);
  time.appendChild(calendar);
  comments.appendChild(dots);
  comments.appendChild(numb);
  links.appendChild(link);
  links.appendChild(nu);
  form.appendChild(comments);
  form.appendChild(links);
  date.appendChild(time);
  date.appendChild(form);
  sec.appendChild(date);
  if (photoUrl0 != "") {
    im.appendChild(imImg);
    sec.appendChild(im);
  }
  boxe.appendChild(remover);
  boxe.appendChild(move);
  dot.appendChild(boxe);
  dot.appendChild(choosee);
  if (colour === "red") {
    addRed.push(sec);
    red = addRed;
    redDiv.appendChild(div);
    redDiv.appendChild(addRed[addRed.length - 1]);
  } else if (colour === "yellow") {
    addYellow.push(sec);
    yellow = addYellow;
    yellowDiv.appendChild(div);
    yellowDiv.appendChild(addYellow[addYellow.length - 1]);
  } else if (colour === "green") {
    addGreen.push(sec);
    green = addGreen;
    greenDiv.appendChild(div);
    greenDiv.appendChild(addGreen[addGreen.length - 1]);
  }
  let any = document.querySelectorAll(
    ".sec *:not(.remove , .dot i , .dot ,.tex, .choosee ,.move , .boxe , .choosee div) , .state , .big-choose , body>.container , .header "
  );
  anyOut = any;
  elli.onclick = function () {
    boxe.style.opacity = "1";
    boxe.style.zIndex = "1";
  };
  removerOut.push(boxe);
  removerOut.push(choosee);
  anyOut.forEach((ele) => {
    ele.onclick = function () {
      removerOut.forEach((ele) => {
        ele.style.opacity = "0";
        ele.style.zIndex = "-1";
      });
    };
  });
  move.onclick = function () {
    choosee.style.opacity = "1";
    choosee.style.zIndex = "1";
  };
  remover.onclick = function () {
    sec.remove();
    notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
    inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
    compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
  };
  notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
  inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
  compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
  let secDiv = document.querySelectorAll(".sec");
  outSecDiv = secDiv;
  let choose1 = document.querySelectorAll(".choosee .no1");
  let choose2 = document.querySelectorAll(".choosee .no2");
  let choose3 = document.querySelectorAll(".choosee .no3");
  anyChoose1 = choose1;
  anyChoose2 = choose2;
  anyChoose3 = choose3;
  if (anyChoose1.length > 0) {
    anyChoose1.forEach((ele) => {
      ele.onclick = function () {
        let big = ele.parentElement.parentElement.parentElement.parentElement;
        redDiv.appendChild(big);
        notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
        inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
        compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
        ele.parentElement.parentElement.children.item(1).style.opacity = "0";
        ele.parentElement.parentElement.children.item(1).style.zIndex = "-1";
        ele.parentElement.parentElement.children.item(2).style.opacity = "0";
        ele.parentElement.parentElement.children.item(2).style.zIndex = "-1";
      };
    });
  }
  if (anyChoose2.length > 0) {
    anyChoose2.forEach((ele) => {
      ele.onclick = function () {
        let big = ele.parentElement.parentElement.parentElement.parentElement;
        yellowDiv.appendChild(big);
        notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
        inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
        compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
        ele.parentElement.parentElement.children.item(1).style.opacity = "0";
        ele.parentElement.parentElement.children.item(1).style.zIndex = "-1";
        ele.parentElement.parentElement.children.item(2).style.opacity = "0";
        ele.parentElement.parentElement.children.item(2).style.zIndex = "-1";
      };
    });
  }
  if (anyChoose3.length > 0) {
    anyChoose3.forEach((ele) => {
      ele.onclick = function () {
        ("clicked");
        let big = ele.parentElement.parentElement.parentElement.parentElement;
        greenDiv.appendChild(big);
        notNumber.innerHTML = document.querySelectorAll(".red .sec").length;
        inNumber.innerHTML = document.querySelectorAll(".yellow .sec").length;
        compNumber.innerHTML = document.querySelectorAll(".green .sec").length;
        ele.parentElement.parentElement.children.item(1).style.opacity = "0";
        ele.parentElement.parentElement.children.item(1).style.zIndex = "-1";
        ele.parentElement.parentElement.children.item(2).style.opacity = "0";
        ele.parentElement.parentElement.children.item(2).style.zIndex = "-1";
      };
    });
  }
  outSecDiv.forEach((ele) => {
    ele.addEventListener("dragstart", function () {
      ele.style.border = "4px solid #ccc";
      ele.style.opacity = "0.2";
      dragged = ele;
    });
    ele.addEventListener("dragend", function () {
      ele.style.border = "none";
      ele.style.opacity = "1";
    });
  });

  redDiv.addEventListener("dragover", function (e) {
    e.preventDefault;
    redDiv.appendChild(dragged);
  });
  yellowDiv.addEventListener("dragover", function (e) {
    e.preventDefault;
    yellowDiv.appendChild(dragged);
  });
  greenDiv.addEventListener("dragover", function (e) {
    e.preventDefault;
    greenDiv.appendChild(dragged);
  });
  choose.forEach(function (ele) {
    ele.onclick = function () {
      for (let i = 0; i < choose.length; i++) {
        choose[i].classList.remove("active");
      }
      ele.classList.add("active");
      if (gallary.classList.contains("active")) {
        outSecDiv.forEach((e) => {
          if (e.children.length === 6) {
            
            tagse.push(e.children.item(2));
            e.children.item(2).remove();
            imagese.push(e.children.item(2));
            e.children.item(2).remove();
            progresse.push(e.children.item(2));
            e.children.item(2).remove();
            urle.push(e.children.item(2));
            e.children.item(2).remove();
            console.log(urle)
            // e.appendChild(document.createElement("div"))
            e.appendChild(greyPic)
            timee.push(undefined);
            picturee.push(undefined);
          }
          if (e.children.length === 7) {
            tagse.push(e.children.item(2));
            e.children.item(2).remove();
            imagese.push(e.children.item(2));
            e.children.item(2).remove();
            progresse.push(e.children.item(2));
            e.children.item(2).remove();
            urle.push(e.children.item(2));
            e.children.item(2).remove();
            if (e.children.item(2).children.item(0).tagName === "IMG") {
              picturee.push(e.children.item(2));
              timee.push(undefined);
            } else {
              picturee.push(undefined)
              timee.push(e.children.item(2));
              e.children.item(2).remove();
              e.appendChild(greyPic)
            }
          }
          if (e.children.length === 8) {
            tagse.push(e.children.item(2));
            e.children.item(2).remove();
            imagese.push(e.children.item(2));
            e.children.item(2).remove();
            progresse.push(e.children.item(2));
            e.children.item(2).remove();
            urle.push(e.children.item(2));
            e.children.item(2).remove();
            timee.push(e.children.item(2));
            e.children.item(2).remove();
            picturee.push(e.children.item(2));
          }
        });
      }
      if (board.classList.contains("active")) {
        for (let i = 0; i < outSecDiv.length; i++) {
          // if(outSecDiv[i].children.length === 6){
          //   outSecDiv[i].children.item(2).remove();
          //   outSecDiv[i].children.item(2).remove();
          // }
          outSecDiv[i].children.item(2).remove();
          outSecDiv[i].appendChild(tagse[i]);
          outSecDiv[i].appendChild(imagese[i]);
          outSecDiv[i].appendChild(progresse[i]);
          outSecDiv[i].appendChild(urle[i]);
          if (timee[i] != undefined) {
            outSecDiv[i].appendChild(timee[i]);
          }
          if (picturee[i] != undefined) {
            outSecDiv[i].appendChild(picturee[i]);
          }
        }
      }
      // console.log(j);
    };
  });
}
function removes() {
  title0 = [];
  project0 = [];
  tag0 = [];
  lik0 = [];
  photoUrl0 = [];
  assing0 = [];
  statu0 = [];
  circles0 = [];
  clone = [];
  assing0 = [];

  eachInput.forEach((ele) => {
    ele.value = "";
  });
  cntImgs.forEach((ele) => {
    ele.classList.remove("active");
  });
  circles.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function input() {
  if (assingEnd.children.length <= 1) {
    assingEnd.appendChild(assing);
  }
}
redDiv.onchange = function () {
  console.log("changed");
};
