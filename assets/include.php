<?php
date_default_timezone_set('Asia/Shanghai');
$ini = parse_ini_file('article.ini', TRUE);

$path = array(
    'header' => __DIR__.'/header.php',
    'footer' => __DIR__.'/footer.php',

    'about' => dirname(__DIR__).'/icons/About.svg',
    'blog' => dirname(__DIR__).'/icons/blog.svg',
    'home' => dirname(__DIR__).'/icons/Home.svg',
    
    'github' => dirname(__DIR__).'/icons/github-icon.svg',
    'twitter' => dirname(__DIR__).'/icons/twitter-icon.svg',
);
?>