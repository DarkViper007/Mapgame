<?php
$i = 1;
?>
<div class="container">
<div class="PlayerName play1" >Player 1</div><div data-cub="1" class="cub play1">0</div>
<div class="PlayerName play2" >Player 2</div><div data-cub="2" class="cub play2 NotTurn">0</div>
<div class="PlayerName play3" >Player 3</div><div data-cub="3" class="cub play3 NotTurn">0</div>
<div class="PlayerName play4" >Player 4</div><div data-cub="4" class="cub play4 NotTurn">0</div>
<?php
while ($i <= 40) { 
	if ($i == 1 || $i == 12 || $i == 21 || $i == 32 )
	{ ?>
		<div class="container<?php echo $i; ?>">
<?php }

	?> 
<div class="item"  data-place="<?php echo $i; ?>" id="part<?php echo $i; ?>"></div>
 <?php   
 	if ($i == 11 || $i == 20 || $i == 31 || $i == 40 )
	{ ?>
		</div>
<?php }
$i++;
}
?>
</div>