//-------------------------variables--------------------

let list = ['logo', 'home', 'about', 'products'];
let obj = { type: 'checkbox', id: 'check' };

let para = [
    'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    'Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
    'Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customerservice for state of the art customer service.'];

let list2 = ['Terms &amp; Conditions |', ' Privacy Policy |', ' Contact'];
let dropdown_list = ['engage', 'pontificate', 'synergize'];

//-----------------------code-----------------------------------------

//----------------------header---------------------------------

createElement(document.body, 'div', '<div class="header"> <div class="logo"></div></div>', { className: 'page' });

let header = document.getElementsByClassName("header");
let logo = document.getElementsByClassName("logo");
createElement(logo[0], 'p', 'logo');

createElement(header[0], 'input', null, obj)
let input = document.getElementById("check")
input.insertAdjacentHTML("afterend", '<label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>');

createElement(header[0], 'ul', null);
let ul = document.getElementsByTagName("ul");

//----------------generate-list----------------
for (let i = 0; i <= 3; i++) {

    createElement(ul[0], 'li', list[i]);

}

//------------------Add dropdown-button-to-ist-------------------

ul[0].insertAdjacentHTML("beforeend", ' <li class="button"><div class="dropdown"><button class="dropbtn">Services</button><div class="dropdown-content"></div></div></li>');
let dropdown_content = document.getElementsByClassName("dropdown-content");

for (let i = 0; i < 3; i++) {
    createElement(dropdown_content[0], 'a', dropdown_list[i], { href: "#" });
}

createElement(header[0], 'div', '<input type="search"><input type="submit" id=search value="Search">');

btn_click(search);



//-----------------------section_1-------------------------------

let page = document.getElementsByClassName("page");
createElement(page[0], 'div', null, { className: 'Section-one' });
let section_one = document.getElementsByClassName("Section-one");
createElement(section_one[0], 'h1', 'Dramatically Engage');
createElement(section_one[0], 'p', ' Objectively innovate empowered manufactured products whereas parallel platforms.');
createElement(section_one[0], 'a', 'Engage Now', { className: 'btn-primary', href: '#', id: 'engage_btn' });
btn_click(engage_btn);

//------------------------section_2----------------------------

createElement(page[0], 'div', null, { className: 'Section-two' });
let section_two = document.getElementsByClassName("Section-two");
createElement(section_two[0], 'h2', 'Superior Collaboration <span>Visualize Quality</span>');
createElement(section_two[0], 'p', 'Proactively envisioned multimedia based expertise and cross-media growth strategies.Seamlessly visualizequality intellectual capital without superior collaboration and idea-sharing. Holisticallypontificateinstalled base portals after maintainable products.');

//----------------------------section3-----------------------------


createElement(page[0], 'div', null, { className: 'section-three' });
let section_three = document.getElementsByClassName("section-three");
for (let i = 0; i < 3; i++) {
    createElement(section_three[0], 'div', null, { className: 'box' });
}
section_3(3);


//----------------------------section_4------------------------------

createElement(page[0], 'section', null);
let section_four = document.getElementsByTagName("section");
for (let i = 0; i < 3; i++) {
    createElement(section_four[0], 'div', null, { className: 'box-two' });
}
section_4(3);


//------------------------------footer---------------------------


createElement(page[0], 'footer', '<div class="list"></div>', { className: "footer" });
let footer = document.getElementsByTagName("footer");
let listi = document.getElementsByClassName("list");

for (let i = 0; i < 3; i++) {
    createElement(listi[0], 'a', list2[i], { href: "#" });
    list[0].innerHTML = '|';
}

createElement(footer[0], 'p', 'Copyright © Example.com 2015');



//***********************************Functions****************************** */

function createElement(par, element, html, attribute) {
    let elem = document.createElement(element);
    elem.innerHTML = html
    par.append(elem);

    for (let key in attribute)
        elem[key] = attribute[key];
}


function btn_click(button) {

    button.onclick = function () {
        alert('click!');
    };
}


function section_3(arr_length) {


    let h_three = ['Efficiently Unleash', 'Completely Synergize', 'Dynamically Procrastinate'];
    for (let i = 0; i < arr_length; i++) {

        let box = document.getElementsByClassName("box");
        createElement(box[i], 'div', '<img src="img/download.svg"></img>');
        createElement(box[i], 'h3', h_three[i]);
        createElement(box[i], 'p', para[i]);

    }

}

function section_4(arr_length) {

    let h_four = ['Dynamically Procrastinate', 'Efficiently Unleash', 'Completely Synergize'];
    for (let i = 0; i < arr_length; i++) {

        let box_two = document.getElementsByClassName("box-two");
        createElement(box_two[i], 'div', '<img src="img/image2.svg"></img>');
        createElement(box_two[i], 'h3', h_four[i]);
        createElement(box_two[i], 'p', para[i]);
    }
}








