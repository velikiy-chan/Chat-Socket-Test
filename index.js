const socket = io();
const name = prompt('Nhập tên của bạn ở dưới nhoa<3', 'Ẩn Danh')
// const member = prompt('Vui lòng nhập chức vụ của bạn', 'Thành Viên')
const chats = document.querySelector('#chat')
const chatmess = document.querySelector('#chat-mess')
chats.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatmess.value 
    socket.emit('on-chat', {
        name,
        message
    })
});
chatmess.value = ''
const khung = document.querySelector('#khung-chat')
socket.on('user-chat', (message) => {
    const chatItem = document.createElement('li')
    chatItem.textContent = `[👑] ${message.name}: ${message.message}`
    khung.appendChild(chatItem)
});
$("#get").click(function () {
   var ytl = $( "#youtubeLink" ).val();
   var yti = ytl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
   console.log(ytl)
   $( "#msg" ).html( "<h1>YouTube Thumbnail</h1><p><img src=\"https://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg\" class=\"image\" /></p><p><img src=\"https://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg\" class=\"image\" /></p><h2>Image URL:</h2><br /><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"https://i3.ytimg.com/vi/"+ yti[1] + "/maxresdefault.jpg\" onclick=\"this.select()\" readonly /><br /><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"http://i3.ytimg.com/vi/"+ yti[1] + "/hqdefault.jpg\" onclick=\"this.select()\" readonly /><p>Right/Ctrl Click the image to download.  Highlight the URL above and copy to your clipboard.</p>" );
   
});

