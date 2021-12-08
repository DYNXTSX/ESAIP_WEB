function billetDollarEuro(montant, pays){
    const tabBillets = [
        [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1],
        [100,50,20,10,5,2,1]
    ];

    const symbole = ['€', '$'];

    const resTab = ['Il faut au total :', 'You need :']

    let res = resTab[pays] + " \n";

    for (var i = 0; i < tabBillets[pays].length; i++) {
        let nbrBillet = Math.floor(montant/tabBillets[pays][i]);
        if(nbrBillet>0){
            montant -= nbrBillet*tabBillets[pays][i];
            res += nbrBillet+' x '+tabBillets[pays][i]+' '+symbole[pays]+'\n';
        }
    }

    return res;
}
