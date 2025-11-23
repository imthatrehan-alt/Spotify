// global varibles
let ham = document.querySelector('.hamburger');
let ham2 = document.querySelector('.spotify');
let isToggled = false;
let isSearchOpen = false;
let currentSong = new Audio();
let currentPlayingTrack = "";
let songs;
let currFolder;
let isLooping = false;
let isShuffling = false;
let originalSongsOrder = [];
let shuffledSongs = [];
let allAlbums = [];
let isSearchActive = false;
let beforeSearchFolder = "";
let beforeSearchSongs = [];
let uploadedFiles = [];
let uploadedFolder = null;
let coverImage = null;
let lastVolume = 0.40;

// Media query for mobile layout
const isMobile = window.matchMedia("(max-width: 1200px)");
const isMobile2 = window.matchMedia("(max-width: 1050px)");
const isMobile3 = window.matchMedia("(max-width: 941px)");
const isMobile4 = window.matchMedia("(max-width: 750px)");
const isMobile5 = window.matchMedia("(max-width: 640px)");
const isMobile6 = window.matchMedia("(max-width: 480px)");
const isMobile7 = window.matchMedia("(max-width: 330px)");
const isMobile9 = window.matchMedia("(min-height: 667px) and (max-width: 376px)");
const isMobile8 = window.matchMedia("(min-height: 800px) and (max-width: 361px)");

// Koi bhi media query listener NAHI chahiye for spotify width

function checkSize() {
    // Sirf vol aur songname handle karo - spotify width CSS se manage hoga
    if (isMobile6.matches || isMobile5.matches) {
        document.querySelector('.vol').style.display = 'none';
        document.querySelector('.songname').style.maxWidth = "100vw";
    } else {
        document.querySelector('.vol').style.display = 'flex';
        document.querySelector('.songname').style.maxWidth = "450px";
    }
}

isMobile5.addEventListener("change", checkSize);
isMobile6.addEventListener("change", checkSize);
checkSize();

ham2.addEventListener("click", () => {
    if (isMobile2.matches) {
        // Mobile layout: Left overlay
        if (!isToggled) {
            document.querySelector('.left-top').style.height = "15vh";
            document.querySelector('.close-left-btn').style.width = "2.4vw"
            document.querySelector('.close-left-btn').style.top = "15px"
            document.querySelector('.close-left-btn').style.right = "15px"
            document.querySelector('.left-bottom').style.height = "81.84vh";
            document.querySelector('.songcontainer').style.maxHeight = "63vh";
            document.querySelector('.box').classList.remove('disnone');

            // Specific breakpoint sizes for TOGGLE ON
            if (isMobile8.matches) {
                document.querySelector('.spotify').style.width = "34.06vw";  // 480px toggle ON
                document.querySelector('.close-left-btn').style.width = "7.4vw"
                document.querySelector('.close-left-btn').style.top = "10px"
                document.querySelector('.close-left-btn').style.right = "15px"

            } else if (isMobile9.matches) {
                document.querySelector('.spotify').style.width = "34.06vw";  // 480px toggle ON
                document.querySelector('.close-left-btn').style.width = "7.4vw"
                document.querySelector('.close-left-btn').style.top = "10px"
                document.querySelector('.close-left-btn').style.right = "15px"
            } else if (isMobile7.matches) {
                document.querySelector('.spotify').style.width = "30.06vw";  // 480px toggle ON
                document.querySelector('.close-left-btn').style.width = "6.4vw"
                document.querySelector('.close-left-btn').style.top = "9px"
                document.querySelector('.close-left-btn').style.right = "9px"
            } else if (isMobile6.matches) {
                document.querySelector('.spotify').style.width = "21.06vw";  // 480px toggle ON
                document.querySelector('.close-left-btn').style.width = "4.4vw"
                document.querySelector('.close-left-btn').style.top = "15px"
                document.querySelector('.close-left-btn').style.right = "15px"
            } else if (isMobile5.matches) {
                document.querySelector('.spotify').style.width = "14.06vw";  // 640px toggle ON
                document.querySelector('.close-left-btn').style.width = "2.4vw"
                document.querySelector('.close-left-btn').style.top = "15px"
                document.querySelector('.close-left-btn').style.right = "15px"
            } else if (isMobile4.matches) {
                document.querySelector('.spotify').style.width = "13.06vw";  // 750px toggle ON
            } else if (isMobile3.matches) {
                document.querySelector('.spotify').style.width = "13.06vw";  // 941px toggle ON
            } else if (isMobile2.matches) {
                document.querySelector('.spotify').style.width = "13.06vw";  // 1050px toggle ON
            }

            isToggled = true;
        } else {
            document.querySelector('.left-top').style.height = "9.64vh";
            document.querySelector('.close-left-btn').style.width = "3.4vw"
            document.querySelector('.close-left-btn').style.top = "18px"
            document.querySelector('.close-left-btn').style.right = "18px"
            document.querySelector('.left-bottom').style.height = "87.2vh";
            document.querySelector('.songcontainer').style.maxHeight = "71.3vh";
            document.querySelector('.box').classList.add('disnone');

            // Specific breakpoint sizes for TOGGLE OFF
            if (isMobile8.matches) {
                document.querySelector('.spotify').style.width = "50.06vw";  // 480px toggle OFF
                document.querySelector('.close-left-btn').style.width = "11.4vw"
                document.querySelector('.close-left-btn').style.top = "18px"
                document.querySelector('.close-left-btn').style.right = "12px"

            } else if (isMobile9.matches) {
                document.querySelector('.spotify').style.width = "35.06vw";  // 480px toggle OFF
                document.querySelector('.close-left-btn').style.width = "8.4vw"
                document.querySelector('.close-left-btn').style.top = "18px"
                document.querySelector('.close-left-btn').style.right = "16px"
            } else if (isMobile7.matches) {
                document.querySelector('.spotify').style.width = "40.06vw";  // 480px toggle OFF
                document.querySelector('.close-left-btn').style.width = "10.4vw"
                document.querySelector('.close-left-btn').style.top = "12px"
                document.querySelector('.close-left-btn').style.right = "12px"
            } else if (isMobile6.matches) {
                document.querySelector('.spotify').style.width = "30.06vw";  // 480px toggle OFF
                document.querySelector('.close-left-btn').style.width = "6.4vw"
                document.querySelector('.close-left-btn').style.top = "12px"
                document.querySelector('.close-left-btn').style.right = "12px"
            } else if (isMobile5.matches) {
                document.querySelector('.spotify').style.width = "20.06vw";  // 640px toggle OFF
                document.querySelector('.close-left-btn').style.width = "4.4vw"
                document.querySelector('.close-left-btn').style.top = "12px"
                document.querySelector('.close-left-btn').style.right = "12px"
            } else if (isMobile4.matches) {
                document.querySelector('.spotify').style.width = "16vw";     // 750px toggle OFF
            } else if (isMobile3.matches) {
                document.querySelector('.spotify').style.width = "15.06vw";  // 941px toggle OFF
            } else if (isMobile2.matches) {
                document.querySelector('.spotify').style.width = "15.06vw";  // 1050px toggle OFF
            }

            isToggled = false;
        }
    } else {
        // Desktop layout: Side-by-side
        if (isToggled === false) {
            document.querySelector('.left-top').style.height = "13vh";
            document.querySelector('.left-bottom').style.height = "83.84vh";
            document.querySelector('.songcontainer').style.maxHeight = "65vh";
            document.querySelector('.box').classList.remove('disnone');
            // Desktop par spotify size fixed rahega (CSS se control)
            isToggled = true;
        } else {
            document.querySelector('.left-top').style.height = "7.64vh";
            document.querySelector('.left-bottom').style.height = "89.2vh";
            document.querySelector('.songcontainer').style.maxHeight = "71.3vh";
            document.querySelector('.box').classList.add('disnone');
            // Desktop par spotify size fixed rahega (CSS se control)
            isToggled = false;
        }
    }
});

