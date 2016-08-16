<?php
$i = 1;
?>
<div class="container">
<div class="PlayerName play1" >Player 1</div><div data-cub="1" class="cub play1">0</div>
<div class="PlayerName play2" >Player 2</div><div data-cub="2" class="cub play2 NotTurn">0</div>
<div class="PlayerName play3" >Player 3</div><div data-cub="3" class="cub play3 NotTurn">0</div>
<div class="PlayerName play4" >Player 4</div><div data-cub="4" class="cub play4 NotTurn">0</div>
<div class="Playerdata">
<div class="data play1" ><div>Player 1</div>
<div class="money"><p>Money: </p><span>0</span></div>
<div class="luck"><p>Luck:</p><span>0</span></div></div>
<div class="data play2" ><div>Player 2</div>
<div class="money"><p>Money: </p><span>0</span></div>
<div class="luck"><p>Luck:</p><span>0</span></div></div>
<div class="data play3" ><div>Player 3</div>
<div class="money"><p>Money: </p><span>0</span></div>
<div class="luck"><p>Luck:</p><span>0</span></div></div>
<div class="data play4" ><div>Player 4</div>
<div class="money"><p>Money: </p><span>0</span></div>
<div class="luck"><p>Luck:</p><span>0</span></div></div>
</div>
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