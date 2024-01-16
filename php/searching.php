<?php include "searching_json.php"; ?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Searching JSON</title>
  </head>
  <body>
    <div class="container w-50 mt-5">
        <h3 class="text-center mb-3">Searching Data in JSON</h3>
        <form action="searching.php" method="get">
            <input class="form-control" type="text" placeholder="Search Name" name="search" id="">
            <input class="btn btn-primary w-100 mt-2" type="submit" value="Search">
        </form>
    </div>

    <div class="container">
        <table class="table mt-4">
            <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Bio</th>
            </tr>

            <?php get_result($search, $result); ?>
            
        </table>
    </div>

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html>