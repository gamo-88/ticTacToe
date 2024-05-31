let gamboard = document.querySelector('.gameboard')
let cells = document.querySelectorAll('.square')
let infos = document.querySelector('.infos')
let cellules = ["", "", "", "", "", "", "", "", ""]
let marker = 'rond'

infos.textContent="Les Ronds commence"
console.log(gamboard);
function commencer() {
    cells.forEach(cell => {
        let interieur= document.createElement('div')
        cell.addEventListener("click", (e)=>{
    
            if (marker==="rond") {
                console.log(e.target);
                e.target.append(interieur)
                interieur.classList.add(marker)
                marker="croix"
            }else{
                console.log(e.target);
                e.target.append(interieur)
                interieur.classList.add(marker)
                marker="rond"

            }
          

        })
        
    });
}
commencer()