// event for ham
ham.addEventListener("click", () => {
    if (isMobile.matches) {
        if (!isToggled) {
            document.querySelector('.left').style.display = "block";
            document.querySelector('.left').style.position = "absolute";
            document.querySelector('.left').style.left = "0";
            // document.querySelector('.left').style.width = "34.5vw";
            document.querySelector('.left').style.zIndex = "1";
            document.querySelector('.right').style.zIndex = "-1";
            let leftTop = document.querySelector('.left-top')
            const closeBtn = document.createElement("img");
            closeBtn.src = "imgs/minimize.svg";
            closeBtn.classList.add("close-left-btn");
            leftTop.appendChild(closeBtn);
            closeBtn.addEventListener("click", () => {
                document.querySelector('.left').style.display = "none";
                document.querySelector('.right').style.zIndex = "1";
                closeBtn.remove();
                isToggled = false;
            });

            isToggled = true;
        } else {
            document.querySelector('.left').style.display = "none";
            isToggled = false;
        }
    }
    else {
        // Desktop layout: Side-by-side
        if (isToggled === false) {
            document.querySelector('.hamburger').src = "imgs/minimize.svg"
            document.querySelector('.left').style.display = "none";
            document.querySelector('.right').style.width = "100vw";
            document.querySelector('.right').style.height = "98vh";
            document.querySelector('.nevbar').style.width = "99vw";
            document.querySelector('.cardcontainer').style.width = "97.19vw";
            document.querySelector('.play').style.width = "99vw";
            document.querySelector('.seekbar').style.width = "97vw";
            document.querySelector('.songname').style.overflowWrap = "normal";
            document.querySelector('.songname').style.webkitLineClamp = "1";
            document.querySelector('.songname').style.maxWidth = "450px";
            document.querySelector('.buttons').style.marginLeft = "40vw";
            document.querySelector('.shuffle').style.marginRight = "50px";
            document.querySelector('.loop').style.marginLeft = "50px";
            isToggled = true;
        } else {
            document.querySelector('.hamburger').src = "imgs/maximize.svg"
            document.querySelector('.left').style.display = "block";
            document.querySelector('.right').style.width = "72.19vw";
            document.querySelector('.right').style.height = "98vh";
            document.querySelector('.nevbar').style.width = "72.19vw";
            document.querySelector('.cardcontainer').style.width = "70.19vw";
            document.querySelector('.play').style.width = " 72.19vw";
            document.querySelector('.seekbar').style.width = "97%";
            document.querySelector('.songname').style.overflowWrap = "break-word";
            document.querySelector('.songname').style.webkitLineClamp = "2";
            document.querySelector('.songname').style.maxWidth = "300px";
            document.querySelector('.buttons').style.marginLeft = "27vw";
            document.querySelector('.shuffle').style.marginRight = "25px";
            document.querySelector('.loop').style.marginLeft = "25px";
            isToggled = false;
        }
    }
});

// Update volume icon based on volume level
function updateVolumeIcon(volume) {
    let volumeIcon = document.querySelector(".volume");
    if (volume === 0) {
        volumeIcon.src = "imgs/mute.svg";
        document.querySelector('.volume').style.right = "-177px";
    }
    else if (volume < 0.35) {
        volumeIcon.src = "imgs/volume-low.svg";
        document.querySelector('.volume').style.right = "-185px";
    }
    else if (volume < 0.70) {
        volumeIcon.src = "imgs/volume-mid.svg";
        document.querySelector('.volume').style.right = "-182px";
    }
    else {
        volumeIcon.src = "imgs/volume-max.svg";
        document.querySelector('.volume').style.right = "-179px";
    }
}

// IndexedDB for persistent storage
let db;
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('SpotifyAlbums', 1);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };
        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains('albums')) {
                db.createObjectStore('albums', { keyPath: 'folder' });
            }
        };
    });
}
async function saveAlbumToDB(albumData) {
    if (!db) await initDB();
    console.log('Saving album to IndexedDB:', albumData.folder);
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['albums'], 'readwrite');
        const store = transaction.objectStore('albums');
        const albumToStore = {
            folder: albumData.folder,
            title: albumData.title,
            description: albumData.description,
            coverImageData: albumData.coverImageData,
            songsData: albumData.songsData
        };
        const request = store.put(albumToStore);
        request.onsuccess = () => {
            console.log('Album saved successfully:', albumData.folder);
            resolve();
        };
        request.onerror = () => {
            console.error('Error saving album:', request.error);
            reject(request.error);
        };
    });
}
async function getAllAlbumsFromDB() {
    if (!db) await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['albums'], 'readonly');
        const store = transaction.objectStore('albums');
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
function base64ToBlob(base64) {
    const parts = base64.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const array = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return new Blob([array], { type: contentType });
}


