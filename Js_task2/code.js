
let pressed = 0;
//-----------------------------------------------code--------------------------------------------------------

createElement(document.body, 'div', '<div class="header"> World New </div>', { className: 'page' });

let header = document.getElementsByClassName("header");
let page = document.getElementsByClassName("page");


fetch_data('https://jsonplaceholder.typicode.com/posts');

let box = document.getElementsByClassName("box");


//-------------------------------------------functions----------------------------------------------


function fetch_data(url) {

    fetch(url)
        .then((data) => {
            let post = data.json();
            return post;
        })
        .then((post) => {

            for (let i = 0; i < post.length; i++) {
                createElement(page[0], 'div', null, { className: 'box' });
            }

            let box = document.getElementsByClassName("box");

            for (let i = 0; i < post.length; i++) {

                createElement(box[i], 'h2', post[i].title, { className: 'title' });
                createElement(box[i], 'p', post[i].body, { className: 'para' });
                createElement(box[i], 'button', 'Readmore', {
                    className: 'btn_clk', onclick: () => {
                        btn_click(i);
                    }, id: 'com' + post[i].id
                });

            }

        });
}


function btn_click(id) {


    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + (id + 1))
        .then((data) => {
            let comm = data.json();
            return comm;
        })
        .then((comm) => {
            if (pressed == 0) {
                for (let i = 0; i < comm.length; i++) {

                    createElement(box[id], 'h3', comm[i].name, { className: 'com-title' });
                    createElement(box[id], 'h4', comm[i].email, { className: 'com-email' });
                    createElement(box[id], 'p', comm[i].body, { className: 'com-body' });
                }
                pressed = 1;
            }
            else {

                const boxes = document.querySelectorAll('.com-body');
                const titles = document.querySelectorAll('.com-title');
                const emails = document.querySelectorAll('.com-email');

                boxes.forEach(box => {
                    box.remove();
                });
                titles.forEach(box => {
                    box.remove();
                });
                emails.forEach(box => {
                    box.remove();
                });
                pressed = 0;
            }
        });

}


function createElement(par, element, html, attribute) {

    let elem = document.createElement(element);
    elem.innerHTML = html
    par.append(elem);

    for (let key in attribute) {

        elem[key] = attribute[key];

    }

}