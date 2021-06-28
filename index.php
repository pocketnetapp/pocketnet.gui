<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta http-equiv='expires' content='0'>

      

        <title>POCKETNET</title>
        <meta name="description" content="A Revolutionary anti-censorship decentralized publishing and social platform. Based on the blockchain technology, it runs on a set of computers around the world, not controlled by any single entity. Self-policed by users with good reputation where nobody records your keystrokes, viewing habits or searches. ">
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1, user-scalable=no">
        <meta name="fragment" content="!">
        <meta name="keywords" content="Blockchain, Decentralized, Delete Facebook, Alternative Social Media, Social Network, Social Platform, No Censorship, Online Social Network, Facebook Alternative, Reddit Alternative, Twitter Alternative, Social Sharing Platform, Decentralized Social Network, Blockchain Social Network " />

        <meta http-equiv="Content-Security-Policy" content="
        default-src https: 'self' blob:; 
        connect-src https: wss: data: blob:;
        img-src 'self' data: https:;
        script-src 'self' blob: https://pocketnet.app https://unpkg.com/@ffmpeg/ffmpeg@0.10.0/dist/ffmpeg.min.js https://player.vimeo.com https://www.youtube.com https://s.ytimg.com https://cdn.rawgit.com https://cdn.jsdelivr.net 'unsafe-eval' 'unsafe-inline';
        style-src 'self'  https://use.fontawesome.com https://fonts.googleapis.com https://cdn.jsdelivr.net 'unsafe-inline';
        font-src 'self' data: https://fonts.gstatic.com https://use.fontawesome.com;
        media-src blob: *">

        <link rel="manifest" href="manifest.json">
        <link rel="apple-touch-icon" href="https://pocketnet.app/img/res/blue_pad_250.png" sizes="250x250">
        <meta name="theme-color" content="#011621" />

        <link rel="dns-prefetch" href="https://pocketnet.app:8899" />
        <link rel="dns-prefetch" href="https://pocketnet.app" />
        <?php 
        
            require_once('php/og.php'); 

            $og = new OG($_GET, "https://pocketnet.app:8899/");

            $og->get();
            $og->echotags();
        ?>

        <style type="text/css">
            #splashScreen{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#011621;z-index:5000;display:flex;justify-content:center;align-items:center;flex-direction:column;-moz-transition:.2s;-o-transition:.2s;-webkit-transition:.2s;transition:.2s}#splashScreen h1{color:#fff;margin-top:1em;margin-bottom:0;font-size:1em}#splashScreen h1.fade-in{-webkit-animation:fade-in .3s ease-out both;animation:fade-in .3s ease-out both}#splashScreen.fade-out{-webkit-animation:fade-out .2s ease-in both;animation:fade-out .2s ease-in both;background-color:#0098eb}#splashScreen img{max-height:6vh;max-width:100vw}#splashScreen img.zoom-in{-webkit-animation:zoom-in .5s ease-out both;animation:zoom-in .5s ease-out both}#splashScreen img.zoom-out{-webkit-animation:zoom-out .5s ease-in both;animation:zoom-out .5s ease-in both}#splashScreen img.rotate{-webkit-animation:rotate 1s ease-in-out infinite both;animation:rotate 1s ease-in-out infinite both}#splashScreen img.zoom-out-rotate{-webkit-animation:zoom-out-rotate .5s ease-in both;animation:zoom-out-rotate .5s ease-in both}@media only screen and (max-width:768px){html.scrollmodedown #menu .menuWrapper{top:-65px}html.scrollmodedown #panelWrapper{padding-top:0;display:none}html.scrollmodedown #navigation{bottom:-60px}}@media only screen and (max-width:640px){#splashScreen{display:flex}}@-webkit-keyframes zoom-out{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}50%{opacity:.25}100%{-webkit-transform:scale3d(50,50,50);transform:scale3d(50,50,50);opacity:0}}@keyframes zoom-out{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}50%{opacity:.25}100%{-webkit-transform:scale3d(50,50,50);transform:scale3d(50,50,50);opacity:0}}@-webkit-keyframes zoom-in{0%{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);opacity:0}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}}@keyframes zoom-in{0%{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);opacity:0}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}}@-webkit-keyframes zoom-out-rotate{0%{-webkit-transform:scale3d(1,1,1) rotate(0);transform:scale3d(1,1,1) rotate(0);opacity:1}50%{opacity:.25}100%{-webkit-transform:scale3d(75,75,75) rotate(310deg);transform:scale3d(75,75,75) rotate(310deg);opacity:0}}@keyframes zoom-out-rotate{0%{-webkit-transform:scale3d(1,1,1) rotate(0);transform:scale3d(1,1,1) rotate(0);opacity:1}50%{opacity:.25}100%{-webkit-transform:scale3d(75,75,75) rotate(310deg);transform:scale3d(75,75,75) rotate(310deg);opacity:0}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}
        </style>

        <link rel="icon" href="./favicon.svg" sizes="any" type="image/svg+xml">
       
    </head>
    <body id="application" class="menu-hide">

        <div id="headerWrapper">
        </div>

        <div id="menuWrapper">
        </div> 

        <div id="panelWrapper">
        </div> 

        <div id="navigationWrapper">
        </div> 

        <div class="contentWrapper"> 
            <div id="content">                
            </div>
        </div>

        <div id="footerWrapper">
            
        </div>

        <div class="bodyshadow">
        </div>     

        <div class="topPreloader" id="_topPreloader">
        </div>

        <div id="splashScreen" class="cssanimation">
            <img src="img/splashscreen/pocketnet-logo-19.svg" id="splashScreenImg" class="zoom-in rotate">
        </div>

        <div class="chats">
        </div>
    

        <div id="matrix" class="matrix"></div>

        <div id="globalpreloader">
            <div class="table">
                <div>
                    <div class="icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                </div>
               
            </div>
        </div>


       <!-- <script src="cordova.js"></script>-->
                
        <script type="text/javascript">

            _Node = false;
            
        </script>

        

        <script>window.pocketnetpublicpath = "/pocketnet/";</script><script>window.design = true;</script>

        <script  join src="js/vendor/device.min.js?v=89"></script>
