function update_rating_text_value(){jQuery("#postratings_loading").show();jQuery.ajax({type:"GET",url:ratingsAdminL10n.admin_ajax_url,data:"custom="+jQuery("#postratings_customrating").val()+"&image="+jQuery("input[name='postratings_image']:checked").val()+"&max="+jQuery("#postratings_max").val(),cache:!1,success:function(a){jQuery("#rating_text_value").html(a);jQuery("#postratings_loading").hide()}})};