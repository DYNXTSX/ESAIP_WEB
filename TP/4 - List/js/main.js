function mainFunction(){
    let valueRadio = document.querySelector('input[name=choixListeSport]:checked').value;
    let domSport = document.querySelector('#sportSaisie');

    let listVal = document.querySelectorAll('ul')[valueRadio];

    let li = document.createElement("li");

    li.onclick = function () {
        this.remove();
    };

    li.appendChild(document.createTextNode(domSport.value));
    listVal.append(li);

    domSport.value = "";

}