<script  join src="js/vendor/modernizr-2.8.3.min.js?v=89"></script>
<script  join src="js/vendor/jquery-1.11.3.min.js?v=89"></script>
<script  join src="js/vendor/tooltipster.core.js?v=89"></script>
<script  join src="js/vendor/tooltipster.bundle.js?v=89"></script>
<script  join src="js/vendor/imagesloaded.pkgd.min.js?v=89"></script>
<script  join src="js/vendor/timer.js?v=89"></script>
<script  join src="js/vendor/aesjs.js?v=89"></script>
<script  join src="js/vendor/linkify.min.js?v=89"></script>
<script  join src="js/vendor/linkify-html.min.js?v=89"></script>
<script  join src="js/lib/pocketnet/btc17.js?v=89"></script>
<script  join src="js/lib/pocketnet/htls.js?v=89"></script>
<script  join src="js/lib/pocketnet/buffer.js?v=89"></script>
<script  join src="js/vendor/pbkdf2.js?v=89"></script>
<script  join src="js/vendor/sha1.js?v=89"></script>
<script  join src="js/vendor/paste.js?v=89"></script>
<script  join src="js/vendor/jquery.md5.js?v=89"></script>
<script  join src="js/vendor/jquery.animate-number.js?v=89"></script>
<script  join src="js/vendor/jquery.touchSwipe.min.js?v=89"></script>
<script  join src="js/vendor/joypixels.min.js?v=89"></script>
<script  join src="js/vendor/plyr.js?v=89"></script>
<script  join src="js/vendor/reconnectingwebsocket.js?v=89"></script>
<script  join src="js/vendor/rtc/db.js?v=89"></script>
<script  join src="js/vendor/xss.min.js?v=89"></script>
<script  join src="js/vendor/jquery.mark.js?v=89"></script>
<script  join src="js/vendor/hc-sticky.js?v=89"></script>
<script  join src="js/vendor/moment.min.js?v=89"></script>
<script  join src="js/vendor/jquery.inputmask.bundle.js?v=89"></script>
<script  join src="js/vendor/axios.js?v=89"></script>
<script  join src="js/vendor/isotope.pkgd.js?v=89"></script>
<script  join src="js/vendor/circular-progress.js?v=89"></script>
<script  join src="js/vendor/workbox-v6.1.5/workbox-sw.js?v=89"></script>
<script  join src="js/vendor/ion.sound/ion.sound.js?v=89"></script>


        <script  join src="js/vendor/underscore-min.js?v=783247207203"></script>
<script  join src="js/functionsfirst.js?v=933529445957"></script>
<script  join src="js/localization.js?v=576975311061"></script>
<script  join src="js/lib/client/system16.js?v=216981326585"></script>
<script  join src="js/lib/client/api.js?v=540783069228"></script>
<script  join src="js/_map.js?v=844019937295"></script>
<script  join src="js/app.js?v=112702525562"></script>
<script  join src="js/main.js?v=567123214665"></script>
<script  join src="js/functions.js?v=933337734596"></script>
<script  join src="js/user.js?v=652414184423"></script>
<script  join src="js/module.js?v=142517975342"></script>
<script  join src="js/navn.js?v=252034040164"></script>
<script  join src="js/validation.js?v=223640723958"></script>
<script  join src="js/kit.js?v=717456556127"></script>
<script  join src="js/satolist.js?v=109534928054"></script>
<script  join src="js/messenger2/clientrtc.js?v=965363307163"></script>
<script  join src="js/peertube.js?v=864716793625"></script>
<script  join src="js/widgets.js?v=823150154563"></script>
<script  join src="peertube/video-embed.bundle.js?v=128839514736"></script>


        <link rel="stylesheet" href="css/normalize.css?v=449947655867">
<link rel="stylesheet" href="css/tooltipster.core.min.css?v=839858116969">
<link rel="stylesheet" href="css/tooltipster.bundle.min.css?v=577986027975">
<link rel="stylesheet" href="css/main.css?v=327924381485">
<link rel="stylesheet" href="css/stblack.css?v=50228095090">
<link rel="stylesheet" href="css/plyr.css?v=869342387487">
<link rel="stylesheet" href="js/vendor/DateTimePicker.min.css?v=202567801603">
<link rel="stylesheet" href="peertube/video-embed.css?v=150247906860">
<link rel="stylesheet" href="js/vendor/emojionearea.min.css?v=585947455688">


        <link rel="stylesheet" href="css/fontawesome/css/all.min.css">

        <script async src="js/pwa-service-worker.js?v=v0.2.34"></script>


    </body>
</html>
