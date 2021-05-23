window.onload = function() {
    const music = document.getElementById('Audio');
    const title = document.getElementById('title');
    const playbtn = document.getElementById('play');
    const prevbtn = document.getElementById('prev');
    const Forwbtn = document.getElementById('forward');
    let isPlaying = false;
    let value = 0;
    function playmusic(){
        music.play();
        isPlaying = true;
        playbtn.classList.replace("fa-play","fa-pause");
    }
    function pausemusic(){
        music.pause();
        isPlaying = false;
        playbtn.classList.replace("fa-pause","fa-play");
    }
    playbtn.addEventListener('click',function(){
        if(isPlaying){
            pausemusic();
        }
        else{
            playmusic();
        }
    })
    const songs=[
        {
            "name":"Song1",
            "title":"Namo Namo(Reverbed)"
        },
        {
            "name":"Song2",
            "title":"Runaway-Aurora"
        },
        {
            "name":"Song3",
            "title":"Tera Bina(Reverbed)"
        }
    ];
    
    if(value === 0){
        prevbtn.disabled = true;
    }
    const load = (songs)=>{
        title.textContent=songs.title;
        music.src = "./"+ songs.title+".mp3";
    }
    load(songs[value]);
    prevbtn.addEventListener('click',function(){
        value--;
        load(songs[value]);
        playmusic();
    })
    Forwbtn.addEventListener('click',function(){
        value++;
        load(songs[value]);
        playmusic();
    })
}