// login - sign up button event
let blank = document.getElementById('blankcontainer');
let blankBg = document.querySelector('.blank');
let signup = document.getElementById('sign-up');
let login = document.getElementById('log-in');
blank.style.display = "none";
signup.style.display = "none";
login.style.display = "none";
document.querySelectorAll('.Sign-up').forEach(btn => {
    btn.addEventListener("click", () => {
        blank.style.display = "block";
        blankBg.style.display = "flex";
        signup.style.display = "block";
        login.style.display = "none";
    });
});
document.querySelector('.in').addEventListener("click", () => {
    blank.style.display = "block";
    blankBg.style.display = "none";
    login.style.display = "flex";
    signup.style.display = "none";
});
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        blank.style.display = "none";
        blankBg.style.display = "none";
        signup.style.display = "none";
        login.style.display = "none";
    });
});
document.querySelector('.signup-page .up-para span').addEventListener("click", () => {
    blankBg.style.display = "none";
    signup.style.display = "none";
    login.style.display = "flex";
});
document.querySelector('.login-page .up-para span').addEventListener("click", () => {
    login.style.display = "none";
    blankBg.style.display = "flex";
    signup.style.display = "block";
});
blankBg.addEventListener("click", (e) => {
    if (e.target === blankBg) {
        blank.style.display = "none";
        blankBg.style.display = "none";
        signup.style.display = "none";
        login.style.display = "none";
    }
});
login.addEventListener("click", (e) => {
    if (e.target === login) {
        blank.style.display = "none";
        login.style.display = "none";
    }
});

// Shuffle array function
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// minutes to second convert function
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

// Highlight matching text
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span style="background-color: #8682829d; color: #ffffff7a; padding: 2px 2px; border-radius: 2px;">$1</span>');
}

// play pause svg change event 
const updatePlayButtonSVGs = (isPlaying) => {
    let allPlayButtons = document.querySelectorAll('.masterPlay');
    allPlayButtons.forEach(button => {
        button.src = "imgs/play.svg";
        if (isPlaying) {
            const ulElement = button.parentElement.closest('ul');
            if (ulElement) {
                const trackName = ulElement.getAttribute('data-track');
                if (trackName === currentPlayingTrack) {
                    button.src = "imgs/pause.svg";
                }
            } else {
                button.src = "imgs/pause.svg";
            }
        }
    });
}

// Update navigation buttons state
function updateNavigationButtons() {
    let currentSongsList = isShuffling ? shuffledSongs : songs;
    let currentTrackName = currentPlayingTrack;
    let index;

    // Always check if list contains objects
    if (currentSongsList.length > 0 && typeof currentSongsList[0] === 'object') {
        index = currentSongsList.findIndex(s => s.file === currentTrackName);
    } else {
        index = currentSongsList.indexOf(currentTrackName);
    }
    let prevBtn = document.querySelector('.previous');
    let nextBtn = document.querySelector('.next');
    if (index <= 0) {
        prevBtn.src = "imgs/prev-fill.svg";
    } else {
        prevBtn.src = "imgs/prev.svg";
    }
    if (index >= currentSongsList.length - 1) {
        nextBtn.src = "imgs/next-fill.svg";
    } else {
        nextBtn.src = "imgs/next.svg";
    }
}

// music play event
const playMusic = (track, pause = false) => {
    if (currentSong.src.includes(track) && !currentSong.paused) {
        currentSong.pause();
        updatePlayButtonSVGs(false);
        return;
    }
    if (window.uploadedAlbums && window.uploadedAlbums[currFolder]) {
        const songObj = window.uploadedAlbums[currFolder].find(s => s.file.name === track);
        if (songObj) {
            currentSong.src = songObj.url;
            currentSong.dataset = currentSong.dataset || {};
            currentSong.dataset.originalName = track;
        } else {
            currentSong.src = `/songs/${currFolder}/` + track;
            currentSong.dataset = currentSong.dataset || {};
            currentSong.dataset.originalName = track;
        }
    } else {
        currentSong.src = `/songs/${currFolder}/` + track;
        currentSong.dataset = currentSong.dataset || {};
        currentSong.dataset.originalName = track;
    }
    currentPlayingTrack = track;
    let songNameElement = document.querySelector('.songname');
    let cleanName = track
        .replaceAll(/[\()\/\_\-\%20]/g, " ")
        .replace(/\s\s+/g, ' ')
        .replace('.mp3', '')
        .trim();
    songNameElement.innerHTML = cleanName;
    if (cleanName.length > 50) {
        songNameElement.classList.add('long-name');
    } else {
        songNameElement.classList.remove('long-name');
    }
    document.querySelector('.time').innerHTML = "00:00 / 00:00";
    if (!pause) {
        currentSong.play();
        updatePlayButtonSVGs(true);
    } else {
        updatePlayButtonSVGs(false);
    }
    updateNavigationButtons();
}

// get song event
async function getsongs(folder) {
    currFolder = folder;
    let a = await fetch(`/Spotify/songs/${currFolder}/`);
    let data = await a.text();
    let div = document.createElement("div");
    div.innerHTML = data;
    let get = div.getElementsByTagName('a');
    songs = [];
    for (let index = 0; index < get.length; index++) {
        const element = get[index];
        if (element.href.endsWith(".mp3")) {
            let fullPath = element.href;
            let fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
            songs.push(fileName);
        }
    }
    const savedOrder = localStorage.getItem(`playlist_${currFolder}`);
    if (savedOrder) {
        const parsedOrder = JSON.parse(savedOrder);
        const validSongs = parsedOrder.filter(song => songs.includes(song));
        const newSongs = songs.filter(song => !validSongs.includes(song));
        songs = [...validSongs, ...newSongs];
    }
    originalSongsOrder = [...songs];
    let songul = document.querySelector('.songcontainer');
    songul.innerHTML = "";
    for (const song of songs) {
        let cleanedName = song
            .replaceAll(/[\()\/\_\-\%20]/g, " ")
            .replace(/\s\s+/g, ' ')
            .replace('.mp3', '')
            .trim();
        songul.innerHTML += `<ul data-track="${song}" data-album="${currFolder}" draggable="true">
            <img class="songham invert" src="imgs/hamburger.svg" alt="" style="cursor: grab;">
            <li class="masterPlay hover2">${cleanedName}</li>
            <img class="songplay invert hover masterPlay" src="imgs/play.svg" alt=""> 
        </ul>`;
    }
    Array.from(document.querySelectorAll('.masterPlay')).forEach(e => {
        e.addEventListener("click", element => {
            const ulElement = element.currentTarget.parentElement.closest('ul');
            if (ulElement) {
                const originalTrack = ulElement.getAttribute('data-track');
                if (originalTrack === currentPlayingTrack && !currentSong.paused) {
                    currentSong.pause();
                    updatePlayButtonSVGs(false);
                } else {
                    playMusic(originalTrack);
                }
            }
        });
    });
    setupDragAndDrop();
    return songs;
}

