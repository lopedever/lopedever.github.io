<?php 
include 'assets/include.php';
$title = "王建的博客";
include $path['header'];
?>
    <h1 class="index-title">文章列表</h1>
    <ul>
<?php
for ($article_id=10; $article_id>=0; $article_id--) {
    $article_title = $ini[$article_id]['title'];
    $add_date = date('Y-m-d', strtotime($ini[$article_id]['add_datetime']));
    $add_datetime = date('c', strtotime($ini[$article_id]['add_datetime']));
    
    if ($ini[$article_id]['valid']) {
?>
      <li class="index-add-time">发布于：<time datetime="<?php echo $add_datetime;?>"><?php echo $add_date;?></time></li>
      <li class="index-article-title"><a href="article/<?php echo $article_id;?>"><?php echo $article_title;?></a></li>
<?php
    }
}
?>
    </ul>
<?php
include $path['footer'];
?>