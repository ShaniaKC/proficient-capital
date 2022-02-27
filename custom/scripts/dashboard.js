$(()=> {

// dropdowns used in the document
const dropdownFunc = (a,b) => {

    $(a).parent().css({'position': 'relative'});
    
    
    $(a).on('click', () => {
        $(b).width() > window.innerWidth && $(b).css('width', `${window.innerWidth - 10}px`)

        let x = $(b).parent().offset().left + $(b).width();

        $(b).css({
            'left': window.innerWidth <= x 
            ? `-${x - window.innerWidth + (window.innerWidth >= 800 ? 60 : 30)}px` 
            : '0'
        });
       $(b).toggle()
    })
}
dropdownFunc("#profile-btn", "#profile-dropdown")
dropdownFunc("#notification-btn", "#notification-dropdown")
dropdownFunc("#message-btn", "#message-dropdown")

// Toggle top nav
$('#toggle-top-nav').on('click', () => {
    $(".profile-nav").toggleClass('display-grid open');
    $(".top-navigation .searchbar").toggle();
})

// Toggle Sidebar
$('#open-menu, #close-menu').on('click', () => {
    $("#sidebar").toggleClass('display-grid');
    $('.sidebar-wrapper').toggle()
   console.log('kk')
})

// Show active menu item on sidebar
$(`.icon-link-group[href="${window.location.href}"]`).addClass('active')
})