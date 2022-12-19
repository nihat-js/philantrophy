fetch('request.php', {
    method: 'POST',
    headers: {
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
      },    
      body: "game_currency_amount=10&premium_currency_amount=0&action=donateToGuild&user_id=4329&user_session_id=N0u8i3AWHjrF1Ovpi6Pk5hbDAjyq1u&client_version=html5_210&auth=f3058b5410e0d66e7a6f29cf5fa66cd7&rct=2&keep_active=true&device_type=web"
  }).then (res => console.log(res))
  