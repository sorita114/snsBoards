(function($, window){
  $(document).ready(function(){
    $('.js-change-view').find('button').on('click', function(e){
      e.preventDefault();
      var type = $(this).data('type');
      $(this).addClass('active').siblings().removeClass('active');
      if(type){
        $('.is-list-view').removeClass('hide').addClass('show');
        $('.is-squre-view').addClass('hide').removeClass('show');
      } else {
        $('.is-list-view').removeClass('show').addClass('hide');
        $('.is-squre-view').addClass('show').removeClass('hide');
      }
    });
  });
})(jQuery, window);
