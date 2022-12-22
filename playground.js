const headers = {
    "Host": "tr12.herozerogame.com",
    "User-Agent": "Mozilla / 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "231",
    "Origin": "https://tr12.herozerogame.com",
    "Connection": "keep-alive",
    "Referer": " https://tr12.herozerogame.com/",
    "Cookie": "_ga=GA1.2.696425645.1671486266; _gid=GA1.2.1811197142.1671486266; offerwall_ad_shown=true; hero_session_data=session_id=N0u8i3AWHjrF1Ovpi6Pk5hbDAjyq1u,user_id=4329; landing_page=1_blue; hero_platform_data_standalone=session_id=N0u8i3AWHjrF1Ovpi6Pk5hbDAjyq1u,user_id=4329,server_id=tr12; hero_friendbar_standalone=show_friendbar=false; cookieconsent_dismissed=yes; _gat=1; client_theme=theme=dark",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "TE": "trailers",
}

const MY_URL = "https://tr12.herozerogame.com/request.php"

let defaultBody = {
    "user_id": 4329,
    "user_session_id": "N0u8i3AWHjrF1Ovpi6Pk5hbDAjyq1u",
    "client_version": "html5_210",
    "auth": "99e83b832fe227acfdb0b60edf480d15",
    "rct": "2",
    "keep_active": "true",
    "device_type": "web"
}

let str_collect_hideout_coin = new URLSearchParams({
    ...defaultBody,
    "hideout_room_id": 10727,
    "action": "collectHideoutRoomActivityResult",
    
}).toString()

let str_collect_hideout_xp = new URLSearchParams({
    ...defaultBody,
    "action": "collectHideoutRoomActivityResult",
    "hideout_room_id": 10742,
    
}).toString()



async function  collect_hideout_coin (){
    await fetch( MY_URL, {
    method: 'POST',
    headers: headers,
    body: str_collect_hideout_coin
}).then(res => res.json())
    .then(res => console.log(res))
}

async function collect_hideout_xp (){
    await fetch( MY_URL, {
    method: 'POST',
    headers: headers,
    body : str_collect_hideout_xp
}).then(res => res.json())
    .then(res => console.log(res))
}


async function App  (){
    await collect_hideout_coin()
    await collect_hideout_xp()
}

App()


function login () {
    
}


//24105
//9651