// comment

  $(document).ready(function () {
    // Show the modal when the comment button is clicked
    $(".comment-button").click(function () {
      var modalId = $(this).data("target");
      $(modalId).modal("show");
    });

    // Handle form submission for all modals
    $("form").on("submit", function (e) {
      e.preventDefault();
      var form = $(this);
      var modal = form.closest(".modal");
      var blogPostId = modal.attr("id").replace("commentModal", "");

      var formData = form.serialize(); // Serialize the form data

      $.ajax({
        type: "POST",
        url: "/comment/" + blogPostId + "/",
        data: formData,
        success: function (response) {
          console.log("Comment submitted successfully");
          // Optionally, update the comments section dynamically here
        },
        error: function (xhr, status, error) {
          console.error("Comment submission failed: " + error);
        },
      });

      // Clear form inputs
      form.trigger("reset");

      // Close the modal
      modal.modal("hide");
    });
  });



$(document).ready(function () {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    $(".like-button").click(function (e) {
        e.preventDefault();
        var blogPostId = $(this).data("blog-post");
        var likeCountElement = $(this).find(".like-count");
        var currentLikes = parseInt(likeCountElement.text());

        // Toggle the like status
        if ($(this).hasClass("liked")) {
            $(this).removeClass("liked");
            likeCountElement.text(currentLikes - 1);
        } else {
            $(this).addClass("liked");
            likeCountElement.text(currentLikes + 1);
        }

        // Send AJAX request to update the like count on the server
        $.ajax({
            type: "POST",
            url: "/like/" + blogPostId + "/",
            data: {
                pk: blogPostId,
                csrfmiddlewaretoken: csrftoken,
            },
            success: function (response) {
                // Optional: handle success
            },
            error: function (xhr, status, error) {
                // Optional: handle error
            },
        });
    });
});
