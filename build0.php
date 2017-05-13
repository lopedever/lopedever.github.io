<?php
namespace lopedever\wangjian\blog;

for ($i=1; $i<=6; $i++) {
    unlink("article/$i.html");
}

unlink('about.html');
unlink('index.html');