// drag and drop event
function setupDragAndDrop() {
    let draggedElement = null;
    let allSongItems = document.querySelectorAll('.songcontainer ul');
    allSongItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedElement = item;
            item.style.opacity = '0.5';
        });
        item.addEventListener('dragend', (e) => {
            item.style.opacity = '1';
            draggedElement = null;
        });
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedElement !== item) {
                const container = document.querySelector('.songcontainer');
                const afterElement = getDragAfterElement(container, e.clientY);
                if (afterElement == null) {
                    container.appendChild(draggedElement);
                } else {
                    container.insertBefore(draggedElement, afterElement);
                }
            }
        });
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            updateSongsArray();
        });
    });
}

// drag event for songs
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('ul:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// update song event
function updateSongsArray() {
    const updatedOrder = [];
    document.querySelectorAll('.songcontainer ul').forEach(ul => {
        updatedOrder.push(ul.getAttribute('data-track'));
    });
    songs = updatedOrder;
    originalSongsOrder = [...songs];
    localStorage.setItem(`playlist_${currFolder}`, JSON.stringify(songs));
    updateNavigationButtons();
}

// displaing albums
async function displayAlbums() {
    let a = await fetch(`/songs/`);
    let data = await a.text();
    let div = document.createElement("div");
    div.innerHTML = data;
    let anchors = Array.from(div.getElementsByTagName('a'));
    let cardcontainer = document.querySelector('.cardcontainer');
    allAlbums = [];
    for (const e of anchors) {
        if (
            e.innerText.trim() === "../" ||
            e.innerText.trim() === "songs" ||
            e.href.endsWith("/songs/") ||
            e.href === "http://127.0.0.1:5500/" ||
            e.href === "http://127.0.0.1:5500" ||
            e.href.includes(".htaccess") ||
            !e.href.includes("/songs/")
        ) continue;
        let parts = e.href.split("/").filter(Boolean);
        let folders = parts[parts.length - 1];
        if (!folders) continue;
        folders = decodeURIComponent(folders);
        let meta = { title: folders, description: "" };
        try {
            let res = await fetch(`/songs/${folders}/info.json`);
            if (res.ok) meta = await res.json();
        } catch { }
        allAlbums.push({ folder: folders, title: meta.title, description: meta.description });
        cardcontainer.innerHTML += `
            <div class="card" data-folder="${folders}" data-title="${meta.title.toLowerCase()}">
                <img src="/songs/${folders}/cover.jpg" class="cimg">
                <h3 class="name hover">${meta.title}</h3>
                <p class="description hover">${meta.description}</p>
                <img src="imgs/cardbtn.svg" class="cardbtn">
            </div>`;
    }

    // album update event
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async (item) => {
            const folder = item.currentTarget.dataset.folder;
            if (!folder) return;
            await getsongs(folder);
            if (songs && songs.length > 0) {
                playMusic(songs[0]);
            }
        });
    });
}

