var popup = document.querySelector('div.pop-up')
var play = document.querySelector('div.play')

function abrirFilme(idfilme){
    let linkPlay

    popup.style.display = 'block'

    /*Banco de links*/
    switch (idfilme) {
        case 'c1':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bobosp`
            break;
        case 'c2':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=sbt`
            
            break;
        case 'c3':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=band`
            break;
        case 'c4':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=record`
            break;
        case 'c5':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=redetv`
            break;
        case 'm1':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=sportv1`
            break;
        case 'm2':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=sportv2`
            break;
        case 'm3':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=sportv3`
            break;
        case 'm4':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=premiereclubes`
            break;
        case 'm5':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=premiere2`
            break;
        case 'm6':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=premiere3`
            break;
        case 'm7':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=espn`
            break;
        case 'm8':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=espn4`
            break; 
            case 'm9':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=starchannel`
            break;
            case 'm10':
            linkPlay = `https://sinalpublico.com/player3/ch.php?canal=fx`
            break;
         case 'm11':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=warner`
                break;
         case 'm12':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=cartoon`
                break;
                case 'm13':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecinefun`
                break;
                case 'm14':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecinepremium`
                break;
                case 'm15':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecineaction`
                break;
                case 'm16':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecinetouch`
                break;
                case 'm17':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecinepipoca`
                break;
                case 'm18':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=telecinecult`
                break;
                case 'm19':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=nick`
                break;
                case 'm20':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=disney`
                break;
                case 'm21':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=gloob`
                break;
                case 'm22':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s01`
                break;
                case 'm23':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s02`
                break;
                case 'm24':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s03`
                break;
                case 'm25':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s04`
                break;
                case 'm26':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s05`
                break;
                case 'm27':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s06`
                break;
                case 'm28':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s07`
                break;
                case 'm29':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s08`
                break;
                case 'm30':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s09`
                break;
                case 'm31':
                linkPlay = `https://sinalpublico.com/player3/ch.php?canal=bbb23s10`
                break;
            
        default:
            alert('ERRO! O Arquivo não está diponível no momento')
            fecharPop()
            break;
    }
    
    play.innerHTML = `<iframe width="100%" height="80%" src="${linkPlay}" title="MarTV player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    
}

function fecharPop(){
    popup.style.display = 'none'
    play.innerHTML = ``
}