
const gajah = document.getElementsByClassName('gajah')[0];
const orang = document.getElementsByClassName('orang')[0];
const semut = document.getElementsByClassName('semut')[0];

let user = gajah.src;

gajah.addEventListener('click', function(){
    user = gajah.src;
})
orang.addEventListener('click', function(){
    user = orang.src;
})
semut.addEventListener('click', function(){
    user = semut.src;
})

//ENEMY PICK
const enemy = document.getElementsByClassName('komputer-input')[0];
const enemy_pick = Math.floor(Math.random() *10);

if(enemy_pick < 3){
    enemy.src = 'GAME SUWIT JAWA 2.0 (DOM)/IMG/gajah.png';
}else if(enemy_pick >= 3 && enemy_pick <7){
    enemy.src = 'GAME SUWIT JAWA 2.0 (DOM)/IMG/orang.png';
}else{
    enemy.src = 'GAME SUWIT JAWA 2.0 (DOM)/IMG/semut.png';
}

//RULES IN GAME
const info = document.getElementById('info');
const btn = document.getElementById('btn-mulai');

btn.addEventListener('click',function (){
    if(user == enemy.src){
        info.textContent = 'SERI';
        enemy.style.display = 'block';
    }else if(user == gajah.src){
        if(enemy.src == orang.src){
            info.textContent = 'MENANG';
            enemy.style.display = 'block';
            info.style.color = 'green';
        }
        else{
            info.textContent = 'KALAH';
            enemy.style.display = 'block';
            info.style.color = 'red';
        }
    }else if(user == orang.src){
        if(enemy.src == semut.src){
            info.textContent = 'MENANG';
            enemy.style.display = 'block';
            info.style.color = 'green';
        }
        else{
            info.textContent = 'KALAH';
            enemy.style.display = 'block';
            info.style.color = 'red';
        }
    }else if(user == semut.src){
        if(enemy.src == gajah.src){
            info.textContent = 'MENANG';
            enemy.style.display = 'block';
            info.style.color = 'green';
        }
        else{
            info.textContent = 'KALAH';
            enemy.style.display = 'block';
            info.style.color = 'red';
        }
    }else{
        alert('lerrr')
    }
})

//RESET BUTTON
const reset_btn = document.getElementById('btn-reset');

reset_btn.addEventListener('click', function(){
    location.reload();
})