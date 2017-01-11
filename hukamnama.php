<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hukamnam - Sikhi To The Max</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.4/foundation.min.css" />
  </head>
  <body>

    <div class="top-bar">
      <div class="top-bar-title">
        <a href="/"><img class="top-bar-logo-small" src="images/sttm_icon.png" alt="Sikhi To The Max" /></a>
      </div>
      <div id="responsive-menu">
        <div class="top-bar-left">
          <form action="search.php">
            <ul class="menu">
              <li><input name="q" id="search" class="gurbani-font" type="search" placeholder="Koj"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </form>
        </div>
        <div class="top-bar-right">
          <ul class="dropdown menu" data-dropdown-menu>
            <li>
              <a href="/">Home</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="shabad">
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.4/foundation.min.js"></script>
    <script src="js/h.js"></script>
    <script src="js/getParameterByName.js"></script>
    <script src="js/renderShabad.js"></script>
    <script src="js/khajana.js"></script>
    <script src="js/hukamnama.js"></script>
  </body>
</html>

