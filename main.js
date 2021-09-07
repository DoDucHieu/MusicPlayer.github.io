const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const disk = $(".disk")
const appBody = $('.appBody');
const header = $('.header');
const currentSong = $('.songNameRunning > h3');
const currentImg = $('.disk .currentImg');
const currentAudio = $('.disk .currentAudio');
const open = $('.open');
const forWards = $('.forWards');
const backWards = $('.backWards');
const repeat =$('.repeat');
const shuffle =$('.shuffle');
const random =$('.random');
const timePlay = $('.timePlay');
const currentTime = $('.currentTime');

//Thêm nhạc vào app
var app = {
    songs: [
        {
            songAudio: './asset/music/AnhCoTheNaoDungRoiXaEm-MacKhieuTyTy-7043614.mp3',
            songImage: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/2/a/0/f2a0d0808422e459c91966c8dbfdd175.jpg',
            songName:'Anh có thể nào đừng rời xa em',
            songAuthor: 'Mạc Khiếu Tỉ Tỉ'
        },
        {
            songAudio: './asset/music/DancingWithYourGhost-SashaSloan-6033576.mp3',
            songImage: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/e/2/b6e2285617b11edb8ed4d1164efd20cc.jpg',
            songName:'Dancing With Your Ghost',
            songAuthor: 'Sasha Alex Sloan'
        },
        {
            songAudio: './asset/music/LetMeDownSlowly-AlecBenjamin-6360069.mp3',
            songImage: 'https://upload.wikimedia.org/wikipedia/vi/c/c3/Alec_Benjamin_and_Alessia_Cara_-_Let_Me_Down_Slowly.png',
            songName:'Let Me Down Slowly',
            songAuthor: 'Alec Benjamin'
        },
        {
            songAudio: './asset/music/WeDonTTalkAnymoreFeatSelenaGomez-CharliePuth-6426101.mp3',
            songImage: 'https://thenewsmexico.com/wp-content/uploads/2019/06/image5-12.jpg',
            songName:'We Don\'t Talk Anymore',
            songAuthor: 'Charlie Puth'
        },
        {
            songAudio: './asset/music/Ai la nguoi thuong em.mp3',
            songImage: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/e/6/0/7e6088a95d78a12eae1cf55d0b3cc3b9.jpg',
            songName:'Ai là người thương em',
            songAuthor: 'Quân AP'
        },
        {
            songAudio: './asset/music/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3',
            songImage: 'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/9/6/7/5/9675faf09a3f6cc4e78b45c170bccd6c.jpg',
            songName:'Độ tộc 2',
            songAuthor: 'Phúc Du,Masew,Pháo,Độ Mixi'
        },
        {
            songAudio: './asset/music/Payphone-Maroon5WizKhalifa-3630577.mp3',
            songImage: 'https://img.youtube.com/vi/KRaWnd3LJfs/hqdefault.jpg',
            songName:'PayPhone',
            songAuthor: 'Maroon 5'
        },
        {
            songAudio: './asset/music/NothingsGonnaChangeMyLoveForYou-Westlife-312928.mp3',
            songImage: 'https://i.ytimg.com/vi/AWKUF7xhuIw/maxresdefault.jpg',
            songName:'Nothing Gonna Change My Love For You',
            songAuthor: 'Westlife'
        },
        {
            songAudio: './asset/music/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3',
            songImage: 'https://avatar-ex-swe.nixcdn.com/song/2019/07/09/9/c/0/8/1562666560135_640.jpg',
            songName:'Hãy Trao Cho Anh',
            songAuthor: 'Sơn Tùng MTP'
        },
        {
            songAudio: './asset/music/Am Tham Ben Em - Son Tung M-TP.mp3',
            songImage: 'https://i.ytimg.com/vi/9iTNUi0Siuc/hqdefault.jpg',
            songName:'Am Thầm Bên Em',
            songAuthor: 'Sơn Tùng MTP'
        },
    ],

    import: function(){
        const htmls = this.songs.map( (song) => {
            return `
            <div class="song" >
                <audio src="${song.songAudio}" controls class="audio" style="display: none"></audio>
                <div class="song-disk">
                    <img class="img" src="${song.songImage}" alt="">
                </div>
                <div class="songAndAuthor">
                    <h4 class="songAndAuthor-songName">${song.songName}</h4>
                    <h5 class="songAndAuthor-author">${song.songAuthor}</h5>
                </div>
                <div class="threeDot">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div> `
        });
        appBody.innerHTML = htmls.join("");
    },
    scroll: function(){
        const diskHeight = disk.offsetHeight;
        window.onscroll = () =>{
            const scroll = window.scrollY;
            // console.log(scroll);
            // console.log(diskHeight);
            // console.log(disk.getBoundingClientRect());
            if (diskHeight - scroll  < 0) {
                disk.style.height = 0;
                disk.style.width = 0;
            }
            disk.style.height = (diskHeight - scroll ) + "px";
            disk.style.width = (diskHeight - scroll ) + "px";
        }
    },

    currentSong: function(index){
        currentIndex = index;
        currentAudio.src = this.songs[index].songAudio;
        currentImg.src  = this.songs[index].songImage;
        currentSong.innerHTML = this.songs[index].songName;
        currentAudio.play();
        this.colorOfSelectSong(index);
    },
    colorOfSelectSong: function(index){
        const amountSong = $$('.song');
        amountSong.forEach((e) =>{
            e.classList.remove('colorOfSelectSong');
        })
        amountSong[index].classList.add('colorOfSelectSong');
    },

    selectSong: function(){
        const listSong = $$('.song');
        listSong.forEach((currentSong, index) => {
            currentSong.onclick = () => {
                this.currentSong(index);
            }
        })
    },

    playButton: function(){
        open.onclick = () =>{
            if(currentAudio.paused){
                currentAudio.play();
            }
            else{
                currentAudio.pause();
            }
        }
    },

    playOrPause: function(){
        const circular = currentImg.animate(
                { 
                    transform: 'rotate(360deg)'
                },
                {
                    duration: 20000,
                    iterations: Infinity
                })
        circular.pause();
        currentAudio.onplay = () =>{
            open.innerHTML  = '<i class="fas fa-pause-circle"></i>';
            currentImg.classList.add("active-song");
            circular.play();
        }
        currentAudio.onpause = () =>{
            open.innerHTML  = '<i class="fas fa-play-circle"></i>';
            currentImg.classList.remove("active-song");
            circular.pause();
        }
    },

    currentTime: function(){
        var checkRepeat = false;
        var checkShuffle = false;
        currentAudio.ontimeupdate = () =>{
            const persent = currentAudio.currentTime/currentAudio.duration;
            currentTime.style.width = timePlay.offsetWidth * persent + 'px';
                repeat.onclick = () =>{
                    checkRepeat = !checkRepeat;
                    repeat.classList.toggle('repeatActive');
                    console.log(checkRepeat);           
                }
                shuffle.onclick = () =>{
                    checkShuffle = !checkShuffle;
                    shuffle.classList.toggle('shuffleActive');
                    console.log(checkShuffle);           
                }
            if(currentAudio.currentTime === currentAudio.duration){
                //repeatSong 
                if(checkRepeat){
                    this.currentSong(currentIndex);
                }
                else if(checkShuffle){
                    this.currentSong(Math.floor(Math.random() * this.songs.length));
                }
                //autoForWards
                else{
                    currentIndex += 1;
                    if(currentIndex == this.songs.length){
                        this.currentSong(0);
                    }
                    else{
                        this.currentSong(currentIndex);
                    }
                }
            }
        }
        //tua
        timePlay.onclick = (event) =>{
            const position = event.pageX;
            const appWidth = $('.app').offsetWidth;
            currentAudio.currentTime = ((position - appWidth*0.05)/timePlay.offsetWidth) * currentAudio.duration;
            // console.log(position);
            // console.log(timePlay.offsetWidth);
            // console.log(appWidth);
        }
    },

    forWards: function(){
        forWards.onclick = () =>{
            currentIndex += 1;
            if(currentIndex == this.songs.length){
                this.currentSong(0);
            }
            else{
                this.currentSong(currentIndex);
            }
        }
    },

    backWards: function(){
        backWards.onclick = () =>{
            currentIndex -= 1;
            if(currentIndex == -1){
                this.currentSong(this.songs.length-1);
            }
            else{
                this.currentSong(currentIndex);
            }
        }
    },

    // animateString: function(){
    //     let text = currentSong.innerText;
    //     setInterval(() => {
    //         text = text[text.length - 1] + text.substring(0, text.length - 1);
    //         text.data = text;
    //     }, 500);
    // },

    start: function(){
        const currentIndex = 0;
        const index = 0;
        this.import();
        this.currentSong(currentIndex);
        this.selectSong();
        this.playButton();
        this.forWards();
        this.backWards();
        // this.randomSong();
        this.playOrPause();
        this.currentTime();
        this.scroll()
        // this.animateString();
    }
}
app.start();
appBody.style.marginTop = header.scrollHeight + 'px';
