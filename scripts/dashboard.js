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

// Change top nav background color on scroll


// Toggle Sidebar
$('#open-menu, #close-menu').on('click', () => {
    $("#sidebar").toggleClass('display-grid');
    $('.sidebar-wrapper').toggle()
   console.log('kk')
})

// Show active menu item on sidebar
$(`.icon-link-group[href="${window.location.href}"]`).addClass('active')

// toggle tabs 

const toggleTabs = (a,b) => {
    $(a).on('click', () => {
        $(a).parent().children().hasClass('active') && $(a).parent().children().removeClass('active');
        $(a).toggleClass('active');
        $(b).parent().children().css('display', 'block') &&$(b).parent().children().hide();
        $(b).toggle();
    })
}

toggleTabs('#lg-card-notification-link', '#lg-card-notification-content')
toggleTabs('#lg-card-account-link', '#lg-card-account-content')
toggleTabs('#lg-card-loan-link', '#lg-card-loan-content')

// Start the profile forms with data gotten from the backend
for (const elem in $('.input-group input')) {
    $('.input-group input')[elem].value =  $('.input-group input')[elem]?.dataset?.oldinfo   
}

$("#profile-pic-update-button").on('click', () => {
    $('#profile-pic-update-input').click()
})

const enableForm = (a,b) => {
    $(a).on('click', () => { 
        $(b).attr('disabled') == 'disabled' ? $(b).removeAttr('disabled') : $(b).attr('disabled', 'disabled');
        $(`${b} button[hidden]`).toggle()
    }) 
}

enableForm('#security-form-btn', '#security-form-fieldset');
enableForm('#profile-info-btn','#profile-info-fieldset')
})


