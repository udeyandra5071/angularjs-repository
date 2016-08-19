<?php include "templates/include/header.php" ?>

      <div class="col-sm-6 col-md-4 grid-view-post">

<?php foreach ( $results['articles'] as $article ) { ?>
<div class="post">
        
           <figure class="main">
            <?php if ( $imagePath = $article->getImagePath( IMG_TYPE_THUMB ) ) { ?>
              <a href=".?action=viewArticle&amp;articleId=<?php echo $article->id?>"><img class="articleImageThumb" src="<?php echo $imagePath?>" alt="Article Thumbnail" /></a>
               </figure>
            <?php } ?>
         
       <div class="box text-center">
            <h4 class="post-title"> <a href=".?action=viewArticle&amp;articleId=<?php echo $article->id?>"><?php echo htmlspecialchars( $article->title )?></a></h4>
            <div class="meta"><span class="date"><?php echo date('j F', $article->publicationDate)?></span></div>
    </div>
    <p><?php echo htmlspecialchars( $article->summary )?></p>
</div>

<?php } ?>

</div>

     <!-- <p><a href="./?action=archive">Article Archive</a></p>-->

<?php //include "templates/include/footer.php" ?>
