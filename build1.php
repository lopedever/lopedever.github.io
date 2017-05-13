<?php
namespace lopedever\wangjian\blog;

for ($i=1; $i<=6; $i++) {
    file_put_contents("article/$i.html", file_get_contents("http://localhost/article/article.php?id=$i"));
}

file_put_contents('about.html', file_get_contents('http://localhost/about.php'));
file_put_contents('index.html', file_get_contents('http://localhost/index.php'));
