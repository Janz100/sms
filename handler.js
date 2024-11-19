$(document).ready(function() {
    // Handle button click to toggle info visibility
    $('.btn-info').click(function() {
        var infoId = $(this).next('.info'); // Get the next sibling .info div
        infoId.toggle(); // This will show or hide the corresponding info
    });
});
