var $target = $("#target-area"),
    $cursorWindow = $("#cursor-window"),
    $coordsDisplay = $("#cursor-coord-disp");

var zoomFactor = 2;

// Copy the background image to the zoom window
$cursorWindow.css('background-image', $target.css('background-image'));
$cursorWindow.css('background-repeat', $target.css('background-repeat'));

$target.mousemove(function (e) {
    var $targetPosition = $target.position();
    var cursX = e.pageX - $targetPosition.left;
    var cursY = e.pageY - $targetPosition.top;
    var imgX, imgY, imgW, imgH;

    if (0 <= cursX && cursX <= $target.outerWidth() && 0 <= cursY && cursY <= $target.outerHeight()) {
        $cursorWindow.css({
            'left': cursX - $cursorWindow.outerWidth() / 2,
            'top': cursY - $cursorWindow.outerHeight() / 2
        });
        $cursorWindow.show();
        $coordsDisplay.text("x: " + cursX.toFixed(0) + ", y: " + cursY.toFixed(0));

        imgX = -(cursX * zoomFactor) + $cursorWindow.innerWidth() / 2;
        imgY = -(cursY * zoomFactor) + $cursorWindow.innerHeight() / 2;

        imgW = $target.innerWidth() * zoomFactor;
        imgH = $target.innerHeight() * zoomFactor;

        // Change the position and size of the image in the zoom window
        // to show a magnified view of the image content under the cursor
        $cursorWindow.css('background-position', imgX.toFixed(0) + 'px ' + imgY.toFixed(0) + 'px');
        $cursorWindow.css('background-size', imgW.toFixed(0) + 'px ' + imgH.toFixed(0) + 'px');
    } else {
        $cursorWindow.hide();
        $coordsDisplay.text("");
    }
});
//https://stackoverflow.com/questions/39674628/div-centered-on-cursor-acting-as-cursor-for-image-hover-zoom-effect