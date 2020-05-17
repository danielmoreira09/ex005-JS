function tabuada(){
    let num = window.document.getElementById("numtxt");
    let tab = window.document.getElementById("tab");

    if(num.value.length == 0){
        window.alert("[ERRO] Digite um número!")
    }
    else{
        let i;
        let numtab = Number(num.value);

        tab.innerHTML = '';
        for(i=0; i<=10 ; i++){

            let item = window.document.createElement('option');
            let res = i*numtab;

            item.text = `${numtab} x ${i} = ${res}`;
            tab.appendChild(item);
            item.value = `tab${i}`;  // Usado para controle do ítem. Os valores serão tab0, tab1, ta2 ... (usado em outras linguagens)
        }
    }
}