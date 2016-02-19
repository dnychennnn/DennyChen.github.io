$(function(){
	activateScene2();

	//顯示Scene 2
	function activateScene2(){

		var $content = $('#scene-2-content'),
			$charts = $content.find('.chart');

		//內容從右側顯示
		$content.stop(true).animate({
			right:0
		}, 1200, 'easeInOutQuint');

		//各圓處理
		$charts.each(function(){
			var	$chart = $(this),
				//儲存「遮罩」,設定角度為0
				$circleLeft = $chart.find('.left .circle-mask-inner')
					.css({transform:'rotate(0)'}),
				$circleRight = $chart.find('.right .circle-mask-inner')
					.css({transform:'rotate(0)'}),
				//取得百分比
				$percentNumber = $chart.find('.percent-number'),
				percentData = $percentNumber.text();
			//設定百分比為0
			$percentNumber.text	(0);

			//角度的動畫
			$({percent:0}).delay(1000).animate({
				percent: percentData
			}, {duration:1500,
				progress:function(){
					var now = this.percent,
						deg = now*360/100,
						degRight = Math.min(Math.max(deg,0),180),
						degLeft = Math.min(Math.max(deg-180,0),180);
					$circleRight.css({transform:'rotate('+degRight+'deg)'});
					$circleLeft.css({transform:'rotate('+degLeft+'deg)'});
					$percentNumber.text(Math.floor(now));
				}})
			})	
		}
	})