// Global search function - searches ALL albums
async function filterSongsAndPlaylists(searchTerm, removeHighlight = false) {
    searchTerm = searchTerm.toLowerCase().trim();
    if (searchTerm === '') {
        // Reset to previous state
        isSearchActive = false;
        if (beforeSearchFolder) {
            currFolder = beforeSearchFolder;
            songs = [...beforeSearchSongs];
            originalSongsOrder = [...beforeSearchSongs];

            // Re-render the song list
            let songul = document.querySelector('.songcontainer');
            songul.innerHTML = "";
            for (const song of songs) {
                let cleanedName = song
                    .replaceAll(/[\()\/\_\-\%20]/g, " ")
                    .replace(/\s\s+/g, ' ')
                    .replace('.mp3', '')
                    .trim();
                songul.innerHTML += `<ul data-track="${song}" data-album="${currFolder}" draggable="true">
                    <img class="songham invert" src="imgs/hamburger.svg" alt="" style="cursor: grab;">
                    <li class="masterPlay hover2">${cleanedName}</li>
                    <img class="songplay invert hover masterPlay" src="imgs/play.svg" alt=""> 
                </ul>`;
            }

            // Re-attach event listeners
            Array.from(document.querySelectorAll('.masterPlay')).forEach(e => {
                e.addEventListener("click", element => {
                    const ulElement = element.currentTarget.parentElement.closest('ul');
                    if (ulElement) {
                        const originalTrack = ulElement.getAttribute('data-track');
                        playMusic(originalTrack);
                    }
                });
            });
            setupDragAndDrop();
        }
        document.querySelectorAll('.card').forEach(card => card.style.display = 'block');
        return;
    }
    // Save state before search (first time only)
    if (!isSearchActive) {
        beforeSearchFolder = currFolder;
        beforeSearchSongs = [...songs];
        isSearchActive = true;
    }
    let allMatchingSongs = [];
    let matchingAlbumFolders = new Set();

    // Search through ALL albums (including user-uploaded ones)
    for (const album of allAlbums) {
        try {
            if (album.isUserCreated && window.uploadedAlbums && window.uploadedAlbums[album.folder]) {
                const userAlbumSongs = window.uploadedAlbums[album.folder];
                for (const songObj of userAlbumSongs) {
                    const cleanName = songObj.file.name
                        .replaceAll(/[\()\/\_\-\%20]/g, " ")
                        .replace(/\s\s+/g, ' ')
                        .trim();
                    if (cleanName.toLowerCase().includes(searchTerm)) {
                        allMatchingSongs.push({
                            file: songObj.file.name,
                            album: album.folder,
                            displayName: removeHighlight ? cleanName : highlightText(cleanName, searchTerm)
                        });
                        matchingAlbumFolders.add(album.folder);
                    }
                }
                // Check album title
                if (album.title.toLowerCase().includes(searchTerm)) {
                    matchingAlbumFolders.add(album.folder);
                }
            } else {
                // Search in server albums
                let response = await fetch(`/Spotify/songs/${album.folder}/`);
                let data = await response.text();
                let div = document.createElement("div");
                div.innerHTML = data;
                let links = div.getElementsByTagName('a');
                for (let link of links) {
                    if (link.href.endsWith(".mp3")) {
                        let fileName = link.href.substring(link.href.lastIndexOf('/') + 1);
                        let cleanName = fileName
                            .replaceAll(/[\()\/\_\-\%20]/g, " ")
                            .replace(/\s\s+/g, ' ')
                            .replace('.mp3', '')
                            .trim();

                        if (cleanName.toLowerCase().includes(searchTerm)) {
                            allMatchingSongs.push({
                                file: fileName,
                                album: album.folder,
                                displayName: removeHighlight ? cleanName : highlightText(cleanName, searchTerm)
                            });
                            matchingAlbumFolders.add(album.folder);
                        }
                    }
                }
                // Also check if album title matches
                if (album.title.toLowerCase().includes(searchTerm) || album.folder.toLowerCase().includes(searchTerm)) {
                    matchingAlbumFolders.add(album.folder);
                }
            }
        } catch (e) {
            console.error('Error searching album:', album.folder, e);
        }
    }
    // Update song list with ALL matching songs
    let songul = document.querySelector('.songcontainer');
    songul.innerHTML = "";

    if (allMatchingSongs.length > 0) {
        allMatchingSongs.forEach(songData => {
            songul.innerHTML += `<ul data-track="${songData.file}" data-album="${songData.album}" draggable="false">
                <img class="songham invert" src="imgs/hamburger.svg" alt="">
                <li class="masterPlay hover2">${songData.displayName}</li>
                <img class="songplay invert hover masterPlay" src="imgs/play.svg" alt=""> 
            </ul>`;
        });
        Array.from(document.querySelectorAll('.masterPlay')).forEach(e => {
            e.addEventListener("click", element => {
                const ulElement = element.currentTarget.parentElement.closest('ul');
                if (ulElement) {
                    const albumFolder = ulElement.getAttribute('data-album');
                    const trackName = ulElement.getAttribute('data-track');
                    if (trackName === currentPlayingTrack && !currentSong.paused) {
                        currentSong.pause();
                        updatePlayButtonSVGs(false);
                    } else {
                        currFolder = albumFolder;
                        playMusic(trackName);
                    }
                }
            });
        });
        songs = allMatchingSongs.map(s => ({ file: s.file, album: s.album }));
        originalSongsOrder = [...songs];
    }

    // Filter album cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const folder = card.dataset.folder;
        if (matchingAlbumFolders.has(folder)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show blank2 when plus button is clicked  
document.querySelector('.plus').addEventListener("click", () => {
    const blank2 = document.querySelector('.blank2');
    blank2.style.display = 'flex';
    document.getElementById('file-upload').value = '';
    document.getElementById('folder-upload').value = '';
    document.getElementById('cover-upload').value = '';
    document.getElementById('album-name').value = '';
    document.getElementById('album-description').value = '';
    document.querySelector('.upload-screen').style.display = 'flex';
    document.querySelector('.album-details-form').style.display = 'none';
    uploadedFiles = [];
    uploadedFolder = null;
    coverImage = null;
});

// Close blank2
document.querySelector('.close2').addEventListener('click', () => {
    document.querySelector('.blank2').style.display = 'none';
});
// Click outside to close
document.querySelector('.blank2').addEventListener('click', (e) => {
    if (e.target.classList.contains('blank2')) {
        document.querySelector('.blank2').style.display = 'none';
    }
});

// Drag and drop
const dragArea = document.getElementById('drag-area');
dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.style.background = '#6e6b6b';
    dragArea.style.borderColor = '#1DB954';
});
dragArea.addEventListener('dragleave', () => {
    dragArea.style.background = '#545151';
    dragArea.style.borderColor = '#ffffff';
});
dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragArea.style.background = '#545151';
    dragArea.style.borderColor = '#ffffff';
    handleFileSelection(Array.from(e.dataTransfer.files));
});

// File upload
document.getElementById('file-upload').addEventListener('change', (e) => {
    handleFileSelection(Array.from(e.target.files));
});

// Folder upload
document.getElementById('folder-upload').addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && files[0].webkitRelativePath) {
        uploadedFolder = files[0].webkitRelativePath.split('/')[0];
    }
    handleFileSelection(files);
});
function handleFileSelection(files) {
    uploadedFiles = files.filter(f => f.name.endsWith('.mp3'));
    if (uploadedFiles.length === 0) {
        alert('Please select at least one MP3 file');
        return;
    }
    // Auto-detect cover image from folder (cover.jpg, cover.png, cover.jpeg)
    const allFiles = Array.from(files);
    const coverFile = allFiles.find(f =>
        f.name.toLowerCase() === 'cover.jpg' ||
        f.name.toLowerCase() === 'cover.jpeg' ||
        f.name.toLowerCase() === 'cover.png'
    );
    if (coverFile) {
        coverImage = coverFile;
        console.log('Auto-detected cover image:', coverFile.name);
    }

    // Show details form
    document.querySelector('.upload-screen').style.display = 'none';
    document.querySelector('.album-details-form').style.display = 'flex';

    // Pre-fill album name if folder was uploaded
    if (uploadedFolder) {
        document.getElementById('album-name').value = uploadedFolder;
    }

    // Show cover status
    if (coverImage) {
        document.getElementById('cover-upload').parentElement.querySelector('small').textContent =
            `✓ Found: ${coverImage.name} (You can change it by selecting another image)`;
        document.getElementById('cover-upload').parentElement.querySelector('small').style.color = '#1DB954';
    }
}

// Cover image upload
document.getElementById('cover-upload').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        coverImage = e.target.files[0];
    }
});

