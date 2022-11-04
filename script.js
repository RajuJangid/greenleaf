function Clear() {
    document.getElementById("search").value = "";
    alert('This word is not available');
}

function signin() {
    // let userimg = document.getElementById("userimg");
    let sbox1 = document.getElementById("login");
    let sbox2 = document.getElementById("signup");
    if (sbox1.style.display === 'block') {
        sbox1.style.display = 'none';
        sbox2.style.display = 'none';
    }
    else {
        sbox1.style.display = 'block';
        sbox2.style.display = 'block';
    }
}
function larrow() {
    let f1 = document.getElementById("fact1");
    let f2 = document.getElementById("fact2");
    let f3 = document.getElementById("fact3");
    let f4 = document.getElementById("fact4");
    if (f1.style.display === 'block') {
        f1.style.display = 'none';
        f2.style.display = 'none';
        f3.style.display = 'none';
        f4.style.display = 'block';
    }
    else if (f2.style.display === 'block') {
        f1.style.display = 'block';
        f2.style.display = 'none';
        f3.style.display = 'none';
        f4.style.display = 'none';
    }
    else if (f3.style.display === 'block') {
        f1.style.display = 'none';
        f2.style.display = 'block';
        f3.style.display = 'none';
        f4.style.display = 'none';
    }
    else {
        f1.style.display = 'none';
        f2.style.display = 'none';
        f3.style.display = 'block';
        f4.style.display = 'none';
    }
}

function rarrow() {
    let f1 = document.getElementById("fact1");
    let f2 = document.getElementById("fact2");
    let f3 = document.getElementById("fact3");
    let f4 = document.getElementById("fact4");
    if (f1.style.display === 'block') {
        f1.style.display = 'none';
        f2.style.display = 'block';
        f3.style.display = 'none';
        f4.style.display = 'none';
    }
    else if (f2.style.display === 'block') {
        f1.style.display = 'none';
        f2.style.display = 'none';
        f3.style.display = 'block';
        f4.style.display = 'none';
    }
    else if (f3.style.display === 'block') {
        f1.style.display = 'none';
        f2.style.display = 'none';
        f3.style.display = 'none';
        f4.style.display = 'block';
    }
    else {
        f1.style.display = 'block';
        f2.style.display = 'none';
        f3.style.display = 'none';
        f4.style.display = 'none';
    }
}
function overarrow() {
    document.getElementById("left-arrow").style.display = "block";
    document.getElementById("right-arrow").style.display = "block";
}
function outarrow() {
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "none";
}

function blogview() {
    document.getElementById("blog1-ki-heading").value = "HOW PLASTIC IS SINGLE HANDLY RESPONSIBLE FOR ENTIRE SOIL POLLUTION";
}

function hamburger() {
    let z1 = document.getElementById("l2");
    if (z1.style.visibility === 'visible') {
        document.getElementById("l1").style.transform = "rotate(-45deg)";
        document.getElementById("l3").style.transform = "rotate(45deg)";
        document.getElementById("l2").style.visibility = "hidden";
        document.getElementById("l1").style.top = "12px";
        document.getElementById("l3").style.top = "12px";
        document.getElementById("heading1").style.visibility = "hidden";
        document.getElementById("bb").style.visibility = "visible";
    }
    else {
        document.getElementById("l1").style.transform = "rotate(0deg)";
        document.getElementById("l3").style.transform = "rotate(0deg)";
        document.getElementById("l2").style.visibility = "visible";
        document.getElementById("l1").style.top = "6px";
        document.getElementById("l3").style.top = "22px";
        document.getElementById("heading1").style.visibility = "visible";
        document.getElementById("bb").style.visibility = "hidden";
    }
}
