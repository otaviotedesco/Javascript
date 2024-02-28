function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');


    var imagemAnterior = document.getElementById('foto');
    if (imagemAnterior) {
        res.removeChild(imagemAnterior);
    }

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m (Personalizado).jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m (Personalizado).jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m (Personalizado).jpg');
            } else {
                img.setAttribute('src', 'foto-idoso-m (Personalizado).jpg');
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f (Personalizado).jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f (Personalizado).jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulta-f (Personalizado).jpg');
            } else {
                img.setAttribute('src', 'foto-idosa-f (Personalizado).jpg');
            }
        }
        
        res.appendChild(img);
    }
}