// Create Album button
document.getElementById('create-album-btn').addEventListener('click', async () => {
    const albumName = document.getElementById('album-name').value.trim();
    const albumDescription = document.getElementById('album-description').value.trim();
    if (!albumName) {
        alert('Please enter an album name!');
        return;
    }
    if (uploadedFiles.length === 0) {
        alert('Please upload at least one MP3 file!');
        return;
    }

    // Show loading message
    const btn = document.getElementById('create-album-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Saving...';
    btn.disabled = true;
    try {
        const folderName = albumName.replace(/[^a-zA-Z0-9]/g, '_');
        let coverImageData = null;
        if (coverImage) {
            coverImageData = await fileToBase64(coverImage);
        }
        const songsData = [];
        for (const file of uploadedFiles) {
            const base64Data = await fileToBase64(file);
            songsData.push({
                name: file.name,
                data: base64Data
            });
        }
        const albumData = {
            folder: folderName,
            title: albumName,
            description: albumDescription || 'Custom Playlist',
            coverImageData: coverImageData,
            songsData: songsData,
            isUserCreated: true
        };

        // Save to IndexedDB
        await saveAlbumToDB(albumData);
        const coverBlob = coverImageData ? base64ToBlob(coverImageData) : null;
        const songBlobs = songsData.map(s => ({
            name: s.name,
            blob: base64ToBlob(s.data)
        }));

        // Store in memory for playback
        window.uploadedAlbums = window.uploadedAlbums || {};
        window.uploadedAlbums[folderName] = songBlobs.map(s => ({
            file: { name: s.name },
            url: URL.createObjectURL(s.blob)
        }));

        // Create UI album data
        const uiAlbumData = {
            folder: folderName,
            title: albumName,
            description: albumDescription || 'Custom Playlist',
            coverImage: coverBlob ? URL.createObjectURL(coverBlob) : 'imgs/spotify-icon.svg',
            songs: songsData.map(s => s.name),
            isUserCreated: true
        };
        addAlbumToUI(uiAlbumData);

        // Close modal
        document.querySelector('.blank2').style.display = 'none';
        alert(`Album "${albumName}" created successfully and saved permanently!`);
    } catch (error) {
        console.error('Error saving album:', error);
        alert('Error saving album: ' + error.message);
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
});

function addAlbumToUI(albumData) {
    const cardContainer = document.querySelector('.cardcontainer');
    // Create card
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-folder', albumData.folder);
    card.setAttribute('data-user-album', 'true');
    card.innerHTML = `
        <img src="${albumData.coverImage}" class="cimg" onerror="this.src='imgs/spotify-icon.svg'">
        <h3 class="name hover">${albumData.title}</h3>
        <p class="description hover">${albumData.description}</p>
        <img src="imgs/cardbtn.svg" class="cardbtn">
    `;
    cardContainer.insertBefore(card, cardContainer.firstChild);
    card.addEventListener('click', async (e) => {
        if (!e.target.classList.contains('cardbtn')) {
            await loadUserAlbum(albumData);
        }
    });

    // Play button click
    card.querySelector('.cardbtn').addEventListener('click', async (e) => {
        e.stopPropagation();
        await loadUserAlbum(albumData);
    });

    // Add to allAlbums for search
    allAlbums.unshift(albumData);
}

async function loadSavedAlbums() {
    try {
        await initDB();
        const savedAlbums = await getAllAlbumsFromDB();
        console.log('Loading saved albums from IndexedDB:', savedAlbums.length, 'albums found');
        for (const albumData of savedAlbums) {
            console.log('Loading album:', albumData.title);
            if (!albumData.songsData || !Array.isArray(albumData.songsData)) {
                console.warn('Skipping album - invalid songsData:', albumData.title);
                continue;
            }
            const coverBlob = albumData.coverImageData ? base64ToBlob(albumData.coverImageData) : null;
            const songBlobs = albumData.songsData.map(s => ({
                name: s.name,
                blob: base64ToBlob(s.data)
            }));
            window.uploadedAlbums = window.uploadedAlbums || {};
            window.uploadedAlbums[albumData.folder] = songBlobs.map(s => ({
                file: { name: s.name },
                url: URL.createObjectURL(s.blob)
            }));
            const uiAlbumData = {
                folder: albumData.folder,
                title: albumData.title,
                description: albumData.description,
                coverImage: coverBlob ? URL.createObjectURL(coverBlob) : 'imgs/spotify-icon.svg',
                songs: albumData.songsData.map(s => s.name),
                isUserCreated: true
            };
            addAlbumToUI(uiAlbumData);
        }
        console.log('All albums loaded successfully');
    } catch (error) {
        console.error('Error loading saved albums:', error);
    }
}

async function loadUserAlbum(albumData) {
    currFolder = albumData.folder;
    songs = albumData.songs || [];
    originalSongsOrder = [...songs];
    let songul = document.querySelector('.songcontainer');
    songul.innerHTML = "";
    for (const song of songs) {
        let cleanedName = song
            .replaceAll(/[\()\/\_\-\%20]/g, " ")
            .replace(/\s\s+/g, ' ')
            .replace('.mp3', '')
            .trim();
        songul.innerHTML += `<ul data-track="${song}" data-album="${albumData.folder}" draggable="true">
            <img class="songham invert" src="imgs/hamburger.svg" alt="" style="cursor: grab;">
            <li class="masterPlay hover2">${cleanedName}</li>
            <img class="songplay invert hover masterPlay" src="imgs/play.svg" alt=""> 
        </ul>`;
    }

    // Attach play events
    Array.from(document.querySelectorAll('.masterPlay')).forEach(e => {
        e.addEventListener("click", element => {
            const ulElement = element.currentTarget.parentElement.closest('ul');
            if (ulElement) {
                const originalTrack = ulElement.getAttribute('data-track');
                if (originalTrack === currentPlayingTrack && !currentSong.paused) {
                    currentSong.pause();
                    updatePlayButtonSVGs(false);
                } else {
                    playMusic(originalTrack);
                }
            }
        });
    });
    setupDragAndDrop();

    // Auto-play first song
    if (songs.length > 0) {
        playMusic(songs[0]);
    }
}

async function main() {
    // Initialize IndexedDB first
    try {
        await initDB();
        console.log('IndexedDB initialized successfully');
    } catch (error) {
        console.error('Failed to initialize IndexedDB:', error);
    }

    // default songlist
    await getsongs("talha%20anjum");
    playMusic(songs[0], true);

    // for displaing albums
    await displayAlbums();

    // Load user-created albums from IndexedDB
    setTimeout(loadSavedAlbums, 500);

    // Search toggle functionality
    document.querySelector('.searchicon').addEventListener("click", () => {
        const searchSpan = document.querySelector('.search');
        const searchText = document.querySelector('.span');
        const searchIcon = document.querySelector('.searchicon');
        const searchInput = document.querySelector('.search input');
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            searchText.style.opacity = '0';
            searchText.style.pointerEvents = 'none';
            searchSpan.classList.remove('disnone');
            setTimeout(() => {
                searchSpan.style.transform = 'translateX(-15%)';
                searchSpan.style.opacity = '1';
            }, 50);
            searchIcon.style.transform = 'translateX(280px)';
            setTimeout(() => searchInput.focus(), 1000);
        } else {
            searchSpan.style.transform = 'translateX(-100%)';
            searchSpan.style.opacity = '0';
            searchIcon.style.transform = 'translateX(0)';
            setTimeout(async () => {
                searchSpan.classList.add('disnone');
                searchText.style.opacity = '1';
                searchText.style.pointerEvents = 'auto';
                searchInput.value = '';
            }, 1000);
        }
    });

    // Search input listener - real-time with highlight
    document.querySelector('.search input').addEventListener('input', async function (e) {
        const searchTerm = e.target.value;
        await filterSongsAndPlaylists(searchTerm, false);
    });

    // Enter key - remove highlight
    document.querySelector('.search input').addEventListener('keypress', async function (e) {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value;
            await filterSongsAndPlaylists(searchTerm, true);
        }
    });

    // play pause event
    document.querySelector('.play .masterPlay').addEventListener("click", () => {
        if (currentSong.paused) {
            if (currentSong.src) {
                currentSong.play();
                updatePlayButtonSVGs(true);
            }
        } else {
            currentSong.pause();
            updatePlayButtonSVGs(false);
        }
    });

    // time and duration update
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".time").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
        document.querySelector(".progress").style.width = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // seekbar thum event
    let seekbar = document.querySelector(".seekbar");
    let circle = document.querySelector(".circle");
    let isDraggingCircle = false;
    circle.addEventListener("mousedown", (e) => {
        isDraggingCircle = true;
        circle.style.cursor = "grabbing";
        e.preventDefault();
        document.body.style.userSelect = "none";
    });
    document.addEventListener("mousemove", (e) => {
        if (isDraggingCircle) {
            e.preventDefault();
            let seekbarRect = seekbar.getBoundingClientRect();
            let offsetX = e.clientX - seekbarRect.left;
            let percent = (offsetX / seekbarRect.width) * 100;
            percent = Math.max(0, Math.min(100, percent));
            circle.style.left = percent + "%";
            currentSong.currentTime = (currentSong.duration * percent) / 100;
        }
    });
    document.addEventListener("mouseup", () => {
        if (isDraggingCircle) {
            isDraggingCircle = false;
            circle.style.cursor = "grab";
            document.body.style.userSelect = "auto";
        }
    });
    seekbar.addEventListener("click", e => {
        if (!isDraggingCircle) {
            let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
            circle.style.left = percent + "%";
            currentSong.currentTime = ((currentSong.duration) * percent) / 100;
            document.querySelector(".progress").style.width = percent + "%";
        }
    });

    // evnet for next and previous button
    document.querySelector('.previous').addEventListener("click", () => {
        let currentSongsList = isShuffling ? shuffledSongs : songs;
        let currentTrackName = currentPlayingTrack;
        let index;
        if (typeof currentSongsList[0] === 'object') {
            index = currentSongsList.findIndex(s => s.file === currentTrackName);
            if ((index - 1) >= 0) {
                let prevSong = currentSongsList[index - 1];
                currFolder = prevSong.album;
                playMusic(prevSong.file);
            }
        } else {
            index = currentSongsList.indexOf(currentTrackName);
            if ((index - 1) >= 0) {
                playMusic(currentSongsList[index - 1]);
            }
        }
        updateNavigationButtons();
    });
    document.querySelector('.next').addEventListener("click", () => {
        let currentSongsList = isShuffling ? shuffledSongs : songs;
        let currentTrackName = currentPlayingTrack;
        let index;
        if (typeof currentSongsList[0] === 'object') {
            index = currentSongsList.findIndex(s => s.file === currentTrackName);
            if ((index + 1) < currentSongsList.length) {
                let nextSong = currentSongsList[index + 1];
                currFolder = nextSong.album;
                playMusic(nextSong.file);
            }
        } else {
            index = currentSongsList.indexOf(currentTrackName);
            if ((index + 1) < currentSongsList.length) {
                playMusic(currentSongsList[index + 1]);
            }
        }
        updateNavigationButtons();
    });

    // auto start next song
    currentSong.addEventListener('ended', () => {
        updatePlayButtonSVGs(false);
        if (isLooping) {
            currentSong.currentTime = 0;
            currentSong.play();
            updatePlayButtonSVGs(true);
        } else {
            let currentSongsList = isShuffling ? shuffledSongs : songs;
            let currentTrackName = currentPlayingTrack;
            let index;
            if (typeof currentSongsList[0] === 'object') {
                index = currentSongsList.findIndex(s => s.file === currentTrackName);
                if ((index + 1) < currentSongsList.length) {
                    let nextSong = currentSongsList[index + 1];
                    currFolder = nextSong.album;
                    playMusic(nextSong.file);
                } else {
                    updateNavigationButtons();
                }
            } else {
                index = currentSongsList.indexOf(currentTrackName);
                if ((index + 1) < currentSongsList.length) {
                    playMusic(currentSongsList[index + 1]);
                } else {
                    updateNavigationButtons();
                }
            }
        }
    });

    // volume button with seekbar style
    lastVolume = parseFloat(localStorage.getItem('savedVolume')) || 0.40;
    currentSong.volume = lastVolume;
    let volumeInput = document.querySelector(".range input");
    let volumeProgress = document.querySelector(".volume-progress");
    let volumeCircle = document.querySelector(".volume-circle");
    volumeInput.value = lastVolume * 100;
    volumeProgress.style.width = (lastVolume * 100) + "%";
    volumeCircle.style.left = (lastVolume * 100) + "%";
    updateVolumeIcon(lastVolume);
    volumeInput.addEventListener("input", (e) => {
        let volumeValue = parseInt(e.target.value) / 100;
        currentSong.volume = volumeValue;
        volumeProgress.style.width = (volumeValue * 100) + "%";
        volumeCircle.style.left = (volumeValue * 100) + "%";
        updateVolumeIcon(volumeValue);
        if (volumeValue > 0) {
            lastVolume = volumeValue;
        }
        localStorage.setItem('savedVolume', volumeValue);
    })

    document.querySelector(".volume").addEventListener("click", e => {
        if (e.target.src.includes("imgs/volume-low.svg") || e.target.src.includes("imgs/volume-mid.svg") || e.target.src.includes("imgs/volume-max.svg")) {
            e.target.src = "imgs/mute.svg";
            currentSong.volume = 0;
            volumeInput.value = 0;
            volumeProgress.style.width = "0%";
            volumeCircle.style.left = "0%";
            document.querySelector('.volume').style.right = "-177px";
        }
        else {
            e.target.src = "imgs/volume-mid.svg";
            currentSong.volume = lastVolume;
            volumeInput.value = lastVolume * 100;
            volumeProgress.style.width = (lastVolume * 100) + "%";
            volumeCircle.style.left = (lastVolume * 100) + "%";
            updateVolumeIcon(lastVolume);
        }
    })

    // Loop button
    document.querySelector('.loop').addEventListener("click", () => {
        isLooping = !isLooping;
        let loopIcon = document.querySelector('.loop');

        if (isLooping) {
            loopIcon.src = "imgs/looped.svg";
        } else {
            loopIcon.src = "imgs/loop.svg";
        }
    });

    // Shuffle button
    document.querySelector('.shuffle').addEventListener("click", () => {
        isShuffling = !isShuffling;
        let shuffleIcon = document.querySelector('.shuffle');
        if (isShuffling) {
            shuffleIcon.src = "imgs/no-shuffle.svg";
            shuffledSongs = shuffleArray(songs);
            let currentTrack = currentPlayingTrack;
            let currentIndex;
            if (isSearchActive || (typeof shuffledSongs[0] === 'object')) {
                currentIndex = shuffledSongs.findIndex(s => (typeof s === 'object' ? s.file : s) === currentTrack);
            } else {
                currentIndex = shuffledSongs.indexOf(currentTrack);
            }
            if (currentIndex > 0) {
                [shuffledSongs[0], shuffledSongs[currentIndex]] = [shuffledSongs[currentIndex], shuffledSongs[0]];
            }
        } else {
            shuffleIcon.src = "imgs/shuffle.svg";
            songs = [...originalSongsOrder];
        }
        updateNavigationButtons();
    });

    // reload Event
    document.querySelectorAll(".reload, .reload2, .heading")
        .forEach(btn => {
            btn.addEventListener("click", () => location.reload());
        });
}
main();
window.showAlbums = function () {
    indexedDB.open('SpotifyAlbums', 1).onsuccess = (e) => {
        e.target.result.transaction(['albums']).objectStore('albums').getAll().onsuccess = (r) => {
            r.target.result.forEach((album, index) => {
                const songCount = album.songsData ? album.songsData.length : 0;
                console.log(`📁 ${index + 1}. ${album.folder} (${songCount} songs)`);
            });
        };
    };
};
window.deleteAlbum = function (folderName) {
    indexedDB.open('SpotifyAlbums', 1).onsuccess = (e) => {
        e.target.result.transaction(['albums'], 'readwrite').objectStore('albums').delete(folderName).onsuccess = () => {
            alert(`Deleting "${folderName}" Album`);
            console.log(`"${folderName}" deleted successfully`);
            setTimeout(() => location.reload(), 500);
        };
    };
};

