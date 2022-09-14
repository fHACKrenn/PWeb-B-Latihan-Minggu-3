(function($) {

  $('#team_preference').parent().append('<ul class="list-item" id="newteam_preference" name="team_preference"></ul>');
  $('#team_preference option').each(function(){
      $('#newteam_preference').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#team_preference').remove();
  $('#newteam_preference').attr('id', 'team_preference');
  $('#team_preference li').first().addClass('init');
  $("#team_preference").on("click", ".init", function() {
      $(this).closest("#team_preference").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#team_preference").children('li:not(.init)');
  $("#team_preference").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#team_preference").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
            start: [500],
            step: 10,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$ ',
            })
    });
  }
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        first_name : {
            required: true,
        },
        last_name : {
            required: true,
        },
        discord : {
            required: true,
        },
        ign : {
            required: true,
        },
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);