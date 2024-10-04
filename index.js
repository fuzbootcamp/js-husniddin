const nav = [
    {
      id: 1,
      link: "Home",
    },
  
    {
      id: 2,
      link: "Products",
    },
  
    {
      id: 3,
      link: "About us",
    },
  
    {
      id: 4,
      link: "Contact us",
    },
  ];
  
  let nMain = document.querySelector(".n-main");
  
  const htmlga = nav.map((student) => {
    let p = document.createElement("p");
    p.innerHTML = student.link;
    nMain.appendChild(p);
  
    nMain.style.display = "flex";
    nMain.style.alignItems = "center";
    nMain.style.justifyContent = "space-evenly";
    p.style.gap = "15px";
    nMain.style.background = "red";
    nMain.style.width = "100%";
    nMain.style.height = "80px"
  
    p.onclick = function () {
      nMain.removeChild(p);
      alert("p ket");
    };
  });
  
  let headerEl = document.querySelector(".n-header");
  
  const header = [
    {
      id: 1,
      name: "HUSNIDDIN",
      image:
        "https://www.reuters.com/resizer/v2/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg?auth=1fbb3b5f030c1cbb9db6a9c423e79c243406af432313f1cc35f7076761f0651b&height=1500&width=1200&quality=80&smart=true",
    },
    {
      id: 2,
      name: "HUSNIDDIN",
      image:
        "https://www.reuters.com/resizer/v2/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg?auth=1fbb3b5f030c1cbb9db6a9c423e79c243406af432313f1cc35f7076761f0651b&height=1500&width=1200&quality=80&smart=true",
    },
    {
      id: 3,
      name: "HUSNIDDIN",
      image:
        "https://www.reuters.com/resizer/v2/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg?auth=1fbb3b5f030c1cbb9db6a9c423e79c243406af432313f1cc35f7076761f0651b&height=1500&width=1200&quality=80&smart=true",
    },
  
    {
      id: 4,
      name: "HUSNIDDIN",
      image:
        "https://www.reuters.com/resizer/v2/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg?auth=1fbb3b5f030c1cbb9db6a9c423e79c243406af432313f1cc35f7076761f0651b&height=1500&width=1200&quality=80&smart=true",
    },
  
    {
      id: 5,
      name: "HUSNIDDIN",
      image:
        "https://www.reuters.com/resizer/v2/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg?auth=1fbb3b5f030c1cbb9db6a9c423e79c243406af432313f1cc35f7076761f0651b&height=1500&width=1200&quality=80&smart=true",
    },
  ];
  
  const htmlga1 = header.map((student) => {
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    h1.innerHTML = student.name;
    img.setAttribute("src", `${student.image}`);
    headerEl.appendChild(h1);
    headerEl.appendChild(img);
  
    headerEl.style.display = "flex";
    headerEl.style.flexWrap = "wrap";
    headerEl.style.gap = "40px";
    img.style.width = "250px";
  
    img.onclick = function () {
      headerEl.removeChild(img);
      alert("img ket");
    };
  
    h1.onclick = function () {
      headerEl.removeChild(h1);
      alert("h1 ket");
    };
  
  });