<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/jquery.mobile.custom.structure.css">
    <link rel="stylesheet" href="css/jquery.mobile.noble.css">
    <link rel="stylesheet" href="css/fonts/stylesheet.css">
    <link rel="stylesheet" href="css/tomstyle.css">
    <link rel="stylesheet" href="css/pienstyle.css">
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="js/jquery.mobile.custom.min.js"></script>
    <script src="js/functions.js"></script>
</head>

<body>
	<?php	
	// Arrays
	$pageArray = 	array(	"page1" => "Others near you",
							"page2" => "Messages received",
							"page3" => "Messages sent",
						);
	$receivedArray = array(	array(	"Hey, that was very nice of you! ;) x",
									"Amsterdam",
									"14 mei 2014",
								),
							array(	"You are awesome!",
									"Eindhoven",
									"29 april 2014",
								),
						);
	$sentArray = 	array(	array(	"Hey, that was really sweet of you! xx",
									"Best",
									"14 mei 2014",
								),
							array(	"Omg, that was such a nice thing to do!",
									"Eindhoven",
									"29 april 2014",
								),
							array(	"Great how you helped that old lady with her groceries!",
									"Eindhoven",
									"22 april 2014",
								),
						);

	// switchPage function: difference in pages
	function switchPage($var, $key){
		switch($key){
			case "page1":
				$imgVar = 'globe.png';
				$transVar = 'data-next="b"';
				break;
			case "page2":
				$imgVar = 'inbox_in.png';
				$transVar = 'data-prev="a" data-next="c"';
				break;
			case "page3":
				$imgVar = 'inbox_out.png';
				$transVar = 'data-prev="b"';
				break;
		}

		if($var == 'image'){
			echo $imgVar;
		}elseif($var == 'trans'){
			echo $transVar;
		}
	}

	foreach($pageArray as $key => $val):
	?>
    <div data-role="page" id="<?php echo $key; ?>">
	
		<!-- header -->
    	<div data-role="header" data-position="fixed">
    		<div class="logo">
				<img src="img/logo.png" class="ui-btn-left" />
			</div>
			<h1><?php echo $val; ?></h1>
      	</div>
		<!-- end of header -->

		<!-- main content -->
      	<div data-role="content" >
		
			<!-- 1st page -->
			<?php if($key == "page1"): ?>
            	<p>Google maps enzo met markers.</p>
			<?php endif; ?>
			<!-- end of 1st page -->

			<!-- 2nd page -->
			<?php if($key == "page2"): ?>
			<ul data-role="listview">
				<li>
					<?php foreach($receivedArray as $arrays): 
					?>
					<a href="#" class="ui-btn" data-transition="slide">
						<ul>
							<li><?php echo $arrays[0]; ?></li>
							<li><?php echo $arrays[1] . " " . $arrays[2]; ?></li>
						</ul>
					</a>
					<?php endforeach; ?>
				</li>
			</ul>
			<?php endif; ?>
			<!-- end of 2nd page -->

			<!-- 3rd page -->
			<?php if($key == "page3"): ?>
			<ul data-role="listview">
				<li>
					<?php foreach($sentArray as $arrays): 
					?>
					<a href="#" class="ui-btn" data-transition="slide">
						<ul>
							<li><?php echo $arrays[0]; ?></li>
							<li><?php echo $arrays[1] . " " . $arrays[2]; ?></li>
						</ul>
					</a>
					<?php endforeach; ?>
				</li>
			</ul>
			<?php endif; ?>
			<!-- end of 3rd page -->

      	</div>
      	<!-- end of main content -->
			
		<!-- footer -->
		<div data-role="footer" data-position="fixed">
	      	<nav data-role="navbar" class="ui-navbar" role="navigation">
	    		<ul>
	    			<?php foreach($pageArray as $key2 => $val2): ?>
	    			<li>
	    				<a href="#<?php echo $key2; ?>" <?php if($key2==$key){echo 'class="ui-btn-active"';} ?> data-transition="slide" <?php switchPage('trans', $key2); ?> >
	    					<img src="ikons/png/32/<?php switchPage('image', $key2); ?>" alt="<?php echo $key2; ?>">
						</a>
					</li>
					<?php endforeach; ?>
	      		</ul>
	  		</nav>     
		</div>
		<!-- end footer -->

    </div>
	<?php endforeach; ?>

</body>
</html>