// Keyboard Events
document.addEventListener('keydown', (e) => {
    const folderNameInput = document.getElementById('folderName');
    const descriptionInput = document.getElementById('description');
    const searchInput = document.querySelector('.search input');
    const albumNameInput = document.getElementById('album-name');
    const albumDescInput = document.getElementById('album-description');

    // Check if typing in any input field
    const isTypingInInput = document.activeElement === folderNameInput ||
        document.activeElement === descriptionInput ||
        document.activeElement === searchInput ||
        document.activeElement === albumNameInput ||
        document.activeElement === albumDescInput;

    // 1. Space key for Play/Pause
    if (e.code === 'Space' && !isTypingInInput) {
        e.preventDefault();
        if (currentSong.paused) {
            currentSong.play();
            updatePlayButtonSVGs(true);
        } else {
            currentSong.pause();
            updatePlayButtonSVGs(false);
        }
    }

    // 2. Up/Down Arrow key for scrolling songlist and albumlist
    if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
        if (!isTypingInInput) {
            e.preventDefault();
            const songContainer = document.querySelector('.songcontainer');
            const albumContainer = document.querySelector('.cardcontainer');
            const scrollAmount = e.code === 'ArrowDown' ? 50 : -50;
            if (songContainer && songContainer.matches(':hover')) {
                songContainer.scrollTop += scrollAmount;
            }
            else if (albumContainer && albumContainer.matches(':hover')) {
                albumContainer.scrollTop += scrollAmount;
            }
        }
    }

    // 3. Left/Right Arrow keys for seekbar and volume
    if ((e.code === 'ArrowLeft' || e.code === 'ArrowRight') && !isTypingInInput) {
        const seekbar = document.querySelector('.seekbar');
        const circle = document.querySelector('.circle');
        const volumeRange = document.querySelector('.range');
        const volumeInput = document.querySelector('.range input');
        const volumeProgress = document.querySelector('.volume-progress');
        const volumeCircle = document.querySelector('.volume-circle');

        // Check if cursor is on seekbar
        if (seekbar && seekbar.matches(':hover')) {
            e.preventDefault();
            if (currentSong.duration) {
                if (e.code === 'ArrowLeft') {
                    currentSong.currentTime = Math.max(0, currentSong.currentTime - 5);
                }
                else if (e.code === 'ArrowRight') {
                    currentSong.currentTime = Math.min(currentSong.duration, currentSong.currentTime + 5);
                }
                let newPercent = (currentSong.currentTime / currentSong.duration) * 100;
                circle.style.left = newPercent + "%";
                document.querySelector(".progress").style.width = newPercent + "%";
            }
        }
        // Check if cursor is on volume control
        else if (volumeRange && volumeRange.matches(':hover')) {
            e.preventDefault();
            let currentVolume = parseFloat(volumeInput.value);
            if (e.code === 'ArrowLeft') {
                currentVolume = Math.max(0, currentVolume - 5);
            }
            else if (e.code === 'ArrowRight') {
                currentVolume = Math.min(100, currentVolume + 5);
            }
            volumeInput.value = currentVolume;
            let volumeValue = currentVolume / 100;
            currentSong.volume = volumeValue;
            volumeProgress.style.width = currentVolume + "%";
            volumeCircle.style.left = currentVolume + "%";
            updateVolumeIcon(volumeValue);
            localStorage.setItem('savedVolume', volumeValue);
        }
    }

    // 4. Enter key for Create Album button
    if (e.code === 'Enter') {
        const createButton = document.getElementById('createFolderBtn');
        const submitButton = document.getElementById('submitAlbumBtn');
        if (document.activeElement === folderNameInput ||
            document.activeElement === descriptionInput) {
            e.preventDefault();
            if (createButton && createButton.offsetParent !== null) {
                createButton.click();
            }
        }
        else if (document.activeElement === albumNameInput ||
            document.activeElement === albumDescInput) {
            e.preventDefault();
            if (submitButton && submitButton.offsetParent !== null) {
                submitButton.click();
            }
        }
    }
});
